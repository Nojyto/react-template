import React         from "react"
import {createRoot}  from "react-dom/client"
import axios         from "axios"
import "./style.css"

//import image from "./images/test.jpg"


const App = () => {
	const [apiData, setData] = React.useState(undefined)
	
	React.useEffect(() => {
		const url = "https://v2.jokeapi.dev/joke/Any?type=single"
		axios.get(url)
			 .then((rsp)  => {setData(rsp.data.joke)})
			 .catch((err) => {console.error(err)})
	}, [])
	
	//console.log(apiData)

	return (
		<div className='app'>
			<div className="text-center align-middle bg-secondary min-h-screen">
				<h1 className="text-3xl text-white">
					{apiData}
				</h1>
			</div>
		</div>
	)
}


const root = createRoot(document.getElementById("root")!)
root.render(<App/>)


/*
npx create-react-app <my-app-name> --template typescript

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install -D axios

npm start
*/