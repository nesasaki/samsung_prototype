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

export default function Screen6A({ onNext }: Props) {
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
        {/* Avatar */}
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
        {/* Video/call icons */}
        <span style={{ fontSize: 18, color: '#6B7280', cursor: 'pointer' }}>📹</span>
        <span style={{ fontSize: 18, color: '#6B7280', cursor: 'pointer', marginLeft: 4 }}>📞</span>
      </div>

      {/* Empty conversation area */}
      <div style={{ flex: 1, background: '#FFFFFF' }} />

      {/* Bottom section */}
      <div style={{ paddingBottom: 4 }}>
        {/* Agent context card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 22, stiffness: 200, delay: 0.2 }}
          style={{
            background: 'rgba(251,191,36,0.08)',
            borderLeft: '2px solid #F59E0B',
            borderRadius: 12,
            padding: 16,
            margin: '0 16px 12px',
          }}
        >
          <p style={{ fontSize: 13, color: '#374151', margin: '0 0 8px 0', lineHeight: 1.5 }}>
            Priya seemed stressed in her last few messages — tone shift detected around 3 days ago.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={(e) => { e.stopPropagation(); onNext() }}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: 12,
                color: '#6B7280',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                padding: 0,
              }}
            >
              Got it
            </button>
          </div>
        </motion.div>

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
