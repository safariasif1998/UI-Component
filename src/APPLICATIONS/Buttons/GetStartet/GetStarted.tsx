import { MoveRight } from "../../../icons/MoveRight";

export type GetStartedProps = {
  children?: React.ReactNode;
  title?: string;
};

export function GetStarted(props: GetStartedProps) {
  const { children, title } = props;

  return (
    <>
      {children ? (
        children
      ) : (
        <div className="flex items-center border-2 border-blue-500 rounded-2xl bg-blue-600 text-white hover:bg-blue-500/95 gap-x-2 shadow-md px-5 py-3 cursor-pointer transition-colors duration-200">
          <button>{title}</button>
          <MoveRight />
        </div>
      )}
    </>
  );
}
