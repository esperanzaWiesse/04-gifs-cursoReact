import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// los hooks necesitan parte del ciclo de vida del los componentes de react, por tanto no se puedne evaluar de manera aislada

describe('Pruevas en el hook useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 
        
        // manda a llamar al hook
       /* luego desestructura:  
        - rerender ->  en el caso que se quiera volver a renderizar el hook
        - results -> resultado que debuelve el hook cuando ya esta montado
        - unmount -> el resultado que se dispara cuando el hook es desmontado 
       */
        const { result } = renderHook(() => useFetchGifs('sakura'));
        const { images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     })

     test('debe de retornar un arreglo de imagenes y isLoading en false', async() => { 

        const { result } = renderHook(() => useFetchGifs('sakura'));
        await waitFor(
            // primero se manda lo que se espera (en este caso que images > 0)
            () => expect(result.current.images.length).toBeGreaterThan(0),

            // en caso no se cumpla lo de arriba o demore mucho, se puede estableser un time out 
            // {
            //     timeout: 6000
            // }
        );

        const { images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
     })
 }) 