import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserData } from "../../types";
import styles from "./d-profile.module.scss";
import Skeleton from "@mui/material/Skeleton";

const DProfile: React.FC<{ userData: UserData | null }> = ({ userData }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        {showSkeleton ? (
          <>
            <Skeleton variant="circular" width={130} height={100} />
            <div className={styles.userDetails}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </div>
          </>
        ) : userData ? (
          <>
            <div className={styles.avatar}>
              {userData.avatar_url && (
                <Image
                  src={userData.avatar_url}
                  alt={userData.login || "User"}
                  width={150}
                  height={150}
                />
              )}
            </div>
            <div className={styles.userDetails}>
              <h2>{userData.login || "Username"}</h2>
              <p>Followers: {userData.followers || 0}</p>
              <p>Following: {userData.following || 0}</p>
              <p>Email: {userData.email || "No email"}</p>
              <p>Bio: {userData.bio || "No bio available"}</p>
            </div>
          </>
        ) : (
          <div>Nenhum usuário selecionado</div>
        )}
      </div>
    </div>
  );
};

export default DProfile;
