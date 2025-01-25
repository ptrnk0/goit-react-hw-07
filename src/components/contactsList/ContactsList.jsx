import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import Contact from "../contact/Contact";
import css from "./ContactsList.module.css";

const ContactsList = () => {
	const contacts = useSelector(selectFilteredContacts);

	return (
		<ul className={css.contactsList}>
			{contacts &&
				contacts.map((contact) => {
					return (
						<li key={contact.id}>
							<Contact contact={contact} />
						</li>
					);
				})}
		</ul>
	);
};

export default ContactsList;
