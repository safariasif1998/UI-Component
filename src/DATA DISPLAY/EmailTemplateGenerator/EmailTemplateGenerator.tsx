import { useState } from "react";

export type EmailTemplateGeneratorProps = {
  value?: string;
};

export function EmailTemplateGenerator(props: EmailTemplateGeneratorProps) {
  const { value } = props;
  const [activeTab, setActiveTab] = useState<"content" | "preView">("preView");

  const handleChangeTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tab = e.currentTarget.dataset.tab as "preView" | "content";
    setActiveTab(tab);
  };

  return (
    <div className="m-0 p-0">
      <nav className="flex gap-x-5 border border-gray-200 shadow-2xl rounded p-8 w-full">
        <button
          onClick={handleChangeTab}
          data-tab="content"
          className={`border-b-4 py-2 px-1 cursor-pointer hover:bg-gray-50 duration-200 transition-all ${activeTab === "content" ? " border-green-600 font-bold" : "border-transparent"}`}
        >
          Content
        </button>
        <button
          onClick={handleChangeTab}
          data-tab="preView"
          className={`border-b-4 py-2 px-1 cursor-pointer hover:bg-gray-50 duration-200 transition-all ${activeTab === "preView" ? " border-green-600 font-bold transition-all duration-200" : "border-transparent"}`}
        >
          Preview
        </button>
      </nav>
    </div>
  );
}
