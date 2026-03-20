import welcomeImage from "../../../public/welcome.svg";

export type WelcomeProps = {
  name?: string;
  lastName?: string;
  position?: string;
  startDate?: string;
};

export function Welcome(props: WelcomeProps) {
  const { name ="Asif", lastName ="Safari", position ="", startDate ="02 Feb 2026" } = props;
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col space-y-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              Build Faster with{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                My Storybook
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              A powerful interactive component library where you can explore UI
              elements, test variations, and understand behavior across every
              state.
            </p>

            <p className="mt-3 text-slate-500 max-w-lg">
              Your single source of truth for building consistent, scalable
              front-end systems.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all duration-200">
                Explore Components
              </button>

              <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition">
                Documentation
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md border border-slate-200 rounded-xl px-5 py-3 shadow-sm w-fit">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
              {name?.charAt(0)}{lastName.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                {name} {lastName}
              </p>
              <p className="text-xs text-slate-500">{position}</p>
              <p className="text-xs text-slate-500">Started • {startDate}</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute w-[350px] h-[350px] bg-indigo-300 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute w-[250px] h-[250px] bg-purple-300 rounded-full blur-3xl opacity-20 translate-x-16 translate-y-10"></div>

          <div className="relative bg-white/60 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-xl p-6">
            <img
              src={welcomeImage}
              alt="Welcome illustration"
              className="w-full max-w-md drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
