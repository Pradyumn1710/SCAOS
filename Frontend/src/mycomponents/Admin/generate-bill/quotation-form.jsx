"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Trash2 } from "lucide-react"
import axios from "axios"

export default function QuotationForm() {
  const [formData, setFormData] = useState({
    quotationNumber: "",
    date: "",
    validTill: "",
    quotationFrom: "",
    quotationFromAddress: "",
    quotationFromEmail: "",
    quotationFromPhone: "",
    quotationFor: "",
    quotationForAddress: "",
    quotationForEmail: "",
    quotationForPhone: "",
    items: [{ item: "", quantity: 1, rate: 0, amount: 0 }],
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleItemChange = (index, e) => {
    const newItems = [...formData.items]
    newItems[index][e.target.name] = e.target.value
    newItems[index].amount = newItems[index].quantity * newItems[index].rate
    setFormData({ ...formData, items: newItems })
  }

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { item: "", quantity: 1, rate: 0, amount: 0 }],
    })
  }

  const removeItem = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index)
    setFormData({ ...formData, items: newItems })
  }

  const totalAmount = formData.items.reduce((sum, item) => sum + Number(item.amount), 0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/generate-pdf", formData, { responseType: "blob" })

      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", `quotation-${formData.quotationNumber}.pdf`)
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Quotation Number</label>
          <input
            type="text"
            name="quotationNumber"
            value={formData.quotationNumber}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Valid Till</label>
          <input
            type="date"
            name="validTill"
            value={formData.validTill}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">From</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              name="quotationFrom"
              value={formData.quotationFrom}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="quotationFromEmail"
              value={formData.quotationFromEmail}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="quotationFromPhone"
              value={formData.quotationFromPhone}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="quotationFromAddress"
              value={formData.quotationFromAddress}
              onChange={handleChange}
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">To</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company/Client Name</label>
            <input
              type="text"
              name="quotationFor"
              value={formData.quotationFor}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="quotationForEmail"
              value={formData.quotationForEmail}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="quotationForPhone"
              value={formData.quotationForPhone}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="quotationForAddress"
              value={formData.quotationForAddress}
              onChange={handleChange}
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Items</h3>
        <div className="space-y-4">
          {formData.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid gap-4 sm:grid-cols-12 items-center"
            >
              <div className="sm:col-span-5">
                <input
                  type="text"
                  name="item"
                  placeholder="Item description"
                  value={item.item}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Qty"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                  min="1"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="number"
                  name="rate"
                  placeholder="Rate"
                  value={item.rate}
                  onChange={(e) => handleItemChange(index, e)}
                  required
                  min="0"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="number"
                  value={item.amount}
                  disabled
                  className="block w-full rounded-md border-gray-300 bg-gray-50 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-1">
                <button type="button" onClick={() => removeItem(index)} className="p-2 text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus size={18} className="mr-2" />
          Add Item
        </button>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-lg font-medium text-gray-900">Total Amount: ₹{totalAmount.toFixed(2)}</div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Generate PDF
        </button>
      </div>
    </form>
  )
}

