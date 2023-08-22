import { useState } from "react";
import {
  Select,
  SelectItem,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";

import { PlusIcon, BanknotesIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export function MultiSelectControlled({itemsList, placeholder}) {
  const [value, setValue] = useState([]);
  return (
    <>
      <MultiSelect onValueChange={setValue} placeholder={`Select ${placeholder}`}>
      {itemsList.map((item) => (
        <MultiSelectItem key={item.value} value={item.value} icon={UserCircleIcon}>
          {item.displayText}
        </MultiSelectItem>
      ))}
      </MultiSelect>
    </>
  )
}

export function SelectControlled({itemsList, placeholder}) {
  const [value, setValue] = useState("");

  return (
    <>
      <Select value={value} onValueChange={setValue} placeholder={`Select ${placeholder}`}>
      {itemsList.map((item) => (
        <SelectItem key={item.value} value={item.value} icon={BanknotesIcon}>
          {item.displayText}
        </SelectItem>        
      ))}
      </Select>
    </>
  )
}