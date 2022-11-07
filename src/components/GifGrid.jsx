import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//useState se usa para controlar el estado de un componente

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} //operador spread para exparcir todas las propiedades de image
          />
        ))}
      </div>
    </>
  );
};
