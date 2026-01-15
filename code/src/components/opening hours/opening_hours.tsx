import React, { useState } from "react";
import { get } from "react-hook-form";

const OpeningHours = () => {
	const date = new Date();
	const day = date.getDay();
	const hours = date.getHours();
	const min = date.getMinutes();
	const time = date.getTime();
	// console.log(day);
	// console.log(date);

	const WeeklyHours = {
		0: [
			{ start: "12:00", end: "14:30" },
			{ start: "19:00", end: "22:30" },
		],
		1: [
			{ start: "12:00", end: "14:30" },
			{ start: "19:00", end: "23:00" },
		],
		2: [
			{ start: "12:00", end: "14:30" },
			{ start: "19:00", end: "23:00" },
		],

		3: [
			{ start: "12:00", end: "14:30" },
			{ start: "19:00", end: "23:00" },
		],

		4: [
			{ start: "12:00", end: "14:30" },
			{ start: "19:00", end: "23:00" },
		],

		5: [
			{ start: "12:00", end: "14:30" },
			{ start: "19:00", end: "23:00" },
		],

		6: [
			{ start: "12:00", end: "14:30" },
			{ start: "19:00", end: "23:00" },
		],
	};

	
	

	if (date)
		// const [TodayDate, setTodayDate]= useState<number>;

		return (
			// <div>
			<h2>Opening Hours</h2>
			// 	<h4>lundi - samedi: 12-14h30 et 19h - 23h</h4>
			// 	<h4> Dimanche - 12- 14h30 et 19h - 22h30</h4>
			// </div>
		);
};

export default OpeningHours;
