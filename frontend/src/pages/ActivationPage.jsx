import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ActivationPage() {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (activation_token && !hasRun.current) {
      hasRun.current = true; // the request has been made
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            process.env.REACT_APP_SERVER_URL + "/user/activation",
            { activation_token },
            { retry: 1 }
          );
          console.log(res);
        } catch (error) {
          console.log(error.response.data.message);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 text-white py-12 px-4 sm:px-6 lg:px-8 font-extrabold text-3xl">
      {error ? (
        <h1>your activation link is expired!</h1>
      ) : (
        <h1>Account activated successfully</h1>
      )}
    </div>
  );
}

export default ActivationPage;
