export type LabelProps = {
  label?: string;
  required?: boolean;
  className?: string;
};

export function Label(props: LabelProps) {
  const { label = "Label of Input", required, className } = props;

  return (
    <div
      className={`flex gap-x-1 text-sm font-medium text-gray-700 ${className}`}
    >
      <label htmlFor="Email">{label}</label>
      {required && (
        <abbr title="Email is Required" className={``}>
          *
        </abbr>
      )}
    </div>
  );
}
