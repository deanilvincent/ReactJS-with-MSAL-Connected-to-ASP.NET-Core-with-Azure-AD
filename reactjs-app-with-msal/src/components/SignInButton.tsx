import { useMsal } from "@azure/msal-react";
import { loginApiRequest } from "../authConfig";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginApiRequest).catch((e) => {
      console.log(e);
    });
  };
  return (
    <button className="button is-info" onClick={handleLogin}>
      Sign In
    </button>
  );
};
