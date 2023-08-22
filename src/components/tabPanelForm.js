import { useState } from "react";
import {
	TextInput,
	Select,
	SelectItem,
	Card,
	TabPanel,
	MultiSelect,
	MultiSelectItem,
	Button,
	Flex
} from "@tremor/react";

import { PlusIcon, BanknotesIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function MultiSelectControlled({itemsList}) {
  const [value, setValue] = useState([]);
  return (
    <>
      <MultiSelect onValueChange={setValue} placeholder="Select Beneficiaries">
      {itemsList.map((item) => (
        <MultiSelectItem key={item.value} value={item.value} icon={UserCircleIcon}>
          {item.displayText}
        </MultiSelectItem>
      ))}
      </MultiSelect>
    </>
  )
}

function SelectControlled({itemsList}) {
  const [value, setValue] = useState("");

  return (
    <>
      <Select value={value} onValueChange={setValue} placeholder="Select Category">
      {itemsList.map((item) => (
        <SelectItem key={item.value} value={item.value} icon={BanknotesIcon}>
          {item.displayText}
        </SelectItem>        
      ))}
      </Select>
    </>
  )
}

export default function TabPanelForm({panelData, showFrom}) {
  const categoryList = [
    {
      'value': '1',
      'displayText': 'Stocks'
    },
    {
      'value': '2',
      'displayText': 'Bank Account'
    },
    {
      'value': '3',
      'displayText': 'Land'
    },
    {
      'value': '4',
      'displayText': 'Insurance'
    },
    {
      'value': '5',
      'displayText': 'Heirloom/Artifact'
    }
  ];

  const beneficiaryList = [
    {
      'value': '1',
      'displayText': 'Rahul'
    },
    {
      'value': '2',
      'displayText': 'Amanda'
    }
  ];

  const trusteeList = [
    {
      'value': '1',
      'displayText': 'Varun'
    }
  ];


  return (
      <TabPanel>
        <Card className="mt-6">
        	<div className="space-y-6">
        		{`Asset Category:`} <br />
        		<SelectControlled itemsList={categoryList} />
        		<br />
        		{`Asset Name:`}
        		<TextInput placeholder="Asset Name" />
        		<br />
        		{`Asset Description:`}
        		<TextInput placeholder="Description" />
        		<br />
        		{`Beneficiaries:`}
        		<MultiSelectControlled itemsList={beneficiaryList} />
        		<br />
        		{`Trustees:`}        		
        		<MultiSelectControlled itemsList={trusteeList} />
			      <Flex justifyContent="end" className="space-x-2 border-t pt-4 mt-8">
			        <Button
                size="xs"
                variant="secondary"
                onClick={(e) => {showFrom(false);}}
              >
			          Cancel
			        </Button>

			        <Button
                size="xs"
                variant="primary"
                onClick={(e) => {showFrom(false);}}
              >
			          Save
			        </Button>
			      </Flex>
        	</div>
        </Card>
      </TabPanel>
  )
}