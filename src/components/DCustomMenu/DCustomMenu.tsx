import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhoneIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/ReceiptLong";
import PersonPinIcon from "@mui/icons-material/AutoAwesome";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

interface CustomNavProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const CustomNav: React.FC<CustomNavProps> = ({ value, onChange }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <IconButton
        onClick={handleBackClick}
        aria-label="Voltar para home"
        sx={{
          backgroundColor: "gray", 
          color:"black",
          borderRadius: "50%",
          height: "40px",
          marginRight: "14px",
        }}
      >
        <ArrowBackIcon sx={{ color: "white" }} />
      </IconButton>

      <Tabs
        orientation="horizontal"
        value={value}
        onChange={onChange}
        aria-label="Icon tabs example"
        centered
      >
        <Tab
          icon={
            <PhoneIcon
              sx={{
                color: "black",
                borderRadius: "50%",
              }}
            />
          }
          aria-label="profile"
        />
        <Tab
          icon={
            <FavoriteIcon
              sx={{
                color: "black",
                borderRadius: "50%",
              }}
            />
          }
          aria-label="page 2"
        />
        <Tab
          icon={
            <PersonPinIcon
              sx={{
                color: "black",
                borderRadius: "50%",
              }}
            />
          }
          aria-label="page 3"
        />
      </Tabs>
    </Box>
  );
};

export default CustomNav;
