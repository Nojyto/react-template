import {useState, useEffect} from "react"
import axios from "axios"

export const APIcall = (url: string) => {
	const [data, setData]: any = useState([])

	useEffect(() => {
		axios.get(url)
			 .then((rsp)  => {setData(rsp.data)})
			 .catch((err) => {console.error(err)})
	}, [url])

	return data
}

export default APIcall