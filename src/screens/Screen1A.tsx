import { motion } from 'framer-motion'

interface Props {
  onNext: () => void
}

const screenVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}

export default function Screen1A({ onNext }: Props) {
  return (
    <motion.div
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'absolute',
        inset: 0,
        background: '#000000',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onClick={onNext}
    >
      {/* Clock area - upper third */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 160,
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

      {/* Lower-third relationship card */}
      <div style={{ width: '100%', padding: '0 20px 60px 20px' }}>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200, delay: 0.3 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16,
            padding: 16,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Avatar + name row */}
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

          {/* Body text */}
          <p
            style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.5,
              margin: 0,
              marginBottom: 12,
            }}
          >
            You haven't connected since his move to Austin — 6 weeks ago. He posted about settling in.
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
