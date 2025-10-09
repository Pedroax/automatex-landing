'use client'

import { useEffect, useRef, useState } from 'react'

interface HeroBackgroundProps {
  children?: React.ReactNode
  className?: string
}

export default function HeroBackground({ children, className = '' }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInside, setIsMouseInside] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const drawGrid = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 30
      const dotSize = 2

      // Create gradient for the spotlight effect
      const gradient = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        150
      )

      if (isMouseInside) {
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0.8)') // Cyan center
        gradient.addColorStop(0.3, 'rgba(168, 85, 247, 0.6)') // Purple
        gradient.addColorStop(0.6, 'rgba(236, 72, 153, 0.4)') // Magenta
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)') // Transparent cyan
      } else {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      }

      // Draw grid dots with spotlight effect
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
          )

          let opacity = 0
          if (isMouseInside) {
            if (distance < 50) {
              opacity = 0.8
            } else if (distance < 100) {
              opacity = 0.5
            } else if (distance < 150) {
              opacity = 0.2
            }
          }

          if (opacity > 0) {
            ctx.beginPath()
            ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`
            ctx.arc(x, y, dotSize, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Add some animated squares
      const squareSize = 8
      for (let x = 0; x < canvas.width; x += gridSize * 2) {
        for (let y = 0; y < canvas.height; y += gridSize * 2) {
          const distance = Math.sqrt(
            Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
          )

          let opacity = 0
          if (isMouseInside) {
            if (distance < 80) {
              opacity = 0.3
            } else if (distance < 120) {
              opacity = 0.15
            }
          }

          if (opacity > 0) {
            ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`
            ctx.fillRect(x - squareSize / 2, y - squareSize / 2, squareSize, squareSize)
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setIsMouseInside(true)
    }

    const handleMouseLeave = () => {
      setIsMouseInside(false)
    }

    const handleMouseEnter = () => {
      setIsMouseInside(true)
    }

    // Initial setup
    resizeCanvas()
    drawGrid()

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('resize', () => {
      resizeCanvas()
      drawGrid()
    })

    // Animation loop
    const animate = () => {
      drawGrid()
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [mousePosition, isMouseInside])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1e293b 100%)',
          mixBlendMode: 'normal'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}