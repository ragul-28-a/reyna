import React from 'react';
import { ClipboardCheck, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ExecutionProcess() {
  const steps = [
    {
      stepNumber: '01',
      title: 'STEP 1 – Project Planning & Engineering',
      desc: 'Thoroughly understand client requirements, assess site wind/soil parameters, discuss budget constraints, and prepare FEA structural drawings & rig plans.',
      points: [
        'Understand customer requirement & site constraints',
        '3D STAAD.Pro structural analysis & budget optimization',
        'Prepare technical rig scheme & galvanizing specs'
      ]
    },
    {
      stepNumber: '02',
      title: 'STEP 2 – Approval & Construction',
      desc: 'Share detailed engineering layouts with client technical auditors, obtain formal approval, and deploy certified riggers, engineers, & equipment.',
      points: [
        'Share planning & structural layout with client engineers',
        'Obtain formal quality & safety sign-off',
        'Assign specialized ISO 45001 high-altitude rigging team'
      ]
    },
    {
      stepNumber: '03',
      title: 'STEP 3 – Finishing & Delivery',
      desc: 'Complete fabrication, hot-dip galvanizing, up-tower replacement, or site erection according to BIS & CE standards with full warranty support.',
      points: [
        'Complete project under strict quality control',
        'Deliver according to IS 2062 / ASTM A123 standards',
        'Issue third-party test certificates & ongoing support'
      ]
    }
  ];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#0F172A', color: '#FFFFFF' }}>
      <div className="container">
        
        <span className="section-subtitle" style={{ color: '#F59E0B' }}>Project Execution Standard</span>
        <h2 className="section-title" style={{ color: '#FFFFFF' }}>3-Step Engineering Workflow</h2>
        <p className="section-desc" style={{ color: '#94A3B8' }}>
          How Reyna India handles client projects from initial requirement analysis to site commissioning and structural warranty.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {steps.map((st, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#1E293B',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                borderRadius: '12px',
                padding: '2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: '#F59E0B',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '1rem',
                  opacity: 0.9
                }}>
                  {st.stepNumber}
                </span>

                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  {st.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {st.desc}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {st.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#94A3B8' }}>
                      <CheckCircle2 size={16} color="#06B6D4" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '0.75rem',
                fontSize: '0.8rem',
                color: '#F59E0B',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}>
                <ShieldCheck size={16} /> ISO Quality Protocol Enforced
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
