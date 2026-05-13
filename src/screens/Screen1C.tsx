import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  onNext: () => void
}

const screenVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}

type Phase = 'draft' | 'callConfirm'

const CHANNELS = [
  { id: 'whatsapp', label: 'WhatsApp', recommended: true, color: '#25D366' },
  { id: 'messages', label: 'Google Messages', recommended: false, color: '#4285F4' },
  { id: 'call', label: 'Call', recommended: false, color: '#30D158' },
]

export default function Screen1C({ onNext }: Props) {
  const [phase, setPhase] = useState<Phase>('draft')
  const [channelPickerOpen, setChannelPickerOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    if (showToast) {
      const t = setTimeout(onNext, 2000)
      return () => clearTimeout(t)
    }
    return undefined
  }, [showToast, onNext])

  const handleSend = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowToast(true)
  }

  const handleChannelSelect = (id: string) => {
    if (id === 'call') {
      setPhase('callConfirm')
      setChannelPickerOpen(false)
    } else {
      setChannelPickerOpen(false)
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
        background: 'radial-gradient(ellipse at center, #0F1B2D 0%, #000000 100%)',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Status bar */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '12px 24px 0', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <rect x="0" y="8" width="3" height="4" rx="0.5" fill="white" opacity="0.9" />
            <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill="white" opacity="0.9" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" fill="white" opacity="0.9" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="white" opacity="0.4" />
          </svg>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
            <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="white" strokeOpacity="0.6" />
            <rect x="2" y="2" width="17" height="8" rx="1.5" fill="white" opacity="0.8" />
            <path d="M23.5 4v4a1.5 1.5 0 000-4z" fill="white" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Clock */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 64, marginBottom: 24 }}>
        <div style={{ fontSize: 52, fontWeight: 300, color: '#FFFFFF', letterSpacing: '-1.5px', lineHeight: 1 }}>7:45</div>
        <div style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>Monday, May 13</div>
      </div>

      {/* Draft / Call confirm card */}
      <div style={{ width: '100%', padding: '0 20px' }}>
        <motion.div
          layout
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 20,
            padding: 18,
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            {phase === 'draft' ? (
              <motion.div
                key="draft"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 500, color: '#FFFFFF', flexShrink: 0,
                  }}>M</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#FFFFFF' }}>Marcus</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>via WhatsApp · preferred channel</div>
                  </div>
                </div>

                {/* Draft message */}
                <p style={{
                  fontSize: 15, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55,
                  margin: '0 0 10px 0', padding: '10px 12px',
                  background: 'rgba(255,255,255,0.05)', borderRadius: 10,
                }}>
                  Haha ok the couch post — you're officially an Austin person now. How's it actually going out there?
                </p>

                {/* Agent note — inline rationale */}
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: 6,
                  marginBottom: 16,
                  padding: '6px 10px',
                  background: 'rgba(18,89,195,0.12)',
                  borderLeft: '2px solid rgba(18,89,195,0.45)',
                  borderRadius: '0 6px 6px 0',
                }}>
                  <span style={{ fontSize: 10, color: 'rgba(18,89,195,0.8)', fontWeight: 700, marginTop: 1, flexShrink: 0 }}>i</span>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4, margin: 0 }}>
                    References his Instagram post. Matches your usual register with him.
                  </p>
                </div>

                {/* Primary actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <button
                    onClick={handleSend}
                    style={{
                      background: '#1259C3', color: '#FFFFFF', borderRadius: 22,
                      padding: '10px 20px', fontSize: 14, fontWeight: 500,
                      border: 'none', cursor: 'pointer', width: '100%',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Send
                  </button>

                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        flex: 1, background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                        color: 'rgba(255,255,255,0.7)', borderRadius: 20, padding: '8px 12px',
                        fontSize: 13, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setChannelPickerOpen(v => !v) }}
                      style={{
                        flex: 1, background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                        color: 'rgba(255,255,255,0.7)', borderRadius: 20, padding: '8px 12px',
                        fontSize: 13, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                      }}
                    >
                      Channel {channelPickerOpen ? '↑' : '↓'}
                    </button>
                  </div>

                  {/* Inline channel picker */}
                  <AnimatePresence>
                    {channelPickerOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          background: 'rgba(255,255,255,0.04)',
                          borderRadius: 12, padding: '4px 0', marginTop: 2,
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}>
                          {CHANNELS.map((ch) => (
                            <button
                              key={ch.id}
                              onClick={(e) => { e.stopPropagation(); handleChannelSelect(ch.id) }}
                              style={{
                                width: '100%', background: 'transparent', border: 'none',
                                padding: '10px 14px', display: 'flex', alignItems: 'center',
                                gap: 10, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                              }}
                            >
                              <div style={{
                                width: 8, height: 8, borderRadius: '50%', background: ch.color, flexShrink: 0,
                              }} />
                              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', flex: 1, textAlign: 'left' }}>
                                {ch.label}
                              </span>
                              {ch.recommended && (
                                <span style={{
                                  fontSize: 10, color: '#1259C3', background: 'rgba(18,89,195,0.15)',
                                  borderRadius: 4, padding: '1px 6px',
                                }}>
                                  recommended
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={(e) => { e.stopPropagation(); onNext() }}
                    style={{
                      background: 'transparent', border: 'none', fontSize: 13,
                      color: 'rgba(255,255,255,0.3)', cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif', paddingTop: 2,
                    }}
                  >
                    Not now
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="call"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              >
                {/* Call confirmation */}
                <div style={{ textAlign: 'center', padding: '8px 0 16px' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: 'rgba(48,209,88,0.15)', border: '1px solid rgba(48,209,88,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 14px', fontSize: 22,
                  }}>
                    📞
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 600, color: '#FFFFFF', margin: '0 0 4px' }}>Call Marcus?</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>via phone · Austin, TX</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <button
                    onClick={handleSend}
                    style={{
                      background: '#30D158', color: '#FFFFFF', borderRadius: 22,
                      padding: '10px 20px', fontSize: 14, fontWeight: 500,
                      border: 'none', cursor: 'pointer', width: '100%',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Call
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setPhase('draft') }}
                    style={{
                      background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                      color: 'rgba(255,255,255,0.6)', borderRadius: 22, padding: '9px 20px',
                      fontSize: 13, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Not now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
              position: 'absolute', bottom: 24, left: 16, right: 16,
              background: '#1C1C1E', borderRadius: 100, padding: '12px 20px', zIndex: 50,
            }}
          >
            <p style={{ fontSize: 14, color: '#FFFFFF', margin: 0 }}>
              {phase === 'callConfirm' ? '📞 Calling Marcus...' : '✓ Sent to Marcus · WhatsApp · just now'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
