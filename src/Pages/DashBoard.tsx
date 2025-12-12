import axios from "axios";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setInfo(res.data.message));
  }, []);

  return <h1>{info}</h1>;
};

export default DashBoard;
