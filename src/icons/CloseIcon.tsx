export type CloseIconProps = {
  handleClose: () => void;
};

export function CloseIcon(props: CloseIconProps) {
  const { handleClose } = props;

  return (
    <button onClick={handleClose}>
      <svg
        data-testid="dialogCloseIcon"
        fill="currentColor"
        className="my-auto text-gray-600 pl-1 cursor-pointer hover:text-blue-500"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  );
}
