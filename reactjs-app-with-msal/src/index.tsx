import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig, loginApiRequest } from "./authConfig";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
import 'bulma/css/bulma.min.css';
/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);

axios.defaults.baseURL = "https://localhost:7193/api/";
axios.interceptors.request.use(
  async (response: any) => {
    const account = msalInstance.getAllAccounts()[0];
    const msalResponse = await msalInstance.acquireTokenSilent({
      ...loginApiRequest,
      account: account,
    });
    response.headers.common.Authorization = `Bearer ${msalResponse.accessToken}`;
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);
/**
 * We recommend wrapping most or all of your components in the MsalProvider component. It's best to render the MsalProvider as close to the root as possible.
 */
ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
