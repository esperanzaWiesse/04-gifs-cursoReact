import { render, screen } from "@testing-library/react"
import { GitItem } from "../../src/Components/GitItem";

describe('Test del componente GitItem', () => {

    const title = 'sakura';
    const url = 'http://sakura.com/kawai';

    test('debe de hacer match con el snapshot', () => { 

        const {container} = render(<GitItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();

     })

     test('debe de mostrar la imagen con el URL y el ALT indicado ', () => { 
        
        render(<GitItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);     -> esta es otra forma de hacer el test 
        const { src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
      })

      test('debe de mostrar el titulo en el componente', () => { 
        render(<GitItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
       })

 })
