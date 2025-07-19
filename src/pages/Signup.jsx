import { Bottomwarning } from "../components/Bottomwarning";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Inputbox } from "../components/Inputbox";
import { Subheading } from "../components/Subheading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Header label={"Signup"} />
          <Subheading label={"Enter your information to create an account"} />
          <Inputbox
            label={"Firstname"}
            placeHolder={"John"}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <Inputbox
            label={"Lastname"}
            placeHolder={"Doe"}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <Inputbox
            label={"username"}
            placeHolder={"John@gmail.com"}
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
          <div>
            <Button
              label={"Sign up"}
              onClick={async () => {
                try {
                  const response = await axios.post(
                    "https://paytm-backend-alpha.vercel.app/api/v1/user/signup",
                    {
                      firstname,
                      lastname,
                      username,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);

                  navigate("/dashboard");
                  // Optionally navigate or show success
                } catch (err) {
                  console.error(err);
                  // Optionally show error to user
                }
              }}
            />
          </div>

          <Bottomwarning
            label={"Already have an account"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
