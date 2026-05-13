import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Screen1A from './screens/Screen1A'
import Screen1B from './screens/Screen1B'
import Screen2A from './screens/Screen2A'
import Screen2B from './screens/Screen2B'
import Screen3A from './screens/Screen3A'
import Screen4A from './screens/Screen4A'
import Screen4B from './screens/Screen4B'
import Screen5A from './screens/Screen5A'
import Screen5B from './screens/Screen5B'
import Screen5C from './screens/Screen5C'
import Screen5D from './screens/Screen5D'
import Screen6A from './screens/Screen6A'
import Screen6B from './screens/Screen6B'
import Screen6D from './screens/Screen6D'

interface BeatDef {
  screen: React.ComponentType<{ onNext: () => void }>
  uc: number
  title: string
  flywheel: string
}

const BEATS: BeatDef[] = [
  { screen: Screen1A, uc: 1, title: 'Relationship health, proactively surfaced', flywheel: 'Human Need Detected' },
  { screen: Screen1B, uc: 1, title: 'Relationship health, proactively surfaced', flywheel: 'Human Need Detected' },
  { screen: Screen2A, uc: 2, title: 'Intent, not message composition', flywheel: 'AGI Understands' },
  { screen: Screen2B, uc: 2, title: 'Intent, not message composition', flywheel: 'AGI Understands' },
  { screen: Screen3A, uc: 3, title: 'Relationship layer, not app layer', flywheel: 'Compassionate Response' },
  { screen: Screen4A, uc: 4, title: 'Timing as relationship intelligence', flywheel: 'Compassionate Response' },
  { screen: Screen4B, uc: 4, title: 'Timing as relationship intelligence', flywheel: 'Compassionate Response' },
  { screen: Screen5A, uc: 5, title: 'Group coordination without overhead', flywheel: 'Human Growth' },
  { screen: Screen5B, uc: 5, title: 'Group coordination without overhead', flywheel: 'Human Growth' },
  { screen: Screen5C, uc: 5, title: 'Group coordination without overhead', flywheel: 'Human Growth' },
  { screen: Screen5D, uc: 5, title: 'Group coordination without overhead', flywheel: 'Human Growth' },
  { screen: Screen6A, uc: 6, title: 'Emotional context — the misread', flywheel: 'New Capabilities Unlocked' },
  { screen: Screen6B, uc: 6, title: 'Emotional context — the misread', flywheel: 'New Capabilities Unlocked' },
  { screen: Screen6D, uc: 6, title: 'Emotional context — the misread', flywheel: 'New Capabilities Unlocked' },
]

const UC_COUNT = 6

export default function App() {
  const [beatIndex, setBeatIndex] = useState(0)

  const goNext = () => setBeatIndex((i) => (i + 1) % BEATS.length)
  const goPrev = () => setBeatIndex((i) => (i - 1 + BEATS.length) % BEATS.length)

  const currentBeat = BEATS[beatIndex]
  const CurrentScreen = currentBeat.screen

  // Compute which UCs are "active" (current or past)
  const activeUCs = new Set<number>()
  for (let i = 0; i <= beatIndex; i++) {
    activeUCs.add(BEATS[i].uc)
  }

  return (
    <div
      style={{ background: '#0A0A0F', minHeight: '100vh' }}
      className="flex flex-col items-center justify-center py-8"
    >
      {/* Phone outer frame */}
      <div
        style={{
          width: 406,
          height: 872,
          background: '#1A1A1A',
          borderRadius: 44,
          padding: 8,
          boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.8)',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Camera pill */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 80,
            height: 28,
            background: '#111',
            borderRadius: 14,
            zIndex: 100,
          }}
        />

        {/* Inner screen */}
        <div
          style={{
            width: 390,
            height: 856,
            borderRadius: 40,
            overflow: 'hidden',
            position: 'relative',
            background: '#000',
          }}
          onClick={goNext}
        >
          <AnimatePresence mode="wait">
            <CurrentScreen key={beatIndex} onNext={goNext} />
          </AnimatePresence>
        </div>
      </div>

      {/* Controls below phone */}
      <div className="flex flex-col items-center gap-2 mt-6">
        {/* Nav row */}
        <div className="flex items-center gap-6">
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="text-gray-600 hover:text-white transition-colors text-xl cursor-pointer select-none"
          >
            ←
          </button>

          {/* Progress dots by UC */}
          <div className="flex gap-2">
            {Array.from({ length: UC_COUNT }, (_, i) => i + 1).map((uc) => (
              <div
                key={uc}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: activeUCs.has(uc) ? '#FFFFFF' : '#374151',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="text-gray-600 hover:text-white transition-colors text-xl cursor-pointer select-none"
          >
            →
          </button>
        </div>

        {/* Beat info */}
        <div className="text-center">
          <p className="text-xs text-gray-400">
            UC {currentBeat.uc} — {currentBeat.title}
          </p>
          <p className="text-xs text-gray-600 mt-0.5">
            Flywheel: {currentBeat.flywheel}
          </p>
        </div>

        {/* Beat counter */}
        <p className="text-xs text-gray-700">
          Beat {beatIndex + 1} of {BEATS.length}
        </p>
      </div>

      {/* Keyboard shortcut hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-xs text-gray-800 mt-4"
      >
        Click phone or use ← → arrows to navigate
      </motion.p>
    </div>
  )
}
