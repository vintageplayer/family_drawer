"use client";

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

export default function UsersTable({users}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.username}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


export function DynamicTable({records}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {records['headers'].map((headerObject) => (
            <TableHeaderCell>{headerObject.displayText}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {records['rows'].map((record) => (        
          <TableRow key={record.id}>
            {records['headers'].map((headerObject) => (
              <TableCell>{record[headerObject.keyText]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}