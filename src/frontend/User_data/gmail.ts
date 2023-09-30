// src/gmail.ts
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

const oAuth2Client = new OAuth2Client(
  process.env.REACT_APP_CLIENT_ID,
  process.env.REACT_APP_CLIENT_SECRET,
  process.env.REACT_APP_REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REACT_APP_REFRESH_TOKEN });

const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

export async function sendEmail(to: string, subject: string, message: string) {
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const mail = `To: ${to}\r\n` +
               `Subject: ${utf8Subject}\r\n` +
               'Content-Type: text/html; charset=utf-8\r\n' +
               'MIME-Version: 1.0\r\n' +
               `\r\n${message}`;

  const encodedMessage = Buffer.from(mail)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  try {
    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });
    console.log(res.data);
  } catch (error) {
    console.error('Failed to send email', error);
  }
}
