import Contact from "../../components/contact/contact";
import Seo from "../../components/seo/seo";


const ContactPage = () => {
	return (
		<>
			<Seo title="Contact" description="Contact - desc" url="/" />
			<Contact />
		</>
	);
};

export default ContactPage;
