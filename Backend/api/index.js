const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// // Enable CORS
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Origin", "*"); // Change this to your frontend URL for security
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   if (req.method === "OPTIONS") {
//     return res.status(200).end(); // Handle CORS preflight request
//   }
//   next();
// });

const cors = require("cors");

app.use(cors({ 
    origin:["http://localhost:5173", "https://scaos-git-main-pradyumn1710s-projects.vercel.app/" ,"https://scaos-9sryvm9yb-pradyumn1710s-projects.vercel.app/"], // Change to your frontend URL when deployed
 
}));


app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;