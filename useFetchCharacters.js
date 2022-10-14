
import { useEffect } from 'react';
import { useState } from 'react';


export const useFetchCharacter = (url1) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })


    const getFetchCharacter = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url1)
        const data = await resp.json()


        setState({
            data,
            isLoading: false,
            hasError: null

        })
    }

    useEffect(() => {
        getFetchCharacter()
    }, [url1])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError

    }

}