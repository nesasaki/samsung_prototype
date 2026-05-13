import { motion } from 'framer-motion'
import HomeGrid from '../components/HomeGrid'
import StatusBarLight from '../components/StatusBarLight'

interface Props {
  onNext: () => void
}

const screenVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}

export default function Screen5B({ onNext }: Props) {
  return (
    <motion.div
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'absolute',
        inset: 0,
        background: '#F2F2F7',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StatusBarLight time="6:45 PM" />
      <HomeGrid />

      {/* Floating card */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          width: 340,
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200, delay: 0.05 }}
          style={{
            background: '#FFFFFF',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            borderRadius: 20,
            padding: 20,
          }}
        >
          <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 12px 0' }}>
            Found 2 times that work for most:
          </p>

          {/* Option 1 — recommended */}
          <div
            style={{
              background: 'rgba(18,89,195,0.07)',
              border: '1.5px solid #1259C3',
              borderRadius: 12,
              padding: '12px 14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: '#1259C3' }}>
                Saturday 7:30pm
              </span>
              <span style={{ fontSize: 14, color: '#1259C3' }}>★</span>
            </div>
            <p style={{ fontSize: 11, color: '#1259C3', margin: '4px 0 0 0' }}>
              5 of 6 available · Recommended
            </p>
          </div>

          {/* Option 2 */}
          <div
            style={{
              background: '#F9FAFB',
              border: '1px solid #E5E7EB',
              borderRadius: 12,
              padding: '12px 14px',
              marginTop: 8,
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 600, color: '#374151' }}>
              Sunday 6:00pm
            </span>
            <p style={{ fontSize: 11, color: '#6B7280', margin: '4px 0 0 0' }}>
              4 of 6 available
            </p>
          </div>

          {/* Insight note */}
          <p
            style={{
              fontSize: 11,
              color: '#9CA3AF',
              fontStyle: 'italic',
              margin: '12px 0 0 0',
              lineHeight: 1.5,
            }}
          >
            Based on Alma's calendar conflict, Saturday works better for her.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
            <button
              onClick={(e) => { e.stopPropagation(); onNext() }}
              style={{
                background: '#1259C3',
                color: '#FFFFFF',
                borderRadius: 24,
                padding: '12px 20px',
                fontSize: 14,
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Send Saturday to group
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'transparent',
                color: '#4B5563',
                borderRadius: 24,
                padding: '10px 20px',
                fontSize: 14,
                border: '1px solid #D1D5DB',
                cursor: 'pointer',
                width: '100%',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Send Sunday
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: 14,
                color: '#9CA3AF',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                textAlign: 'center',
              }}
            >
              Pick a different time
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
