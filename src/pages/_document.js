import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      
      <body>
        <Main />
        <NextScript />
      </body>
      {/* <script
        type="text/javascript"
        src="https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js"
      ></script> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      ></script>
    </Html>
  );
}
