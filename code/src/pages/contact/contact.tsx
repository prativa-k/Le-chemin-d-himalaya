import ContactForm from "../../components/contact/contact_form";
import Seo from "../../components/seo/seo";


const ContactPage = () => {
	return (
		<>
			<Seo title="Contact" description="Contact - desc" url="/contact" />
			<ContactForm/>
		</>
	);
};

export default ContactPage;
