import React from "react";
import styles from "./Bio.module.scss";

const Bio = ({ headshot, name, tagLine, role }) => {
	return (
		<div className={styles.bio}>
			<div className={styles.bioImage}>
				<img src={headshot} alt={`Headshot of  ${name}`} />
			</div>
			<div className={styles.bioContent}>
				<p className={styles.bioContentName}>{name}</p>
				<p className={styles.bioContentTagLine}>{tagLine}</p>
				<p className={styles.bioContentRole}>{role}</p>
			</div>
		</div>
	);
};

export default Bio;
