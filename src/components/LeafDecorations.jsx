export function LeafDecoration({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M160 20C160 20 140 60 100 100C60 140 20 160 20 160C20 160 60 140 100 100C140 60 160 20 160 20Z"
        fill="#6b8f3e"
        opacity="0.6"
      />
      <path
        d="M180 40C180 40 140 80 90 110C40 140 10 170 10 170"
        stroke="#6b8f3e"
        strokeWidth="2"
        opacity="0.4"
      />
      <path
        d="M140 10C140 10 130 50 90 90C50 130 10 140 10 140C10 140 50 130 90 90C130 50 140 10 140 10Z"
        fill="#8ab350"
        opacity="0.4"
      />
      <path
        d="M170 60C170 60 150 90 120 120C90 150 60 170 60 170"
        stroke="#8ab350"
        strokeWidth="1.5"
        opacity="0.3"
      />
    </svg>
  )
}

export function LeafCornerTopRight() {
  return (
    <svg className="leaf-bg-top-right" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M300 0C300 0 260 80 180 160C100 240 20 280 20 280"
        stroke="#6b8f3e"
        strokeWidth="3"
        opacity="0.5"
      />
      <path
        d="M280 0C280 0 240 60 180 120C120 180 60 220 60 220C60 220 120 180 180 120C240 60 280 0 280 0Z"
        fill="#6b8f3e"
        opacity="0.3"
      />
      <path
        d="M250 10C250 10 220 50 170 100C120 150 70 180 70 180"
        stroke="#8ab350"
        strokeWidth="2"
        opacity="0.4"
      />
      <path
        d="M300 30C300 30 270 70 230 110C190 150 150 180 150 180C150 180 190 150 230 110C270 70 300 30 300 30Z"
        fill="#8ab350"
        opacity="0.2"
      />
      <path
        d="M220 0C220 0 200 30 160 70C120 110 80 140 80 140C80 140 120 110 160 70C200 30 220 0 220 0Z"
        fill="#a3c766"
        opacity="0.25"
      />
    </svg>
  )
}

export function LeafCornerBottomLeft() {
  return (
    <svg className="leaf-bg-bottom-left" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 300C0 300 80 260 160 180C240 100 280 20 280 20"
        stroke="#6b8f3e"
        strokeWidth="3"
        opacity="0.5"
      />
      <path
        d="M0 280C0 280 60 240 120 180C180 120 220 60 220 60C220 60 180 120 120 180C60 240 0 280 0 280Z"
        fill="#6b8f3e"
        opacity="0.3"
      />
      <path
        d="M10 250C10 250 50 220 100 170C150 120 180 70 180 70"
        stroke="#8ab350"
        strokeWidth="2"
        opacity="0.4"
      />
      <path
        d="M30 300C30 300 70 270 110 230C150 190 180 150 180 150C180 150 150 190 110 230C70 270 30 300 30 300Z"
        fill="#8ab350"
        opacity="0.2"
      />
      <path
        d="M0 220C0 220 30 200 70 160C110 120 140 80 140 80C140 80 110 120 70 160C30 200 0 220 0 220Z"
        fill="#a3c766"
        opacity="0.25"
      />
    </svg>
  )
}

export function CardLeaf() {
  return (
    <svg className="card-leaf" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M70 5C70 5 55 25 35 45C15 65 5 75 5 75"
        stroke="#6b8f3e"
        strokeWidth="1.5"
      />
      <path
        d="M65 5C65 5 50 20 35 35C20 50 10 65 10 65C10 65 25 50 40 35C55 20 65 5 65 5Z"
        fill="#6b8f3e"
      />
      <path
        d="M55 10C55 10 45 20 35 30C25 40 15 50 15 50"
        stroke="#8ab350"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  )
}
