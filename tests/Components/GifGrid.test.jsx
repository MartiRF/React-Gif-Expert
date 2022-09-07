import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFechtGifs } from "../../src/hooks/useFechtGifs";


jest.mock('../../src/hooks/useFechtGifs')

describe('Prueba en <GifGrid/>', () => {
    
    const category = 'One Punch'

    test('debe de mostrar el loading inicialmente', () => {
        
        useFechtGifs.mockReturnValue({
            data: [],
            isLoading: true
        })
        
        render(<GifGrid category={ category }/>)
        // screen.debug();
        expect(screen.getByText('Cargando'));
        expect(screen.getByText(category))
    });

    test('debe de mostrar items cuando se cargan las imagenes mediante el fecht', () => {
        
        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'http://Ejemplo.com'
            },
            {
                id: 'abc1',
                title: 'Garu',
                url: 'http://Ejemplo.com'
            }
        ]
        
        useFechtGifs.mockReturnValue({
            data: gifs,
            isLoading: false
        })
        render(<GifGrid category={ category }/>)
        
        expect(screen.getAllByRole('img').length).toBe(2)
    });
});