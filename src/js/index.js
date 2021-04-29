//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function TimeCounter(props) {
	return (
		<div className="container col-12 d-flex m-0">
			<div className="icon">
				<i className="far fa-clock"></i>
			</div>
			<div className="sexto">{props.Dsexto % 10}</div>
			<div className="quinto">{props.Dquinto % 10}</div>
			<div className="cuarto">{props.Dcuarto % 10}</div>
			<div className="tercero">{props.Dtercero % 10}</div>
			<div className="segundo">{props.Dsegundo % 10}</div>
			<div className="primero">{props.Dprimero % 10}</div>
		</div>
	);
}
//validación de propTypes
TimeCounter.propTypes = {
	Dsexto: PropTypes.number,
	Dquinto: PropTypes.number,
	Dcuarto: PropTypes.number,
	Dtercero: PropTypes.number,
	Dsegundo: PropTypes.number,
	Dprimero: PropTypes.number
};
// render con setInterval()
let counter = 0;
setInterval(() => {
	let sexto = Math.floor(counter / 100000);
	let quinto = Math.floor(counter / 10000);
	let cuarto = Math.floor(counter / 1000);
	let tercero = Math.floor(counter / 100);
	let segundo = Math.floor(counter / 10);
	let primero = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<TimeCounter
			Dprimero={primero}
			Dsegundo={segundo}
			Dtercero={tercero}
			Dcuarto={cuarto}
			Dquinto={quinto}
			Dsexto={sexto}
		/>,
		document.querySelector("#app")
	);
}, 1000);
