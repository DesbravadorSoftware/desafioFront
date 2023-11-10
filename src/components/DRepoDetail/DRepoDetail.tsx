import React from "react";
import { RepoData } from "../../types";
import styles from "./d-repo-detail.module.scss";

const DRepoDetail: React.FC<{ repo: RepoData }> = ({ repo }) => {
  return (
    <div className={styles.profileCard}>
      {" "}
      <div className={styles.userDetails}>
        {" "}
        <h2>{repo.name}</h2>
        <p>Linguagem: {repo.language}</p>
        <p>Estrelas: {repo.stargazers_count}</p>
        <p>{repo.description}</p>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          Abrir no GitHub
        </a>
      </div>
    </div>
  );
};

export default DRepoDetail;
