import './globals.css';

export const metadata = {
  title: 'HEALIX - Smart Pulse Monitoring & AI Health Support',
  description: 'An AI-powered IoT solution for real-time pulse monitoring, LSTM-based pattern analysis, and RAG medical guidance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
