import React from 'react';

import { useStyles } from './styles';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const { root, max } = useStyles;
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta name="description" content="Experience More!" />
        <meta name="viewport" content="width=375px, initial-scale=1" />
        <title>Document Upload Assessment</title>
      </head>
      <body style={root}>
        <div style={max}>{children}</div>
      </body>
    </html>
  );
}