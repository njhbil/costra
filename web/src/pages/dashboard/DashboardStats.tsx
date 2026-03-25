export const DashboardState = () => {
  const stockRows = [
    {
      name: "Arabica Coffee Beans 1kg",
      sku: "PRD-001",
      stock: 12,
      status: "Low",
      statusClass: "bg-amber-100 text-amber-700",
    },
    {
      name: "Paper Cup 16oz",
      sku: "PRD-002",
      stock: 230,
      status: "Healthy",
      statusClass: "bg-emerald-100 text-emerald-700",
    },
    {
      name: "Vanilla Syrup 750ml",
      sku: "PRD-003",
      stock: 4,
      status: "Critical",
      statusClass: "bg-rose-100 text-rose-700",
    },
    {
      name: "Chocolate Powder 500g",
      sku: "PRD-004",
      stock: 38,
      status: "Healthy",
      statusClass: "bg-emerald-100 text-emerald-700",
    },
  ];

  const transactionRows = [
    {
      invoice: "TRX-240301",
      customer: "Walk-in Customer",
      items: 3,
      total: "IDR 248,000",
      method: "Cash",
      status: "Paid",
      statusClass: "bg-emerald-100 text-emerald-700",
    },
    {
      invoice: "TRX-240302",
      customer: "Office Pantry A",
      items: 7,
      total: "IDR 1,120,000",
      method: "Transfer",
      status: "Paid",
      statusClass: "bg-emerald-100 text-emerald-700",
    },
    {
      invoice: "TRX-240303",
      customer: "Retail Partner B",
      items: 12,
      total: "IDR 2,860,000",
      method: "Credit",
      status: "Pending",
      statusClass: "bg-amber-100 text-amber-700",
    },
    {
      invoice: "TRX-240304",
      customer: "Walk-in Customer",
      items: 2,
      total: "IDR 98,000",
      method: "QRIS",
      status: "Paid",
      statusClass: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <>
      <section className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 mb-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Operations Dashboard
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
              Product and Transaction Performance
            </h2>
            <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
              Consolidated view of inventory health, daily sales throughput, and
              payment completion status.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="btn btn-primary btn-sm">+ New Product</button>
            <button className="btn btn-outline btn-sm">
              + New Transaction
            </button>
            <button className="btn btn-ghost btn-sm">Export Report</button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">
            Total Active Products
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">245</h3>
          <p className="mt-2 text-xs text-emerald-600 font-semibold">
            18 new SKUs this month
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Low Stock Items</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">9</h3>
          <p className="mt-2 text-xs text-amber-600 font-semibold">
            Reorder suggested within 48 hours
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">
            Transactions Today
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">128</h3>
          <p className="mt-2 text-xs text-emerald-600 font-semibold">
            15% above yesterday
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <p className="text-slate-600 text-sm font-medium">Revenue Today</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">IDR 12.4M</h3>
          <p className="mt-2 text-xs text-blue-600 font-semibold">
            Peak sales window 19:00-21:00
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-5 gap-4 mb-5">
        <section className="2xl:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-5 py-3 border-b border-slate-200 bg-slate-50">
            <h3 className="text-lg font-bold text-slate-900">
              Product Stock Monitor
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Products requiring restock attention by current stock threshold.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                    Product
                  </th>
                  <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                    SKU
                  </th>
                  <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                    Stock
                  </th>
                  <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {stockRows.map((row) => (
                  <tr
                    key={row.sku}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-5 py-3 font-semibold text-slate-900">
                      {row.name}
                    </td>
                    <td className="px-5 py-3 text-slate-600">{row.sku}</td>
                    <td className="px-5 py-3 font-semibold text-slate-900">
                      {row.stock}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${row.statusClass}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="2xl:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <h3 className="text-lg font-bold text-slate-900">
            Transaction Snapshot
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Payment completion and ticket value for today.
          </p>

          <div className="mt-4 space-y-3">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
              <p className="text-xs text-slate-500">Completed Transactions</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">112</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
              <p className="text-xs text-slate-500">Pending Payments</p>
              <p className="text-2xl font-bold text-amber-600 mt-1">7</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
              <p className="text-xs text-slate-500">Average Order Value</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                IDR 176,000
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50">
          <h2 className="text-lg font-bold text-slate-900">
            Latest Transactions
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Recent sales records and payment status from the latest shifts.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Invoice
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Customer
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Items
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Total
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Payment
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {transactionRows.map((row) => (
                <tr
                  key={row.invoice}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-5 py-3 font-semibold text-slate-900">
                    {row.invoice}
                  </td>
                  <td className="px-5 py-3 text-slate-700">{row.customer}</td>
                  <td className="px-5 py-3 text-slate-700">{row.items}</td>
                  <td className="px-5 py-3 font-semibold text-slate-900">
                    {row.total}
                  </td>
                  <td className="px-5 py-3 text-slate-700">{row.method}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${row.statusClass}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
