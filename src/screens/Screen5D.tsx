import { motion } from 'framer-motion'
import StatusBarLight from '../components/StatusBarLight'

interface Props {
  onNext: () => void
}

const screenVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}

export default function Screen5D({ onNext }: Props) {
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
      onClick={onNext}
    >
      <StatusBarLight time="6:47 PM" />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 340,
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 18, stiffness: 200, delay: 0.05 }}
          style={{
            background: '#FFFFFF',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            borderRadius: 20,
            padding: 24,
            textAlign: 'center',
          }}
        >
          {/* Green checkmark */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 260, delay: 0.3 }}
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: '#DCFCE7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                color: '#16A34A',
              }}
            >
              ✓
            </motion.div>
          </div>

          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
            Dinner booked
          </h2>

          <p style={{ fontSize: 15, fontWeight: 500, color: '#1259C3', margin: '0 0 8px 0' }}>
            Saturday 7:30pm
          </p>

          <p style={{ fontSize: 13, color: '#4B5563', margin: '0 0 4px 0' }}>
            Luca's Osteria · 127 Bedford Ave
          </p>

          <p style={{ fontSize: 12, color: '#9CA3AF', margin: '0 0 4px 0' }}>
            Reservation under Maya · Party of 6
          </p>

          <p style={{ fontSize: 11, color: '#D1D5DB', margin: '0 0 20px 0', lineHeight: 1.5 }}>
            Directions sent to each person based on their location
          </p>

          <button
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'transparent',
              border: '1px solid #D1D5DB',
              borderRadius: 24,
              padding: '8px 20px',
              fontSize: 13,
              color: '#4B5563',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            View details
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}
