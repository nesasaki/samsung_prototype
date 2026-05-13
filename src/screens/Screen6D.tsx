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

export default function Screen6D({ onNext }: Props) {
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
      onClick={onNext}
    >
      <StatusBarLight time="9:50 PM" />

      {/* Top nav */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px 16px 8px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <span style={{ fontSize: 20, color: '#1C1C1E', cursor: 'pointer' }}>‹</span>
        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 16,
            fontWeight: 600,
            color: '#1C1C1E',
          }}
        >
          Priya
        </span>
        <span style={{ marginLeft: 'auto', fontSize: 20, color: '#1C1C1E' }}>···</span>
      </div>

      {/* Avatar */}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#EDE9FE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            fontWeight: 700,
            color: '#7C3AED',
          }}
        >
          P
        </div>
      </div>

      {/* Context line */}
      <p
        style={{
          fontSize: 13,
          color: '#6B7280',
          textAlign: 'center',
          margin: '8px 0 16px 0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Good week · Work deadline resolved · In touch today
      </p>

      {/* Divider */}
      <div
        style={{ height: 1, background: '#F3F4F6', margin: '0 16px 16px' }}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Recent timeline */}
      <div
        style={{ padding: '0 16px', flex: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Row 1 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E', marginTop: 3, flexShrink: 0 }} />
            <div style={{ width: 1, height: 40, background: '#E5E7EB', marginTop: 2 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              <span style={{ fontSize: 11, color: '#9CA3AF' }}>iMessage · Today · Active</span>
            </div>
            <p style={{ fontSize: 13, color: '#374151', margin: 0, lineHeight: 1.4 }}>
              "Haha I'm good!! That was just the big proposal deadline..."
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#9CA3AF', marginTop: 3, flexShrink: 0 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              <span style={{ fontSize: 11, color: '#9CA3AF' }}>iMessage · 11 days ago</span>
            </div>
            <p style={{ fontSize: 13, color: '#374151', margin: 0, lineHeight: 1.4 }}>
              "Hey! How's the research project going?"
            </p>
          </div>
        </div>
      </div>

      {/* End note */}
      <p
        style={{
          fontSize: 11,
          color: '#E5E7EB',
          textAlign: 'center',
          padding: '16px 16px 40px',
          marginTop: 'auto',
        }}
      >
        — Maya's day, end of prototype —
      </p>
    </motion.div>
  )
}
