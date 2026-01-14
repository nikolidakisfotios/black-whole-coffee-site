export default function Home() {
  return (
    <div className="container">
      {/* 1. The Event Horizon Amber Glow */}
      <div className="glow"></div>

      {/* 2. Refined Branding (No emoji, just sophisticated lines) */}
      <header className="header">
        <div className="logo-symbol">
           <div className="circle-outer">
             <div className="circle-inner"></div>
           </div>
        </div>
        <h2 className="brand-name">BLACK WHOLE</h2>
      </header>

      {/* 3. Central Content */}
      <main className="content">
        <h1 className="coming-soon">Coming Soon</h1>
        <div className="divider"></div>
        <p className="date">MARCH 2026</p>
      </main>

      <footer className="footer">
        CALCULATED PRODUCTION • 2026
      </footer>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #0A0A0A;
          color: #F3F4F6;
          position: relative;
          overflow: hidden;
          font-family: 'serif';
        }

        .glow {
          position: absolute;
          width: 80vw;
          height: 80vw;
          background: radial-gradient(circle, rgba(217,119,6,0.08) 0%, rgba(10,10,10,0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .header {
          position: absolute;
          top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        /* Minimalist Logo Symbol representing a Black Hole */
        .logo-symbol {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .circle-outer {
          width: 30px;
          height: 30px;
          border: 1px solid #D97706;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .circle-inner {
          width: 12px;
          height: 12px;
          background-color: #D97706;
          border-radius: 50%;
          box-shadow: 0 0 10px #D97706;
        }

        .brand-name {
          letter-spacing: 0.6em;
          font-weight: 300;
          font-size: 0.9rem;
          color: #F3F4F6;
          margin: 0;
        }

        .content {
          text-align: center;
          z-index: 10;
        }

        .coming-soon {
          font-size: clamp(3.5rem, 12vw, 9rem);
          font-style: italic;
          margin: 0;
          font-family: 'Playfair Display', serif;
          font-weight: 400;
        }

        .divider {
          width: 100px;
          height: 1px;
          background-color: #D97706;
          margin: 30px auto;
          opacity: 0.6;
        }

        .date {
          font-size: 1.2rem;
          letter-spacing: 0.5em;
          color: #D97706;
          font-weight: 300;
        }

        .footer {
          position: absolute;
          bottom: 40px;
          letter-spacing: 0.5em;
          font-size: 0.65rem;
          color: #444;
        }
      `}</style>
    </div>
  );
}
