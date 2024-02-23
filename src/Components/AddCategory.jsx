import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // preventDefault -> evita que al pesionar enter, la pag se recargue y se pierda el valor del inputValue
        event.preventDefault();

        if (inputValue.trim().length <=1) return;

        // categories -> reprensenta todas las categorias que ya existen, es decir el estado actual
        // setCategories( categories => [inputValue, ...categories]) 

        // limpiendo la caja de texto, despues de ingresar un nuevo valor
        setInputValue('');

        onNewCategory(inputValue.trim());
    }
    
  return (
    <form onSubmit={onSubmit}>
         <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
   
  );
};
 
