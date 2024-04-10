import { redirect } from "next/navigation";

export default function Username({
 params,
}: {
 params: { username: string };
}){
 //default website
 redirect(`/pacientes/${params.username}/consulta`);
}