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

export default function Screen2A({ onNext }: Props) {
  useEffect(() => {
    const timer = setTimeout(onNext, 2000)
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
      <StatusBarLight time="8:30 AM" />
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

          <p style={{ fontSize: 13, color: '#6B7280', textAlign: 'center', margin: 0 }}>
            Priya · WhatsApp · last thread: 11 days ago
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
