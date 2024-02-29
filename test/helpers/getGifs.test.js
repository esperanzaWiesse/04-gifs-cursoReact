import { getGifs } from "../../src/helpers/GetGifts";

describe('Pruebas en GetGifs', () => { 

    test('debe de retornar un arreglo de gifs', async() => { 
        // haciendo la peticion http
        const gifs = await getGifs('sakura');
        
        // el arreglo de be de ser mayor a cero
        expect(gifs.length).toBeGreaterThan(0)
        // el contenido del primer elemento del arreglo debe de cumplir con la siguente extructura 
        expect(gifs[0]).toEqual({
            id: expect.any(String), // -> no importa que sea mientras sea de tipo string
            title: expect.any(String),
            url: expect.any(String),
        });

     })
 })