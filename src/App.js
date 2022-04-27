import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import Provider from "./context/context";

export default function App() {
	return (
		<Provider>
			<div className="container">
				<Header />
				<Table />
				<Form />
			</div>
		</Provider>
	);
}
