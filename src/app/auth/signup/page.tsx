"use client";

import Button from "@components/lib/buttons/Button";
import StyledTextField from "@components/lib/inputs/StyledTextField";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import style from "../Auth.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "@services/graphql/mutations/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [loading, setLoading] = useState(false);
  const [userRegistration] = useMutation(REGISTER);
  const [agreeTerms, setAgreeTerms] = useState(false); // Track checkbox state

  // Track input field changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Track checkbox state
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(e.target.checked);
  };

  // Validation for form fields
  const validateForm = (): boolean => {
    const { firstName, lastName, username, email, mobile, password1, password2 } = newUser;
    if (!agreeTerms) {
      toast.error("You must agree to the Terms and Conditions!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return false;
    }
    if (!firstName || !lastName || !username || !email || !mobile || !password1 || !password2) {
      toast.error("All fields are required!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return false;
    }
    if (password1 !== password2) {
      toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return false;
    }
    
    return true;
  };

  // Form submission logic
  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const {
        data: { register },
      } = await userRegistration({
        variables: {
          email: newUser.email,
          mobile: newUser.mobile,
          username: newUser.username,
          password1: newUser.password1,
          password2: newUser.password2,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        },
      });

      if (register) {
        setLoading(false);
        toast[register?.success ? "success" : "error"](register?.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  const formFields = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Username", name: "username" },
    { label: "Email address", name: "email", type: "email" },
    { label: "Password", name: "password1", type: "password" },
    { label: "Confirm Password", name: "password2", type: "password" },
    { label: "Mobile No.", name: "mobile", type: "number" },
  ];

  console.log("dsdsd==============>",agreeTerms)

  return (
    <form onSubmit={handleSubmit} className={style["wrapper"]}>
      <h1 className={style["title"]}>Create Account</h1>

      <div className={style["btn-switch"]}>
        <Button label="Sign In" onClick={() => router.push("/auth/signin")} />
        <Button active label="Signup" onClick={() => router.push("/auth/signup")} />
      </div>

      <div className="w-full grid grid-cols-2 gap-2">
        {formFields.map((field) => (
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

        <div className="flex gap-2 col-span-2 items-center w-full">
          <Checkbox
            sx={{
              color: "#fff3e3",
              "&.Mui-checked": {
                color: "#2F463E",
              },
            }}
            checked={agreeTerms} // Bind checkbox value
            onChange={handleCheckboxChange} // Handle checkbox change
          />
          <p className="text-wrap">
            By signing up, you agree to our{" "}
            <span className="cursor-pointer hover:text-secondary justify- font-semibold">Terms</span>,{" "}
            <span className="cursor-pointer hover:text-secondary font-semibold">Privacy Policy</span> and{" "}
            <span className="cursor-pointer hover:text-secondary font-semibold">Cookies Policy</span>.
          </p>
        </div>
      </div>

      <button type="submit" disabled={loading} className={style["final-btn"]}>
        {loading ? (
          <div className="size-4 border-l-2 border-t-2 border-primary rounded-full animate-spin" />
        ) : (
          <div className={style["btn-text"]}>sign up</div>
        )}
      </button>
    </form>
  );
};

export default SignupPage;
