import React, { useEffect } from "react";
import "../../App.css";
import "react-datepicker/dist/react-datepicker.css";
import "C:/Users/Will/Documents/ReactProjects/wssolutions/src/components/Pages/Appointment.css";

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form>
      <label>
        First Name:
        <input type="text" name="fname" />
      </label>
      <label>
        Last Name:
        <input type="text" name="lname" />
      </label>
      <label>
        Email Address:
        <input type="text" name="email" />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}
