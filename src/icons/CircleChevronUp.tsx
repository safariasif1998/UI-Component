export type CircleChevronUpProps = {
  className?: string;
};

export function CircleChevronUp(props: CircleChevronUpProps) {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`lucide lucide-circle-chevron-down-icon lucide-circle-chevron-down ${className}`}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m16 10-4 4-4-4" />
    </svg>
  );
}
