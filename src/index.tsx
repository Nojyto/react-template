import React         from "react"
import {createRoot}  from "react-dom/client"
import "./style.css"

//import { useState } from "react"
//import image from "./images/test.jpg"


const App = () => {
	//const [count, setCount] = useState(0);
  
	return (
		<div className='app'>
			<div>
				<h1 className="text-3xl font-bold underline">
					Hello
				</h1>
			</div>
		</div>
	)
}

/*class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props)
		this.state = {
			totalIncome: 0,
		}
	}

	render() {
		return (
			<div className='app'>
				<div>
					<h1>Hello</h1>
				</div>
			</div>
		)
	}
}*/

const root = createRoot(document.getElementById("root")!)
root.render(<App/>)


/*
npx create-react-app <my-app-name> --template typescript

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm start
*/