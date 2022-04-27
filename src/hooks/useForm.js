import { useEffect, useState } from "react";

export default function useForm(initialState = {}) {
	const [inputs, setInputs] = useState(initialState);

	useEffect(() => {
		setInputs(initialState);
	}, [initialState]);

	const handleChange = (e) => {
		let { name, value, type } = e.target;

		if (type === "number") {
			value = +value;
		}

		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const clearForm = () => {
		const clearState = Object.fromEntries(
			// eslint-disable-next-line no-unused-vars
			Object.entries(inputs).map(([key, value]) => [key, ""])
		);
		setInputs(clearState);
	};

	return {
		inputs,
		handleChange,
		clearForm,
	};
}
