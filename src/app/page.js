'use client';
import { useEffect, useState } from 'react';

export default function AyuSphereDigitalDeck() {
  const [pulseValue, setPulseValue] = useState(72);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseValue(prev => {
        const nextValue = prev + (Math.random() * 4 - 2);
        return Math.floor(Math.min(78, Math.max(68, nextValue)));
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ letterSpacing: '0.02em' }}>
      <div className="bg-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>

      <nav>
        <div className="logo">
          <div className="logo-dot"></div>
          <span style={{ fontWeight: '800' }}>AYU</span><span style={{ color: 'var(--primary)', fontWeight: '200' }}>SPHERE</span>
          <span style={{fontSize: '0.5rem', color: '#666', letterSpacing: '0.2rem', marginLeft: '15px'}}>VENTURE PROPOSAL</span>
        </div>
        <div style={{ display: 'flex', gap: '3rem' }}>
          <a href="#problem" className="text-soft" style={{ fontSize: '0.65rem', textDecoration: 'none', letterSpacing: '0.2rem', fontWeight: '600' }}>THE PROBLEM</a>
          <a href="#solution" className="text-soft" style={{ fontSize: '0.65rem', textDecoration: 'none', letterSpacing: '0.2rem', fontWeight: '600' }}>THE SOLUTION</a>
          <a href="#financials" className="text-soft" style={{ fontSize: '0.65rem', textDecoration: 'none', letterSpacing: '0.2rem', fontWeight: '600' }}>THE VENTURE</a>
        </div>
      </nav>

      {/* SLIDE 01: Title & Vision */}
      <section className="reveal" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="asymmetric-grid">
            <div style={{ paddingRight: '2.5rem' }}>
              <span className="eyebrow" style={{ color: 'var(--secondary)' }}>Wadhwani Foundation Project</span>
              <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', marginBottom: '3.5rem', fontWeight: '200' }}>
                <span className="gradient-text">AYU</span><br/><span style={{ fontWeight: '800' }}>SPHERE</span>
              </h1>
              <p style={{ fontSize: '1.1rem', maxWidth: '500px', lineHeight: '1.8', color: '#888', marginBottom: '4rem' }}>
                A premium digital healthcare infrastructure revolutionizing <span style={{ color: 'white', fontWeight: '600' }}>cardiac triage</span> through IoT and Clinical-Grade AI.
              </p>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="#solution" className="btn-luxury">Explore Solution</a>
                <div style={{ fontSize: '0.65rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2rem', fontWeight: '800' }}>VIABILITY: 91.11%</div>
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
               <div className="luxury-card" style={{ border: '1px solid rgba(0,242,255,0.1)', background: 'rgba(5,5,5,0.4)' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.4rem', color: 'var(--primary)', marginBottom: '3rem', textTransform: 'uppercase', textAlign: 'center', opacity: 0.8 }}>Live Biometric Logic</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '7.5rem', fontWeight: '200', letterSpacing: '-0.02em', lineHeight: 1, color: 'white', textShadow: '0 0 30px rgba(0,242,255,0.3)' }}>
                      {pulseValue}<span style={{ fontSize: '1.2rem', letterSpacing: '0.2rem', color: 'var(--primary)', marginLeft: '12px', fontWeight: '800' }}>BPM</span>
                    </div>
                    <div style={{ height: '2px', width: '60px', background: 'linear-gradient(90deg, transparent, var(--primary), transparent)', margin: '3.5rem auto' }}></div>
                    <p style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', maxWidth: '300px', margin: '0 auto', lineHeight: '1.8' }}>
                      Deep learning simulation: Neural Pattern recognition of heart rate variability.
                    </p>
                  </div>
               </div>
               {/* Decorative Element */}
               <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px', height: '40px', borderTop: '2px solid var(--primary)', borderRight: '2px solid var(--primary)' }}></div>
               <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', width: '40px', height: '40px', borderBottom: '2px solid var(--secondary)', borderLeft: '2px solid var(--secondary)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 02: Problem & Risk Context */}
      <section id="problem" style={{ background: 'linear-gradient(to bottom, #050505, #0a0a0a)', padding: '12rem 0' }}>
        <div className="container">
          <div className="asymmetric-grid">
            <div>
               <span className="eyebrow" style={{ color: 'var(--accent)' }}>Slide 02: Market Tension</span>
               <h2 style={{ fontSize: '5rem', marginBottom: '3rem' }}><span className="gradient-text">1 : 811</span></h2>
               <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: '2', maxWidth: '540px' }}>
                 India faces a staggering doctor-patient ratio of 1:811. Over 50% of the population relies on self-diagnosis—a high-risk healthcare behavior AyuSphere is designed to eliminate.
               </p>
            </div>
            <div style={{ paddingLeft: '4rem' }}>
               <div className="luxury-card" style={{ background: 'rgba(255,255,255,0.02)', border: 'none', padding: '4rem' }}>
                  <h4 style={{ color: 'white', marginBottom: '2.5rem', letterSpacing: '0.2rem', fontSize: '0.8rem' }}>KEY DRIVERS</h4>
                  <ul style={{ listStyle: 'none', color: '#666', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <li><b style={{color: 'var(--primary)', marginRight: '10px'}}>+</b> <b style={{color: '#aaa'}}>Infrastructure Gap:</b> Specialized cardiac care shortage.</li>
                    <li><b style={{color: 'var(--secondary)', marginRight: '10px'}}>+</b> <b style={{color: '#aaa'}}>Self-Medication:</b> Fatal risks of digital misinformation.</li>
                    <li><b style={{color: 'var(--accent)', marginRight: '10px'}}>+</b> <b style={{color: '#aaa'}}>Rural Isolation:</b> Low-resource area accessibility.</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 03: Solution & Technical Methodology */}
      <section id="solution" className="container" style={{ padding: '12rem 0' }}>
         <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
            <span className="eyebrow">Slide 03: Operational Logic</span>
            <h2 style={{ fontSize: '4rem', fontWeight: '800' }}>SCIENTIFIC <span style={{ fontWeight: '200' }}>METHODOLOGY</span></h2>
         </div>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { id: '01', title: 'Data Acquisition', desc: 'Hardware sensors capture pulse biometrics, synced via ThingSpeak MQTT protocols.', color: 'var(--primary)' },
              { id: '02', title: 'LSTM Recognition', desc: 'Neural networks identify cardiac anomalies (Arrhythmia) with surgical precision.', color: 'var(--secondary)' },
              { id: '03', title: 'RAG Interaction', desc: 'Medical-LLM providing vetted guidance and pharmacy geolocating.', color: 'var(--accent)' }
            ].map(item => (
              <div key={item.id} className="luxury-card" style={{ padding: '4rem', borderTop: `4px solid ${item.color}` }}>
                 <div style={{ fontSize: '2.5rem', fontWeight: '800', color: item.color }}>{item.id}_</div>
                 <h3 style={{ fontSize: '1.2rem', margin: '2rem 0', fontWeight: '800' }}>{item.title.toUpperCase()}</h3>
                 <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: '2' }}>{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* SLIDE 04: Competitive Advantage & 4P's */}
      <section style={{ background: 'rgba(255,255,255,0.01)', padding: '12rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '8rem', alignItems: 'start' }}>
             <div>
                <span className="eyebrow">Slide 04: Strategic Marketing</span>
                <h2 style={{ fontSize: '4rem', marginBottom: '4rem' }}>THE MARKETING <span style={{ fontWeight: '200' }}>MIX</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    {[
                      { p: 'Product', d: 'AyuSphere Ecosystem: Mobile App + IoT Integration.', c: 'var(--primary)' },
                      { p: 'Price', d: 'Subscription Model: ₹99/mo (Freemium Strategy).', c: 'var(--secondary)' },
                      { p: 'Place', d: 'Dual Presence: Digital Stores & Hospital Partners.', c: 'var(--accent)' },
                      { p: 'Promotion', d: 'Influencer Campaigns & Clinical Awareness.', c: 'white' }
                    ].map(item => (
                      <div key={item.p} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2rem' }}>
                        <h5 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.5rem', color: item.c }}>{item.p.toUpperCase()}</h5>
                        <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>{item.d}</p>
                      </div>
                    ))}
                </div>
             </div>
             <div className="luxury-card" style={{ background: 'rgba(112,0,255,0.05)', borderColor: 'rgba(112,0,255,0.2)' }}>
                <span className="eyebrow">Strategic Edge</span>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', fontWeight: '800' }}>COMPETITIVE MATRIX</h4>
                <div style={{ fontSize: '0.9rem', color: '#aaa', lineHeight: '2' }}>
                  AyuSphere bridges the gap where traditional hospital apps fail—combining <b style={{color: 'var(--primary)'}}>AI-driven accuracy</b> with <b style={{color: 'var(--secondary)'}}>cost-effectiveness</b>. Our ₹99 entry point creates an 85% cost-advantage over existing models.
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SLIDE 05: Financial Projections & Profits */}
      <section id="financials" style={{ padding: '12rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '8rem' }}>
            <span className="eyebrow">Slide 05: Venture Economics</span>
            <h2 style={{ fontSize: '4rem' }}>FINANCIAL <span style={{ fontWeight: '200' }}>ARCHITECTURE</span></h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
             {[
               { phase: 'Year 01', rev: '₹8,00,000', profit: '₹2,00,000', context: 'MVP & Market Entry', color: 'var(--primary)' },
               { phase: 'Year 02', rev: '₹25,00,000', profit: '₹10,00,000', context: 'Expansion & Service Fees', color: 'var(--secondary)' },
               { phase: 'Year 03', rev: '₹75,00,000', profit: '₹30,00,000', context: 'Institutional Integration', color: 'var(--accent)' }
             ].map(item => (
               <div key={item.phase} style={{ background: '#050505', padding: '6rem 4.5rem', transition: 'all 0.4s ease' }} className="hover-light">
                  <span className="eyebrow" style={{ color: item.color, marginBottom: '2.5rem' }}>{item.phase}</span>
                  <div style={{ fontSize: '0.6rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '1rem' }}>Revenue Projection</div>
                  <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2.5rem', color: 'white' }}>{item.rev}</div>
                  <div style={{ fontSize: '0.6rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '1rem' }}>Net Profit</div>
                  <div style={{ fontSize: '2rem', fontWeight: '200', color: item.color }}>{item.profit}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Slide 06: Social Mandate & Team */}
      <section style={{ background: '#000', padding: '15rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
           <span className="eyebrow" style={{ color: 'var(--primary)' }}>Slide 06: The Mission</span>
           <h2 style={{ fontSize: '5rem', marginBottom: '3.5rem' }}><span className="gradient-text">HEALTH FOR ALL</span></h2>
           <p style={{ color: '#666', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 8rem', lineHeight: '2' }}>
             Empowering rural and semi-urban communities with self-diagnostic clarity and bridging the gap in institutional healthcare access.
           </p>
           
           <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '8rem' }}>
              {['Uppala Ganesh', 'T. Akhil Kumar', 'U. Sai Dhanush', 'P. Spandana'].map(name => (
                <span key={name} style={{ fontSize: '1rem', fontWeight: '800', letterSpacing: '0.4rem', textTransform: 'uppercase', color: 'white' }}>{name}</span>
              ))}
           </div>
           
           <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)', width: '200px', margin: '0 auto 5rem' }}></div>
           <p style={{ fontSize: '0.65rem', color: '#444', letterSpacing: '0.7rem', textTransform: 'uppercase' }}>
             SUPPORTED BY WADHWANI FOUNDATION • KALASALINGAM UNIVERSITY • &copy; 2026 AYUSPHERE
           </p>
        </div>
      </section>
    </main>
  );
}
