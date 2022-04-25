import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";

export default function App() {
	return (
		<div className="container">
			<table className="table">
				<TableHeader />
				<TableBody />
			</table>
		</div>
	);
}
