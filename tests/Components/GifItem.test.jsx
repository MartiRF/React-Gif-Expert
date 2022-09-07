import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/Components/GifItem'

describe('Prueba de <GifItem />', () => {

    const url = 'http://ejemplo.com/'
    const title = 'titulo ejemplo';

    test('Snapshop', () => {
        const {container} = render( <GifItem url={url} title={title} />)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el url y el ALT indicado', () => {
        render( <GifItem url={url} title={title} />)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title)
    });

    test('debe de mostrar el titulo en el componente', () => {
        render( <GifItem url={url} title={title} />)
        expect( screen.getByText(title)).toBeTruthy();
    });
});