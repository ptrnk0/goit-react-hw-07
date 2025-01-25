import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const contactFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "Name must be at least 3 characters")
		.max(50, "Name must be at most 50 characters")
		.required("Name is required"),
	number: Yup.string()
		.min(3, "Number must be at least 3 characters")
		.max(50, "Number must be at most 50 characters")
		.required("Number is required"),
});

const ContacForm = () => {
	return (
		<Formik
			initialValues={{ name: "", number: "" }}
			validationSchema={contactFormSchema}
		>
			<Form>
				<Field type="text" name="name" placeholder="Name" />
				<ErrorMessage name="name" component="span"></ErrorMessage>
				<Field type="text" name="number" placeholder="Phone number" />
				<ErrorMessage name="number" component="span"></ErrorMessage>
				<button type="submit">Add</button>
			</Form>
		</Formik>
	);
};

export default ContacForm;
