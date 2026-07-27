import { useCallback, useEffect, useMemo, useState } from "react";
import {
  MultiSelect,
  type DropDownItem,
  type EntityRecord,
} from "./MultiSelect";
import type { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "DATA ENTRY / Multi Select / MultiSelect",
  component: MultiSelect,
  argTypes: {},
} as Meta<typeof MultiSelect>;

export default meta;

const Template: StoryFn<typeof MultiSelect> = (args) => {
  const [data, setData] = useState<EntityRecord>(
    convertArrayToRecord(args?.data || []),
  );

  const [selectedItem, setSelectedItem] = useState<
    { id: number; label: string }[]
  >([]);
  const multiSelectData = useMemo(() => Object.values(data), [data]);
  useEffect(() => {
    setData(convertArrayToRecord(args.data));
  }, [args.data]);

  const handleUpdate = (id: string | number) => {
    const updated = Object.values(data).map((item) => {
      if (item.id === id) {
        return {
          ...item,
          value: !item.value,
        };
      }
      return item;
    });

    setData(convertArrayToRecord(updated));
  };

  const onSelectedChange = useCallback((val: any) => {
    setSelectedItem(val);
  }, []);

  return (
    <div className="w-full pt-4">
      <MultiSelect
        {...args}
        onUpdate={handleUpdate}
        data={multiSelectData}
        selectedItems={selectedItem}
        onSelectedChange={onSelectedChange}
      />
    </div>
  );
};

export const Selected = Template.bind({});
Selected.storyName = "Multi Select";
Selected.args = {
  placeHolder: "Select Languages",
  data: [
    { id: 1, label: "English", value: true },
    { id: 2, label: "German", value: false },
    { id: 3, label: "Persian", value: true },
    { id: 4, label: "French", value: false },
    { id: 5, label: "Spain", value: false },
    { id: 6, label: "Pashto", value: true },
    { id: 7, label: "Russian", value: false },
  ],
};

function convertArrayToRecord(array: DropDownItem[]): EntityRecord {
  return array.reduce<EntityRecord>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}
