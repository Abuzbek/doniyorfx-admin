import { ApiClient, RecordsTableHeader } from "adminjs";
import {
  Box,
  H3,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@adminjs/design-system";
import React, { useEffect } from "react";
// import './customPage.css'
const api = new ApiClient();

export default function Excel() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    api.getPage({ pageName: "excel" }).then((res) => {
      console.log(res);
      setData(res.data.payments);
    });
  }, []);
  const properties = [
    {
      label: "Ism",
      name: "name",
      isSortable: true,
    },
    {
      label: "Familya",
      name: "surname",
    },
    {
      label: "Telefon",
      name: "phone",
    },
    {
      label: "Tarif",
      name: "plan",
    },
    {
      label: "Rasm",
      name: "file",
    },
    {
      label: "Ro'yxatdan o'tgan sanasi",
      name: "createdAt",
    },
  ];
  const createLink = (link) => {
    // if (process.env.NODE_ENV === "production") {
      return `https://doniyorfx.uz${link}`;
    // } else {
      // return `http://localhost:8080${link}`;
    // }
  };

  const createCSVLink = () => {
    // if (process.env.NODE_ENV !== "production") {
      // window.open(`http://localhost:8080/api/v2/payment/csv`);
    // } else {
      window.open(`https://doniyorfx.uz/api/v2/payment/csv`);
    // }
  };
  return (
    <Box p="xl">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <H3>Ro'yxatga olinganlar</H3>
        <Button onClick={createCSVLink}>Download CSV</Button>
      </Box>
      <Table>
        <RecordsTableHeader
          properties={properties}
          titleProperty={properties[0]}
        />
        <TableBody>
          {data.map((user, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              {properties.map((pro, idx) => {
                if (pro.name === "file") {
                  return user.file ? (
                    <TableCell key={idx}>
                      <a href={createLink(user.file)} target="_blank">
                        {user.file.split("/").at(-1)}
                      </a>
                    </TableCell>
                  ) : (
                    <TableCell key={idx}>No File</TableCell>
                  );
                } else {
                  return <TableCell key={idx}>{user[pro.name]}</TableCell>;
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
