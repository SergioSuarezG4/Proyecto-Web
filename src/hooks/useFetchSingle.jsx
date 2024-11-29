import { useState, useEffect } from "react"

export const useFetchSingle = ({url, id}) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetch(`https://dragonball-api.com/api/${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            setData(data)
            setIsLoading(false);
        })

    }, [url, id])

    return {data, isLoading}
}