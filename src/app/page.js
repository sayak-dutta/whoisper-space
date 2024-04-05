"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import InputBox from "./widgets/inputBox";
import Header from "./widgets/header";
import ThoughtCloud from "./widgets/thoughtCloud";
import { CloudOutlined } from "@ant-design/icons";

const thoughts = [
	"Life is a journey, not a destination.",
	"The only way to do great work is to love what you do.",
	"Believe you can, and you're halfway there.",
	"Life is a journey, not a destination.",
	"The only way to do great work is to love what you do.",
	"Believe you can, and you're halfway there.",
	"Life is a journey, not a destination.",
	"The only way to do great work is to love what you do.",
	"Believe you can, and you're halfway there.",
	"Life is a journey, not a destination.",
	"The only way to do great work is to love what you do.",
	"Believe you can, and you're halfway there.",
	// Add more thoughts here
];

export default function Home() {
	// const [thoughts, setThoughts] = useState([]);
	const [newThought, setNewThought] = useState("");

	// Create dummy thoughts on page load

	const [clouds, setClouds] = useState([]);
	const [showThought, setShowThought] = useState(null);
	const containerRef = useRef(null);

	useEffect(() => {
		// Generate clouds to fill the entire screen
		const newClouds = [];
		const containerHeight = containerRef.current.offsetHeight;
		console.log(newClouds);
		const containerWidth = containerRef.current.offsetWidth;

		for (let i = 0; i < thoughts.length; i++) {
			const top = Math.random() * (containerHeight - 100) + 50; // Adjust cloud position vertically
			const left = Math.random() * (containerWidth - 200) + 100; // Adjust cloud position horizontally
			newClouds.push({ id: i, top, left, thought: thoughts[i] });
		}

		setClouds(newClouds);

		// Start scrolling animation
		const scrollInterval = setInterval(() => {
			containerRef.current.scrollTop += 1; // Adjust scroll speed
		}, 50); // Adjust scroll interval

		return () => clearInterval(scrollInterval);
	}, []);
	const handleCloudClick = (thought) => {
		setShowThought(thought);
	};

	// Function to generate a random animation delay
	const randomDelay = () => Math.random() * 5; // Up to 5 seconds
	return (
		<div>
			<Header />
			<div className={styles.balloonArea}>
				<div ref={containerRef} className="cloud-screen">
					{clouds.map((cloud) => (
						<div
							key={cloud.id}
							className="cloud"
							style={{ top: cloud.top, left: cloud.left }}
							onClick={() => handleCloudClick(cloud.thought)}
						>
							<CloudOutlined />
						</div>
					))}
					{showThought && (
						<ThoughtModal thought={showThought} onClose={() => setShowThought(null)} />
					)}
				</div>
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
		</div>
	);
}
const ThoughtModal = ({ thought, onClose }) => (
	<div className="thought-modal">
		<div className="thought-content">{thought}</div>
		<button onClick={onClose}>Close</button>
	</div>
);
