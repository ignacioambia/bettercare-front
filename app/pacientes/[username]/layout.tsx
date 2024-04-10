"use client";

import { ReactNode } from "react";
import "./layout.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PatientLayout({ children }: { children: ReactNode }) {
  const splittedPathname = usePathname().split("/");
  const pathname = splittedPathname[splittedPathname.length - 1];

  return (
    <div className="patient-layout">
      <div className="navbar">
        <Link href="ficha-basica">
          <Button
            type="submit"
            variant={pathname === "ficha-basica" ? "contained" : "outlined"}
          >
            ficha básica
          </Button>
        </Link>
        <Link href="antecedentes">
          <Button
            type="submit"
            variant={pathname === "antecedentes" ? "contained" : "outlined"}
          >
            antecedentes
          </Button>
        </Link>
        <Link href="consulta">
          <Button
            type="submit"
            variant={pathname === "consulta" ? "contained" : "outlined"}
          >
            Consulta actual
          </Button>
        </Link>

        <div className="prev-appointments">Citas previas</div>
        <div className="selected-tab">{children}</div>
      </div>
    </div>
  );
}
