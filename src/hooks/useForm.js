import { useState } from "react";

export default function useForm(initial = {}) {
	const [inputs, setInputs] = useState(initial);

	// const initialValues = Object.values(initial).join("");

	// useEffect(() => {
	// 	setInputs(initial);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [initialValues]);

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
