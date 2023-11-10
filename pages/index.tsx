import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import Image from "next/image";
import searchImage from "../src/assets/img/search.png";
import styles from "./app.module.scss";

//import { getUserDetails } from "../src/api/githubAPI";
import { DSearch } from "../src/components/DSearch";
import { useUser } from "../src/contexts/UserContext";

export default function HomePage() {
  const [redirecting, setRedirecting] = useState(false);
  const [username, setUsername] = useState("");
  const { setUsername: setContextUsername } = useUser();
  const router = useRouter();

  const handleUsernameSubmit = async (usernameInput: string) => {
    setRedirecting(true);
    setUsername(usernameInput);
    setContextUsername(usernameInput);
  };

  useEffect(() => {
    if (redirecting && username) {
      router.push(`/profileUser/${username}`);
    }
  }, [redirecting, username, router]);

  return (
    <div className={styles.app}>
      <div className={styles["d-container"]}>
        <Container className={styles["d-body"]}>
          <div className={styles["search-section"]}>
            <div className={styles["image-or-profile-section"]}>
              <Image
                src={searchImage}
                alt="Search"
                width={300}
                height={300}
                style={{ marginLeft: "10px" }}
                priority
              />
            </div>
            <h2 className={styles["d-body__title"]}>
              Oie,
              <br /> Encontre uma conta no GitHub
              <br /> agora mesmo
            </h2>
            <DSearch onUsernameSubmit={handleUsernameSubmit} />
          </div>
        </Container>
      </div>
    </div>
  );
}
