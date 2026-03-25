function Company() {
  return (
    <section className="space-y-5">
      <header className="bg-white rounded-xl border border-slate-200 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Management / Company
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
          Company Profile Management
        </h2>
        <p className="text-sm text-slate-600 mt-1.5">
          Maintain legal identity, contact records, and operational profile for
          your business account.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <h3 className="text-base font-semibold text-slate-900">
            Registered Company Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="form-control w-full md:col-span-2">
              <span className="label-text font-medium mb-2">Company Name</span>
              <input
                className="input input-bordered w-full"
                placeholder="Costra Retail Indonesia"
              />
            </label>

            <label className="form-control w-full md:col-span-2">
              <span className="label-text font-medium mb-2">Address</span>
              <textarea
                className="textarea textarea-bordered w-full min-h-28"
                rows={4}
                placeholder="Street address, district, city, province, and postal code"
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Phone</span>
              <input
                className="input input-bordered w-full"
                placeholder="08xxxxxxxxxx"
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Company Email</span>
              <input
                className="input input-bordered w-full"
                placeholder="hello@company.com"
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="btn btn-primary btn-sm">Save Changes</button>
            <button className="btn btn-ghost btn-sm">Reset Form</button>
          </div>
        </div>

        <aside className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <h3 className="text-base font-semibold text-slate-900">
            Account Snapshot
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Company Status</span>
              <span className="font-semibold text-emerald-700">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Team Members</span>
              <span className="font-semibold text-slate-900">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Main Branch</span>
              <span className="font-semibold text-slate-900">Surabaya HQ</span>
            </div>
          </div>
        </aside>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50">
          <h3 className="text-base font-semibold text-slate-900">
            Company Member Directory
          </h3>
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
                  Status
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
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                    Active
                  </span>
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
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                    Active
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-slate-900">
                  Warehouse Staff
                </td>
                <td className="px-5 py-3 text-slate-700">
                  warehouse@costra.app
                </td>
                <td className="px-5 py-3 uppercase text-xs text-slate-700">
                  staff
                </td>
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                    Invited
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Company;
