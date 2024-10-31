"use client";

import { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  // Proceed to next step
  const nextStep = () => {
    setState((prevState) => ({ ...prevState, step: prevState.step + 1 }));
  };

  // Go back to previous step
  const prevStep = () => {
    setState((prevState) => ({ ...prevState, step: prevState.step - 1 }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Map steps to components
  const steps = {
    1: (
      <FormUserDetails
        values={state}
        handleChange={handleChange}
        nextStep={nextStep}
      />
    ),
    2: (
      <FormPersonalDetails
        values={state}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    ),
    3: <Confirm values={state} nextStep={nextStep} prevStep={prevStep} />,
    4: <Success />,
  };

  return <>{steps[state.step]}</>;
};

export default UserForm;
