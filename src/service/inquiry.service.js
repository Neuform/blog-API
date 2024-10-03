const nodemailer = require('nodemailer');
const Inquiry = require("../model/inquiry.model")


const create = async(data)=>{
    try {
        const {name,email,phone,address,service,message} = data
        const newInquiry = new Inquiry({
            name,
            email,
            phone,
            address,
            service,
            message
        })
        const savedInquiry =await newInquiry.save()
        // console.log(savedInquiry)
        mailService(savedInquiry)
        return savedInquiry    
    } catch (error) {
        throw new Error(error.message)
    }
}


const mailService = (data) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'neuformtech@gmail.com',
        pass: 'gqwlvxtktkdhdhtv'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Business Inquiry</title>
        <style>
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 20px auto; padding: 0; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden; }
          .header { background-color: #3498db; padding: 30px 20px; text-align: center; color: #ffffff; }
          .logo { max-width: 150px; height: auto; margin-bottom: 15px; }
          .content { background-color: #fafafa; padding: 30px; }
          .info-row { margin-bottom: 20px; display: flex; align-items: flex-start; }
          .label { font-weight: bold; color: #000000; flex: 0 0 120px; }
          .value { color: #333; flex: 1; }
          .yellow-strip { background-color: #ffd700; height: 10px; }
          .footer { background-color: #3498db; padding: 15px; text-align: center; font-size: 12px; color: #ffffff; }
          h1 { margin: 0; font-size: 24px; }
          .inquiry-number { font-size: 14px; margin-top: 10px; opacity: 0.8; }
          .message-box { background-color: #ffffff; border-left: 4px solid #3498db; padding: 15px; margin-top: 20px; }
          .message-title { font-weight: bold; margin-bottom: 10px; color: #3498db; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://ik.imagekit.io/th3ofwc2g9/NeuFrom__1_-removebg-preview.png?updatedAt=1727957716096" alt="Company Logo" class="logo">
            <h1>Business Inquiry</h1>
          
          </div>
          <div class="content">
            <div class="info-row">
              <span class="label">Business Name:</span>
              <span class="value">${data.name}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value">${data.email}</span>
            </div>
            <div class="info-row">
              <span class="label">Phone:</span>
              <span class="value">${data.phone}</span>
            </div>
            <div class="info-row">
              <span class="label">Address:</span>
              <span class="value">${data.address}</span>
            </div>
            <div class="info-row">
              <span class="label">Service:</span>
              <span class="value">${data.service}</span>
            </div>
            <div class="message-box">
              <div class="message-title">Message:</div>
              <div>${data.message}</div>
            </div>
            <div class="info-row" style="margin-top: 20px;">
              <span class="label">Inquiry Date:</span>
              <span class="value">${new Date(data.createdAt).toLocaleString()}</span>
            </div>
          </div>
          <div class="yellow-strip"></div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  
    let mailOptions = {
      from: data.email,
      to: 'neuformtech@gmail.com',
      subject: `Business Inquiry from: ${data.name}`,
      html: htmlContent
    };
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}
module.exports = {create}