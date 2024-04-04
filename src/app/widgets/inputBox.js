import { Input, Tooltip } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./inputbox.module.css";

function InputBox() {
	const [message, setMessage] = useState("");

	const handleSend = () => {
		// Handle send logic here
		console.log("Message:", message);
		setMessage("");
	};
	return (
		<div className={styles.inputContainer} style={{ display: "flex" }}>
			<Input.TextArea
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className={styles.inputBox}
				// style={{ flex: 1, resize: "none", border: "none" }},
				placeholder="Dump your thoughts here"
				autoSize={{
					minRows: 2,
					maxRows: 4,
				}}
			/>

			<Tooltip placement="top" motion={"f"} title="Click to add">
				<Image
					src="./blue.svg"
					alt="Logo Button"
					className={styles.sendBtn}
					width={30}
					height={30}
					onClick={handleSend}
				/>
			</Tooltip>
		</div>
	);
}

export default InputBox;
