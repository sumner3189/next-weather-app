import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import Contact from "../../models/Contact";
import mongoose from "mongoose";

mongoose.connect(
  process.env.MONGO_DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const options = {
  auth: { api_key: process.env.SEND_GRID_API_KEY },
};
const mailer = nodemailer.createTransport(sgTransport(options));

export default async (req, res) => {
  const { firstName, lastName, middleName, email } = req.body;
  console.log(req.body);
  try {
    const contact = new Contact({
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      email: email,
    });
    await contact.save(contact);
    const sendGridEmail = {
      to: "doni@earnonlinemoney.org",
      from: email,
      subject: "New Form submission",
      text: `${firstName}, ${lastName}, ${middleName}`,
    };
    console.log(sendGridEmail);
    await mailer.sendMail(sendGridEmail);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
};
