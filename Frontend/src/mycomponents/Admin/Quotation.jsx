import React, { useState } from "react";
import axios from "axios";

const QuotationForm = () => {
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
    items: [{ item: "", quantity: 1, rate: 0, amount: 0 }],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, e) => {
    const newItems = [...formData.items];
    newItems[index][e.target.name] = e.target.value;
    
    // Calculate amount
    newItems[index].amount = newItems[index].quantity * newItems[index].rate;
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { item: "", quantity: 1, rate: 0, amount: 0 }],
    });
  };

  const totalAmount = formData.items.reduce((sum, item) => sum + item.amount, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/generate-pdf",
        formData,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `quotation-${formData.quotationNumber}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Generate Quotation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Quotation Number:</label>
          <input
            type="text"
            name="quotationNumber"
            required
            value={formData.quotationNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Valid Till:</label>
            <input
              type="date"
              name="validTill"
              required
              value={formData.validTill}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Quotation From */}
        <div className="quotation-section">
          <div className="form-group">
            <h3>Quotation From:</h3>
            <label>Company Name:</label>
            <input
              type="text"
              name="quotationFrom"
              required
              value={formData.quotationFrom}
              onChange={handleChange}
            />
            <label>Address:</label>
            <textarea
              name="quotationFromAddress"
              required
              value={formData.quotationFromAddress}
              onChange={handleChange}
            />
            <label>Email:</label>
            <input
              type="email"
              name="quotationFromEmail"
              required
              value={formData.quotationFromEmail}
              onChange={handleChange}
            />
            <label>Phone:</label>
            <input
              type="text"
              name="quotationFromPhone"
              required
              value={formData.quotationFromPhone}
              onChange={handleChange}
            />
          </div>

          {/* Quotation For */}
          <div className="form-group">
            <h3>Quotation For:</h3>
            <label>Company Name:</label>
            <input
              type="text"
              name="quotationFor"
              required
              value={formData.quotationFor}
              onChange={handleChange}
            />
            <label>Address:</label>
            <textarea
              name="quotationForAddress"
              required
              value={formData.quotationForAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Items Table */}
        <div className="items-table">
          <h3>Quotation Items</h3>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {formData.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="item"
                      required
                      value={item.item}
                      onChange={(e) => handleItemChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      required
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="rate"
                      min="0"
                      required
                      value={item.rate}
                      onChange={(e) => handleItemChange(index, e)}
                    />
                  </td>
                  <td>
                    <input type="number" value={item.amount} disabled />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={addItem}>
            Add Item
          </button>
        </div>

        <div className="total-amount">
          <h3>Total Amount: ₹{totalAmount}</h3>
        </div>

        <button type="submit">Generate PDF</button>
      </form>
    </div>
  );
};

export default QuotationForm;
