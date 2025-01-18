import express from "express";
import ViteExpress from "vite-express";
/* 
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'billyc.wood4@gmail.com',
  from: 'rowly.dev@gmail.com',
  subject: 'testing SendGrid',
  text: 'Testing how to send emails via SendGrid',
  html: '<strong>html section</strong>'
}

sgMail.send(msg)
  .then(() => { console.log('Email sent') })
  .catch((error) => { console.log('ERROR\n', error) })
*/

const app = express();


app.post('/', (req, res) => {
  console.log('from express', req.body);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
