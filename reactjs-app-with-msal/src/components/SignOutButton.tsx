import { useMsal } from "@azure/msal-react";

export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };
  return (
    <button className="button" onClick={handleLogout}>
      Sign Out
    </button>
  );
};
