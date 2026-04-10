export default function SoundKidsLogo({ size = 32 }: { size?: number }) {
  return (
    <svg viewBox="0 0 300 300" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" rx="64" fill="#378ADD" />
      <path
        d="M30 152 Q58 90 100 152 Q142 214 184 152 Q226 90 268 152"
        fill="none"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M32 232 Q55 212 78 232 Q101 252 124 232 Q147 212 170 232 Q193 252 216 232 Q239 212 262 232"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M110 196 Q135 216 160 196"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}
