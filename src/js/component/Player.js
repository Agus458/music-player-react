import React, { useState, useRef } from "react";
import SongList from "./SongList";
import Controls from "./Controls";

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

	function seleccionarCancion(pos) {
		setActual(pos);
	}

	function siguiente() {
		if (actual === songList.length - 1) {
			setActual(0);
		} else {
			setActual(actual + 1);
		}
	}

	function atras() {
		if (actual === 0) {
			setActual(songList.length - 1);
		} else {
			setActual(actual - 1);
		}
	}

	return (
		<>
			<SongList
				listaCanciones={songList}
				alElegir={seleccionarCancion}
				actual={actual}
			/>
			<Controls
				cancionSiguiente={siguiente}
				cancionAnterior={atras}
				cancionActual={songList[actual]}
			/>
		</>
	);
}
