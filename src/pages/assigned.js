import {
  Card,
  Title,
  Text
} from "@tremor/react";

import {AssignedTable} from '../components/table';


export default function AssignedPage() {
  const panelData = {
        'key': 'beneficiaries',
        'title': 'List of all the beneficiaries added',
        'data': {
          'headers': [
            {
              'displayText': 'Name',
              'keyText': 'name'
            },
            {
              'displayText': 'Email',
              'keyText': 'emailId',
            },
            {
              'displayText': 'Status',
              'keyText': 'status',
            }
          ],
          'rows': [
          {
            'id': 1,
            'name': 'Rahul',            
            'emailId': 'rahul@family.safe',
            'status': 'Locked'
          },
          {
            'id': 2,
            'name': 'Amanda',
            'emailId': 'amanda@family.safe',
            'status': 'Triggered. 12 days pending.'
          }
          ]
        }
      };
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>NOTE: Application Under development</Title>
      <Text>Inititate reveal process for a person who has listed you as the beneficiary or trustee.</Text>
      <br />
      <Card>
        <AssignedTable records={panelData.data} />
      </Card>
    </main>
  );
}