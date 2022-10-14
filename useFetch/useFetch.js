import { useEffect, useState } from 'react';

export const useFetch = (url) => {

    //! 3) con useState puedo indicarle que data podemos regresar en el RETURN
    const [state, setState] = useState({
        data: null, // producto de la peticion
        isLoading: true, // saber si esta cargando
        hasError: null, // saber si tengo error
    })

    //! 1) disparar la peticion FETCH (Asincrona)
    const getFetch = async () => {

        //! 4) cambiar el estado del isLoading a TRUE, ya que aun no cargo la peticion
        setState({
            ...state, // destructuring state (se mantienen las props sin cambios)
            isLoading: true
        })

        //! 1)disparar la peticion FETCH (Asincrona)
        const resp = await fetch(url)
        const data = await resp.json()

        //! 4) cuando ya tenemos la RESP, cambiamos el estado con setState
        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    //! 2) Llamamos la funcion en el useEffect para que se ejecute cada vez que se monte el hook
    useEffect(() => {
        getFetch()
    }, [url]) // --> dependencia

    //! 5) Retornamos las propiedades para poder desestructurar en el componente
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}


