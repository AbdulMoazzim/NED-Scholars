

interface EmailTemplateProps {
  name: string;
}

export function EmailTemplate({ name }: EmailTemplateProps) {
  return (
    <div>
      <p>Dear {name},</p>
      <p>Thank you for your application. We have received it successfully.</p>
      <p>We will review your application and reach out to you soon.</p>
      <p>Best regards,<br />NED Scholars Team</p>
    </div>
  );
}