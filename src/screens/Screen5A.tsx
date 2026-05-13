import { useEffect } from 'react'
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

export default function Screen5A({ onNext }: Props) {
  useEffect(() => {
    const timer = setTimeout(onNext, 2500)
    return () => clearTimeout(timer)
  }, [onNext])

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
          transform: 'translate(-50%, -50%)',
          width: 340,
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200, delay: 0.1 }}
          style={{
            background: '#FFFFFF',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            borderRadius: 20,
            padding: 20,
          }}
        >
          {/* Processing dots */}
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 16 }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#1259C3',
                }}
              />
            ))}
          </div>

          <p style={{ fontSize: 14, fontWeight: 500, color: '#1C1C1E', textAlign: 'center', margin: '0 0 6px 0' }}>
            College group · 6 people · Checking availability...
          </p>
          <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', margin: 0 }}>
            Reading shared calendars...
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
