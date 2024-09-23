"use client";

import React from "react";
import CardWrapper from "./card-wrapper";
{
  /* Reusable Component that we can use for the login and register form, making variables and values dynamic*/
}
const RegisterForm = () => {
  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login Here"
    >
      <div></div>
    </CardWrapper>
  );
};

export default RegisterForm;
