import React from "react";
import PropTypes from "prop-types";

export default function SongList(props) {
	return (
		<>
			<div className="row justify-content-center align-items-center">
				<div className="col-8">
					<div className="list-group">
						{props.listaCanciones.map((cancion, index) => {
							return (
								<button
									key={index}
									className={`list-group-item list-group-item-action + ${
										index === props.actual ? "active" : ""
									}`}
									onClick={() => {
										props.alElegir(index);
									}}>
									<strong>{cancion.id}:</strong>{" "}
									{cancion.name}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

SongList.propTypes = {
	listaCanciones: PropTypes.array,
	alElegir: PropTypes.func,
	actual: PropTypes.number
};
