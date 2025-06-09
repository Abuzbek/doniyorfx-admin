import { ApiClient } from "adminjs";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const api = new ApiClient();

  useEffect(() => {
    api
      .getDashboard()
      .then((response) => {
        setData(response.data); // { message: 'Hello World' }
      })
      .catch((error) => {
        // handle any errors
      });
  }, []);
  return <div></div>;
};

export default Dashboard;
