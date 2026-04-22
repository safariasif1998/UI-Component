export type MoonStarProps = {
  className?: string;
  width?: string;
  height?: string;
};

export function MoonStar(props: MoonStarProps) {
  const {
    className = "lucide lucide-moon-star-icon lucide-moon-star",
    width = "24",
    height = "24",
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 5h4" />
      <path d="M20 3v4" />
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </svg>
  );
}
