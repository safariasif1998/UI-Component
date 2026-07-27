import { CirclePlus } from "../../../icons/CirclePlus";

export type CreateButtonProps = {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export function CreateButton(props: CreateButtonProps) {
  const { onClick, title, children } = props;

  return (
    <div>
      {children ? (
        children
      ) : (
        <div
          onClick={onClick}
          className="flex items-center gap-x-2 border-2 shadow-md border-gray-200 px-5 py-2.5 rounded cursor-pointer hover:bg-gray-100 transition-colors duration-200"
        >
          <CirclePlus />
          <button className="font-medium text-[20px] text-gray-700">
            {title}
          </button>
        </div>
      )}
    </div>
  );
}
