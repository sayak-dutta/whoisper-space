import Image from "next/image";
import React from "react";

function Header() {
	return (
		<div>
			<Image
				width={1000}
				height={50}
				src={"./logo-alt.svg"}
				alt="logo"
				style={{ display: "flex", margin: "auto" }}
				className="logoHeader"
			/>
		</div>
	);
}

export default Header;
