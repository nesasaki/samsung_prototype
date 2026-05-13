import { motion } from 'framer-motion'

export interface RationaleEntry {
  label: string
  text: string
}

interface Props {
  entries: RationaleEntry[]
  onClose: () => void
  theme: 'dark' | 'light'
}

export default function RationalePanel({ entries, onClose, theme }: Props) {
  const overlayBg = theme === 'dark'
    ? 'rgba(0,0,0,0.65)'
    : 'rgba(0,0,0,0.35)'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'absolute',
        inset: 0,
        background: overlayBg,
        zIndex: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      onClick={(e) => { e.stopPropagation(); onClose() }}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
        style={{
          background: '#FFFFFF',
          borderRadius: '24px 24px 0 0',
          maxHeight: '72%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 12, paddingBottom: 4 }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: '#D1D5DB' }} />
        </div>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 20px 12px',
          borderBottom: '1px solid #F3F4F6',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: 'rgba(18,89,195,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 11,
              fontWeight: 700,
              color: '#1259C3',
            }}>
              i
            </div>
            <span style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>Agent rationale</span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#F3F4F6',
              border: 'none',
              borderRadius: '50%',
              width: 28,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 14,
              color: '#6B7280',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            ×
          </button>
        </div>

        {/* Entries */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '12px 20px 8px' }}>
          {entries.map((entry, i) => (
            <div
              key={i}
              style={{
                marginBottom: 16,
                paddingLeft: 12,
                borderLeft: '2px solid rgba(18,89,195,0.2)',
              }}
            >
              <p style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#1259C3',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                margin: '0 0 3px 0',
              }}>
                {entry.label}
              </p>
              <p style={{
                fontSize: 13,
                color: '#374151',
                lineHeight: 1.55,
                margin: 0,
              }}>
                {entry.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          padding: '10px 20px 20px',
          borderTop: '1px solid #F3F4F6',
        }}>
          <p style={{ fontSize: 11, color: '#D1D5DB', margin: 0, textAlign: 'center', letterSpacing: '0.03em' }}>
            One UI 10.5 · Agentic OS · Internal prototype
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
