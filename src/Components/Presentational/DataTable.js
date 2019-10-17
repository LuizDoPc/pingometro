import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";

const DataTable = ({ data }) => {
  return (
    <>
      <Table selectable>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Pingas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.pingas.map(pg => (
                  <p>
                    {pg.name}: {pg.qtd}
                  </p>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DataTable;
