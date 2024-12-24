"use client"

import Button from "@components/lib/buttons/Button";
import StyledTextField from "@components/lib/inputs/StyledTextField";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import style from "../Auth.module.css"
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "@services/graphql/mutations/auth";

interface UserFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  mobile: string;
  password1: string;
  password2: string;
}

const initialFormState: UserFormData = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  mobile: "",
  password1: "",
  password2: "",
};

const SignupPage = (): JSX.Element => {
  const router = useRouter();
  const [newUser, setNewUser] = useState<UserFormData>(initialFormState);
  const [userRegistration] = useMutation(REGISTER);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await userRegistration({
        variables: {
          email: newUser.email,
          mobile: newUser.mobile,
          username: newUser.username,
          password1: newUser.password1,
          password2: newUser.password2,
          firstName: newUser.firstName,
          lastName: newUser.lastName
        }
      });
      alert( response);
      // Add success handling here
    } catch (error) {
      console.error("Registration error:", error);
      // Add error handling here
    }
  };

  const formFields = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Username", name: "username" },
    { label: "Email address", name: "email", type: "email" },
    { label: "Mobile No.", name: "mobile", type: "number" },
    { label: "Password", name: "password1", type: "password" },
    { label: "Confirm Password", name: "password2", type: "password" }
  ];

  return (
    <form onSubmit={handleSubmit} className={style["wrapper"]}>
      <h1 className={style['title']}>Create Account</h1>
      
      <div className={style['btn-switch']}>
        <Button label="Sign In" onClick={() => router.push("/auth/signin")} />
        <Button active label="Signup" onClick={() => router.push("/auth/signup")} />
      </div>

      <div className="w-full flex flex-col gap-5">
        {formFields.map(field => (
          <StyledTextField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type || "text"}
            value={newUser[field.name as keyof UserFormData]}
            onChange={handleInputChange}
            variant="outlined"
          />
        ))}

        <div className="flex gap-2 items-center w-full">
          <Checkbox
            sx={{
              color: "#fff3e3",
              '&.Mui-checked': {
                color: '#2F463E',
              },
            }}
          />
          <p className="text-wrap">
            By signing up, you agree to our{' '}
            <span className="cursor-pointer hover:text-secondary font-semibold">Terms</span>,{' '}
            <span className="cursor-pointer hover:text-secondary font-semibold">Privacy Policy</span> and{' '}
            <span className="cursor-pointer hover:text-secondary font-semibold">Cookies Policy</span>.
          </p>
        </div>
      </div>

      <button type="submit" className={style["final-btn"]}>
        <div className={style["btn-text"]}>sign up</div>
      </button>
    </form>
  );
};

export default SignupPage;