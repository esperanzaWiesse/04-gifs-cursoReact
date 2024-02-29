import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// creando un MOCK
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 

    const category = 'sakura'

    test('debe de mostrar el loading inicialemnte', () => { 

        // cimilacion de lo que esta regresando la funcion 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        
        expect(screen.getByText('Cargando ....'));
        expect(screen.getByText(category));
     })

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        // creacion de data ficticia que el api regresaria
        const gifs = [
            {
                id: 'abc',
                title: 'sakura',
                url: 'https://sakura1.jpg'
            },
            {
                id: 'abcd',
                title: 'jhony',
                url: 'https://jhony.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>)

        expect(screen.getAllByRole('img').length).toBe(2);

      })
 })