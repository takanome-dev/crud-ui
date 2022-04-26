import React, { useState } from "react";
import Button from "./Button";
import Options from "./Options";
import Status from "./Status";
import UserAvatar from "./UserAvatar";

// const users = [
// 	{
// 		id: 1,
// 		name: "Takanome Dev",
// 		email: "takanome@gmail.com",
// 		active: true,
// 		location: "Senegal",
// 		phone: "+919876543215",
// 	},
// 	{
// 		id: 2,
// 		name: "Takanome Dev",
// 		email: "takanome@gmail.com",
// 		active: false,
// 		location: "Senegal",
// 		phone: "+919876543215",
// 	},
// 	{
// 		id: 3,
// 		name: "Takanome Dev",
// 		email: "takanome@gmail.com",
// 		active: true,
// 		location: "Senegal",
// 		phone: "+919876543215",
// 	},
// ];

export default function TableBody({ users }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<tbody>
			{users.map((u) => (
				<tr key={u.id}>
					<td>
						<UserAvatar name={u.name} email={u.email} />
					</td>
					<td>
						<Status status={u.status} />
					</td>
					<td>{u.location}</td>
					<td>{u.phone}</td>
					<td>
						<Button title="Contact" />
					</td>
					<td>
						<Options isOpen={isOpen} setIsOpen={setIsOpen} />
					</td>
				</tr>
			))}
		</tbody>
	);
}
