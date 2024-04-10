export default function NewAppointment({
  params,
}: {
  params: { username: string };
}) {
  return <div>Esta es la consulta para {params.username}</div>;
}
