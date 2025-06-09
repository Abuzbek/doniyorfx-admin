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

export default function RegisteredExcel() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    api.getPage({ pageName: "registeredExcel" }).then((res) => {
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
      label: "Telefon",
      name: "phone",
    },
    {
      label: "Ro'yxatdan o'tgan sanasi",
      name: "createdAt",
    },
  ];

  const createCSVLink = () => {
    if (process.env.NODE_ENV !== "production") {
      window.open(`http://localhost:8080/api/registered/csv`);
    } else {
      window.open(`https://doniyorfx.uz/api/registered/csv`);
    }
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
                return <TableCell key={idx}>{user[pro.name]}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
