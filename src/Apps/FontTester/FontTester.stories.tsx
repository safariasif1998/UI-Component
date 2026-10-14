import type { Meta, StoryFn } from "@storybook/react";
import { FontTester } from "./FontTester";
import React, { useRef, useState } from "react";
import { BasicInput } from "../../DATA ENTRY/Inputs/BasicInput/BasicInput";
import { PlusIcon } from "../../icons/PlusIcon";
import { Upload } from "../../icons/Upload";
import { Label } from "../../DATA ENTRY/Label/Label";

const meta = {
  component: FontTester,
  title: "Application/Font Tester /FontTester",
} as Meta<typeof FontTester>;

export default meta;

const Template: StoryFn<typeof FontTester> = (args) => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState(args.options ?? []);
  const [newFont, setNewFont] = useState("");
  const fontInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const addNewItem = () => {
    const font = value.trim();

    if (!font) return;

    const alreadyExists = options.some(
      (option) => option.value.toLowerCase() === font.toLowerCase(),
    );

    if (alreadyExists) return;

    setOptions((prevOptions) => [
      ...prevOptions,
      {
        id: Date.now(),
        value: font,
        label: font,
      },
    ]);

    setNewFont(font);
    setValue("");
  };

  async function handleFontUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const fontName = file.name.replace(/\.[^/.]+$/, "");
      const fontData = await file.arrayBuffer();

      const font = new FontFace(fontName, fontData);
      const loadedFont = await font.load();

      document.fonts.add(loadedFont);
      setOptions((prev) => [
        ...prev,
        {
          id: Date.now(),
          value: fontName,
          label: fontName,
        },
      ]);
      setNewFont(fontName);
      console.log(`${fontName} loaded successfully`);
    } catch (error) {
      console.error("Could not load font:", error);
    }
  }

  return (
    <div
      className={"w-full h-full flex items-center justify-center min-h-[300px]"}
    >
      <FontTester {...args} newFont={newFont} options={options}>
        <Label label="Enter your favorite font" />
        <BasicInput
          label="Enter your favorite font"
          placeholder="e.g newsreader"
          required={false}
          value={value}
          onchange={handleChange}
        >
          <div className="flex items-center px-1.5 border-l  border-gray-200 hover:bg-gray-100">
            <button
              type="button"
              onClick={() => fontInputRef.current?.click()}
              className="w-full h-full flex items-center justify-center cursor-pointer"
              title="Upload font"
            >
              <Upload className="w-4 text-gray-500" />
            </button>

            <input
              type="file"
              ref={fontInputRef}
              accept=".ttf,.otf,.woff,.woff2"
              onChange={handleFontUpload}
              className="hidden"
            />
          </div>
          <div className="flex items-center px-1.5 border-l border-gray-200 hover:bg-gray-100">
            <button onClick={addNewItem} className="w-full h-full ">
              <PlusIcon className="cursor-pointer text-sm w-5 " />
            </button>
          </div>
        </BasicInput>
      </FontTester>
    </div>
  );
};

export const FontTesterStory = Template.bind({});

FontTesterStory.storyName = "FontTester";

FontTesterStory.args = {
  label: "Choose a font",
  options: [
    { id: 1, value: "monospace", label: "monospace" },
    { id: 2, value: "serif", label: "serif" },
    { id: 3, value: "sans-serif", label: "sans-serif" },
    { id: 4, value: "cursive", label: "cursive" },
    { id: 5, value: "fantasy", label: "fantasy" },
    { id: 6, value: "system-ui", label: "system-ui" },
    { id: 7, value: "ui-serif", label: "ui-serif" },
    { id: 8, value: "ui-sans-serif", label: "ui-sans-serif" },
    { id: 9, value: "ui-monospace", label: "ui-monospace" },
    { id: 10, value: "ui-rounded", label: "ui-rounded" },
    { id: 11, value: "math", label: "math" },
    { id: 12, value: "fangsong", label: "fangsong" },
  ],
  textSize: [
    { id: 1, value: "12", label: "12" },
    { id: 2, value: "14", label: "14" },
    { id: 3, value: "16", label: "16" },
    { id: 4, value: "18", label: "18" },
    { id: 5, value: "20", label: "20" },
    { id: 6, value: "22", label: "22" },
    { id: 7, value: "24", label: "24" },
    { id: 8, value: "26", label: "26" },
    { id: 8, value: "28", label: "28" },
    { id: 9, value: "30", label: "30" },
  ],
  fontUnitOptions: [
    { id: 2, value: "px", label: "px" },
    { id: 3, value: "rem", label: "rem" },
    { id: 4, value: "em", label: "em" },
    { id: 5, value: "%", label: "%" },
  ],
};
