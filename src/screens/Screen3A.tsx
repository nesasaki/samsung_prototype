import { useState } from 'react'
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

type Phase = 'insight' | 'actions' | 'resolved'

export default function Screen3A({ onNext }: Props) {
  const [phase, setPhase] = useState<Phase>('insight')
  const [row1Done, setRow1Done] = useState(false)
  const [row2Done, setRow2Done] = useState(false)

  const handleHandleNow = (e: React.MouseEvent) => {
    e.stopPropagation()
    setPhase('actions')
  }

  const handleDecline = (e: React.MouseEvent) => {
    e.stopPropagation()
    setRow1Done(true)
    setRow2Done(true)
    // Advance after both done
    setTimeout(onNext, 1500)
  }

  const handleSnooze = (e: React.MouseEvent) => {
    e.stopPropagation()
    setRow2Done(true)
    if (row1Done) {
      setTimeout(onNext, 1500)
    }
  }

  const handleAccept = (e: React.MouseEvent) => {
    e.stopPropagation()
    setRow1Done(true)
    if (row2Done) {
      setTimeout(onNext, 1500)
    }
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
        background: '#FFFFFF',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={onNext}
    >
      <StatusBarLight time="9:15 AM" />

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
          Daniel Reeves
        </span>
        <span style={{ marginLeft: 'auto', fontSize: 20, color: '#1C1C1E' }}>···</span>
      </div>

      {/* Sub-header */}
      <p
        style={{
          fontSize: 13,
          color: '#6B7280',
          textAlign: 'center',
          margin: '0 0 12px 0',
          paddingBottom: 12,
          borderBottom: '1px solid #F3F4F6',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Former colleague · Last contact: 3 days ago
      </p>

      {/* Timeline */}
      <div
        style={{ padding: '8px 16px', flex: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Row 1: LinkedIn */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 18, position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1259C3', marginTop: 3, flexShrink: 0 }} />
            <div style={{ width: 1, height: 40, background: '#E5E7EB', marginTop: 2 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              <span
                style={{
                  background: '#0A66C2',
                  color: '#FFFFFF',
                  fontSize: 10,
                  fontWeight: 700,
                  borderRadius: 3,
                  padding: '1px 5px',
                }}
              >
                in
              </span>
              <span style={{ fontSize: 11, color: '#9CA3AF' }}>LinkedIn DM · 5 days ago</span>
              <span
                style={{
                  fontSize: 10,
                  background: '#DBEAFE',
                  color: '#1D4ED8',
                  borderRadius: 8,
                  padding: '1px 6px',
                }}
              >
                Unread
              </span>
            </div>
            <p style={{ fontSize: 13, color: '#374151', margin: 0, lineHeight: 1.4 }}>
              "Hey! Saw your post about the new role — congrats! Would love to catch up..."
            </p>
          </div>
        </div>

        {/* Row 2: Calendar */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#1259C3', marginTop: 3, flexShrink: 0 }} />
            <div style={{ width: 1, height: 40, background: '#E5E7EB', marginTop: 2 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              <span style={{ fontSize: 14 }}>📅</span>
              <span style={{ fontSize: 11, color: '#9CA3AF' }}>Calendar invite · 3 days ago · Pending</span>
            </div>
            <p style={{ fontSize: 13, color: '#374151', margin: 0 }}>
              Coffee, Thursday 12pm
            </p>
          </div>
        </div>

        {/* Row 3: Email */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#9CA3AF', marginTop: 3, flexShrink: 0 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
              <span style={{ fontSize: 14 }}>✉️</span>
              <span style={{ fontSize: 11, color: '#9CA3AF' }}>Email · 3 weeks ago · Unread</span>
            </div>
            <p style={{ fontSize: 13, color: '#374151', margin: 0 }}>
              Re: Referral for [Role]
            </p>
          </div>
        </div>

        {/* Agent insight card */}
        <motion.div
          layout
          style={{
            background: 'rgba(18,89,195,0.06)',
            borderLeft: '2px solid #1259C3',
            borderRadius: 12,
            padding: 16,
            marginBottom: 24,
          }}
        >
          {phase === 'insight' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p style={{ fontSize: 13, color: '#374151', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                2 pending items — both on your side. No urgency detected in either.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button
                  onClick={handleHandleNow}
                  style={{
                    background: '#1259C3',
                    color: '#FFFFFF',
                    borderRadius: 20,
                    padding: '6px 16px',
                    fontSize: 13,
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Handle now
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: 13,
                    color: '#6B7280',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Remind me later
                </button>
              </div>
            </motion.div>
          )}

          <AnimatePresence>
            {phase === 'actions' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ type: 'spring', damping: 22, stiffness: 200 }}
              >
                {/* Action row 1: Coffee */}
                <div style={{ marginBottom: 14 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#1C1C1E', margin: '0 0 6px 0' }}>
                    Coffee Thursday 12pm
                  </p>
                  {!row1Done ? (
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {[
                        { label: 'Accept', handler: handleAccept },
                        { label: 'Decline', handler: handleDecline },
                        { label: 'Suggest another time', handler: (e: React.MouseEvent) => e.stopPropagation() },
                      ].map(({ label, handler }) => (
                        <button
                          key={label}
                          onClick={handler}
                          style={{
                            background: 'transparent',
                            border: '1px solid #D1D5DB',
                            borderRadius: 20,
                            padding: '4px 10px',
                            fontSize: 11,
                            color: '#374151',
                            cursor: 'pointer',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ fontSize: 11, color: '#16A34A', margin: 0 }}
                    >
                      Decline sent · Daniel notified
                    </motion.p>
                  )}
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(18,89,195,0.15)', marginBottom: 14 }} />

                {/* Action row 2: Referral */}
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#1C1C1E', margin: '0 0 6px 0' }}>
                    Re: Referral for [Role]
                  </p>
                  {!row2Done ? (
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {[
                        { label: 'Reply', handler: (e: React.MouseEvent) => e.stopPropagation() },
                        { label: 'Snooze to weekend', handler: handleSnooze },
                        { label: 'Mark read', handler: (e: React.MouseEvent) => e.stopPropagation() },
                      ].map(({ label, handler }) => (
                        <button
                          key={label}
                          onClick={handler}
                          style={{
                            background: 'transparent',
                            border: '1px solid #D1D5DB',
                            borderRadius: 20,
                            padding: '4px 10px',
                            fontSize: 11,
                            color: '#374151',
                            cursor: 'pointer',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ fontSize: 11, color: '#16A34A', margin: 0 }}
                    >
                      Referral snoozed · Resurfacing Saturday morning
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}
