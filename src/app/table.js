"use client";

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Button
} from '@tremor/react';

export default function DynamicTable({records}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {records['headers'].map((headerObject) => (
            <TableHeaderCell>{headerObject.displayText}</TableHeaderCell>
          ))}
          <TableHeaderCell></TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {records['rows'].map((record) => (        
          <TableRow key={record.id}>
            {records['headers'].map((headerObject) => (
              <TableCell>{record[headerObject.keyText]}</TableCell>
            ))}
            <TableCell><Button size="xs">Edit</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}