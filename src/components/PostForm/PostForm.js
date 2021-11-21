import React from "react";
import styles from "./PostForm.module.scss";
const PostForm = () => {
	return (
		<>
			<form>
				<textarea className={styles.formContent}></textarea>
				<button className={styles.formButton}>Post Tweet</button>
			</form>
		</>
	);
};

export default PostForm;
