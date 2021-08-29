import React from "react";
import Registration from "./auth/registration";
import Login from "./auth/login";
import axios from "axios";
import { Button } from "@material-ui/core";

export default function Home() {
  const handleLogout = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredential: true })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log("registration error", response);
      });
  };
  return (
    <div>
      <h1>Home</h1>
      <Button variant="contained" onClick={() => handleLogout()}>
        Logout
      </Button>
      <Registration />
      <Login />
    </div>
  );
}
