import { useState } from "react";
import { MoonStar } from "../../icons/MoonStar";
import { Light } from "../../icons/Light";
import { CheckboxSwitcher } from "../../APPLICATION/CheckBoxes/CheckboxSwitcher/CheckboxSwitcher";
export type EmailTemplateGeneratorProps = {
  value?: string;
};

export function EmailTemplateGenerator(props: EmailTemplateGeneratorProps) {
  const { value } = props;
  const [activeTab, setActiveTab] = useState<"content" | "preView">("preView");
  const [activeMood, setActiveMood] = useState<"dark" | "light">("light");

  // It's derived state from activeMood. isDarkMood might be true or false.
  const isDarkMode = activeMood === "dark";

  const handleTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tab = e.currentTarget.dataset.tab as "preView" | "content";
    setActiveTab(tab);
  };

  const handleMood = (checked: boolean) => {
    setActiveMood(checked ? "dark" : "light");
  };

  return (
    <div className="m-0 p-0">
      <nav className="flex justify-between items-center border border-gray-200 shadow-2xl rounded py-8 w-full px-10">
        <div className="left-section flex  gap-x-5 items-center">
          <button
            onClick={handleTab}
            data-tab="content"
            className={`border-b-4 select-none py-2 px-1 cursor-pointer  duration-200 transition-all ${activeTab === "content" ? " border-green-600 font-bold" : "border-transparent"}`}
          >
            Content
          </button>
          <button
            onClick={handleTab}
            data-tab="preView"
            className={`border-b-4 select-none  py-2 px-1 cursor-pointer duration-200 transition-all ${activeTab === "preView" ? " border-green-600 font-bold transition-all duration-200" : "border-transparent"}`}
          >
            Preview
          </button>
          <button className="opacity-30" disabled={true}>
            Language
          </button>
        </div>
        <div className="right-section flex items-center gap-x-2">
          <CheckboxSwitcher
            checked={isDarkMode}
            onChange={(checked) => {
              handleMood(checked);
            }}
            onIcon={<MoonStar className="w-6 h-6" />}
            offIcon={<Light className="w-6 6 fill-white text-white" />}
          />
        </div>
      </nav>
    </div>
  );
}
