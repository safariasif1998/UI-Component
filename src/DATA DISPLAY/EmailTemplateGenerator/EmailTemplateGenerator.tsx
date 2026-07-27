import { useState, useRef } from "react";
import { MoonStar } from "../../icons/MoonStar";
import { Light } from "../../icons/Light";
import { CheckboxSwitcher } from "../../APPLICATION/CheckBoxes/CheckboxSwitcher/CheckboxSwitcher";
import Editor from "@monaco-editor/react";
import type { OnChange } from "@monaco-editor/react";
import { Globe } from "../../icons/Globe";
import * as monaco from "monaco-editor";
import { DoubleChevronUp } from "../../icons/DoubleChevronUp";

export type Tab = {
  id: number;
  label: string;
  dataTab: string;
  disable: boolean;
};

export type EmailTemplateGeneratorProps = {
  tabs: Tab[];
  value: string;
  onUpdate?: (value: string) => void;
};

export function EmailTemplateGenerator(props: EmailTemplateGeneratorProps) {
  const { tabs, value, onUpdate } = props;
  const [activeTab, setActiveTab] = useState<"content" | "preView">("preView");
  const [activeMood, setActiveMood] = useState<"dark" | "light">("light");
  const [scrollTop, setScrollTop] = useState(false);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

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
  const handleMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();

    editor.onDidScrollChange((e) => {
      handleScroll(e);
    });
  };
  const handleScrollToTop = () => {
    const editor = editorRef.current;
    if (!editor) return;

    const current = editor.getScrollTop();
    const duration = 250;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const next = current * (1 - easeOut);

      editor.setScrollTop(next);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleScroll = (e: any) => {
    setScrollTop(e.scrollTop > 200);
  };

  const previewHtml = value;

  return (
    <div className="m-0 p-0  w-full h-full flex flex-col">
      <nav className="flex justify-between items-center border border-gray-200 shadow-lg rounded-b-none rounded-t py-6 w-full px-10">
        <div className="left-section flex  gap-x-5 items-center">
          {tabs.map((tab) => (
            <button
              onClick={handleTab}
              disabled={tab.disable}
              data-tab={tab.dataTab}
              className={`border-b-4 select-none py-2 px-1 cursor-pointer duration-200 transition-all ${activeTab === tab.dataTab  ? " border-green-600 font-bold transition-all duration-200" : "border-transparent"} ${tab.disable && "opacity-30"}`}
            >
              {tab.label}
            </button>
          ))}
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
      <main className="flex-1 w-full h-screen">
        {activeTab === "content" ? (
          <div className="w-full h-full relative border-none">
            <div className="w-full h-full rounded-t-none rounded-b overflow-hidden bg-white">
              <Editor
                height="100%"
                defaultLanguage="html"
                theme="vs"
                value={value}
                onChange={handleChange}
                onMount={handleMount}
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
            {scrollTop && (
              <button
                title="click here to jump up"
                role="button"
                tabIndex={0}
                aria-label="Jump to top"
                onClick={handleScrollToTop}
                className="absolute right-10 bottom-10  flex items-center justify-center w-10 h-10 rounded-full text-center content-center animate-bounce cursor-pointer bg-green-500 hover:bg-green-700 transition-all duration-200"
              >
                <DoubleChevronUp
                  width="24"
                  height="24"
                  className="text-white"
                />
              </button>
            )}
          </div>
        ) : (
          <div className="w-full h-full">
            {value && <iframe className="w-full h-full" srcDoc={previewHtml} />}
          </div>
        )}
      </main>
    </div>
  );
}
