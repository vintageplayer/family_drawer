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

export default function PersonForm ({panelData, showFrom}) {

  return (
      <TabPanel>
        <Card className="mt-6">
        	<div className="space-y-6">
        		{`Name:`} <br />
        		<TextInput placeholder="Name" />
        		<br />
            {`Email ID:`}
            <TextInput placeholder="Email ID" />
            <br />
            {`Phone Number (with country code):`}
            <TextInput placeholder="Phone Number" />
            <br />
            {`Physical Address:`}
            <TextInput placeholder="Physical Address" />
            <br />
        		{`Message Or Notes:`}
        		<TextInput placeholder="Type a message you want to leave" />
        		<br />
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