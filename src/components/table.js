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
        <TableRow key='header'>
          {records['headers'].map((headerObject) => (
            <TableHeaderCell key={headerObject.keyText}>{headerObject.displayText}</TableHeaderCell>
          ))}
          <TableHeaderCell></TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {records['rows'].map((record) => (
          <TableRow key={record.id} id={record.id}>
            {records['headers'].map((headerObject, index) => (
              <TableCell key={`${headerObject.keyText}-${index}`}>{record[headerObject.keyText]}</TableCell>
            ))}
            <TableCell><Button size="xs">Edit</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}