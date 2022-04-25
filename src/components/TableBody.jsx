import React from "react";
import Button from "./Button";
import Options from "./Options";
import Status from "./Status";
import styles from "./styles/table.module.css";
import UserAvatar from "./UserAvatar";

const users = [
	{
		name: "Takanome Dev",
		email: "takanome@gmail.com",
		location: "Senegal",
		phone: "+919876543215",
	},
	{
		name: "Takanome Dev",
		email: "takanome@gmail.com",
		location: "Senegal",
		phone: "+919876543215",
	},
	{
		name: "Takanome Dev",
		email: "takanome@gmail.com",
		location: "Senegal",
		phone: "+919876543215",
	},
];

export default function TableBody() {
	return (
		<tbody>
			{users.map((u, i) => (
				<tr key={i} className={styles.table_row}>
					<td>
						<UserAvatar name={u.name} email={u.email} />
					</td>
					<td>
						<Status active={false} />
					</td>
					<td>{u.location}</td>
					<td>{u.phone}</td>
					<td>
						<Button title="Contact" />
					</td>
					<td>
						<Options />
					</td>
				</tr>
			))}
		</tbody>
	);
}
