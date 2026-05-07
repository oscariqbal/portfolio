type OIMIconProps = {
  className?: string
}

export default function OIMIcon({ className }: OIMIconProps) {
  return (
    <svg
      viewBox="0 0 340 256"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >      
      {/* O */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M32 48
          C32 30.3 46.3 16 64 16
          H104
          C121.7 16 136 30.3 136 48
          V208
          C136 225.7 121.7 240 104 240
          H64
          C46.3 240 32 225.7 32 208
          V48

          M64 64
          C64 55.2 71.2 48 80 48
          H88
          C96.8 48 104 55.2 104 64
          V192
          C104 200.8 96.8 208 88 208
          H80
          C71.2 208 64 200.8 64 192
          V64
        "
        fill="currentColor"
      />

      {/* I */}
      <path
        d="
          M156 16
          H184
          V240
          H156
          Z
        "
        fill="currentColor"
      />

      {/* M */}
      <path
        d="
          M208 240
          V16
          H236
          L256 116
          L276 16
          H304
          V240
          H280
          V104
          L264 176
          H248
          L232 104
          V240
          H208
        "
        fill="currentColor"
      />
    </svg>
  )
}