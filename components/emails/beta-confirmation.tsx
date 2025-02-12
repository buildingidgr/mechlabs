import { Html, Head, Body, Container, Text, Link, Section, Img } from '@react-email/components';

export function BetaConfirmationEmail({ name }: { name: string }) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Text style={logo}>🤖 Mechlabs</Text>
          <Img
            src={`${process.env.NEXT_PUBLIC_RESEND_DOMAIN}/waiting-list.svg`}
            alt="Waiting list illustration"
            width="200"
            height="200"
            style={image}
          />
          <Section style={content}>
            <Text style={heading}>Hi {name},</Text>
            <Text style={paragraph}>
              Thanks for joining our beta waiting list! We&apos;ll notify you as soon as we&apos;re ready to launch.
            </Text>
            <Text style={paragraph}>
              In the meantime, feel free to check out our latest updates on our blog.
            </Text>
            <Link href="https://blog.yourdomain.com" style={link}>
              Visit our blog →
            </Link>
          </Section>
          <Text style={footer}>Mechlabs Engineering Platform</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  padding: '40px 0'
};

const container = {
  backgroundColor: '#ffffff',
  padding: '32px 24px',
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  maxWidth: '600px',
  margin: '0 auto'
};

const logo = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#2563eb',
  marginBottom: '32px'
};

const content = {
  margin: '24px 0'
};

const heading = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#1f2937',
  marginBottom: '24px'
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#4b5563',
  marginBottom: '24px'
};

const link = {
  color: '#2563eb',
  textDecoration: 'underline'
};

const footer = {
  color: '#6b7280',
  fontSize: '14px',
  textAlign: 'center' as const,
  marginTop: '32px'
};

const image = {
  margin: '0 auto 32px auto',
  display: 'block',
  width: '200px',
  height: 'auto'
}; 