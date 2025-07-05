import { Bottomwarning } from "../components/Bottomwarning";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Inputbox } from "../components/Inputbox";
import { Subheading } from "../components/Subheading";

export function Signin() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Header label={"Login"} />
          <Subheading label={"Enter your credentials to access your account"} />
          <Inputbox label={"Email"} placeHolder={"john@gmail.com"} />
          <Inputbox label={"Password"} placeHolder={"John1234"} />
          <br />
          <Button label={"Sign in"}></Button>
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
