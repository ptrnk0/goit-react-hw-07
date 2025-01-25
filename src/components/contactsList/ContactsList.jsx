import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import Contact from "../contact/Contact";

const ContactsList = () => {
	const contacts = useSelector(selectContacts);

	return (
		<ul>
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
