import {
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanels
} from "@tremor/react";

import TabPanelData from '../components/tabPanelData';
import RevealPanel from '../components/RevealPanel';

export default function Home() {
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
              'keyText': 'name',
              'inputType': 'TextInput'
            },
            {
              'displayText': 'Beneficiaries',
              'keyText': 'beneficiaries',
              'inputType': 'TextInput'
            },
            {
              'displayText': 'Trustees',
              'keyText': 'trustees',
              'inputType': 'TextInput'
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
            <TabPanelData
              panelData={panelData}
              key={panelData.key}
            />
          ))}
        <RevealPanel />
        </TabPanels>
      </TabGroup>
    </main>
  );
}