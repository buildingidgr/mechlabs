import crypto from 'crypto';
import { render } from '@react-email/render';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { BetaConfirmationEmail } from '@/components/emails/beta-confirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Incoming request to:', req.url);

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS preflight');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('API request received at:', new Date().toISOString());

  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: '🎉 Welcome to the Mechlabs Beta Program!',
      html: await render(BetaConfirmationEmail({ name })),
      headers: {
        'X-Entity-Ref-ID': crypto.randomUUID(),
      },
      text: `Hi ${name},\n\nThanks for joining our beta waiting list! We'll notify you when we launch.\n\nBest,\nThe Mechlabs Team`,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: error.message 
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 