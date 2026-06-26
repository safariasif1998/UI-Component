export type CheckCheckProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function CheckCheck(props: CheckCheckProps) {
  const { className, width, height } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-check-check-icon lucide-check-check ${className}`}
    >
      <path d="M18 6 7 17l-5-5" />
      <path d="m22 10-7.5 7.5L13 16" />
    </svg>
  );
}
