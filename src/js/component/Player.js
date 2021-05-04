import React, { useState, useRef } from "react";
import SongList from "./SongList";

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
			playButton.current.className = "fas fa-2x fa-pause";
		} else {
			audio.current.pause();
			playButton.current.className = "fas fa-2x fa-play";
		}
	}

	function seleccionarCancion(pos) {
		setActual(pos);
		audio.current.src =
			"https://assets.breatheco.de/apis/sound/" + songList[pos].url;
		audio.current.play();
		playButton.current.className = "fas fa-2x fa-pause";
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
		playButton.current.className = "fas fa-2x fa-pause";
	}

	function atras() {
		if (actual === 0) {
			setActual(songList.length - 1);
		} else {
			setActual(actual - 1);
		}
		audio.current.src =
			"https://assets.breatheco.de/apis/sound/" + songList[actual].url;
		audio.current.play();
		playButton.current.className = "fas fa-2x fa-pause";
	}

	return (
		<>
			<SongList
				listaCanciones={songList}
				alElegir={seleccionarCancion}
				actual={actual}
			/>
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
									<div onClick={atras}>
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
									<div onClick={siguiente}>
										<i className="fas fa-2x fa-forward"></i>
									</div>
								</div>
							</div>
							<div className="row mt-3">
								<div className="col">
									<input
										type="range"
										className="form-control-range"
										id="formControlRange"
										value="0"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
