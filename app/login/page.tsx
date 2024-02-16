import "./login.scss";
import Button from "@mui/material/Button";
import { Card, TextField } from "@mui/material";
import Image from "next/image";

export default function Login() {
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

        <div className="form">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          type="password"
          id="outlined-basic"
          label="Contraseña"
          variant="outlined"
        />
        <Button variant="contained">iniciar sesión</Button>
        </div>

      </Card>
    </div>
  );
}
