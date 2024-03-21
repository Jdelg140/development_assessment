import React from 'react';

import { useStyles } from './styles';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const { root, max } = useStyles;
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Experience More!" />
        <meta name="viewport" content="width=375px, initial-scale=1" />
        <title>Document Upload Assessment</title>
        <link rel="icon" type="image/x-icon" sizes="16x16" href="" />
        <link rel="apple-touch-icon" sizes="180x180" href="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto+Flex:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={root}>
        <div style={max}>{children}</div>
      </body>
    </html>
  );
}