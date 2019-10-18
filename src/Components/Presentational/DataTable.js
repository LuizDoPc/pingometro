import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import PlusOne from '@material-ui/icons/PlusOne';

const DataTable = ({ data }) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Nome</b>
            </TableCell>
            <TableCell>
              <b>Action</b>
            </TableCell>
            <TableCell>
              <b>Pingas</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell onClick={item.add}>{item.action && <PlusOne />}</TableCell>
              <TableCell>
                {item.pingas.map(pg => (
                  <div key={pg.name}>
                    <p>
                      {pg.name}: {pg.qtd}
                    </p>
                    {pg.rm && <a onClick={item.rm}>{pg.rm}</a>}
                  </div>
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
