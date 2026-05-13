import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Screen1A from './screens/Screen1A'
import Screen1B from './screens/Screen1B'
import Screen1C from './screens/Screen1C'
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
import RationalePanel, { RationaleEntry } from './components/RationalePanel'

interface BeatDef {
  screen: React.ComponentType<{ onNext: () => void }>
  uc: number
  title: string
  flywheel: string
  theme: 'dark' | 'light'
  rationale: RationaleEntry[]
}

const BEATS: BeatDef[] = [
  {
    screen: Screen1A,
    uc: 1,
    title: 'Relationship health, proactively surfaced',
    flywheel: 'Human Need Detected',
    theme: 'dark',
    rationale: [
      { label: 'Signals tracked', text: 'OS has been monitoring silence across WhatsApp (6 weeks), Instagram, and LinkedIn. Marcus posted 3 days ago: "Finally got a couch. Austin is officially home 🏠" — first social signal since the move.' },
      { label: 'Relationship status', text: 'Active contact, now drifting. Prior cadence: 2–3 touchpoints per month. Current gap is 2× the expected interval.' },
      { label: 'Why now', text: 'First phone lift of the day. No sound, no alert. Card appears as ambient context — noticed, not demanded. "Reach out" opens the draft card directly.' },
      { label: 'Trust mode', text: 'Silent surface. "Later" defers without closing the thread — it resurfaces at a better moment. No action required.' },
    ],
  },
  {
    screen: Screen1B,
    uc: 1,
    title: 'Relationship health, proactively surfaced',
    flywheel: 'Human Need Detected',
    theme: 'dark',
    rationale: [
      { label: 'What the card shows', text: 'On lift, the card surfaces the texture of the relationship right now: Marcus\'s last words, his Instagram post, and the agent\'s read — everything Maya needs to reply warmly without overthinking.' },
      { label: 'Last message context', text: '"haha yeah def let me know when you\'re in NYC 🙏" — casual, warm thread. No unresolved tension. Clean re-entry point.' },
      { label: 'Instagram signal', text: '"Finally got a couch. Austin is officially home" — natural conversation hook. The agent flagged this as a low-pressure reason to reach out that doesn\'t require explaining the 6-week silence.' },
      { label: 'Agent read', text: '"He\'s settled in. Good moment to reach out." The inline read gives Maya permission to act without overthinking. It\'s an interpretation, not a directive.' },
      { label: 'Trust mode', text: 'Silent surface with enriched context. Reaching out opens Screen 1C with a pre-populated draft built from these signals.' },
    ],
  },
  {
    screen: Screen1C,
    uc: 1,
    title: 'Relationship health, proactively surfaced',
    flywheel: 'Human Need Detected',
    theme: 'dark',
    rationale: [
      { label: 'Draft source', text: 'Built from the Instagram post as the conversation hook. "Haha ok the couch post" references his exact words — the draft sounds like Maya because it\'s grounded in their actual register, not a template.' },
      { label: 'Tone calibration', text: 'Casual, warm, slightly playful — matches Maya\'s prior WhatsApp messages to Marcus. The agent analysed 18 months of message history to calibrate this register.' },
      { label: 'Channel selection', text: 'WhatsApp selected as preferred channel — most recent active thread, highest response rate. "Choose channel" is available if Maya wants to switch without leaving the card.' },
      { label: 'Agent note', text: 'The inline note ("References his Instagram post. Matches your usual register") is brief transparency — not a full explanation, just enough to show the draft isn\'t generic.' },
      { label: 'Trust mode', text: 'Explicit acknowledgment with edit path. Draft shown for approval. Edit makes text editable inline. Channel can be switched, including to a call, without starting over.' },
    ],
  },
  {
    screen: Screen2A,
    uc: 2,
    title: 'Intent, not message composition',
    flywheel: 'AGI Understands',
    theme: 'light',
    rationale: [
      { label: 'Intent parsed', text: '"Check in with Priya about Mom\'s appointment" → person: Priya (sister), topic: Mom\'s cardiology follow-up (referenced April 29 in WhatsApp thread).' },
      { label: 'Channel selected', text: 'WhatsApp — Priya\'s primary channel for personal/family messages. Last active thread: 11 days ago. No competing channels with recent activity.' },
      { label: 'Draft tone', text: 'Warm, brief, low-stakes. No urgency implied. Register matches Maya\'s prior messages to Priya in similar contexts.' },
      { label: 'Confidence', text: 'High. Relationship is well-established, context is unambiguous, channel is clear. Draft generated before showing the card.' },
    ],
  },
  {
    screen: Screen2B,
    uc: 2,
    title: 'Intent, not message composition',
    flywheel: 'AGI Understands',
    theme: 'light',
    rationale: [
      { label: 'Draft logic', text: 'Short check-in. Acknowledges Mom\'s appointment with warmth. Doesn\'t over-explain or create obligation for Priya to respond at length.' },
      { label: 'Channel routing', text: 'WhatsApp handled silently. The app never opens. Routing is invisible — Maya sees the relationship, not the platform.' },
      { label: 'What Edit does', text: 'Opens a light text editor with the draft pre-loaded. Maya can change the message; the channel and recipient are already resolved.' },
      { label: 'Trust mode', text: 'Explicit acknowledgment with edit path. Agent drafts, user approves. Send is one tap — but Edit and Not now are always available.' },
    ],
  },
  {
    screen: Screen3A,
    uc: 3,
    title: 'Relationship layer, not app layer',
    flywheel: 'Compassionate Response',
    theme: 'light',
    rationale: [
      { label: 'Pending items', text: '2 items have been waiting for Maya\'s response for 3+ days. Both are on her side — Daniel has not followed up on either.' },
      { label: 'LinkedIn DM', text: 'Coffee request + referral ask. 5 days unread. Low urgency — but the ask is personal, and ignoring it creates social friction.' },
      { label: 'Calendar invite', text: 'Coffee, Thursday 12pm. Pending 3 days. Implicit response window is closing — a non-response tomorrow reads as a soft decline.' },
      { label: 'Urgency read', text: 'Neither item is time-critical today. The calendar invite will become stale by tomorrow. "No urgency detected" means: act at your pace, but act.' },
      { label: 'Trust mode', text: 'Explicit acknowledgment. Handle now expands inline — no new screen, no app switch. 45 seconds resolves both items.' },
    ],
  },
  {
    screen: Screen4A,
    uc: 4,
    title: 'Timing as relationship intelligence',
    flywheel: 'Compassionate Response',
    theme: 'dark',
    rationale: [
      { label: 'Message assessed', text: 'James · Work. Sent 11:02pm. Content: minor addendum to a deliverable ("one thought... not urgent at all"). No urgency markers detected.' },
      { label: 'Maya\'s context', text: 'Wind-down period (11pm+). Screen-on time <30s. No active conversation threads. Learned sleep window starts ~11:15pm.' },
      { label: 'Decision', text: 'Hold until morning. The message will reach Maya in full context — rested, at desk — rather than fragmented (pre-sleep, reduced bandwidth).' },
      { label: 'Override', text: '"Show now" is a single tap — Maya retains full control. The hold is a suggestion, not a gate.' },
      { label: 'Trust mode', text: 'Silent correction with transparency card. The hold is visible — Maya knows a message exists. She just doesn\'t need to act on it now.' },
    ],
  },
  {
    screen: Screen4B,
    uc: 4,
    title: 'Timing as relationship intelligence',
    flywheel: 'Compassionate Response',
    theme: 'dark',
    rationale: [
      { label: 'Held message surfaced', text: 'James\'s message from 11:02pm last night. Non-urgent work note held overnight and surfaced in the morning card stack.' },
      { label: 'Draft reply', text: 'Short, professional. Acknowledges the message and signals follow-through without over-committing on timeline. Matches James\'s register.' },
      { label: 'Why a draft', text: 'James sent a thoughtful note. A zero-effort acknowledgment reply protects the relationship. Maya can edit or ignore — but the draft removes the friction.' },
      { label: 'Trust mode', text: 'Explicit acknowledgment with edit path. Same pattern as UC2 — agent drafts, user approves. "Held from last night" label is present but minimal.' },
    ],
  },
  {
    screen: Screen5A,
    uc: 5,
    title: 'Group coordination without overhead',
    flywheel: 'Human Growth',
    theme: 'light',
    rationale: [
      { label: 'Request parsed', text: '"Organize dinner with the college group next weekend" → group: college friends (6 people, established contact group), timeframe: May 18–19, type: dinner.' },
      { label: 'Action initiated', text: 'Reading shared calendars for all 6 members. Cross-referencing 2-hour availability windows on Saturday and Sunday evening.' },
      { label: 'What the agent is doing', text: 'Checking Google Calendar (3 members), iCloud Calendar (2 members), and Outlook (1 member) simultaneously. Estimated time: 2–3 seconds.' },
    ],
  },
  {
    screen: Screen5B,
    uc: 5,
    title: 'Group coordination without overhead',
    flywheel: 'Human Growth',
    theme: 'light',
    rationale: [
      { label: 'Calendar analysis', text: 'Saturday 7:30pm: 5/6 available. Alma has a flight Sunday evening — Saturday is clearly better for her binding constraint.' },
      { label: 'Sunday 6pm', text: '4/6 available. Chris has a family event. Alma is limited. Lower availability and lower flexibility for the person with the hardest conflict.' },
      { label: 'Recommendation logic', text: 'Prioritised the option that works for the person with the most constrained schedule (Alma). 5/6 vs 4/6 would already suggest Saturday — Alma\'s situation makes it definitive.' },
      { label: 'Restaurant', text: 'Luca\'s Osteria selected based on: prior group visits (3), current table availability for party of 6 on Saturday, walkable for 4 of 6 members.' },
    ],
  },
  {
    screen: Screen5C,
    uc: 5,
    title: 'Group coordination without overhead',
    flywheel: 'Human Growth',
    theme: 'light',
    rationale: [
      { label: 'Messages sent', text: 'Saturday 7:30pm proposal sent to all 6 via the existing group iMessage thread, plus individual calendar holds sent to each member.' },
      { label: 'Tracking method', text: 'Real-time confirmation status from calendar accept/decline responses + iMessage read receipts. Alma and Marcus confirmed fastest — their calendars were already clear.' },
      { label: 'What happens on decline', text: 'If 2+ people decline Saturday, the agent resurfaces with Sunday as the fallback and flags the conflict before Maya sees it.' },
    ],
  },
  {
    screen: Screen5D,
    uc: 5,
    title: 'Group coordination without overhead',
    flywheel: 'Human Growth',
    theme: 'light',
    rationale: [
      { label: 'Booking completed', text: 'Luca\'s Osteria, 127 Bedford Ave. Saturday 7:30pm. Party of 6. Reservation confirmed under Maya\'s name.' },
      { label: 'Directions sent', text: 'Each person\'s home/current location used to generate directions. Marcus (Austin) received directions from LaGuardia — he has a flight back that afternoon.' },
      { label: 'What Maya did', text: 'Spoke one sentence. The agent handled: calendar check, time proposal, group notification, RSVP tracking, restaurant booking, and directions. 0 app switches.' },
    ],
  },
  {
    screen: Screen6A,
    uc: 6,
    title: 'Emotional context — the misread',
    flywheel: 'New Capabilities Unlocked',
    theme: 'light',
    rationale: [
      { label: 'Signal detected', text: 'Priya\'s last 3 messages (May 10–11): shorter responses, increased latency (avg 4hr vs typical 45min), low-energy phrasing ("yeah", "busy week", "maybe").' },
      { label: 'Interpretation', text: 'Behavioural pattern consistent with mild stress or high cognitive load. Not confirmed emotional state — tone shift only.' },
      { label: 'Confidence', text: 'Low-medium. Behavioural signal only. No explicit content indicating distress. Context card uses hedged language: "seemed", not "was".' },
      { label: 'Trust mode', text: 'Permission visible. The agent surfaces an interpretation, not a certainty. Maya can dismiss it ("Got it") or simply start typing — the card doesn\'t block the conversation.' },
    ],
  },
  {
    screen: Screen6B,
    uc: 6,
    title: 'Emotional context — the misread',
    flywheel: 'New Capabilities Unlocked',
    theme: 'light',
    rationale: [
      { label: 'Initial read', text: 'Priya\'s tone shift signal (May 10–11) was real — shorter messages, longer latency. The agent surfaced it correctly as a behavioural anomaly.' },
      { label: 'The misread', text: 'The agent inferred ongoing stress. Priya\'s reply reveals the stress was work-deadline specific (a proposal), resolved before today.' },
      { label: 'Recalibration', text: 'After Priya\'s second reply, the agent updates: stress flag removed, context set to "good week, work resolved". Correction shown as a matter-of-fact card — not an apology.' },
      { label: 'Design principle', text: 'The agent shows its work when it fails, not just when it succeeds. "My read was off" is the exact phrase — direct, non-dramatic, honest. This is where durable trust is built.' },
      { label: 'Trust mode', text: 'Permission visible + recovery. The most sophisticated trust mode: the system corrects itself openly and updates the record without drama.' },
    ],
  },
  {
    screen: Screen6D,
    uc: 6,
    title: 'Emotional context — the misread',
    flywheel: 'New Capabilities Unlocked',
    theme: 'light',
    rationale: [
      { label: 'Context updated', text: 'Priya\'s record now shows: "Good week · Work deadline resolved · In touch today". The error state is gone — the record reflects current reality.' },
      { label: 'No trace of the error', text: 'The correction was applied silently after the conversation. Maya sees the current state of the relationship, not the agent\'s error history.' },
      { label: 'What this demonstrates', text: 'The system is not just accurate when it gets things right — it is trustworthy when it gets things wrong. Recovery is as designed as success.' },
    ],
  },
]

const UC_COUNT = 6

export default function App() {
  const [beatIndex, setBeatIndex] = useState(0)
  const [showRationale, setShowRationale] = useState(false)

  const goNext = () => {
    setShowRationale(false)
    setBeatIndex((i) => (i + 1) % BEATS.length)
  }
  const goPrev = () => {
    setShowRationale(false)
    setBeatIndex((i) => (i - 1 + BEATS.length) % BEATS.length)
  }

  const currentBeat = BEATS[beatIndex]
  const CurrentScreen = currentBeat.screen
  const isDark = currentBeat.theme === 'dark'

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

          {/* Floating rationale trigger */}
          <button
            onClick={(e) => { e.stopPropagation(); setShowRationale(true) }}
            style={{
              position: 'absolute',
              bottom: 88,
              right: 14,
              zIndex: 500,
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(18,89,195,0.08)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(18,89,195,0.2)'}`,
              borderRadius: 20,
              padding: '5px 10px 5px 7px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <div style={{
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(18,89,195,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
              fontWeight: 700,
              color: isDark ? 'rgba(255,255,255,0.8)' : '#1259C3',
              flexShrink: 0,
            }}>
              i
            </div>
            <span style={{
              fontSize: 12,
              fontWeight: 500,
              color: isDark ? 'rgba(255,255,255,0.6)' : '#1259C3',
            }}>
              Why?
            </span>
          </button>

          {/* Rationale panel overlay */}
          <AnimatePresence>
            {showRationale && (
              <RationalePanel
                key="rationale"
                entries={currentBeat.rationale}
                onClose={() => setShowRationale(false)}
                theme={currentBeat.theme}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Controls below phone */}
      <div className="flex flex-col items-center gap-2 mt-6">
        <div className="flex items-center gap-6">
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="text-gray-600 hover:text-white transition-colors text-xl cursor-pointer select-none"
          >
            ←
          </button>

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

        <div className="text-center">
          <p className="text-xs text-gray-400">
            UC {currentBeat.uc} — {currentBeat.title}
          </p>
          <p className="text-xs text-gray-600 mt-0.5">
            Flywheel: {currentBeat.flywheel}
          </p>
        </div>

        <p className="text-xs text-gray-700">
          Beat {beatIndex + 1} of {BEATS.length}
        </p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-xs text-gray-800 mt-4"
      >
        Click phone or use ← → arrows to navigate · tap <span style={{ color: '#374151' }}>Why?</span> to see agent reasoning
      </motion.p>
    </div>
  )
}
