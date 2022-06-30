import React         from "react"
import {createRoot}  from "react-dom/client"
import "./style.css"
import APIcall       from "./components/APIcall"

//import image from "./assets/images/imagestest.jpg"
//import icon  from "./assets/icons/iconstest.jpg"

const App = () => {
	const apiData = APIcall("https://v2.jokeapi.dev/joke/Any?type=single")
	//console.log(apiData)
	return (
		<div className="app">
			<div className="text-center align-middle bg-secondary min-h-screen">
				<h1 className="text-3xl text-white p-8">
					{apiData.joke}
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