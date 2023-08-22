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

function MultiSelectControlled() {
  const [value, setValue] = useState("");
  return (
    <>
      <MultiSelect onValueChange={setValue} placeholder="Select Beneficiaries">
        <MultiSelectItem value="1" icon={UserCircleIcon}>
          Rahul
        </MultiSelectItem>
        <MultiSelectItem value="2" icon={UserCircleIcon}>
          Amanda
        </MultiSelectItem>
      </MultiSelect>
    </>
  )
}

function MultiSelectControlledTrustees() {
  const [value, setValue] = useState("");
  return (
    <>
      <MultiSelect onValueChange={setValue} placeholder="Select Trustees">
        <MultiSelectItem value="1" icon={UserCircleIcon}>
          Varun
        </MultiSelectItem>
      </MultiSelect>
    </>
  )
}

function SelectControlled() {
  const [value, setValue] = useState("");
  return (
    <>
      <Select value={value} onValueChange={setValue} placeholder="Select Category">
        <SelectItem value="1" icon={BanknotesIcon}>
          Stocks
        </SelectItem>
        <SelectItem value="2" icon={BanknotesIcon}>
          Bank Account
        </SelectItem>
        <SelectItem value="3" icon={BanknotesIcon}>
          Land
        </SelectItem>
        <SelectItem value="4" icon={BanknotesIcon}>
          Insurance
        </SelectItem>
        <SelectItem value="5" icon={BanknotesIcon}>
          Heirloom/Artifact
        </SelectItem>
      </Select>
    </>
  )
}

export default function TabPanelForm({panelData}) {
  return (
      <TabPanel>
        <Card className="mt-6">
        	<div className="space-y-6">
        		{`Asset Category:`} <br />
        		<SelectControlled />
        		<br />
        		{`Asset Name:`}
        		<TextInput placeholder="Asset Name" />
        		<br />
        		{`Asset Description:`}
        		<TextInput placeholder="Description" />
        		<br />
        		{`Beneficiaries:`}
        		<MultiSelectControlled />
        		<br />
        		{`Trustees:`}        		
        		<MultiSelectControlledTrustees />
			      <Flex justifyContent="end" className="space-x-2 border-t pt-4 mt-8">
			        <Button size="xs" variant="secondary">
			          Cancel
			        </Button>

			        <Button size="xs" variant="primary">
			          Save
			        </Button>
			      </Flex>
        	</div>
        </Card>
      </TabPanel>
  )
}