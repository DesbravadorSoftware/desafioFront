import React from "react";
import Image from "next/image";
import { UserData } from "../../types";
import styles from "./d-profile.module.scss";

const DProfile: React.FC<{ userData: UserData }> = ({ userData }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.avatar}>
          <Image
            src={userData.avatar_url}
            alt={userData.login}
            width={150}
            height={150}
          />
        </div>
        <div className={styles.userDetails}>
          <h2>{userData.login}</h2>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Email: {userData.email ? userData.email : "-"}</p>
          <p>Bio: {userData.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default DProfile;
