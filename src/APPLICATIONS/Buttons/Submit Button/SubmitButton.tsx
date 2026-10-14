import TelegramIcon from "../../../icons/TelegramIcon";

export type SubmitButtonStory = {
  label: string;
};

function SubmitButton(props: SubmitButtonStory) {
  const { label } = props;
  return (
    <button className="font-semibold bg-blue-500 hover:bg-blue-600 text-white cursor-pointer px-5 py-2.5 flex justify-center items-center  border-0 rounded-2xl transition-all delay-75 shadow shadow-blue-500 hover:-translate-y-1 duration-1000">
      <div className="flex justify-center items-center">
        <div className="">
          <TelegramIcon />
        </div>
      </div>
      <span className="block ml-2">{label}</span>
    </button>
  );
}

export default SubmitButton;
