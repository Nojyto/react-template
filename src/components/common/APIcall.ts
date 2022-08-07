import {useState, useEffect} from "react"
import axios from "axios"

export default function APIcall(url: string){
	const [data, setData]: any = useState([])
	//console.log(apiData)
	useEffect(() => {
		axios.get(url)
			 .then((rsp)  => {setData(rsp.data)})
			 .catch((err) => {console.error(err)})
	}, [url])

	return data
}