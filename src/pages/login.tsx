import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../components/heading";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/usernameSlice";
import { toggleLogin } from "../store/slices/isLoggedSlice";
import { FormDataType } from "../types/loginFormType";

const initialData: FormDataType = {
  username: "",
  password: "",
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormDataType>(initialData);
  const [show, setShow] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const navigate = useNavigate();

  const validateForm = (updatedFormData: FormDataType) => {
    const newErrors: { username?: string; password?: string } = {};

    if (!/^[A-Za-z0-9]+$/.test(updatedFormData.username)) {
      newErrors.username = "Only Alphabets and Numbers are allowed";
    }    

    if (updatedFormData.username.length < 3) {
      newErrors.username = "Length must be greater than 2";
    }

    if (updatedFormData.password.length < 5) {
      newErrors.password = "Length must be greater than 5";
    }

    if (updatedFormData.username === "") {
      newErrors.username = "This field is required";
    }

    if (updatedFormData.password === "") {
      newErrors.password = "This field is required";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (updatedFormData: FormDataType) => {
    if (show) {
      validateForm(updatedFormData);
    }
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: { [key: string]: string } = {};
    newErrors = validateForm(formData);
    setShow(true);

    let check = true;
    for (const key in newErrors) {
      if (newErrors[key].length !== 0) {
        check = false;
        break;
      }
    }

    if (check) {
      dispatch(toggleLogin(1));
      dispatch(setUser(formData.username));
      setShow(false);
      setFormData(initialData);
      navigate("/home");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-[100vh]">
      <div className="xs:w-[400px] px-4 max-w-[1440px]">
        <div className="mt-8 text-[80px]">
          <Heading size={80} />
        </div>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <input
              className={`bg-primary rounded-[20px] w-full p-3 placeholder-black focus:outline-none text-center sm:text-start ${
                errors.username ? "border-red-500 border-2" : ""
              }`}
              placeholder="Username"
              value={formData.username}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const updatedFormData: FormDataType = {
                  ...formData,
                  username: e.target.value,
                };
                setFormData(updatedFormData);
                handleChange(updatedFormData);
              }}
            />
            <p className="ml-3 text-red-500">{errors.username}</p>
          </div>
          <div>
            <input
              className={`bg-primary rounded-[20px] w-full p-3 placeholder-black focus:outline-none text-center sm:text-start ${
                errors.password ? "border-red-500 border-2" : ""
              }`}
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const updatedFormData: FormDataType = {
                  ...formData,
                  password: e.target.value,
                };
                setFormData(updatedFormData);
                handleChange(updatedFormData);
              }}
            />
            <p className="ml-3 text-red-500">{errors.password}</p>
          </div>
          <button className="w-full mt-10">
            <Button text="Login" />
          </button>
        </form>
        <div className="flex gap-2 text-third text-[15px] my-3">
          <p>You don’t have an account?</p>
          <Link to="/register" className="font-bold">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
