import { FileQuestion } from 'lucide-react';
import Link from 'next/link';

export default function RootNotFound() {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <FileQuestion size={48} color="#ed8e33" />
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '1rem' }}>
            Page not found
          </h1>
          <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            style={{ marginTop: '1.5rem', color: '#ed8e33', fontWeight: 600 }}
          >
            Back to homepage
          </Link>
        </div>
      </body>
    </html>
  );
}
