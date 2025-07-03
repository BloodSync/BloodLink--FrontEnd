import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom"; // <- IMPORTANTE

const CLIENT_ID = "812350191038-g3t0ip5da4q0p848fbsgo2j04246p1iu.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthProvider>
        <BrowserRouter> {/* <- ESSENCIAL PARA FUNCIONAR O ROUTER */}
          <App />
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
