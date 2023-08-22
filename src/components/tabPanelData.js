import {
  Card,
  Text,
  TabPanel,
  Button
} from "@tremor/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import DynamicTable from './table';

// import TabPanelForm from './tabPanelForm'

import AssetForm from './PanelForm/AssetForm';
import PersonForm from './PanelForm/PersonForm';

import {useState} from 'react';

export default function TabPanelData({panelData}) {
  const [showForm, setShowForm] = useState(false);
  return (
    <>      
      { !showForm && <TabPanelTable panelData={panelData} addHandler={setShowForm} />}
      { showForm && panelData.key == 'assets' && <AssetForm panelData={panelData} showFrom={setShowForm} />}
      { showForm && panelData.key == 'beneficiaries' && <PersonForm panelData={panelData} showFrom={setShowForm} />}
      { showForm && panelData.key == 'trustees' && <PersonForm panelData={panelData} showFrom={setShowForm} />}
    </>
  )
}

function TabPanelTable({panelData, addHandler}) {
  return (
      <TabPanel>
        <Text>
          {panelData.title}
        { panelData.key != 'reveal' &&
          <Button
            style={{float: 'right', marginRight: 5 + 'px'}}
            size="xs"
            icon={PlusIcon}
            onClick={(e) => {addHandler(true);}}
          >Add</Button>
        }        
        </Text>
        <Card className="mt-6">
          <DynamicTable records={panelData.data} showDelete={panelData.key != 'reveal'}/>
        </Card>
      </TabPanel>
    )
}
