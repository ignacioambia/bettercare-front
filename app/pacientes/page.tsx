"use client";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import apiClient from "@/lib/apiClient";
import "./patient.scss";
import { useRouter } from "next/navigation";

export default function Patients() {

  const router = useRouter();
  const [patients, setPatients] = useState<any[]>([]);

  const getPatients = async () => {
    const { data } = await apiClient.get("/patient");
    setPatients(data);
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className="patients-list">
      <div className="add-patient-wrapper">
        <Button variant="contained" onClick={() => router.push('/pacientes/nuevo')}>
          <AddIcon />
          Unir paciente
        </Button>
      </div>

      <Card>
        <table className="table">
          <tbody>
            {patients.map((e) => (
              <tr key={e._id}>
                <td className="username">
                  {e.name} {e.lastName} 
                </td>
                <td className="schedule-appointment">
                  <Button size="small">
                    Agendar cita</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
