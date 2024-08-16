//1.Importo React
import React from "react";


//5. y 2. Exporto y creo componente
export const Card = () => {



//3.Code JS
console.log ("Hola mundo desde card") 

//4. 
return (
<div className="card" style={{width: "18rem"}}> // Observa que algunos atributos HTML cambian sus nombres o valores para funcionar en React
          <img className="card-img-top" src="..." alt="Card image cap" /> // Ahora debemos tener cuidado de cerrar siempre las etiquetas de cierre automático
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
}