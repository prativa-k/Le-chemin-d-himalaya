import RegisterForm from "../../components/authentification/register-form";
import Seo from "../../components/seo/seo";

const RegisterPage = () => {
	return (
		<>
			<Seo title="Register" description="register - desc" url="/register" />

			<RegisterForm />
		</>
	);
};

export default RegisterPage;
