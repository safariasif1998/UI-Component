import {
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type SelectHTMLAttributes,
} from "react";

export type SelectFieldProps = {};

function SelectField(props: SelectFieldProps) {
  const {} = props;
  const [carName, setCarName] = useState("");
  function handleName(e: ChangeEvent<HTMLSelectElement>) {
    setCarName(e.target.value);
  }
  return (
    <div className="w-4/12 mx-auto text-center">
      <select
        onChange={handleName}
        name="Cars"
        id=""
        className="border-b px-2 py-1.5 outline-none hover:cursor-pointer hover:border-b-blue-400 hover:bg-gray-200 hover:rounded "
      >
        <option value="BMW">BMW</option>
        <option value="Volow">Volow</option>
        <option value="Mercedes-Benz">Mercedes-Benz</option>
      </select>
      {carName.length > 0 && (
        <p className="my-2 font-semibold">
          You have selected <span className="text-blue-700">{carName}</span>
        </p>
      )}
    </div>
  );
}

export default SelectField;
