export type CirclePlusProps = {
  className?: string;
};

export function CirclePlus(props: CirclePlusProps) {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className + "text-white fill-blue-500"}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}
