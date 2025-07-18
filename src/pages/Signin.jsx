import { Bottomwarning } from "../components/Bottomwarning";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Inputbox } from "../components/Inputbox";
import { Subheading } from "../components/Subheading";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Header label={"Login"} />
          <Subheading label={"Enter your credentials to access your account"} />
          <Inputbox
            label={"Email"}
            placeHolder={"john@gmail.com"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <Inputbox
            label={"Password"}
            placeHolder={"John1234"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <Button
            label={"Sign in"}
            onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/");
              } catch (err) {
                console.log("Login error:", err.response?.data || err.message);
              }
            }}
          />

          <Bottomwarning
            label={"Do not have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}
