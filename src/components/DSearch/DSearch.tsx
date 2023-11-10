// DSearch.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import styles from "./d-search.module.scss";

interface DSearchProps {
  onUsernameSubmit: (username: string) => void;
}

const DSearch: React.FC<DSearchProps> = ({ onUsernameSubmit }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (username.trim() === "") {
      setError("Por favor, insira um nome de usuário válido.");
      setLoading(false);
      return;
    }

    onUsernameSubmit(username);
  };

  return (
    <div className={styles["search-container"]}>
      <Box
        className={styles["formContainer"]}
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div className={styles["d-body__resume"]}>
          Acompanhe os usuários do GitHub na busca abaixo
        </div>
        <TextField
          id="outlined-basic"
          label="Encontre aqui"
          variant="outlined"
          required
          fullWidth
          className={styles["formInput"]}
          value={username}
          onChange={handleInputChange}
          disabled={loading}
        />
        <Button
          type="submit"
          variant="contained"
          className={styles["customFontButton"]}
          disabled={loading}
        >
          {loading ? "Buscando..." : "Encontrar Usuário"}
        </Button>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default DSearch;
