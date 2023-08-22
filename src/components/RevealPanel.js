import {
  Card,
  Text,
  TabPanel,
  Button
} from "@tremor/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { RevealTable} from './table';

import {useState} from 'react';

export default function RevealPanel() {
    const panelData =       {
        'key': 'reveal',
        'title': 'Set your preferred time periods to trigger the reveal process',
        'data': {
          'headers': [
            {
              'displayText': 'Reveal Parameter',
              'keyText': 'parameter_title'
            },
            {
              'displayText': 'Value Set',
              'keyText': 'parameter_value'
            }
          ],
          'rows': [
            {
              'id': 1,
              'parameter_title': 'Trustee Trigger Threshold',
              'parameter_value': 2
            },
            {
              id: 2,
              'parameter_title': 'Beneficiary Trigger Threshold',
              'parameter_value': 3,
            },
            {
              id: 3,
              'parameter_title': 'Digital Communication Attempt Period (days)',
              'parameter_value': 30,
            },
            {
              id: 4,
              'parameter_title': 'Phone Communication Attempt Period (days)',
              'parameter_value': 15,
            },
            {
              id: 5,
              'parameter_title': 'Total Days Before Reveal (days)',
              'parameter_value': 45,
            }
          ]
        }
      }
  return (
    <>      
      <TabPanelTable panelData={panelData} />
    </>
  )
}

function TabPanelTable({panelData}) {
  return (
      <TabPanel>
        <Text>
          {panelData.title}
        </Text>
        <Card className="mt-6">
          <RevealTable records={panelData.data}/>
        </Card>
      </TabPanel>
    )
}
