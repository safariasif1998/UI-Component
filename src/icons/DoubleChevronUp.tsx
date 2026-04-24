
export type DoubleChevronUpProps = {
  className?: string;
  width?: string;
  height?: string;
};

export function DoubleChevronUp(props: DoubleChevronUpProps) {
  const { className, width, height } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
    >
      <path d="m17 11-5-5-5 5" />
      <path d="m17 18-5-5-5 5" />
    </svg>
  );
}
