export default function HomeGrid() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16,
        padding: '80px 20px 20px',
        boxSizing: 'border-box',
        alignContent: 'start',
      }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: 'rgba(0,0,0,0.08)',
          }}
        />
      ))}
    </div>
  )
}
