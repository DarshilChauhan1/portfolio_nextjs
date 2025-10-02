# Portfolio Setup Instructions

## Email Configuration (Nodemailer)

To enable the contact form functionality, you need to set up email configuration:

### 1. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Navigate to Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

### 2. Environment Variables

Update the `.env.local` file with your email credentials:

```env
# Replace with your actual Gmail address
EMAIL_USER=your-email@gmail.com

# Replace with the App Password (16 characters, no spaces)
EMAIL_PASS=abcd efgh ijkl mnop

# Optional: Different recipient email (defaults to EMAIL_USER)
EMAIL_RECIPIENT=your-email@gmail.com
```

### 3. Alternative Email Providers

If you're not using Gmail, update the transporter configuration in `/src/app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: 'your-smtp-host.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### 4. Testing

1. Start the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check both your inbox (for the message) and the sender's email (for the auto-reply)

### 5. Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords, not your regular email password
- Consider using environment-specific email addresses for development vs production

## Features

The contact form includes:
- ✅ Form validation with Zod
- ✅ Email notification to you with the message
- ✅ Auto-reply confirmation to the sender
- ✅ Loading states and error handling
- ✅ Responsive design with animations
- ✅ HTML-formatted emails with professional styling

## Troubleshooting

**"Invalid credentials" error:**
- Ensure you're using an App Password, not your regular password
- Double-check the email address in EMAIL_USER

**Emails not sending:**
- Check your internet connection
- Verify the SMTP settings for your email provider
- Look at the server console for detailed error messages

**Emails going to spam:**
- This is common with transactional emails
- Consider using a dedicated email service like SendGrid or Mailgun for production
