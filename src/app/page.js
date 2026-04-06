'use client';
import { useEffect, useState } from 'react';

export default function HealixAbout() {
  const [pulseValue, setPulseValue] = useState(72);

  // Pulse animation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseValue(prev => {
        const nextValue = prev + (Math.random() * 4 - 2);
        return Math.floor(Math.min(maxPulse, Math.max(minPulse, nextValue)));
      });
    }, 1000);
    const minPulse = 68;
    const maxPulse = 78;
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Background Glows */}
      <div className="bg-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="logo">
          <div className="logo-dot"></div>
          HEALIX
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#features" className="team-badge" style={{ textDecoration: 'none', background: 'transparent', border: 'none', color: '#666' }}>Features</a>
          <a href="#team" className="team-badge" style={{ textDecoration: 'none', background: 'transparent', border: 'none', color: '#666' }}>Team</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="reveal" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1>HEALIX</h1>
            <p className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '1rem', letterSpacing: '0.1rem' }}>
              SMART PULSE MONITORING & AI-POWERED HEALTH SUPPORT
            </p>
          </div>

          {/* Pulse Simulation Display */}
          <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <div className="pulse-line" style={{ position: 'absolute', top: '50%', left: '0' }}></div>
            <div style={{ marginBottom: '1rem', color: '#94a3b8', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.2rem' }}>Live Simulation Reading</div>
            <div style={{ fontSize: '5rem', fontWeight: '800', fontFamily: 'monospace', color: '#ef4444', textShadow: '0 0 20px rgba(239, 68, 68, 0.4)' }}>
              {pulseValue} <span style={{ fontSize: '1.5rem', color: '#666' }}>BPM</span>
            </div>
            <p style={{ marginTop: '1rem', color: '#94a3b8' }}>
              Simultaneously leveraging <b style={{ color: 'var(--primary)' }}>IoT</b>, <b style={{ color: 'var(--primary)' }}>LSTM Models</b>, and <b style={{ color: 'var(--primary)' }}>RAG Chatbots</b>.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Why Section */}
      <section id="features" className="container" style={{ paddingTop: '2rem' }}>
        <div className="features-grid">
          <div className="glass-card">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }} className="gradient-text">The Problem</h3>
            <p style={{ color: '#94a3b8' }}>
              Elderly and rural families lack access to continuous health monitoring. Sudden heart-related issues often go unnoticed due to slow response times or the absence of live pulse data.
            </p>
          </div>
          <div className="glass-card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }} className="gradient-text">Our Solution</h3>
            <p style={{ color: '#94a3b8' }}>
              Healix provides real-time pulse measurement via specialized IoT sensors combined with an AI-driven support system that offers instant medical guidance when anomalies are detected.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Icons Grid */}
      <section className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>How It Works</h2>
        <div className="features-grid">
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📟</div>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>IoT Monitoring</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Embedded sensors collect precise pulse data continuously.</p>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>LSTM Analysis</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>Predictive models identify abnormal level shifts before emergencies happen.</p>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>RAG Chatbot</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>AI-powered support system trained on medical knowledge for instant guidance.</p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '6rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>Who Is It For?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Elderly Citizens</div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Continuous supervision for those living independently.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Heart Patients</div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Periodic monitoring following hospital discharge.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Rural Communities</div>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Instant medical guidance where doctors are far away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container" style={{ textAlign: 'center', paddingBottom: '10rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Visionaries</h2>
        <p style={{ color: '#666', marginBottom: '3rem' }}>Department of Computer Science & Engineering</p>
        <div className="team-list" style={{ justifyContent: 'center' }}>
          <span className="team-badge">T. Akhil Kumar</span>
          <span className="team-badge">P. Spandana</span>
          <span className="team-badge">U. Ganesh</span>
          <span className="team-badge">U. Sai Dhanush</span>
        </div>
        <div style={{ marginTop: '4rem', color: '#333', fontSize: '0.8rem', letterSpacing: '0.1rem' }}>
          &copy; 2026 HEALIX HEALTH • BUILT FOR A HEALTHIER TOMORROW
        </div>
      </section>

      {/* Style overrides for custom elements in page.js */}
      <style jsx>{`
        a:hover {
          color: white !important;
        }
      `}</style>
    </main>
  );
}
