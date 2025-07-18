import { Button } from "./Button";
import { Navigate, useNavigate } from "react-router-dom";

export function Appbar({ name }) {
  const navigate = useNavigate();
  return (
    <div className="shadow h-14 flex justify-between px-4">
      <div className="flex items-center text-lg font-medium">PayTM App</div>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full h-10 w-10 bg-slate-200 text-sm font-medium">
          U
        </div>
        <div className="text-base">{name}</div>
        <div>
          <Button
            label={"Logout"}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
          />
        </div>
      </div>
    </div>
  );
}
