import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/User";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      <div>
        <Balance></Balance>
      </div>
      <div>
        <Users></Users>
      </div>
    </div>
  );
}
