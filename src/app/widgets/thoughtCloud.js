// import React, { useState, useEffect } from "react";

// // Dummy data for thoughts


// function ThoughtCloud() {
	

// 	return (
// 		<div className="cloud-container">
// 			{clouds.map((cloud) => (
// 				<div
// 					key={cloud.id}
// 					className="cloud"
// 					style={{ top: cloud.top, left: cloud.left }}
// 					onClick={() => handleCloudClick(cloud.thought)}
// 				>
// 					{/* Cloud icon or image */}
// 				</div>
// 			))}
// 			{showThought && (
// 				<ThoughtModal thought={showThought} onClose={() => setShowThought(null)} />
// 			)}
// 		</div>
// 	);
// }

// export default ThoughtCloud;

// const ThoughtModal = ({ thought, onClose }) => (
// 	<div className="thought-modal">
// 		<div className="thought-content">{thought}</div>
// 		<button onClick={onClose}>Close</button>
// 	</div>
// );
