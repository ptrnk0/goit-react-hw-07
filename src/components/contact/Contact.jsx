const Contact = ({ contact }) => {
	return (
		<>
			<h3>{contact.name}</h3>
			<p>{contact.number}</p>
		</>
	);
};

export default Contact;
