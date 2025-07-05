import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/User";
import axios from "axios";

export function Dashboard() {
  const [balance, setBalance] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setName(response.data.firstname);
      });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar name={name} />
      <div>
        <Balance value={balance}></Balance>
      </div>
      <div>
        <Users></Users>
      </div>
    </div>
  );
}
