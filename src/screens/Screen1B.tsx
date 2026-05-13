import { motion } from 'framer-motion'

interface Props {
  onNext: () => void
}

const screenVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}

export default function Screen1B({ onNext }: Props) {
  return (
    <motion.div
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, #0F1B2D 0%, #000000 100%)',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onClick={onNext}
    >
      {/* Status bar */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 24px 0',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {/* Signal bars */}
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <rect x="0" y="8" width="3" height="4" rx="0.5" fill="white" opacity="0.9" />
            <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill="white" opacity="0.9" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" fill="white" opacity="0.9" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="white" opacity="0.4" />
          </svg>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {/* Battery */}
          <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
            <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="white" strokeOpacity="0.6" />
            <rect x="2" y="2" width="17" height="8" rx="1.5" fill="white" opacity="0.8" />
            <path d="M23.5 4v4a1.5 1.5 0 000-4z" fill="white" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Clock area */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 120,
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            color: '#FFFFFF',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          7:45
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 8,
          }}
        >
          Monday, May 13
        </div>
      </div>

      {/* Lower relationship card */}
      <div style={{ width: '100%', padding: '0 20px 60px 20px' }}>
        <motion.div
          initial={{ height: 120, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ type: 'spring', damping: 22, stiffness: 180, delay: 0.25 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16,
            padding: 16,
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Avatar + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 500,
                color: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              M
            </div>
            <span style={{ fontWeight: 500, color: '#FFFFFF', fontSize: 15 }}>Marcus</span>
          </div>

          {/* Body */}
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, margin: '0 0 6px 0' }}>
            You haven't connected since his move to Austin — 6 weeks ago. He posted about settling in.
          </p>

          {/* Sub-line */}
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: '0 0 12px 0' }}>
            Last message: 6 weeks ago · iMessage · Last call: 2 months ago
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              onClick={(e) => { e.stopPropagation(); onNext() }}
              style={{
                background: '#1259C3',
                borderRadius: 20,
                padding: '6px 16px',
                fontSize: 13,
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Reach out
            </button>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: 13,
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              Later
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
