import {
  Card,
  Text,
  TabPanel,
  Button
} from "@tremor/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import DynamicTable from './table';

export default function TabPanelTable({panelData}) {
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
