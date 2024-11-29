import { useState, useEffect } from "react"

export const useFetch = ({url}) => {

    const [data, setData] = useState([]);
    const [numberPage, setNumberPage] = useState(1);
    const [infoPage, setInfoPage] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        fetch(`https://dragonball-api.com/api/${url}?page=${numberPage}&limit=8`)
        .then(response => response.json())
        .then(data => {
            setData(data.items)
            setInfoPage(data.meta)
            setIsLoading(false)
        })
    }, [url, numberPage])


    return {data, infoPage, numberPage, setNumberPage, isLoading}
}