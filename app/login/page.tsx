"use client";

import "./login.scss";
import Button from "@mui/material/Button";
import { Card, TextField } from "@mui/material";
import Image from "next/image";
import { useFormState } from "react-dom";
import apiClient from "@/lib/apiClient";
import { ChangeEvent, useState } from "react";
import Cookies from "js-cookie";

export default function Login() {
  const authenticate = (): Promise<string> => {
    return apiClient
      .post("/auth/login", { email, password })
      .then((response) => {
        Cookies.set("token", response.data.access_token);
        return ''
      }).
      catch(() => {
        return 'Falló inicio de sesión';
      })
  };

  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const [email, setEmail] = useState<string>("");
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState<string>("");
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <Card variant="outlined" className="login-card">
        <Image
          src="/logo.svg"
          alt="Bettercare Logo"
          className="logo"
          width={100}
          height={100}
          priority
        />
        <h3>Inicia sesión en Bettercare</h3>

        <form action={dispatch} className="form">
          <TextField
            value={email}
            onChange={handleEmailChange}
            name="email"
            className="field"
            label="Email"
            variant="outlined"
          />
          <TextField
            value={password}
            onChange={handlePasswordChange}
            className="field"
            type="password"
            label="Contraseña"
            autoComplete="on"
            variant="outlined"
          />
          <div className="error">{errorMessage}</div>
          <Button type="submit" variant="contained">
            iniciar sesión
          </Button>
        </form>
      </Card>
    </div>
  );
}
