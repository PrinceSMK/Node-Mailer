const nodemailer = require("nodemailer");





const sendMail = async(req,res)=>{
    try {
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            // secure: false, // true for 465, false for other ports
            auth: {
                user: 'sabina5@ethereal.email',
                pass: 'JnmK1j1ZzXzuC81BQV'
            },
          });
        
          let info = await transporter.sendMail({
              from: '"SMK 👻" <sabina5@ethereal.email>', // sender address
              to: "shehrozmirza213@gmail.com", // list of receivers
              subject: "Node Js sy mail send ki hai ✔", // Subject line
              text: "Hello & How are You?", // plain text body
              html: "<b><i>Hello & How are You?</i></b>", // html body
              
          });
          
          console.log("Message sent: %s", info.messageId),
          res.json(info)
    } catch (error) {
        console.log(error)
    }
};





module.exports = sendMail