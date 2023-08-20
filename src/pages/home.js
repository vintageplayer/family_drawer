import {
  Card,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Button
} from "@tremor/react";
import { PlusIcon } from "@heroicons/react/24/solid";

import DynamicTable from '../components/table';

function TabPanelTable({panelData}) {
  return (
      <TabPanel>
        <Text>
          {panelData.title}
        { panelData.key != 'reveal' &&
          <Button style={{float: 'right', marginRight: 5 + 'px'}} size="xs" icon={PlusIcon}>Add</Button>
        }        
        </Text>
        <Card className="mt-6">
          <DynamicTable records={panelData.data} />
        </Card>
      </TabPanel>
    )
}

export default function DashboardExample() {
  const assetPanelTitle = "Manage all the physical/digital assets you want your loved ones to access. We recommend sharing steps on accessing the assets, rather than the exact user/password information.";
  const panelTabDataList = [
      {
        'key': 'assets',
        'title': 'List of all your assets',
        'data': {
          'headers': [
            {
              'displayText': 'Category',
              'keyText': 'category'
            },
            {
              'displayText': 'Name',
              'keyText': 'name'
            },
            {
              'displayText': 'Beneficiaries',
              'keyText': 'beneficiaries'
            },
            {
              'displayText': 'Trustees',
              'keyText': 'trustees'
            },
            {
              'displayText': 'Last Updated',
              'keyText': 'update_at'
            },
          ],
          'rows': [
            {
              'id': 1,
              'category': 'Land',
              'name': 'Hosokote, Bangalore',
              'beneficiaries': 'Rahul',
              'trustees': '',
              'update_at': '16-Aug-2023'
            },
            {
              'id': 2,
              'category': 'Bank Account',
              'name': 'Bank Of American Savings Account',
              'beneficiaries': 'Rahul, Amanda',
              'trustees': 'Varun',
              'update_at': '17-Aug-2023'
            }
          ]
        }
      },
      {
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
              'keyText': 'emailId'
            },
            {
              'displayText': 'Phone',
              'keyText': 'phone_number'
            },
            {
              'displayText': 'Assets',
              'keyText': 'asset_count'
            }
          ],
          'rows': [
          {
            'id': 1,
            'name': 'Rahul',            
            'emailId': 'rahul@family.safe',
            'phone_number': '+91 998 1280 5738',
            'asset_count': 2
          },
          {
            'id': 2,
            'name': 'Amanda',
            'emailId': 'amanda@family.safe',
            'phone_number': '+1 572-1571-8410',
            'asset_count': 1
          }
          ]
        }
      },
      {
        'key': 'trustees',
        'title': 'List of all the trustees added',
        'data': {
          'headers': [
            {
              'displayText': 'Name',
              'keyText': 'name'
            },

            {
              'displayText': 'Email',
              'keyText': 'emailId'
            },
            {
              'displayText': 'Phone',
              'keyText': 'phone_number'
            },
            {
              'displayText': 'Assets',
              'keyText': 'asset_count'
            }
          ],
          'rows': [
            {
              'id': 1,
              'name': 'Varun',            
              'emailId': 'varun@family.safe',
              'phone_number': '+1 869-2442-4858',
              'asset_count': 1
            }
          ]
        }
      },
      {
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
              'parameter_title': 'Digital Communication Attempt Period',
              'parameter_value': '30 days',
            },
            {
              id: 4,
              'parameter_title': 'Phone Communication Attempt Period',
              'parameter_value': '15 days',
            },
            {
              id: 5,
              'parameter_title': 'Total Days Before Reveal',
              'parameter_value': '45 days',
            }
          ]
        }
      }
    ];

  return (
    <main className="px-12 py-12">
      <Title>Family Drawer</Title>
      <Text>Conveniently transfer details of any physical or digital asset your loved ones would need.</Text>
      <br />
      <Title>NOTE: Under development. Please don't use with actual data yet!</Title>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Assets</Tab>
          <Tab>Beneficiaries</Tab>
          <Tab>Trustees</Tab>
          <Tab>Reveal Settings</Tab>
        </TabList>
        <TabPanels>
          {panelTabDataList.map((panelData) => (
            <TabPanelTable
              panelData={panelData}
              key={panelData.key}
            />
          ))}
        </TabPanels>
      </TabGroup>
    </main>
  );
}