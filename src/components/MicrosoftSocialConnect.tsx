import { useEffect } from "react";

const MICROSOFT_CONNECT_SCOPE = [
  "offline_access",
  "User.Read",
  "Mail.Read",
  "Calendars.Read",
].join(" ");

export const MicrosoftSocialConnect = () => {
  useEffect(() => {
    const clientId = process.env.REACT_APP_MICROSOFT_CLIENT_ID;
    if (!clientId) {
      console.error("REACT_APP_MICROSOFT_CLIENT_ID is not configured");
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const state = {
      redirectUrl: urlParams.get("redirect_url"),
      action: urlParams.get("action"),
    };

    // The code and state come back to AuthLanding, same as the Google flow
    const params = new URLSearchParams({
      client_id: clientId,
      response_type: "code",
      redirect_uri: `${window.location.origin}/oauth/microsoft/callback`,
      scope: MICROSOFT_CONNECT_SCOPE,
      state: JSON.stringify(state),
    });

    // replace() so the back button doesn't land here and redirect again
    window.location.replace(
      `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params}`
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">
          Connecting to Microsoft...
        </h2>
        <p className="text-gray-500 mt-2">
          Please wait while we set up your Microsoft connection.
        </p>
      </div>
    </div>
  );
};
