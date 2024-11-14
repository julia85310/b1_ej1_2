export default function Card({titulo, descripcion, imagen}){
  return <div>
    <h1>{titulo}</h1>
    <img src={imagen} alt={titulo}/>
    <p>{descripcion}</p>
  </div>
}