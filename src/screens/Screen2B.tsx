import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

export default function Screen2B({ onNext }: Props) {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(onNext, 2000)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [showToast, onNext])

  const handleSend = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowToast(true)
  }

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
          transition={{ type: 'spring', damping: 20, stiffness: 200, delay: 0.05 }}
          style={{
            background: '#FFFFFF',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            borderRadius: 20,
            padding: 20,
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            {/* Avatar */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: '#FFD6D6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 600,
                color: '#C0392B',
                flexShrink: 0,
              }}
            >
              P
            </div>
            <span style={{ fontWeight: 600, fontSize: 15, color: '#111827' }}>Priya</span>
            {/* WhatsApp badge */}
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                fontWeight: 700,
                color: '#FFFFFF',
                marginLeft: 2,
              }}
            >
              W
            </div>
          </div>

          {/* Draft message */}
          <p
            style={{
              fontSize: 15,
              color: '#374151',
              lineHeight: 1.55,
              margin: '0 0 16px 0',
            }}
          >
            Hey — just thinking of you. How did Mom's cardiology follow-up go?
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button
              onClick={handleSend}
              style={{
                background: '#1259C3',
                color: '#FFFFFF',
                borderRadius: 24,
                padding: '10px 20px',
                fontSize: 14,
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Send
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'transparent',
                color: '#4B5563',
                borderRadius: 24,
                padding: '8px 16px',
                fontSize: 14,
                border: '1px solid #D1D5DB',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Edit
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
              }}
            >
              Not now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
            style={{
              position: 'absolute',
              bottom: 24,
              left: 16,
              right: 16,
              background: '#1C1C1E',
              borderRadius: 100,
              padding: '12px 20px',
              zIndex: 50,
            }}
          >
            <p style={{ fontSize: 14, color: '#FFFFFF', margin: 0 }}>
              ✓ Sent to Priya · WhatsApp · just now
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
