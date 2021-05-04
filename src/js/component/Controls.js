import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Controls(props) {
	let audio = useRef();

	let playButton = useRef();
	let currentTime = useRef();

	setInterval(() => {
		currentTime.current.value = audio.current.currentTime;
		currentTime.current.max = audio.current.duration;
	}, 500);

	useEffect(() => {
		audio.current.onloadedmetadata = () => {
			audio.current.play();
			playButton.current.className = "fas fa-2x fa-pause";
		};
	}, []);

	function play() {
		if (audio.current.paused) {
			audio.current.play();
			playButton.current.className = "fas fa-2x fa-pause";
		} else {
			audio.current.pause();
			playButton.current.className = "fas fa-2x fa-play";
		}
	}

	function seleccionarDuracion() {
		audio.current.currentTime = currentTime.current.value;
	}

	return (
		<>
			<div className="row justify-content-center align-items-center mt-3">
				<div className="col-8">
					<div className="card">
						<div className="card-body text-center">
							<audio
								ref={audio}
								src={
									"https://assets.breatheco.de/apis/sound/" +
									props.cancionActual.url
								}
							/>
							<div className="row p-2">
								<div className="col">
									<div
										onClick={() => {
											props.cancionAnterior();
										}}>
										<i className="fas fa-2x fa-backward"></i>
									</div>
								</div>
								<div className="col">
									<div onClick={play}>
										<i
											ref={playButton}
											className="fas fa-2x fa-play"></i>
									</div>
								</div>
								<div className="col">
									<div
										onClick={() => {
											props.cancionSiguiente();
										}}>
										<i className="fas fa-2x fa-forward"></i>
									</div>
								</div>
							</div>
							<div className="row mt-3">
								<div className="col">
									<div className="form-group">
										<input
											ref={currentTime}
											type="range"
											className="form-control-range"
											min="0"
											onClick={seleccionarDuracion}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Controls.propTypes = {
	cancionSiguiente: PropTypes.func,
	cancionAnterior: PropTypes.func,
	cancionActual: PropTypes.object
};
