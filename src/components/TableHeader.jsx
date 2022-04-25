import React from "react";
import styles from "./styles/table.module.css";

const titles = ["User", "Status", "Location", "Phone", "Contact", "Actions"];

export default function TableHeader() {
	return (
		<thead className={styles.table_head}>
			<tr>
				{titles.map((t, i) => (
					<th key={i} className={styles.table_header}>
						{t}
					</th>
				))}
			</tr>
		</thead>
	);
}
