import { motion } from 'framer-motion'

interface Props {
  onNext: () => void
}

const screenVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}

export default function Screen4A({ onNext }: Props) {
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
      {/* Clock area */}
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
          11:02 PM
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 8,
          }}
        >
          Sunday, May 12
        </div>
      </div>

      {/* Held notification card */}
      <div style={{ width: '100%', padding: '0 20px 80px 20px' }}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 180, delay: 0.3 }}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            padding: 16,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hold icon + title row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 16, color: '#4B5563' }}>⏸</span>
            <span style={{ fontSize: 15, fontWeight: 500, color: '#FFFFFF' }}>
              1 message held until morning
            </span>
          </div>

          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 4px 0' }}>
            James · Work
          </p>

          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', margin: 0, lineHeight: 1.5 }}>
            Non-urgent · You're in wind-down · Will surface at wake
          </p>

          <button
            style={{
              marginTop: 12,
              background: 'transparent',
              border: 'none',
              fontSize: 11,
              color: 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'Inter, sans-serif',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            Show now
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}
