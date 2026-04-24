import { useState } from "react";
import { MoonStar } from "../../icons/MoonStar";
import { Light } from "../../icons/Light";
import { CheckboxSwitcher } from "../../APPLICATION/CheckBoxes/CheckboxSwitcher/CheckboxSwitcher";
import Editor from "@monaco-editor/react";
import type { OnChange } from "@monaco-editor/react";
import { Globe } from "../../icons/Globe";
import { DoubleChevronUp } from "../../icons/DoubleChevronUp";

export type EmailTemplateGeneratorProps = {
  value: string;
  onUpdate?: (value: string) => void;
};

export function EmailTemplateGenerator(props: EmailTemplateGeneratorProps) {
  const { value, onUpdate } = props;
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

  const handleChange: OnChange = (value) => {
    if (value !== undefined) {
      onUpdate?.(value ?? "");
    }
  };

  const previewHtml = value;

  return (
    <div className="m-0 p-0 w-full h-screen flex flex-col">
      <nav className="flex justify-between items-center border border-gray-200 shadow-lg rounded-b-none rounded-t py-8 w-full px-10">
        <div className="left-section flex  gap-x-5 items-center">
          <button
            onClick={handleTab}
            data-tab="preView"
            className={`border-b-4 select-none  py-2 px-1 cursor-pointer duration-200 transition-all ${activeTab === "preView" ? " border-green-600 font-bold transition-all duration-200" : "border-transparent"}`}
          >
            Preview
          </button>
          <button
            onClick={handleTab}
            data-tab="content"
            className={`border-b-4 select-none py-2 px-1 cursor-pointer  duration-200 transition-all ${activeTab === "content" ? " border-green-600 font-bold" : "border-transparent"}`}
          >
            Content
          </button>
          <div className="flex justify-center items-center gap-x-1">
            <button className="opacity-30" disabled={true}>
              Languages
            </button>
            <Globe className="w-4 h-4 text-gray-500 mt-0.5" />
          </div>
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
      <main className="flex-1 w-full h-full">
        {activeTab === "content" ? (
          <div className="w-full h-full relative border-none">
            <div className="w-full h-full rounded-t-none rounded-b overflow-hidden bg-white">
              <Editor
                height="100%"
                defaultLanguage="html"
                theme="vs"
                value={value}
                onChange={handleChange}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily: "JetBrains Mono, monospace",
                  lineHeight: 22,
                  wordWrap: "on",
                  padding: { top: 16, bottom: 16 },
                  smoothScrolling: true,
                  automaticLayout: true,
                  formatOnPaste: true,
                  formatOnType: true,
                  quickSuggestions: true,
                  suggestOnTriggerCharacters: true,
                  readOnly: false,
                  autoClosingBrackets: "always",
                  autoClosingQuotes: "always",
                  tabSize: 4,
                  cursorSmoothCaretAnimation: "on",
                  renderLineHighlight: "all",
                  roundedSelection: false,
                  scrollbar: {
                    verticalScrollbarSize: 8,
                    horizontalScrollbarSize: 8,
                  },
                }}
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-full overflow-auto">
            {value && <iframe className="w-full h-full" srcDoc={previewHtml} />}
          </div>
        )}
      </main>
    </div>
  );
}
