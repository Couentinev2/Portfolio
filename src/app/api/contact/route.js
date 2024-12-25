import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // 1) Get form data from request body
    const { name, email, message } = await request.json();

    // 2) Validate or sanitize data (basic example here)
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
      });
    }

    // 3) Create a nodemailer transporter using SMTP
    //    You'll typically store credentials in environment variables
    //    e.g. process.env.EMAIL_USER, process.env.EMAIL_PASS, etc.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,   // e.g. "yourgmail@gmail.com"
        pass: process.env.EMAIL_PASS,   // app password or less-secure config
      },
    });

    // 4) Set up mail options
    //    The "to" field should be your own email address (or wherever you want to receive messages).
    const mailOptions = {
      from: email, // The user’s email (or your domain address)
      to: 'quent.guillaume@gmail.com', // <— Your receiving email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // 5) Send the email
    await transporter.sendMail(mailOptions);

    // 6) Return success response
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
