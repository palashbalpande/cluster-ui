"use client";
import InputCard from "@/components/ui/InputCard";
import { signUpConfig } from "@/lib/utils/fieldConfig";
import { signUpSchema, TSignUpSchema } from "@/lib/utils/zodInputSchema";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const SignUpPage = () => {
  const handleSignUp: SubmitHandler<TSignUpSchema> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Signed Up: ", data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <InputCard<TSignUpSchema>
        fields={signUpConfig}
        schema={signUpSchema}
        onSubmit={handleSignUp}
        buttonText="Done ?"
      />
    </div>
  );
};

export default SignUpPage;
