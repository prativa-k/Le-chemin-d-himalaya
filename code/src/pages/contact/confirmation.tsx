import ConfirmationMessage from "../../components/contact/confirmation_message";
import ContactForm from "../../components/contact/contact_form";
import Seo from "../../components/seo/seo";


const ConfirmationPage = () => {
	return (
		<>
			<Seo title="ContactConfirmation" description="ContactConfirmation - desc" url="/contact" />
			<ConfirmationMessage/>
		</>
	);
};

export default ConfirmationPage;
