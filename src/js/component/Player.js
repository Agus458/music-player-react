import React, { useState, useRef } from "react";

export default function Player() {
	const [songList, setSongList] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		}
	]);

	const [actual, setActual] = useState(0);

	let audio = useRef();

	let playButton = useRef();

	function play() {
		if (audio.current.paused) {
			audio.current.play();
		} else {
			audio.current.pause();
		}
	}

	function seleccionarCancion(pos) {
		setActual(pos);
		audio.current.src =
			"https://assets.breatheco.de/apis/sound/" + songList[pos].url;
		audio.current.play();
	}

	function siguiente() {
		if (actual === songList.length - 1) {
			setActual(0);
		} else {
			setActual(actual + 1);
		}
		audio.current.src =
			"https://assets.breatheco.de/apis/sound/" + songList[actual].url;
		audio.current.play();
	}

	return (
		<>
			<div className="row justify-content-center align-items-center">
				<div className="col-8">
					<div className="list-group">
						{songList.map((cancion, index) => {
							return (
								<button
									key={index}
									className={`list-group-item list-group-item-action + ${
										index === actual ? "active" : ""
									}`}
									onClick={() => {
										seleccionarCancion(index);
									}}>
									{cancion.name}
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<div className="row justify-content-center align-items-center mt-3">
				<div className="col-8">
					<div className="card">
						<div className="card-body text-center">
							<audio
								ref={audio}
								src="https://www.w3schools.com/html/horse.mp3"
							/>
							<div className="row p-2">
								<div className="col">
									<div>
										<i className="fas fa-2x fa-backward"></i>
									</div>
								</div>
								<div className="col">
									<div onClick={play} ref={playButton}>
										<i className="fas fa-2x fa-play"></i>
									</div>
								</div>
								<div className="col">
									<div onClick={siguiente}>
										<i className="fas fa-2x fa-forward"></i>
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
