// 1.se importa react
import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from './Navbar.jsx';// importar componente
import {Card} from './Card.jsx'
import { Alert } from "./Alert.jsx";
import { Spinners } from "./Spinners.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { BtnCallAction } from "./BtnCallAction.jsx";
import { TodosList } from "./TodosList.jsx";

//2.create your first component (con PascalCase: primera regla de oro)
const Home = () => {
	//3. Code JS

   //4.Retornamos un solo elemento HTML (segunda regla de oro)
	return (
		<div className="text-center">
			<TodosList/>
			{/* <Navbar/>
			<Card/>
			<Alert/>
			<Spinners/>
			<Card/>
			<Jumbotron/>
			<BtnCallAction/>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}
		</div>
	);
};

//5.exportando
export default Home;
