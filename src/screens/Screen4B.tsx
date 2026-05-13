import { motion } from 'framer-motion'

interface Props {
  onNext: () => void
}

const screenVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}

export default function Screen4B({ onNext }: Props) {
  return (
    <motion.div
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'absolute',
        inset: 0,
        background: '#0A0B1A',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onClick={onNext}
    >
      {/* Clock */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 120,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 300,
            color: '#FFFFFF',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          7:20 AM
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

      {/* Morning card */}
      <div style={{ width: '100%', padding: '0 20px' }}>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 180, delay: 0.2 }}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 16,
            padding: 20,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <p style={{ fontSize: 13, fontWeight: 600, color: '#FFFFFF', margin: '0 0 8px 0' }}>
            James · Work
          </p>

          <p
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.7)',
              margin: '0 0 12px 0',
              lineHeight: 1.55,
            }}
          >
            Hey — one thought on the deliverable from yesterday — not urgent at all, just wanted to flag before you start...
          </p>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 12 }} />

          {/* Agent draft */}
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Agent draft
          </p>
          <p
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.85)',
              fontStyle: 'italic',
              margin: '0 0 16px 0',
              lineHeight: 1.5,
            }}
          >
            Thanks James — I'll take a look this morning and get back to you.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button
              onClick={(e) => { e.stopPropagation(); onNext() }}
              style={{
                background: '#1259C3',
                color: '#FFFFFF',
                borderRadius: 24,
                padding: '10px 20px',
                fontSize: 13,
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Send reply
            </button>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.8)',
                  borderRadius: 24,
                  padding: '8px 16px',
                  fontSize: 13,
                  border: '1px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  flex: 1,
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.8)',
                  borderRadius: 24,
                  padding: '8px 16px',
                  fontSize: 13,
                  border: '1px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  flex: 1,
                }}
              >
                Read in full
              </button>
            </div>
          </div>

          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', margin: '12px 0 0 0', textAlign: 'center' }}>
            Held from last night · Non-urgent
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
