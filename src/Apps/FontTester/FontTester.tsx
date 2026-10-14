import React, {
  useEffect,
  useReducer,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import SelectField from "../../DATA ENTRY/Select/SelectField";
import type { option } from "../../DATA ENTRY/Select/SelectField";
import { Title } from "../../DATA ENTRY/Title/Title";
import { InputRange } from "../../DATA ENTRY/Inputs/InputRange/InputRange";
import { initState, reducer } from "./customReducer";

export type FontTesterProps = {
  value?: string;
  label?: string;
  options: option[] | undefined;
  children?: ReactNode;
  newFont?: string;
  textSize: option[] | undefined;
  fontUnitOptions: option[] | undefined;
};

export function FontTester(props: FontTesterProps) {
  const {
    label,
    value,
    options,
    children,
    newFont,
    textSize,
    fontUnitOptions,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [selected, setSelected] = useState<"title" | "content" | null>(null);

  console.log(inputRef, typeof inputRef);

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (!newFont) return;

    if (selected === "title") {
      dispatch({
        type: "CHANGE_TITLE_FONT",
        payload: newFont,
      });
    }

    if (selected === "content") {
      dispatch({
        type: "CHANGE_CONTENT_FONT",
        payload: newFont,
      });
    }
  }, [newFont]);

  function handleChangeFont(event: React.ChangeEvent<HTMLSelectElement>) {
    const font = event.target.value;

    if (selected === "title") {
      dispatch({
        type: "CHANGE_TITLE_FONT",
        payload: font,
      });
    }

    if (selected === "content") {
      dispatch({
        type: "CHANGE_CONTENT_FONT",
        payload: font,
      });
    }
  }

  function handleChangeSizeOFText(event: React.ChangeEvent<HTMLSelectElement>) {
    const size = event.target.value;

    if (selected === "title") {
      dispatch({
        type: "CHANGE_TITLE_SIZE",
        payload: size,
      });
    }

    if (selected === "content") {
      dispatch({
        type: "CHANGE_CONTENT_SIZE",
        payload: size,
      });
    }
  }
  function handleChangeUnitOFText(event: React.ChangeEvent<HTMLSelectElement>) {
    const unit = event.target.value;

    if (selected === "title") {
      dispatch({
        type: "CHANGE_TITLE_UNITS",
        payload: unit,
      });
    }

    if (selected === "content") {
      dispatch({
        type: "CHANGE_CONTENT_UNITS",
        payload: unit,
      });
    }
  }

  function handleChangeRange(event: React.ChangeEvent<HTMLInputElement>) {
    const lineHeight = Number(event.target.value);
    if (selected === "title") {
      dispatch({ type: "CHANGE_TITLE_LINE_HEIGHT", payload: lineHeight });
    } else if (selected === "content") {
      dispatch({ type: "CHANGE_CONTENT_LINE_HEIGHT", payload: lineHeight });
    }
  }

  function handleWeightChange(event: ChangeEvent<HTMLInputElement>) {
    const fontWeight = Number(event.target.value);
    if (selected === "title") {
      dispatch({ type: "CHANGE_TITLE_FONT_WEIGHT", payload: fontWeight });
    } else if (selected === "content") {
      dispatch({ type: "CHANGE_CONTENT_FONT_WEIGHT", payload: fontWeight });
    }
  }

  function handleChangeContent(event: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch({
      type: "CHANGE_CONTENT",
      payload: event.target.value,
    });
  }

  function handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_TITLE",
      payload: event.target.value,
    });
  }

  function handleFocusTitle() {
    setSelected("title");
  }
  function handleFocusContent() {
    setSelected("content");
  }

  const selectedFont =
    selected === "title"
      ? state.titleFont
      : selected === "content"
        ? state.contentFont
        : "";

  const selectedFontSize =
    selected === "title"
      ? state.titleSize
      : selected === "content"
        ? state.contentSize
        : "";

  const selectedFontUnit =
    selected === "title"
      ? state.titleUnits
      : selected === "content"
        ? state.contentUnits
        : "";

  const lineHeight =
    selected === "title" ? state.titleLineHeight : state.contentLineHeight;

  const fontWeight =
    selected === "title" ? state.titleFontWeight : state.contentFontWeight;

  return (
    <div className="grid grid-cols-12 w-full gap-4">
      <div className="settings col-span-3 shadow-lg h-screen rounded-2xl border border-gray-100 px-5 py-10">
        <div className="gap-y-2 flex flex-col my-2 md:text-sm lg:text-md text-lg">
          <SelectField
            value={selectedFont}
            disable={selected === null}
            description="select one of the box and then you can test the fonts"
            options={options}
            label={label}
            onChange={handleChangeFont}
          />

          <SelectField
            value={selectedFontSize}
            disable={selected === null}
            description="You can change here the size of your text"
            options={textSize}
            label="Size of Text"
            onChange={handleChangeSizeOFText}
          />
          <SelectField
            value={selectedFontUnit}
            disable={selected === null}
            description="Choose a unit for the font size, such as px, rem, or em."
            options={fontUnitOptions}
            label="Text units"
            onChange={handleChangeUnitOFText}
          />

          {children}
        </div>
        <div className="flex flex-col gap-y-2">
          <InputRange
            label="Line Height:"
            value={lineHeight}
            labelDescription="Adjust the vertical spacing between lines of text."
            min={1}
            max={3}
            step={0.1}
            onchange={handleChangeRange}
            disabled={selected === null}
          />
        </div>
        <div className="flex flex-col gap-y-2 my-3 ">
          <InputRange
            label="Font Weight:"
            value={fontWeight}
            labelDescription="Adjust how thin or bold the text appears."
            min={100}
            max={900}
            step={100}
            onchange={handleWeightChange}
            disabled={selected === null}
          />
        </div>
        <div>
          <h2>Icons</h2>
        </div>
      </div>

      <div className="editor col-span-9 h-screen rounded-2xl border border-gray-100 shadow-lg px-5 py-10">
        <Title
          className={
            selected === "title"
              ? "border border-gray-200"
              : "border border-transparent"
          }
          style={{
            fontFamily: state.titleFont || options?.[0]?.value,
            fontSize: state.titleSize + state.titleUnits,
            lineHeight: state.titleLineHeight,
            fontWeight: state.titleFontWeight,
          }}
          inputRef={inputRef}
          value={state.titleVale}
          onchange={handleChangeTitle}
          onFocus={handleFocusTitle}
        />
        <textarea
          value={state.value}
          onChange={handleChangeContent}
          onFocus={handleFocusContent}
          style={{
            fontFamily: state.contentFont || options?.[0]?.value,
            fontSize: state.contentSize + state.contentUnits,
            lineHeight: state.contentLineHeight,
            fontWeight: state.contentFontWeight,
          }}
          className={`w-full h-64 outline-none resize-none p-2 rounded ${
            selected === "content"
              ? "border border-gray-200"
              : "border border-transparent"
          }`}
        />
      </div>
    </div>
  );
}
