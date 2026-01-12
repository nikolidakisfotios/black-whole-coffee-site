function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        
        html, body {
          padding: 0;
          margin: 0;
          background-color: #0A0A0A;
          color: #F3F4F6;
          font-family: 'Playfair Display', serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
