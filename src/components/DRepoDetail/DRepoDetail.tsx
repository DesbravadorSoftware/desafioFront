import React from "react";
import { RepoData } from "../../types";
import styles from "./d-repo-detail.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";
import ReportIcon from "@mui/icons-material/Report";

const DRepoDetail: React.FC<{ repo: RepoData | null }> = ({ repo }) => {
  if (!repo) {
    return (
      <div className={styles.profileCard}>
        <ReportIcon />
        <div className={styles.userDetailsVazio}>
          <h4>
            selecione ao menos um repositório no menu anterior para visualizar
            a página de detalhe.
          </h4>
        </div>
      </div>
    );
  }

  const starsTitle = `Quantidade de estrelas: ${repo.stargazers_count}`;

  return (
    <div className={styles.profileCard}>
      <div className={styles.userDetails}>
        <h2>{repo.name}</h2>
        <p>
          <strong>Linguagem:</strong> {repo.language}
        </p>

        <p>
          <strong>Descrição:</strong> {repo.description}
        </p>

        <p title={starsTitle}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            title="Abrir no GitHub"
          >
            <GitHubIcon sx={{ color: "black", marginRight: "10px" }} />
          </a>
          <StarIcon
            sx={{
              color: "black",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          />
          <span>{repo.stargazers_count}</span>
        </p>
      </div>
    </div>
  );
};

export default DRepoDetail;
