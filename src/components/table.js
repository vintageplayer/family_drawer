import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Button,
  NumberInput,
  Flex
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
            <TableCell>
              <Button size="xs">Edit</Button>&nbsp; 
              <Button size="xs" variant="secondary">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function RevealTable({records}) {
  return (
    <Table>
      <TableHead>
        <TableRow key='header'>
          {records['headers'].map((headerObject) => (
            <TableHeaderCell key={headerObject.keyText}>{headerObject.displayText}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {records['rows'].map((record) => (
          <TableRow key={record.id} id={record.id}>
            {records['headers'].map((headerObject, index) => (
              <TableCell key={`${headerObject.keyText}-${index}`}>
                { index==0 && record[headerObject.keyText] }
                { index==1 && <NumberInput id={`${headerObject.keyText}--${index}-input`} value={record[headerObject.keyText]} /> }
              </TableCell>
            ))}
          </TableRow>
        ))}
        <TableRow>
          <TableCell></TableCell>
          <TableCell>
            <Flex justifyContent="end" className="space-x-2 mt-4">
              <Button
                size="xs"
                variant="secondary"
                onClick={(e) => {showFrom(false);}}
              >
                Reset
              </Button>

              <Button
                size="xs"
                variant="primary"
                onClick={(e) => {showFrom(false);}}
              >
                Save
              </Button>
            </Flex> 
          </TableCell>
        </TableRow>
      </TableBody>

    </Table>
  );
}

export function AssignedTable({records}) {
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
            <TableCell>
              { record.status == 'Locked' &&
              <Button size="xs" variant="secondary">Trigger Reveal</Button>
              }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}