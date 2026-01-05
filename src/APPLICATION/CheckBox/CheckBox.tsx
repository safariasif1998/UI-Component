import { CheckBoxIcon } from "../../icons/CheckBoxIcon";

export type CheckBoxProps = {
  id: number;
  label: string;
  value: boolean;
  handleCheck: () => void;
  checkBoxStateValue: boolean;
};

function CheckBox(props: CheckBoxProps) {
  const { id, label, handleCheck, checkBoxStateValue } = props;
  return (
    <div className={`flex`}>
      <label
        className={`flex px-2 py-2 items-center cursor-pointer relative`}
        htmlFor={String(id)}
      >
        <input
          onChange={handleCheck}
          type="checkbox"
          checked={checkBoxStateValue}
          className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300"
          id={String(id)}
        />
        <div className="absolute bg-blue-400 rounded  text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <CheckBoxIcon className="h-4 w-4  overflow-hidden border-none  " />
        </div>
      </label>
      <label
        className=" w-56 px-2 py-2 select-none hover:cursor-pointer rounded"
        htmlFor={String(id)}
      >
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
