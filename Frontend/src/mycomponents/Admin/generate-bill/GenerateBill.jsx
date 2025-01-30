"use client"

import { useNavigate } from "react-router-dom"
import QuotationForm from "./quotation-form"
import QuotationPreview from "./quotation-preview"

export default function GenerateBill() {
  const router = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Generate Bill</h1>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ← Back to Dashboard
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Quotation Form</h2>
              <QuotationForm />
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Preview</h2>
              <QuotationPreview data={{}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

