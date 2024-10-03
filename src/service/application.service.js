const Application = require("../model/application.model")
const nodemailer = require('nodemailer');

const create = async(data) =>{

    try {
        const {applicant,email,phone,position,role,address,resume} = data
        const newApplication = new Application({
            applicant,
            email,
            phone,
            position,
            role,
            address,
            resume
        })
        console.log(newApplication)
        const savedApplication =await newApplication.save()
        //send mail
        mailService(savedApplication)
        return savedApplication
    } catch (error) {
        throw new Error(error.message)
    }
   

}





const mailService = (data) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, // Use port 587 for TLS (STARTTLS)
        secure: false, // Set to false for TLS connection
        auth: {
            user: 'neuformtech@gmail.com',
            pass: 'gqwlvxtktkdhdhtv'
        },
        tls: {
            rejectUnauthorized: false // To avoid issues with self-signed certificates
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'neuformtech@gmail.com',
        subject: `Internship Application from: ${data.applicant}`,
        html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #fafafa;">
            <div style="text-align: center; padding-bottom: 20px;">
                <img src="https://ik.imagekit.io/th3ofwc2g9/NeuFrom__1_-removebg-preview.png?updatedAt=1727957716096" alt="Company Logo" style="width: 150px; margin-bottom: 20px;">
            </div>
            <h2 style="color: #2c3e50; text-align: center; margin-bottom: 20px;">New Application</h2>
            <div style="background-color: #3498db; color: white; padding: 10px; border-radius: 10px; text-align: center;">
                <h3 style="margin: 0;">Position: ${data.position}</h3>
            </div>

            <div style="padding: 20px;">
                <h3 style="color: #34495e; border-bottom: 2px solid #e0e0e0; padding-bottom: 5px;">Applicant Details</h3>
                <p style="font-size: 16px; margin: 5px 0;"><strong>Name:</strong> ${data.applicant}</p>
                <p style="font-size: 16px; margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #3498db;">${data.email}</a></p>
                <p style="font-size: 16px; margin: 5px 0;"><strong>Phone:</strong> ${data.phone}</p>
                <p style="font-size: 16px; margin: 5px 0;"><strong>Role:</strong> ${data.role}</p>
                <p style="font-size: 16px; margin: 5px 0;"><strong>Address:</strong> ${data.address}</p>
            </div>

            <div style="padding: 20px; background-color: #ecf0f1; border-radius: 10px;">
                <h3 style="color: #34495e; margin-bottom: 10px;">Resume</h3>
                <p style="font-size: 16px;">You can download the applicant's resume using the link below:</p>
                <a href="${data.resume}" style="display: inline-block; background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; font-size: 16px; border-radius: 5px; margin-top: 10px;">Download Resume</a>
            </div>

            <footer style="text-align: center; margin-top: 30px; color: #95a5a6;">
                <p style="font-size: 12px;">Neuform Technologies</p>
                <p style="font-size: 12px;">© 2024 Neuform Technologies. All Rights Reserved.</p>
            </footer>
        </div>
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};


module.exports = {create}