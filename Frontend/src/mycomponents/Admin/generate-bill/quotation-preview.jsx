"use client";

export default function QuotationPreview({ data = {} }) {
  const items = data.items || []; // Ensure `items` is always an array

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">QUOTATION</h2>
          <p className="text-gray-600">#{data.quotationNumber || "XXXX"}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">From:</h3>
            <div className="text-sm text-gray-600">
              <p>{data.quotationFrom || "Company Name"}</p>
              <p>{data.quotationFromAddress || "Address"}</p>
              <p>{data.quotationFromEmail || "Email"}</p>
              <p>{data.quotationFromPhone || "Phone"}</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">To:</h3>
            <div className="text-sm text-gray-600">
              <p>{data.quotationFor || "Client Name"}</p>
              <p>{data.quotationForAddress || "Address"}</p>
              <p>{data.quotationForEmail || "Email"}</p>
              <p>{data.quotationForPhone || "Phone"}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Qty
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rate
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{item.item || "-"}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-600">{item.quantity}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-600">₹{item.rate}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-600">₹{item.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-4">
                    No items available
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                  Total:
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                  ₹{items.reduce((sum, item) => sum + Number(item.amount || 0), 0).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
