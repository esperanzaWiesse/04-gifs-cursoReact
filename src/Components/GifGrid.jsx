import { GitItem } from "./GitItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  console.log({images, isLoading});

  return (
    <>
        <h3>{category}</h3>
        {/* el elemento html h2 no debe de existir a menos que se se requira mostrarlo*/}
        {/* forma 2 -> (forma recomendada) (es la implementada)*/}
        { isLoading && (<h2>Cargando ....</h2>)}


        {/* forma 1 -> usando un ternario */}
        {/* { isLoading ? (<h2>Cargando ....</h2>): null } */}
        {/* forms 3 -> creando un componente que tenga la lojica y se pueda usar en varias partes*/}
        {/* { < isLoading isLoading={isLoading}></isLoading>} */}
        
        <div className="card-grid">
          {
            images.map((images) => (
              <GitItem 
                key={images.id}
                // mandar asi las props, se llama exparsir las props, lo que hace es devolver un arreglo de componentes GitItem [GitItem, GitItem, GitItem, GitItem]; donde cada componente de muestro arreglo correponde a cada elemento del arregli de gifts
                {...images}
              />
            ))
          }
        </div>
    </>
  )
}
