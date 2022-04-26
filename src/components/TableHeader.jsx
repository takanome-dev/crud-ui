import React from "react";

const titles = ["User", "Status", "Location", "Phone", "Contact", "Actions"];

export default function TableHeader() {
	return (
		<thead>
			<tr>
				{titles.map((t, i) => (
					<th key={i}>{t}</th>
				))}
			</tr>
		</thead>
	);
}
