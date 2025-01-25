import { useDispatch, useSelector } from "react-redux";
import ContacForm from "../contacForm/ContacForm";
import ContactsList from "../contactsList/ContactsList";
import SearchBox from "../searchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/selectors";

const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<main>
			<ContacForm />
			<SearchBox />
			{error && <p>Something went wrong.</p>}
			{isLoading && <p>Loading...</p>}
			<ContactsList />
		</main>
	);
};

export default App;
