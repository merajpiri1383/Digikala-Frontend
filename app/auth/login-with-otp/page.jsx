import {lazy} from "react";
// components 
const LoginOtpForm = lazy(()=> import( "./components/loginOtpForm"));
const Page = () => {
    return (
        <div>
            <LoginOtpForm />
        </div>
    )
};export default Page;