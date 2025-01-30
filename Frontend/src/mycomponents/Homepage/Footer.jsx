/*
Things to put here 
1. Address
2. mail should be active
3.Quick links should be active
*/

import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SCOAS</h3>
            <p className="text-gray-400">Professional cleaning services for homes and businesses.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="#1" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="#2" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="#3" className="text-gray-400 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="#4" className="text-gray-400 hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Shri Krishna nagar  Nagpur </p>
            <p className="text-gray-400">Phone:+91-8767887562</p>
            <p className="text-gray-400">Email: info@scoas.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SCOAS. All rights reserved.</p>
          <p>Designed and developed by Pradyumn Shirsath</p>
        </div>
      </div>
    </footer>
  )
}
