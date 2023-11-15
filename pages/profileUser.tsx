import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { getUserDetailsAndRepos } from "../src/api/githubAPI";
import DProfile from "../src/components/DProfile";
import DCustomMenu from "../src/components/DCustomMenu";
import { DTableRepos } from "../src/components/DTableRepos";
import DRepoDetail from "../src/components/DRepoDetail";
import { UserData, RepoData } from "../src/types";
import styles from "./app.module.scss";
import searchImage from "../src/assets/img/2.png";
import searchImage2 from "../src/assets/img/7.png";
import searchImage3 from "../src/assets/img/15.png";

import CircularProgress from "@mui/material/CircularProgress";

const ProfileUserPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tabValue, setTabValue] = useState(0);
  const [selectedRepo, setSelectedRepo] = useState<RepoData | null>(null);
  const [repos, setRepos] = useState<RepoData[]>([]);

  useEffect(() => {
    const usernameStr = Array.isArray(username) ? username[0] : username;
    if (usernameStr && typeof usernameStr === "string") {
      getUserDetailsAndRepos(usernameStr)
        .then((data: { userDetails: UserData; userRepos: RepoData[] }) => {
          setUserData(data.userDetails);
          setRepos(data.userRepos);
          setLoading(false);
        })
        .catch((error: Error) => {
          console.error("Erro ao buscar dados do usuário:", error);
          setError("Erro ao buscar dados do usuário.");
          setLoading(false);
        });
    } else {
      console.log("O username não está definido ou é inválido:", username);
      setLoading(false);
    }
  }, [username]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleRepoSelect = (repo: RepoData) => {
    setSelectedRepo(repo);
    setTabValue(2);
  };
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <CircularProgress color="inherit" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>Usuário não encontrado.</div>;
  }

  const tabImages = [searchImage, searchImage2, searchImage3];
  const tabTitles = ["Perfil Github", "Repositórios", "Detalhes do Repo"];

  return (
    <div className={styles.dContainer}>
      <DCustomMenu value={tabValue} onChange={handleTabChange} />
      <div className={styles.tabContent}>
        {tabImages[tabValue] && (
          <div className={styles.fadeIn}>
            <Image
              src={tabImages[tabValue]}
              alt="Tab Content"
              layout="intrinsic"
              width={240}
              height={240}
            />
          </div>
        )}
        <h2 className={styles.tabTitle}>{tabTitles[tabValue]}</h2>
        {tabValue === 0 && <DProfile userData={userData} />}
        {tabValue === 1 && (
          <DTableRepos repos={repos} onRepoSelect={handleRepoSelect} />
        )}
        {tabValue === 2 && <DRepoDetail repo={selectedRepo} />}
      </div>
    </div>
  );
};

export default ProfileUserPage;
