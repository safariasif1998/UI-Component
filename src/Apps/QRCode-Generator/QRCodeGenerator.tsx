import { useState } from "react";
import { TextArea } from "../../DATA ENTRY/TextArea/TextArea";
import { QRCodeIcon } from "../../icons/QRCodeIcon";
import { CheckCheck } from "../../icons/CheckCheck";
import { Copy } from "../../icons/Copy";
import { CloseIcon } from "../../icons/CloseIcon";
import { Download } from "../../icons/Download";
import QRCode from "react-qr-code";
import { Printer } from "../../icons/Printer";

export type QRCodeGeneratorProps = {};

export function QRCodeGenerator(props: QRCodeGeneratorProps) {
  const {} = props;
  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code.svg";
    link.click();
    URL.revokeObjectURL(url);
  };



  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputText);
      setCopied(true);
      console.log("the QR Code is copied");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleClear = () => {
    setInputText("");
  };

  return (
    <section className="w-full h-screen flex items-center">
      <div className="w-4/12  mx-auto border border-gray-100 rounded-2xl shadow-2xl p-4">
        <div className="flex flex-col items-center py-5">
          <QRCodeIcon className="" width={100} height={100} />
          <h2 className="my-3 font-semibold text-3xl">QR Code Generator</h2>
          <p className="text-sm text-gray-500">
            Enter a text or url to create QR Code
          </p>
        </div>
        <div className="w-full">
          <TextArea
            label="URL"
            type="url"
            placeholder="Enter URL or Text to generate QR Code"
            value={inputText}
            onchange={(e) => setInputText(e.target.value)}
            required={false}
          />
        </div>
        <div className="mt-6 mb-5 border bg-white  border-gray-200 rounded-2xl shadow-xl flex items-center justify-center p-4 min-h-[200px] w-full">
          {inputText.trim() ? (
            <QRCode
              id="qr-code"
              value={inputText}
              size={200}
              className="rounded"
            />
          ) : (
            <QRCodeIcon className="w-40 h-40 mb-2 text-gray-200" />
          )}
        </div>
        <div className="buttons flex sm:flex-row flex-col w-full gap-3">
          <button
            onClick={handleDownload}
            disabled={!inputText.trim()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-amber-400 text-black rounded-lg hover:bg-amber-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition cursor-pointer"
          >
            <Download />
            Download
          </button>
         
          <button
            disabled={!inputText.trim()}
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-400 text-black rounded-lg hover:bg-green-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition cursor-pointer"
          >
            {copied ? (
              <CheckCheck className="text-green-500 w-4 h-4" />
            ) : (
              <Copy className="text-gray-400 w-4 h-4" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={handleClear}
            disabled={!inputText.trim()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-black rounded-lg hover:bg-red-400 hover:text-white disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition cursor-pointer"
          >
            <CloseIcon className="hover:bg-none" />
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}
