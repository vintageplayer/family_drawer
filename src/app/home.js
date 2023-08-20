"use client";

import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";

import UsersTable, {DynamicTable} from './table';

function TabPanelTable(props) {
  return (
      <TabPanel>
        <Text>
          {props.title}
        </Text>
        <Card className="mt-6">
          <DynamicTable records={props.data} />
        </Card>
      </TabPanel>
    )
}

export default function DashboardExample() {
  const assetPanelTitle = "Manage all the physical/digital assets you want your loved ones to access. We recommend sharing steps on accessing the assets, rather than the exact user/password information.";
  const panelTabDataList = [
      {
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
              'parameter_title': 'Trustee Trigger Threshold',
              'parameter_value': 2
            },
            {
              'parameter_title': 'Beneficiary Trigger Threshold',
              'parameter_value': 3,
            },
            {
              'parameter_title': 'Digital Communication Attempt Period',
              'parameter_value': '30 days',
            },
            {
              'parameter_title': 'Phone Communication Attempt Period',
              'parameter_value': '15 days',
            },
            {
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
          <TabPanelTable title={panelTabDataList[0]['title']} data={panelTabDataList[0]['data']} />
          <TabPanelTable title={panelTabDataList[1]['title']} data={panelTabDataList[1]['data']} />
          <TabPanelTable title={panelTabDataList[2]['title']} data={panelTabDataList[2]['data']} />
          <TabPanelTable title={panelTabDataList[3]['title']} data={panelTabDataList[3]['data']} />
        </TabPanels>
      </TabGroup>
    </main>
  );
}