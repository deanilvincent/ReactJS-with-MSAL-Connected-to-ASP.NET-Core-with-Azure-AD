import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Employee } from "./components/Employee";
import { SignInButton } from "./components/SignInButton";
import { SignOutButton } from "./components/SignOutButton";

function App() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <AuthenticatedTemplate>
                <SignOutButton />
                <Employee />
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
                <SignInButton />
                <h4 className="title is-4">
                  Please sign in to view employee info.
                </h4>
              </UnauthenticatedTemplate>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
