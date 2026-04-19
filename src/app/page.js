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
      </div>

      <nav>
        <div className="logo">
          <div className="logo-dot"></div>
          AYUSPHERE <span style={{fontSize: '0.6rem', color: '#aaa', letterSpacing: '0.1rem', marginLeft: '10px'}}>VENTURE PROPOSAL</span>
        </div>
        <div style={{ display: 'flex', gap: '3rem' }}>
          <a href="#problem" className="text-soft" style={{ fontSize: '0.7rem', textDecoration: 'none', letterSpacing: '0.2rem' }}>THE PROBLEM</a>
          <a href="#solution" className="text-soft" style={{ fontSize: '0.7rem', textDecoration: 'none', letterSpacing: '0.2rem' }}>THE SOLUTION</a>
          <a href="#financials" className="text-soft" style={{ fontSize: '0.7rem', textDecoration: 'none', letterSpacing: '0.2rem' }}>THE VENTURE</a>
        </div>
      </nav>

      {/* SLIDE 01: Title & Vision */}
      <section className="reveal" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
        <div className="container">
          <div className="asymmetric-grid">
            <div style={{ paddingRight: '2.5rem' }}>
              <span className="eyebrow" style={{ letterSpacing: '0.5em' }}>Wadhwani Foundation Project</span>
              <h1 style={{ fontSize: 'clamp(3.5rem, 12vw, 8.5rem)', marginBottom: '3.5rem', fontWeight: '200' }}>
                AYU<br/><span style={{ fontWeight: '400' }}>SPHERE</span>
              </h1>
              <p style={{ fontSize: '1.2rem', maxWidth: '560px', lineHeight: '2', color: '#555', marginBottom: '4rem' }}>
                A premium digital healthcare infrastructure revolutionizing cardiac triage through IoT and Clinical-Grade AI.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <a href="#solution" className="btn-luxury">Explore Solution</a>
                <div style={{ fontSize: '0.7rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2rem' }}>VIABILITY: 91.11%</div>
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
               <div className="luxury-card" style={{ borderRadius: '0', border: '1px solid #eee', background: 'white', padding: '5rem' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.4rem', color: '#bbb', marginBottom: '3rem', textTransform: 'uppercase', textAlign: 'center' }}>Live Biometric Logic</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '7.5rem', fontWeight: '200', letterSpacing: '-0.02em', lineHeight: 1, color: '#111' }}>
                      {pulseValue}<span style={{ fontSize: '1rem', letterSpacing: '0.2rem', color: '#999', marginLeft: '12px', fontWeight: '600' }}>BPM</span>
                    </div>
                    <div style={{ height: '1px', width: '50px', background: '#111', margin: '3.5rem auto' }}></div>
                    <p style={{ fontSize: '0.8rem', color: '#888', fontStyle: 'italic', maxWidth: '300px', margin: '0 auto', lineHeight: '1.8' }}>
                      Deep learning simulation: Analyzing Heart Rate Variability for predictive arrhythmia detection.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 02: Problem & Risk Context */}
      <section id="problem" style={{ background: '#111', color: 'white', padding: '12rem 0' }}>
        <div className="container">
          <div className="asymmetric-grid">
            <div>
               <span className="eyebrow" style={{ color: '#444' }}>Slide 02: Market Tension</span>
               <h2 style={{ fontSize: '4.5rem', color: 'white', marginBottom: '3rem' }}>1 : 811</h2>
               <p style={{ color: '#777', fontSize: '1.3rem', lineHeight: '2', maxWidth: '540px' }}>
                 India faces a staggering doctor-patient ratio of 1:811. Over 50% of the population relies on self-diagnosis—a high-risk healthcare behavior AyuSphere is designed to eliminate.
               </p>
            </div>
            <div style={{ paddingLeft: '4rem' }}>
               <div className="luxury-card" style={{ background: '#1a1a1a', border: 'none', padding: '4rem' }}>
                  <h4 style={{ color: 'white', marginBottom: '2.5rem', letterSpacing: '0.1rem' }}>KEY DRIVERS</h4>
                  <ul style={{ listStyle: 'none', color: '#666', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <li><b style={{color: '#aaa'}}>Infrastructure Gap:</b> Insufficient specialized cardiac care centers.</li>
                    <li><b style={{color: '#aaa'}}>Self-Medication:</b> Fatal risks due to online symptom searching.</li>
                    <li><b style={{color: '#aaa'}}>Rural Isolation:</b> Critical healthcare services unavailable in low-resource areas.</li>
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
            <h2 style={{ fontSize: '3.5rem', fontWeight: '200' }}>Scientific Methodology</h2>
         </div>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
            {[
              { id: '01', title: 'Data Acquisition', desc: 'Hardware sensors capture pulse biometrics, synced via ThingSpeak MQTT protocols.' },
              { id: '02', title: 'LSTM Recognition', desc: 'Neural networks identify cardiac anomalies (Arrhythmia) with surgical precision.' },
              { id: '03', title: 'RAG Interaction', desc: 'Medical-LLM providing vetted guidance and pharmacy geolocating.' }
            ].map(item => (
              <div key={item.id} style={{ padding: '4rem', background: '#faf9f6', border: '1px solid #eee' }}>
                 <div style={{ fontSize: '2rem', fontWeight: '200', color: '#111' }}>{item.id}_</div>
                 <h3 style={{ fontSize: '1.2rem', margin: '2rem 0', fontWeight: '600', letterSpacing: '0.05rem' }}>{item.title.toUpperCase()}</h3>
                 <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: '2' }}>{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* SLIDE 04: Competitive Advantage & 4P's */}
      <section style={{ background: '#faf9f6', padding: '12rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '8rem', alignItems: 'start' }}>
             <div>
                <span className="eyebrow">Slide 04: Strategic Marketing</span>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '4rem' }}>The Marketing Mix (4Ps)</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    {[
                      { p: 'Product', d: 'AyuSphere Ecosystem: Mobile App + IoT Integration.' },
                      { p: 'Price', d: 'Subscription Model: ₹99/mo (Freemium Strategy).' },
                      { p: 'Place', d: 'Dual Presence: Digital Stores & Hospital Partners.' },
                      { p: 'Promotion', d: 'Influencer Campaigns & Clinical Awareness Programs.' }
                    ].map(item => (
                      <div key={item.p} style={{ borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                        <h5 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.5rem' }}>{item.p.toUpperCase()}</h5>
                        <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: '1.6' }}>{item.d}</p>
                      </div>
                    ))}
                </div>
             </div>
             <div className="luxury-card" style={{ background: 'white', padding: '4rem' }}>
                <span className="eyebrow">Competitive Matrix</span>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', fontWeight: '400' }}>Strategic Edge</h4>
                <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: '2' }}>
                  AyuSphere bridges the gap where traditional hospital apps fail—combining **AI-driven accuracy** with **low-resource accessibility**. Our ₹99 entry point creates an 85% cost-advantage over traditional private tele-health services.
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
            <h2 style={{ fontSize: '3.5rem' }}>Financial Architecture</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#eee', border: '1px solid #eee' }}>
             {[
               { phase: 'Year 01', rev: '₹8,00,000', profit: '₹2,00,000', context: 'MVP & Market Entry' },
               { phase: 'Year 02', rev: '₹25,00,000', profit: '₹10,00,000', context: 'Expansion & Service Fees' },
               { phase: 'Year 03', rev: '₹75,00,000', profit: '₹30,00,000', context: 'Institutional Integration' }
             ].map(item => (
               <div key={item.phase} style={{ background: 'white', padding: '6rem 4.5rem' }}>
                  <span className="eyebrow" style={{ color: '#d4a373', marginBottom: '1.5rem' }}>{item.phase}</span>
                  <div style={{ fontSize: '0.6rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '0.8rem' }}>Revenue Projection</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: '200', marginBottom: '2.5rem' }}>{item.rev}</div>
                  <div style={{ fontSize: '0.6rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '0.8rem' }}>Net Profit</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '400', color: '#111' }}>{item.profit}</div>
                  <p style={{ marginTop: '3rem', fontSize: '0.7rem', color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.15rem' }}>{item.context}</p>
               </div>
             ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '8rem', marginTop: '12rem' }}>
             <div>
                <span className="eyebrow">Monthly Operations</span>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: '400' }}>Budget Allocation</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {[
                      { l: 'Team Sustenance', v: '₹1,20,000', d: 'Medical Safety & Engineering Salaries.' },
                      { l: 'Marketing Efficiency', v: '₹50,000', d: 'Targeting 500 new user conversions monthly.' },
                      { l: 'Tech Infrastructure', v: '₹15,000', d: 'Cloud, IoT, and RAG Compute Costs.' }
                    ].map(item => (
                      <div key={item.l}>
                         <h5 style={{ fontSize: '0.9rem', fontWeight: '800' }}>{item.l} • <span style={{fontWeight: '200'}}>{item.v}</span></h5>
                         <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.5rem' }}>{item.d}</p>
                      </div>
                    ))}
                </div>
             </div>
             <div>
                <div className="luxury-card" style={{ background: '#faf9f6', border: 'none', padding: '5rem' }}>
                  <span className="eyebrow">Presentation Roadmap</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginTop: '3.5rem' }}>
                     {[
                       { t: 'Months 0-3', m: 'MVP VALIDATION', d: 'Core algorithm testing and problem-fit verification.' },
                       { t: 'Months 3-6', m: 'CLINICAL BETA', d: 'Deployment in 5+ partner urban clinics.' },
                       { t: 'Months 6-12', m: 'COMMERCIAL SCALE', d: 'Full GTM launch across App Stores and Hospital backends.' }
                     ].map(item => (
                       <div key={item.t} style={{ position: 'relative', paddingLeft: '3.5rem', borderLeft: '1px solid #111' }}>
                          <div style={{ position: 'absolute', left: '-5.5px', top: '0', width: '10px', height: '10px', background: '#111', borderRadius: '50%' }}></div>
                          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#d4a373' }}>{item.t.toUpperCase()}</div>
                          <h5 style={{ fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', marginTop: '0.5rem' }}>{item.m}</h5>
                          <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>{item.d}</p>
                       </div>
                     ))}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Slide 06: Social Mandate & Team */}
      <section style={{ background: '#111', color: 'white', padding: '15rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
           <span className="eyebrow" style={{ color: '#444' }}>Slide 06: The Mission</span>
           <h2 style={{ fontSize: '4.5rem', color: 'white', marginBottom: '3.5rem' }}>HEALTH FOR ALL</h2>
           <p style={{ color: '#666', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 8rem', lineHeight: '2' }}>
             Empowering rural and semi-urban communities with self-diagnostic clarity and bridging the gap in institutional healthcare access.
           </p>
           
           <div style={{ display: 'flex', gap: '3.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '8rem' }}>
              {['Uppala Ganesh', 'T. Akhil Kumar', 'U. Sai Dhanush', 'P. Spandana'].map(name => (
                <span key={name} style={{ fontSize: '1.3rem', fontWeight: '200', letterSpacing: '0.4rem', textTransform: 'uppercase' }}>{name}</span>
              ))}
           </div>
           
           <div style={{ height: '1px', background: '#222', width: '200px', margin: '0 auto 5rem' }}></div>
           <p style={{ fontSize: '0.65rem', color: '#444', letterSpacing: '0.7rem', textTransform: 'uppercase' }}>
             SUPPORTED BY WADHWANI FOUNDATION • KALASALINGAM UNIVERSITY • &copy; 2026 AYUSPHERE
           </p>
        </div>
      </section>
    </main>
  );
}
