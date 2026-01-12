export default function Home() {
  return (
    <div className="container">
      {/* 1. The Amber Glow (The Event Horizon) */}
      <div className="glow"></div>

      {/* 2. Top Branding */}
      <nav className="nav">
        <span className="icon">☕</span>
        <h2 className="brand-name">BLACK WHOLE</h2>
      </nav>

      {/* 3. Central Content */}
      <main className="content">
        <h1 className="coming-soon">Coming Soon</h1>
        <div className="divider"></div>
        <p className="date">March 2026</p>
      </main>

      {/* 4. Footer */}
      <footer className="footer">
        Calculated Production • 2026
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
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(217,119,6,0.15) 0%, rgba(10,10,10,0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .nav {
          position: absolute;
          top: 50px;
          text-align: center;
        }

        .brand-name {
          letter-spacing: 0.5em;
          font-weight: 300;
          border-bottom: 1px solid #333;
          padding-bottom: 10px;
          font-size: 1.2rem;
        }

        .content {
          text-align: center;
          z-index: 10;
        }

        .coming-soon {
          font-size: clamp(3rem, 10vw, 8rem);
          font-style: italic;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .divider {
          width: 60px;
          height: 1px;
          background-color: #D97706;
          margin: 0 auto 20px;
        }

        .date {
          font-size: 1.5rem;
          letter-spacing: 0.3em;
          color: #D97706;
          text-transform: uppercase;
        }

        .footer {
          position: absolute;
          bottom: 50px;
          letter-spacing: 0.4em;
          font-size: 0.7rem;
          color: #444;
        }
      `}</style>
    </div>
  );
}
