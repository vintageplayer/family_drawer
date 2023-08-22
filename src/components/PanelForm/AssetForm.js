import {
	TextInput,
	Card,
	TabPanel,
	Button,
	Flex
} from "@tremor/react";

import {
  MultiSelectControlled,
  SelectControlled
} from '../formComponents';

export default function AssetForm ({panelData, showFrom}) {
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
        		<SelectControlled itemsList={categoryList} placeholder="Category" />
        		<br />
        		{`Asset Name:`}
        		<TextInput placeholder="Asset Name" />
        		<br />
        		{`Asset Description:`}
        		<TextInput placeholder="Description" />
        		<br />
        		{`Beneficiaries:`}
        		<MultiSelectControlled itemsList={beneficiaryList} placeholder="Beneficiaries" />
        		<br />
        		{`Trustees:`}        		
        		<MultiSelectControlled itemsList={trusteeList} placeholder="Trustees" />
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