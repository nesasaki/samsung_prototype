import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StatusBarLight from '../components/StatusBarLight'

interface Props {
  onNext: () => void
}

const screenVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}

export default function Screen6B({ onNext }: Props) {
  const [showPriyaBubble, setShowPriyaBubble] = useState(false)
  const [showRecalibration, setShowRecalibration] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowPriyaBubble(true), 1000)
    const t2 = setTimeout(() => setShowRecalibration(true), 2500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <motion.div
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'absolute',
        inset: 0,
        background: '#FFFFFF',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StatusBarLight time="9:50 PM" />

      {/* Conversation header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '6px 16px 10px',
          borderBottom: '1px solid #F3F4F6',
          gap: 10,
        }}
      >
        <span style={{ fontSize: 20, color: '#1C1C1E', cursor: 'pointer' }}>‹</span>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: '#E8D5F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
            fontWeight: 600,
            color: '#7C3AED',
            flexShrink: 0,
          }}
        >
          P
        </div>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#1C1C1E', flex: 1 }}>Priya</span>
        <span style={{ fontSize: 18, color: '#6B7280', cursor: 'pointer' }}>📹</span>
        <span style={{ fontSize: 18, color: '#6B7280', cursor: 'pointer', marginLeft: 4 }}>📞</span>
      </div>

      {/* Conversation area */}
      <div style={{ flex: 1, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Maya's bubble (right aligned) */}
        <motion.div
          initial={{ opacity: 0, y: 10, x: 10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <div
            style={{
              background: '#1259C3',
              color: '#FFFFFF',
              borderRadius: '18px 18px 4px 18px',
              padding: '10px 14px',
              maxWidth: '75%',
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            Hey — just checking in. How are you doing? Felt like things were a bit heavy in your last few messages.
          </div>
        </motion.div>

        {/* Priya's bubble (left aligned) */}
        <AnimatePresence>
          {showPriyaBubble && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              <div
                style={{
                  background: '#F2F2F7',
                  color: '#1C1C1E',
                  borderRadius: '18px 18px 18px 4px',
                  padding: '10px 14px',
                  maxWidth: '75%',
                  fontSize: 14,
                  lineHeight: 1.5,
                }}
              >
                Haha I'm good!! That was just the big proposal deadline. All done now. How are YOU?
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom section */}
      <div style={{ paddingBottom: 4 }}>
        {/* 6C Recalibration card */}
        <AnimatePresence>
          {showRecalibration && (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 220 }}
              style={{
                background: 'rgba(10,132,255,0.07)',
                borderLeft: '2px solid #60A5FA',
                borderRadius: 12,
                padding: 14,
                margin: '0 16px 10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ fontSize: 13, color: '#60A5FA', flexShrink: 0, marginTop: 1 }}>↺</span>
                <p style={{ fontSize: 13, color: '#374151', margin: 0, lineHeight: 1.5, flex: 1 }}>
                  Looks like things are good with Priya — my read was off. I'll update her context.
                </p>
                <button
                  onClick={(e) => { e.stopPropagation(); onNext() }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: 12,
                    color: '#6B7280',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    flexShrink: 0,
                    padding: 0,
                  }}
                >
                  OK
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Keyboard placeholder */}
        <div
          style={{
            background: '#F3F4F6',
            borderRadius: 16,
            height: 48,
            margin: '0 16px 16px',
          }}
        />
      </div>
    </motion.div>
  )
}
