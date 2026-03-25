function Product() {
  return (
    <section className="space-y-5">
      <header className="bg-white rounded-xl border border-slate-200 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Management / Product
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
          Product Catalog and Inventory
        </h2>
        <p className="text-sm text-slate-600 mt-1.5">
          Standardize product records, pricing structure, and stock visibility
          across your sales channels.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <h3 className="text-base font-semibold text-slate-900">
            New Product Entry
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Product Name</span>
              <input
                className="input input-bordered"
                placeholder="Product name"
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Category</span>
              <select className="select select-bordered">
                <option>Electronics</option>
                <option>Accessories</option>
                <option>Stationery</option>
              </select>
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Cost Price</span>
              <input className="input input-bordered" placeholder="0" />
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Selling Price</span>
              <input className="input input-bordered" placeholder="0" />
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">Stock</span>
              <input className="input input-bordered" placeholder="0" />
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium mb-2">SKU</span>
              <input className="input input-bordered" placeholder="SKU-001" />
            </label>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="btn btn-primary btn-sm">Save Product</button>
            <button className="btn btn-ghost btn-sm">Clear Form</button>
          </div>
        </div>

        <aside className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <h3 className="text-base font-semibold text-slate-900">
            Inventory Snapshot
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Total Products</span>
              <span className="font-semibold text-slate-900">245</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Low Stock</span>
              <span className="font-semibold text-slate-900">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Out-of-Stock</span>
              <span className="font-semibold text-slate-900">3</span>
            </div>
          </div>
        </aside>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-900">
            Product List
          </h3>
          <input
            className="input input-bordered input-sm w-full md:w-72"
            placeholder="Search by name, SKU, or category"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Name
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Category
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Stock
                </th>
                <th className="px-5 py-2.5 text-left text-xs font-semibold text-slate-900 uppercase">
                  Price
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
                  Notebook A5
                </td>
                <td className="px-5 py-3 text-slate-700">Stationery</td>
                <td className="px-5 py-3 text-slate-700">80</td>
                <td className="px-5 py-3 text-slate-900 font-semibold">
                  IDR 15,600
                </td>
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                    Available
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="btn btn-ghost btn-xs">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-slate-900">
                  Gel Pen
                </td>
                <td className="px-5 py-3 text-slate-700">Stationery</td>
                <td className="px-5 py-3 text-slate-700">12</td>
                <td className="px-5 py-3 text-slate-900 font-semibold">
                  IDR 6,000
                </td>
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                    Low Stock
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="btn btn-ghost btn-xs">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-slate-900">
                  Mouse Wireless
                </td>
                <td className="px-5 py-3 text-slate-700">Accessories</td>
                <td className="px-5 py-3 text-slate-700">0</td>
                <td className="px-5 py-3 text-slate-900 font-semibold">
                  IDR 24,000
                </td>
                <td className="px-5 py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700">
                    Out-of-Stock
                  </span>
                </td>
                <td className="px-5 py-3">
                  <button className="btn btn-ghost btn-xs">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Product;
