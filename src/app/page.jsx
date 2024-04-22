'use client'
import { randomInRange } from "@/utils/page";
import { Col, Image, Row } from "antd";
import { useEffect } from "react";
function scatterClouds(cloudElements) {
	cloudElements.forEach((cloudElement) => {
		const xOffset = randomInRange(-50, 50); // Adjust range for desired scatter
		const yOffset = randomInRange(-20, 20); // Adjust range for desired vertical movement

		cloudElement.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
	});
}

export default function Home() {
	const cloudElements = document.querySelectorAll('.cloud'); // Cache cloud elements

	// Call scatterClouds on component mount or update
	useEffect(() => {
		scatterClouds(cloudElements);
	}, []); // Empty dependency array: run once on mount

	return (
		<>

			<div className="position-absolute some top-0 w-100 h-100 border-danger overflow-auto">
				<div className="mx-2">
					<Row className="cloud-container position-relative mt-5" gutter={[10, 20]}>
						{[...new Array(10)].map((i, iIndex) =>
						(<Col
							className="cloud"
							key={iIndex}
							xs={24}
							sm={8}
							md={6}
						>
							<div className="text-center">
								<Image preview={false} height={180} src="/cloud.png" />
							</div>
						</Col>))}
					</Row>
				</div>
			</div>
		</>
	);
}
