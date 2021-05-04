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

	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	const bubbleSort = arr => {
		let wall = arr.length - 1; //we start the wall at the end of the array
		while (wall > 0) {
			let index = 0;
			while (index < wall) {
				//compare the adjacent positions, if the right one is bigger, we have to swap
				if (arr[index].id > arr[index + 1].id) {
					let aux = arr[index];
					arr[index] = arr[index + 1];
					arr[index + 1] = aux;
				}
				index++;
			}
			wall--; //decrease the wall for optimization
		}
		return arr;
	};

	const [ordenado, setOrdenado] = useState(true);

	function shuffle() {
		if (ordenado) {
			shuffleArray(songList);
			setOrdenado(false);
		} else {
			bubbleSort(songList);
			setOrdenado(true);
		}
		return ordenado;
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
				desordenar={shuffle}
			/>
		</>
	);
}
