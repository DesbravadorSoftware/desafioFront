import React, { useState } from "react";
import styles from "./d-table-repos.module.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

interface RepoData {
  name: string;
  stargazers_count: number;
  stargazers_url: string;
  language: string;
  html_url: string;
  description: string;
}

interface DTableReposProps {
  repos: RepoData[];
  onRepoSelect: (repo: RepoData) => void;
}

type Order = "asc" | "desc";

//ordenacao
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof RepoData>(
  order: Order,
  orderBy: Key
): (a: RepoData, b: RepoData) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// ordena os dados da tabela
function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const DTableRepos: React.FC<DTableReposProps> = ({ repos, onRepoSelect }) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof RepoData>("name");

  const handleRequestSort = (property: keyof RepoData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const getRowColor = (index: number) => {
    return index % 2 === 0 ? "#f7f7f7" : "#ffffff";
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 400,
        maxHeight: 350,
        overflow: "auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={() => handleRequestSort("name")}
              >
                Repositórios
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === "stargazers_count"}
                direction={orderBy === "stargazers_count" ? order : "asc"}
                onClick={() => handleRequestSort("stargazers_count")}
              >
                Estrelas
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(repos, getComparator(order, orderBy)).map(
            (repo, index) => (
              <TableRow
                key={repo.name}
                onClick={() => onRepoSelect(repo)}
                sx={{ backgroundColor: getRowColor(index) }}
              >
                <TableCell component="th" scope="row">
                  <a className={styles["repo-link"]}>{repo.name}</a>
                </TableCell>
                <TableCell align="right">
                  <Link href={repo.stargazers_url} target="_blank">
                    {repo.stargazers_count}
                  </Link>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DTableRepos;
