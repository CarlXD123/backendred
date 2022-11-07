import * as fs from 'fs'
import nodemailer from 'nodemailer'
import handlebars from 'handlebars'

const urlLogo = `${process.env.URL}:${process.env.PORT}/public/imgs/logo/logo-redlab.png`;
const baseUrl = `${process.env.URL}:${process.env.PORT}`;

const readHTMLFile = function (path: any, callback: any) {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        } else {
            callback(null, html);
        }
    });
};
const mailOptions = {
    from: "no-reply@sistemaredlabperu.com",
    subject: "Bienvenido!",
    to: "",
    html: "",
};
var transporter = nodemailer.createTransport({
    service: "mail.sistemaredlabperu.com",
    port: 465,
    auth: {
        user: "no-reply@sistemaredlabperu.com",
        pass: "Redlab2022_",
    },
    tls: {
        rejectUnauthorized: false,
    },
});
function sendEmail(mailOptions) {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            //console.log(error);
        } else {
            //console.log("Email sent: " + info.response);
        }
    });
}
export function sendPassword(mailData: any) {
    readHTMLFile(__dirname + "/email.html", function (err, html) {
        var template = handlebars.compile(html);
        var replacements = {
            fullname: mailData.fullname,
            password: mailData.password,
            urlLogo,
            email: mailData.email,
            url: baseUrl,
        };

        var htmlToSend = template(replacements);

        mailOptions.to = mailData.email;
        mailOptions.html = htmlToSend;
        sendEmail(mailOptions);
    });
}