export type ButtonProps = {
  label: string;
  handleClick: () => void;
};

export function Button(props: ButtonProps) {
  const { label, handleClick } = props;

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-blue-500 px-4 hover:bg-blue-600 transition-all text-white cursor-pointer py-3 rounded-xl"
      >
        {label}
      </button>
    </>
  );
}
