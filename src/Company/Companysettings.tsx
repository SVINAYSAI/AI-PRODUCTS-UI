import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

export default function Companysettings() {
  const [cookieValue, setCookieValue] = useState<string | undefined>();

  useEffect(() => {
    const cookies = new Cookies();
    const buttonClicked = cookies.get("buttonClicked");

    setCookieValue(buttonClicked);
  }, []);

  return (
    <div>
      <h1>Cookie Reader Page</h1>
      <p>
        Cookie value for 'buttonClicked': {cookieValue || 'Not found'}
      </p>
    </div>
  );
}
