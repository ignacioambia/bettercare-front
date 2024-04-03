"use client";

import { Button, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "./nuevo.scss";
export default function NewPatient(){

 const [ inputs, setInputs] = useState<Partial<NewPatient>>({});
 const handleChange = (event: any) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs((values: any) => ({...values, [name]: value}))
 }

 const addNewPatient =  () => {
  console.log('New patient info is: ', inputs);
 };
 return <div className="new-patient-wrapper">
  <h1>Crear nuevo paciente</h1>
  <Card className="new-patient-card">
  <TextField
            value={inputs.name}
            onChange={handleChange}
            className="field"
            label="Nombre(s)"
            name-="name"
            autoComplete="on"
            variant="outlined"
          />
                     <TextField
            value={inputs.lastName}
            onChange={handleChange}
            className="field"
            label="Apellido Paterno"
            name="lastName"
            autoComplete="on"
            variant="outlined"
          />
                     <TextField
            value={inputs.mothersLastName}
            onChange={handleChange}
            className="field"
            name="mothersLastName"
            label="Apellido Materno"
            autoComplete="on"
            variant="outlined"
          />

<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField label="Nacimiento(mm/dd/aaaa)"  disableFuture />
    </LocalizationProvider>

<TextField

            value={inputs.address}
            onChange={handleChange}
            className="field col-2"
            label="Dirección"
            name="address"
            autoComplete="on"
            variant="outlined"
          />
<TextField
            value={inputs.email}
            onChange={handleChange}
            className="field col-2"
            label="Email"
            name="email"
            autoComplete="on"
            variant="outlined"
          />


<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Femenino" />
    <FormControlLabel value="male" control={<Radio />} label="Masculino" />
  </RadioGroup>
</FormControl>
  </Card>

  <div className="btn-wrapper">
   <Button onClick={addNewPatient} variant="contained">Crear paciente</Button>
  </div>


 </div>
}