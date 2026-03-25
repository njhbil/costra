function User() {
  return (
    <section className="space-y-5">
      <header className="bg-white rounded-xl border border-slate-200 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Management / User
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
          Team and Access Management
        </h2>
        <p className="text-sm text-slate-600 mt-1.5">
          Manage user invitations, role assignments, and team access status for
          secure operations.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <h3 className="text-base font-semibold text-slate-900">
            Invite Team Member
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Full Name</span>
              <input
                className="input input-bordered"
                placeholder="Team member name"
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Email</span>
              <input
                className="input input-bordered"
                placeholder="member@email.com"
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Role</span>
              <select className="select select-bordered">
                <option>owner</option>
                <option>admin</option>
                <option>cashier</option>
                <option>staff</option>
              </select>
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Company ID</span>
              <input className="input input-bordered" placeholder="cmp_001" />
            </label>
          </div>

          <button className="btn btn-primary btn-sm">Send Invitation</button>
        </div>

        <aside className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <h3 className="text-base font-semibold text-slate-900">
            Team Snapshot
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Total Users</span>
              <span className="font-semibold text-slate-900">42</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Active</span>
              <span className="font-semibold text-slate-900">36</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Invited</span>
              <span className="font-semibold text-slate-900">6</span>
            </div>
          </div>
        </aside>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <h3 className="text-base font-semibold text-slate-900">
            User Directory
          </h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              className="input input-bordered input-sm w-full sm:w-64"
              placeholder="Search name or email"
            />
            <select className="select select-bordered select-sm w-full sm:w-40">
              <option>All Roles</option>
              <option>owner</option>
              <option>admin</option>
              <option>cashier</option>
              <option>staff</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Name
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Email
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Role
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Company
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Status
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-5 py-3 font-medium text-slate-900">
                  Nabil Akbar
                </td>
                <td className="px-5 py-3 text-slate-700">nabil@costra.app</td>
                <td className="px-5 py-3 uppercase text-xs text-slate-700">
                  owner
                </td>
                <td className="px-5 py-3 text-slate-700">cmp_001</td>
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="btn btn-ghost btn-xs">Manage</button>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-slate-900">
                  Finance Admin
                </td>
                <td className="px-5 py-3 text-slate-700">finance@costra.app</td>
                <td className="px-5 py-3 uppercase text-xs text-slate-700">
                  admin
                </td>
                <td className="px-5 py-3 text-slate-700">cmp_001</td>
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="btn btn-ghost btn-xs">Manage</button>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-slate-900">
                  Main Cashier
                </td>
                <td className="px-5 py-3 text-slate-700">cashier@costra.app</td>
                <td className="px-5 py-3 uppercase text-xs text-slate-700">
                  cashier
                </td>
                <td className="px-5 py-3 text-slate-700">cmp_001</td>
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                    Invited
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="btn btn-ghost btn-xs">Manage</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default User;
