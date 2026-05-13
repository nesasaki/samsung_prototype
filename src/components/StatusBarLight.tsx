interface Props {
  time?: string
}

export default function StatusBarLight({ time = '9:41 AM' }: Props) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 24px 6px',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <span style={{ fontSize: 15, fontWeight: 600, color: '#1C1C1E' }}>{time}</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {/* Signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill="#1C1C1E" opacity="0.9" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill="#1C1C1E" opacity="0.9" />
          <rect x="9" y="2" width="3" height="10" rx="0.5" fill="#1C1C1E" opacity="0.9" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#1C1C1E" opacity="0.4" />
        </svg>
        {/* Battery */}
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="#1C1C1E" strokeOpacity="0.5" />
          <rect x="2" y="2" width="17" height="8" rx="1.5" fill="#1C1C1E" opacity="0.7" />
          <path d="M23.5 4v4a1.5 1.5 0 000-4z" fill="#1C1C1E" opacity="0.5" />
        </svg>
      </div>
    </div>
  )
}
