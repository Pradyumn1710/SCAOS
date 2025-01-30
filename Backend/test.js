const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-pdf", async (req, res) => {
  try {
    console.log("🔹 Received request to generate PDF");
    
    // Log incoming request data
    console.log("📝 Request Data:", JSON.stringify(req.body, null, 2));

    // Load template.pdf
    const templatePath = "Final.pdf";
    console.log("📂 Loading template from:", templatePath);

    if (!fs.existsSync(templatePath)) {
      console.error("❌ Template PDF not found!");
      return res.status(500).send("Template file missing!");
    }

    const existingPdfBytes = fs.readFileSync(templatePath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    console.log("✅ Template loaded successfully");

    // Set default font (Helvetica supports more characters)
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    console.log("🔤 Font set to Helvetica");

    // Helper function to prevent undefined values
    const getText = (value, fieldName) => {
      if (!value) {
        console.warn(`⚠️ Warning: Missing value for ${fieldName}, setting to 'N/A'`);
        return "N/A";
      }
      return String(value);
    };

    // Place Quotation Details
    console.log("✍️ Writing quotation details...");
    firstPage.drawText(`Quotation No: ${getText(req.body.quotationNumber, "quotationNumber")}`, {
      x: 50, y: 650, size: 12, font, color: rgb(0, 0, 0),
    });
    firstPage.drawText(`Quotation Date: ${getText(req.body.date, "date")}`, {
      x: 50, y: 630, size: 12, font, color: rgb(0, 0, 0),
    });
    firstPage.drawText(`Valid Till: ${getText(req.body.validTill, "validTill")}`, {
      x: 50, y: 610, size: 12, font, color: rgb(0, 0, 0),
    });

    // Place Sender Details
    console.log("✍️ Writing sender details...");
    firstPage.drawText("Quotation From:", { x: 50, y: 570, size: 14, font, color: rgb(0, 0, 0) });
    firstPage.drawText(getText(req.body.quotationFrom, "quotationFrom"), { x: 50, y: 550, size: 12, font });
    firstPage.drawText(getText(req.body.quotationFromAddress, "quotationFromAddress"), { x: 50, y: 530, size: 10, font });
    firstPage.drawText(`Email: ${getText(req.body.quotationFromEmail, "quotationFromEmail")}`, { x: 50, y: 510, size: 10, font });
    firstPage.drawText(`Phone: ${getText(req.body.quotationFromPhone, "quotationFromPhone")}`, { x: 50, y: 490, size: 10, font });

    // Place Recipient Details
    console.log("✍️ Writing recipient details...");
    firstPage.drawText("Quotation For:", { x: 300, y: 570, size: 14, font, color: rgb(0, 0, 0) });
    firstPage.drawText(getText(req.body.quotationFor, "quotationFor"), { x: 300, y: 550, size: 12, font });
    firstPage.drawText(getText(req.body.quotationForAddress, "quotationForAddress"), { x: 300, y: 530, size: 10, font });

    // Table Headers
    console.log("📊 Adding table headers...");
    let yPosition = 450;
    firstPage.drawText("Item", { x: 50, y: yPosition, size: 12, font, color: rgb(0, 0, 0) });
    firstPage.drawText("Quantity", { x: 200, y: yPosition, size: 12, font, color: rgb(0, 0, 0) });
    firstPage.drawText("Rate", { x: 300, y: yPosition, size: 12, font, color: rgb(0, 0, 0) });
    firstPage.drawText("Amount", { x: 400, y: yPosition, size: 12, font, color: rgb(0, 0, 0) });

    // Table Rows
    yPosition -= 20;
    if (!req.body.items || req.body.items.length === 0) {
      console.warn("⚠️ No items found in request!");
    } else {
      console.log(`📌 Found ${req.body.items.length} items. Adding them to PDF...`);
      req.body.items.forEach((item, index) => {
        firstPage.drawText(getText(item.item, `item[${index}]`), { x: 50, y: yPosition, size: 10, font });
        firstPage.drawText(getText(item.quantity, `quantity[${index}]`), { x: 200, y: yPosition, size: 10, font });
        firstPage.drawText(getText(item.rate, `rate[${index}]`), { x: 300, y: yPosition, size: 10, font });
        firstPage.drawText(getText(item.amount, `amount[${index}]`), { x: 400, y: yPosition, size: 10, font });
        yPosition -= 20;
      });
    }

    // Calculate Total Amount
    console.log("🧮 Calculating total amount...");
    const total = req.body.items.reduce((sum, item) => sum + (item.amount || 0), 0);
    console.log(`💰 Total Amount: ₹${total}`);

    firstPage.drawText(`Total Amount: Rs. ${total}`, { x: 400, y: yPosition - 20, size: 14, font, color: rgb(0, 0, 0) });

    // Finalize PDF
    console.log("📄 Saving PDF...");
    const pdfBytes = await pdfDoc.save();

    console.log("✅ PDF generated successfully. Sending response...");

    // Send response
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=quotation-${req.body.quotationNumber}.pdf`);
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
