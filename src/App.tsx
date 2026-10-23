import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import GoogleSocialLogin from "./components/GoogleSocialLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./App.css";
import { GoogleSocialConnect } from "./components/GoogleSocialConnect";
import { AuthLanding } from "./components/AuthLanding";
import { MicrosoftSocialConnect } from "./components/MicrosoftSocialConnect";

function App() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID ?? ""}
    >
      <Routes>
        <Route path="/" element={<AuthLanding />} />
        <Route path="/oauth/microsoft" element={<MicrosoftSocialConnect />} />
        <Route path="/oauth/microsoft/callback" element={<AuthLanding />} />
        <Route path="/oauth/google" element={<GoogleSocialConnect />} />
        <Route path="/oauth/google-login" element={<GoogleSocialLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
