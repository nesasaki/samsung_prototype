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

const members = [
  { initial: 'A', name: 'Alma', color: '#FDE68A', textColor: '#92400E' },
  { initial: 'M', name: 'Marcus', color: '#BFDBFE', textColor: '#1E40AF' },
  { initial: 'L', name: 'Lena', color: '#D1FAE5', textColor: '#065F46' },
  { initial: 'C', name: 'Chris', color: '#FCE7F3', textColor: '#9D174D' },
  { initial: 'J', name: 'Jay', color: '#EDE9FE', textColor: '#5B21B6' },
  { initial: 'N', name: 'Nadia', color: '#FEE2E2', textColor: '#991B1B' },
]

export default function Screen5C({ onNext }: Props) {
  const [confirmedCount, setConfirmedCount] = useState(2) // Alma and Marcus confirmed immediately
  const [allDone, setAllDone] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    // Stagger remaining 4 confirmations: Lena 500ms, Chris 1000ms, Jay 1500ms, Nadia 2000ms
    timers.push(setTimeout(() => setConfirmedCount(3), 500))
    timers.push(setTimeout(() => setConfirmedCount(4), 1000))
    timers.push(setTimeout(() => setConfirmedCount(5), 1500))
    timers.push(setTimeout(() => setConfirmedCount(6), 2000))
    timers.push(setTimeout(() => setAllDone(true), 2500))
    timers.push(setTimeout(() => onNext(), 3000))
    return () => timers.forEach(clearTimeout)
  }, [onNext])

  const waitingCount = 6 - confirmedCount

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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StatusBarLight time="6:46 PM" />

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
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            borderRadius: 20,
            padding: 20,
          }}
        >
          {/* Status text */}
          <motion.p
            key={confirmedCount}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 14, fontWeight: 500, color: '#374151', margin: '0 0 16px 0', textAlign: 'center' }}
          >
            {allDone
              ? 'All confirmed!'
              : waitingCount > 0
              ? `Sent to 6 people · Waiting on ${waitingCount}...`
              : 'Sent to 6 people · Waiting for confirmations'}
          </motion.p>

          {/* Avatar roster */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
            {members.map((member, idx) => (
              <div key={member.initial} style={{ position: 'relative', width: 36, height: 36 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: member.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 600,
                    color: member.textColor,
                  }}
                >
                  {member.initial}
                </div>
                <AnimatePresence>
                  {confirmedCount > idx && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: 'rgba(22,163,74,0.85)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 16,
                        color: '#FFFFFF',
                      }}
                    >
                      ✓
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Names row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
            {members.map((m) => (
              <span key={m.initial} style={{ fontSize: 9, color: '#9CA3AF', width: 36, textAlign: 'center' }}>
                {m.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
