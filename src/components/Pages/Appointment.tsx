import React, { useState } from "react";
//import "../../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "C:/Users/Will/Documents/ReactProjects/wssolutions/src/components/Pages/Appointment.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { useEffect } from "react";

export default function Appointment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <h1 className="ApptH1">Make Your Appointment Now!</h1>
      <div className="MakeAppt">
        <form>
          <label>
            First Name:
            <input type="text" name="fname" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lname" />
            Appointment Type:
          </label>
          <select name="ApptType">
            <option value="Taxes">Prepare Taxes</option>
            <option value="Credit">Repair Credit </option>
          </select>
          Pick A Date And Time:
          <DatePicker
            selected={startDate}
            onChange={(date) => date && setStartDate(date)}
            showTimeSelect
            minTime={setHours(setMinutes(new Date(), 0), 12)}
            maxTime={setHours(setMinutes(new Date(), 0), 20)}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

///onChange={(date) => date && setStartDate(date)}
