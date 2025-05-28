import { Resend } from 'resend';

const resend = new Resend('re_7vBHLW9F_BMxC2gs1HWhK1cMYdWUYojEU');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'cheuk209@hotmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});