const {BASE_URL} = process.env;

console.log('BASE URL IS: ', BASE_URL);

export default function NewAppointment({ params }: { params: { username: string }}){
 return <div>Esta es una nueva cita para {params.username}</div>
}