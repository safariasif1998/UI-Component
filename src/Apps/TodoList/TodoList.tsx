import { BasicInput } from "../../DATA ENTRY/Inputs/BasicInput/BasicInput";
import { Label } from "../../DATA ENTRY/Label/Label";
import SelectField from "../../DATA ENTRY/Select/SelectField";

export type task = {
  id: number;
  title: string;
  color: string;
};

export type color = {
  id: number;
  label: string;
  value: string;
};
export type TodoListProps = {
  tasks: task[];
  colors: color[];
};

export function TodoList(props: TodoListProps) {
  const { tasks, colors } = props;

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 font-sans text-slate-800 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-rose-500 sm:text-6xl">
            Todos<span className="text-slate-800">.</span>
          </h1>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Organize your day, one task at a time.
          </p>
        </header>

        {/* Main Card */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          {/* Task Input */}
          <div className="border-b border-slate-100 p-6 sm:p-8">
            <Label label="What needs to be done?" className="mb-1" />

            <div className="grid md:grid-cols-12 gap-2">
              <div className="col-span-8">
                <BasicInput type="text" placeholder="Add a new task..." />
              </div>
              {/* <input
                id="todo"
                type="text"
                placeholder="Add a new task..."
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
              /> */}

              <div className="col-span-2">
                <SelectField options={colors} />
              </div>
              {/* <select
                aria-label="Task color"
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-rose-400"
              >
                {colors.map((color) => (
                  <option key={color.id} value={color.name}>
                    {color.name}
                  </option>
                ))}
              </select> */}

              <div className="col-span-2">
                <button
                  type="button"
                  className="rounded-xl bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-100 transition hover:bg-rose-600"
                >
                  + Add Task
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px]">
            {/* Task List */}
            <section className="border-b border-slate-100 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <div>
                  <h2 className="font-bold text-slate-800">My Tasks</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Your daily checklist
                  </p>
                </div>

                <span className="rounded-full bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600">
                  {tasks.length} tasks
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="group flex items-center gap-3 px-4 py-5 transition hover:bg-slate-50 sm:gap-4 sm:px-6"
                  >
                    <input
                      type="checkbox"
                      aria-label={`Complete ${task.title}`}
                      className="h-5 w-5 shrink-0 cursor-pointer rounded-full accent-emerald-500"
                    />

                    <span className="min-w-0 flex-1 break-words text-sm font-medium text-slate-700 sm:text-base">
                      {task.title}
                    </span>

                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${task.color}`}
                    />

                    <select
                      aria-label={`Change color for ${task.title}`}
                      defaultValue={task.color}
                      className="hidden max-w-28 rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs text-slate-600 outline-none focus:border-rose-400 sm:block"
                    >
                      {colors.map((color) => (
                        <option key={color.label} value={color.value}>
                          {color.label}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      aria-label={`Delete ${task.title}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-2xl leading-none text-slate-300 transition hover:bg-rose-50 hover:text-rose-500"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-5">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Daily progress</span>
                  <span>0%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-0 rounded-full bg-emerald-500" />
                </div>
              </div>
            </section>

            {/* Sidebar */}
            <aside className="space-y-7 p-6">
              {/* Overview */}
              <section>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Overview
                </h3>

                <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 p-5 text-white shadow-lg shadow-rose-100">
                  <p className="text-sm text-white/80">Tasks remaining</p>
                  <p className="mt-2 text-4xl font-extrabold">{tasks.length}</p>
                  <p className="mt-2 text-xs text-white/80">
                    Keep up the great work!
                  </p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Total</p>
                    <p className="mt-1 text-2xl font-bold">{tasks.length}</p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Completed</p>
                    <p className="mt-1 text-2xl font-bold text-emerald-500">
                      0
                    </p>
                  </div>
                </div>
              </section>

              {/* Status Filters */}
              <section>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Filter by status
                </h3>

                <div className="flex flex-wrap gap-2">
                  <button className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600 ring-1 ring-rose-200">
                    All
                  </button>
                  <button className="rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-100">
                    Active
                  </button>
                  <button className="rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-100">
                    Completed
                  </button>
                </div>
              </section>

              {/* Color Filters */}
              <section>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Filter by color
                </h3>

                <div className="space-y-3">
                  {colors.map((color) => (
                    <label
                      key={color.id}
                      className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-rose-500"
                      />
                      <span className={`h-3 w-3 rounded-full ${color.value}`} />
                      {color.label}
                    </label>
                  ))}
                </div>
              </section>

              {/* Actions */}
              <section className="border-t border-slate-100 pt-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Actions
                </h3>

                <div className="space-y-2">
                  <button className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Mark All Completed
                  </button>

                  <button className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600">
                    Clear Completed
                  </button>
                </div>
              </section>
            </aside>
          </div>
        </section>

        <footer className="mt-6 text-center text-xs text-slate-400">
          Stay organized. Stay productive.
        </footer>
      </div>
    </main>
  );
}
