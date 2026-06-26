export type CircleCheckIconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export function CircleCheckIcon(props: CircleCheckIconProps) {
  const { className, height, width } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-circle-check-icon lucide-circle-check ${className}`}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
