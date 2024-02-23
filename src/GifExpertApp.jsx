import { useState } from "react";
// se deberia de colocar => import { AddCategory } from "./Components/index";
// pero cuando se tiene un archivo index.js react ya reconose el archivo y no es nesesario colocarlo
import { AddCategory, GifGrid} from "./Components";

export const GifExpertApp = () => {
  // se esta inicializando como un arreglo, con un primer valor en -> One Punch
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; 

    // FORMA 1
    // lo que se esta haciendo con el operador spred -> "...", es copiar todo el contenido del rray categories y colocarlo en un nuevo array donde tambien se esta gregando Valorant
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
      onNewCategory = {onAddCategory}
      />

      {
        categories.map((category) => (
          <GifGrid 
            key={category} 
            category={category}
          />
        ))
      }
        
    </>
  );
};
