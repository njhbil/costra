function Transaction() {
  return (
    <section className="space-y-5">
      <header className="bg-white rounded-xl border border-slate-200 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Management / Transaction
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
          Sales Transaction Center
        </h2>
        <p className="text-sm text-slate-600 mt-1.5">
          Track transaction volume, payment performance, and sales movement with
          a structured record view.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <article className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Total Sales
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">$24,500</h3>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Total Purchases
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">$11,300</h3>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Net Result
          </p>
          <h3 className="text-2xl font-bold mt-2 text-emerald-600">$13,200</h3>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Transactions
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">128</h3>
        </article>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
        <h3 className="text-base font-semibold text-slate-900">
          New Transaction Entry
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <label className="form-control w-full">
            <span className="label-text font-medium mb-2">Product Name</span>
            <input
              className="input input-bordered"
              placeholder="Product name"
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-medium mb-2">Type</span>
            <select className="select select-bordered">
              <option>SALE</option>
              <option>PURCHASE</option>
            </select>
          </label>

          <label className="form-control w-full">
            <span className="label-text font-medium mb-2">Payment Method</span>
            <select className="select select-bordered">
              <option>CASH</option>
              <option>TRANSFER</option>
              <option>QRIS</option>
            </select>
          </label>

          <label className="form-control w-full">
            <span className="label-text font-medium mb-2">Quantity</span>
            <input className="input input-bordered" placeholder="1" />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-medium mb-2">Unit Price</span>
            <input className="input input-bordered" placeholder="0" />
          </label>

          <label className="form-control w-full">
            <span className="label-text font-medium mb-2">Total</span>
            <input
              className="input input-bordered"
              placeholder="Auto by your logic"
            />
          </label>
        </div>

        <button className="btn btn-primary btn-sm">Save Transaction</button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-900">
            Transaction List
          </h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              className="input input-bordered input-sm w-full sm:w-64"
              placeholder="Search invoice or customer"
            />
            <select className="select select-bordered select-sm w-full sm:w-44">
              <option>All Types</option>
              <option>SALE</option>
              <option>PURCHASE</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Invoice
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Date
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Product
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Type
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Qty
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Total
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Payment
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-5 py-3 font-medium text-slate-900">
                  INV-2026-0001
                </td>
                <td className="px-5 py-3 text-slate-700">2026-03-20</td>
                <td className="px-5 py-3 text-slate-700">Notebook A5</td>
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                    SALE
                  </span>
                </td>
                <td className="px-5 py-3 text-slate-700">4</td>
                <td className="px-5 py-3 font-semibold text-slate-900">
                  IDR 62,400
                </td>
                <td className="px-5 py-3 text-slate-700">QRIS</td>
                <td className="px-5 py-3">
                  <button className="btn btn-ghost btn-xs">Detail</button>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-slate-900">
                  INV-2026-0002
                </td>
                <td className="px-5 py-3 text-slate-700">2026-03-21</td>
                <td className="px-5 py-3 text-slate-700">Gel Pen</td>
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                    PURCHASE
                  </span>
                </td>
                <td className="px-5 py-3 text-slate-700">20</td>
                <td className="px-5 py-3 font-semibold text-slate-900">
                  IDR 80,000
                </td>
                <td className="px-5 py-3 text-slate-700">Transfer</td>
                <td className="px-5 py-3">
                  <button className="btn btn-ghost btn-xs">Detail</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Transaction;
