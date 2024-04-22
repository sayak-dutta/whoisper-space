'use client'

import { Col, Image, Row } from "antd";


export default function Home() {

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
