import Card from './Card';

export default function App() {
  const cardsData = [
    {
      titulo: 'Zanahoria',
      descripcion: 'Planta herbácea umbelífera, con flores blancas y purpúrea la central de la umbela, con fruto seco y comprimido y raíz fusiforme, de unos 20 centímetro(s) de largo, amarilla o rojiza, jugosa y comestible.',
      imagen: 'zanahoria.jpg'
    },
    {
      titulo: 'Papa',
      descripcion: 'Sumo pontífice romano, vicario de Cristo, sucesor de san Pedro en el gobierno universal de la Iglesia católica, de la cual es cabeza visible, y padre espiritual de todos los fieles. xd',
      imagen: 'patata.jpg'
    },
    {
      titulo: 'Pimiento',
      descripcion: 'Planta herbácea anual, de origen americano, de la familia de las solanáceas, con fruto en baya hueca, de color verde, rojo o amarillo y forma más o menos cónica.',
      imagen: 'pimiento.jpg'
    },
  ];

  return (
    <div>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          titulo={card.titulo}
          descripcion={card.descripcion}
          imagen={card.imagen}
        />
      ))}
    </div>
  );
}

