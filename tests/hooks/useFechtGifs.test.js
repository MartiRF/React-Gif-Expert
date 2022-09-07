import { renderHook, waitFor } from "@testing-library/react";
import { useFechtGifs } from "../../src/hooks/useFechtGifs";

describe('Pruebas en el hook useFechtGifs.js', () => {
    
    test('debe de regresar el estado inicial', () => {
        
        const { result } = renderHook( () => useFechtGifs('One Puch'))
        const { data, isLoading } = result.current;
        
        expect(data.length).toBe(0)
        expect(isLoading).toBeTruthy();

    });

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async() => {

        const { result } = renderHook( () => useFechtGifs('One Puch'))

        await waitFor(
            () => expect( result.current.data.length).toBeGreaterThan(0)
        )

        const { data, isLoading } = result.current;

        expect(data.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();
        
    });
});