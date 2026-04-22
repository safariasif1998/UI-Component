export type SliderProps = {};

export function Slider(props: SliderProps) {
  const {} = props;

  const parent = () => {
    alert("you clicked in parent");
  };
  const play = (e: any) => {
    e.stopPropagation();
    alert("playing");
  };
  const upload = () => {
    alert("upload");
  };
  return (
      <div className="Toolbar" onClick={parent}>
        <button onClick={play} className="bg-red-600 text-white p-3 rounded ">
          Play Movie
        </button>
        <button onClick={upload} className="bg-black text-white p-3 rounded ">
          Upload Image
        </button>
      </div>
  );
}
