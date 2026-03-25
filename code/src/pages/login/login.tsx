import LoginForm from "../../components/authentification/login-form";
import Seo from "../../components/seo/seo";


const LoginPage = () => {
	return (
        <>
		
			<Seo title="Login" description="login - desc" url="/login" />
            <LoginForm />
		</>
	);
};

export default LoginPage;