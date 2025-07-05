import { Bottomwarning } from "../components/Bottomwarning";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Inputbox } from "../components/Inputbox";
import { Subheading } from "../components/Subheading";

export const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Header label={"Signup"} />
          <Subheading label={"Enter your information to create an account"} />
          <Inputbox label={"Firstname"} placeHolder={"John"} />
          <Inputbox label={"Lastname"} placeHolder={"Doe"} />
          <Inputbox label={"Email"} placeHolder={"John@gmail.com"} />
          <Inputbox label={"Password"} placeHolder={"John1234"} />
          <br />
          <div>
            <Button label={"Sign up"} />
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
