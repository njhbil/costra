type GreetingDashboardProps = {
  username: string;
  showWelcome?: boolean;
};

export const GreetingDashboard = ({
  username,
  showWelcome = false,
}: GreetingDashboardProps) => {
  return (
    <>
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">Dashboard</span>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search product or invoice..."
              className="input input-bordered input-sm w-44 rounded-lg"
            />
            <button className="btn btn-ghost btn-circle btn-sm">🔔</button>
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm">
              {username}
            </div>
          </div>
        </div>
      </div>

      {showWelcome ? (
        <div className="px-8 pt-5 pb-3">
          <div className="mb-4 bg-linear-to-r from-slate-900 to-slate-700 rounded-2xl px-6 py-5 text-white shadow-sm">
            <h1 className="text-2xl font-bold">Good evening, {username}</h1>
            <p className="text-slate-200 text-sm mt-1">
              Monitor product availability and transaction performance from one
              control panel.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};
