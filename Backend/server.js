// const express =require("express")
// const cors=require("cors")
// const bodyParser=require("body-parser")


// const app=express()

// const port=5000

// app.use(cors(
{
  origin:["https://myself-git-main-dileeps-projects-853f5e81.vercel.app/"],
    methods:["POST",GET"],
    credentials:true
}
))
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended:true}))


// app.post("/api/v1",port,(req,res)=>{
//     data=req.body.name
//     console.log(data)

//     res.status(200).send({
//         msg:data,
//         success:true
//     })

// })


// app.listen(port,(req,res)=>{
//     console.log(`Server is running on Port : http://localhost/${port}`)
// })





// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();

// const port = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Correcting the route definition
// app.post("/api/v1", (req, res) => {
//     const data = req.body;
//     console.log(data);

//     res.status(200).send({
//         msg: data,
//         success: true
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on Port : http://localhost:${port}`);
// });



const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv =require("dotenv")
dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a Nodemailer transporter object for Gmail
let transporter = nodemailer.createTransport({
  service: 'gmail', // For Gmail
  
  auth: {
    user: process.env.EMAIL, // Your Gmail email address
    pass: process.env.PASS    // Your Gmail password or app password (if 2FA is enabled)
  }
});

// Define the POST route
app.post("/api/v1", (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log(name)
    console.log(email)


    // Create HTML content with inline CSS styling
    let htmlContent = `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                    .email-container {
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .email-header {
                        background-color: #4CAF50;
                        color: white;
                        padding: 6px;
                        text-align: center;
                        border-radius: 5px;
                    }
                    .email-body {
                        margin-top: 20px;
                    }
                    .email-body p {
                        font-size: 16px;
                    }
                    .email-footer {
                        margin-top: 30px;
                        font-size: 12px;
                        text-align: center;
                        color: #777;
                    }
                    .email-footer a {
                        color: #4CAF50;
                        text-decoration: none;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <h2> New Message from ${name}</h2>
                    </div>
                    <div class="email-body">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong><br>${message}</p>
                    </div>
                    <div class="email-footer">
                        <p>Thank you for your submission. If you have any questions, feel free to <a href="mailto:support@example.com">contact us</a>.</p>
                    </div>
                </div>
            </body>
        </html>
    `;

    // Set up the email data with the HTML content
    let mailOptions = {
        from: email, // Sender's email address
        to: 'dileeprathore9098@gmail.com', // Recipient's email address
        subject: 'Request From Portfolio', // Subject of the email
        html: htmlContent, // HTML body content
    };

    // Send email with the provided data
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.status(500).send({
                msg: 'Failed to send email.',
                success: false
            });
        } else {
            console.log('Email sent:', info.response);
            return res.status(200).send({
                msg: 'Email sent successfully!',
                success: true,
                emailResponse: info.response
            });
        }
    });
});

// Listen on a specific port


// Start the server
app.listen(port, () => {
    console.log(`Server is running on Port : http://localhost:${port}`);
});


// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const sgMail = require('@sendgrid/mail');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Set SendGrid API Key
// sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

// // Define the POST route
// app.post("/api/v1", (req, res) => {
//     const { name, email, subject, message } = req.body;

//     console.log(name);
//     console.log(email);

//     // Create HTML content with inline CSS styling
//     let htmlContent = `
//         <html>
//             <head>
//                 <style>
//                     body {
//                         font-family: Arial, sans-serif;
//                         background-color: #f4f4f4;
//                         padding: 20px;
//                     }
//                     .email-container {
//                         background-color: #ffffff;
//                         padding: 20px;
//                         border-radius: 8px;
//                         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                     }
//                     .email-header {
//                         background-color: #4CAF50;
//                         color: white;
//                         padding: 6px;
//                         text-align: center;
//                         border-radius: 5px;
//                     }
//                     .email-body {
//                         margin-top: 20px;
//                     }
//                     .email-body p {
//                         font-size: 16px;
//                     }
//                     .email-footer {
//                         margin-top: 30px;
//                         font-size: 12px;
//                         text-align: center;
//                         color: #777;
//                     }
//                     .email-footer a {
//                         color: #4CAF50;
//                         text-decoration: none;
//                     }
//                 </style>
//             </head>
//             <body>
//                 <div class="email-container">
//                     <div class="email-header">
//                         <h2> New Message from ${name}</h2>
//                     </div>
//                     <div class="email-body">
//                         <p><strong>Name:</strong> ${name}</p>
//                         <p><strong>Email:</strong> ${email}</p>
//                         <p><strong>Subject:</strong> ${subject}</p>
//                         <p><strong>Message:</strong><br>${message}</p>
//                     </div>
//                     <div class="email-footer">
//                         <p>Thank you for your submission. If you have any questions, feel free to <a href="mailto:support@example.com">contact us</a>.</p>
//                     </div>
//                 </div>
//             </body>
//         </html>
//     `;

//     // Set up the email data with the HTML content
//     const msg = {
//         to: 'dileeprathore9098@gmail.com', // Recipient's email address
//         from: email, // Use the user's email as the sender's email
//         subject: 'Request From Portfolio', // Subject of the email
//         html: htmlContent, // HTML body content
//     };

//     // Send email with the provided data
//     sgMail
//         .send(msg)
//         .then(() => {
//             console.log('Email sent');
//             return res.status(200).send({
//                 msg: 'Email sent successfully!',
//                 success: true
//             });
//         })
//         .catch((error) => {
//             console.error(error);
//             return res.status(500).send({
//                 msg: 'Failed to send email.',
//                 success: false
//             });
//         });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on Port : http://localhost:${port}`);
// });
