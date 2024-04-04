"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import InputBox from "./widgets/inputBox";
import Header from "./widgets/header";

export default function Home() {
	const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState("");

	// Create dummy thoughts on page load
	useEffect(() => {
		const dummyThoughts = [
			{ text: "This is my first balloon thought!" },
			{ text: "Ideas can float too..." },
			{ text: "What's on your mind?" },
		];
		setThoughts(dummyThoughts);
	}, []);

	// Function to generate a random animation delay
	const randomDelay = () => Math.random() * 5; // Up to 5 seconds
	return (
		<>
			<Header />
			<div className={styles.balloonArea}>
				{thoughts.map((thought, index) => (
					<div
						key={index}
						className={styles.balloon}
						style={{ animationDelay: `${randomDelay()}s` }}
					>
						{thought.text}
					</div>
				))}
			</div>
			<InputBox />
		</>
	);
}
