'use client'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, Sparkles } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link to="./generate">
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Generate Bill</h2>
                <p className="text-gray-600">Create professional quotations instantly</p>
              </div>
            </div>
          </motion.div>
        </Link>

        <Link to="/admin/coming-soon">
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Coming Soon</h2>
                <p className="text-gray-600">Exciting new features on the way</p>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
