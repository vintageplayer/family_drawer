import {
  Card,
  Text,
  TabPanel,
  Button
} from "@tremor/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import DynamicTable from './table';
import TabPanelForm from './tabPanelForm'

export default function TabPanelData({panelData}) {
  return (
    <>
      <TabPanelTable panelData={panelData} />
      <TabPanelForm panelData={panelData} />
    </>
  )
}

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
          <DynamicTable records={panelData.data} showDelete={panelData.key != 'reveal'}/>
        </Card>
      </TabPanel>
    )
}
