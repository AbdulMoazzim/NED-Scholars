"use server"

import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
console.log(process.env.NEXT_PUBLIC_RESEND_API_KEY)
export async function SendEmail(name: string, email: string) {
  try {
    console.log("name: email",name, email)
    const { data, error } = await resend.emails.send({
      from: 'nedscholars@gmail.com',
      to: [email],
      subject: 'Application Received',
      react: EmailTemplate({ name }),
    });
    console.log("data",data, "error",error)
    if (error) {
      console.error('Email error:', error);
      return { success: false, error: error.message };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (err) {
    console.error('Email sending exception:', err);
    return { success: false, error: 'Failed to send email' };
  }
}