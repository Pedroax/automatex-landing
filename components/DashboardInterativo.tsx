'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function DashboardInterativo() {
  const [progress1, setProgress1] = useState(75)
  const [progress2, setProgress2] = useState(88)
  const [progress3, setProgress3] = useState(92)
  const [waveData, setWaveData] = useState([50, 60, 45, 70, 55, 80, 65, 75, 60, 85])
  const [currentChart, setCurrentChart] = useState(0)

  // Atualiza dados em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress1(prev => Math.max(60, Math.min(95, prev + (Math.random() - 0.5) * 15)))
      setProgress2(prev => Math.max(70, Math.min(98, prev + (Math.random() - 0.5) * 10)))
      setProgress3(prev => Math.max(80, Math.min(100, prev + (Math.random() - 0.5) * 8)))

      setWaveData(prev => {
        const newPoint = Math.floor(Math.random() * 40) + 50
        return [...prev.slice(1), newPoint]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Troca gráfico ativo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChart(prev => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Componente Gráfico Circular
  const CircularProgress = ({ progress, color, size = 80 }: { progress: number, color: string, size?: number }) => {
    const circumference = 2 * Math.PI * (size / 2 - 6)
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 6}
            stroke="rgb(55 65 81)"
            strokeWidth="4"
            fill="transparent"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 6}
            stroke={color}
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-lg font-bold bg-gradient-to-br ${color === '#06b6d4' ? 'from-cyan-400 to-blue-500' : color === '#8b5cf6' ? 'from-purple-400 to-violet-500' : 'from-green-400 to-emerald-500'} bg-clip-text text-transparent`}>
            {Math.round(progress)}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-cyan-400/30 overflow-hidden p-4">
      {/* Header Minimalista */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white font-mono text-xs">LIVE</span>
        </div>
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>

      {/* Gráficos Circulares */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <motion.div
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-500 ${
            currentChart === 0 ? 'bg-cyan-900/30 shadow-lg shadow-cyan-500/20' : 'bg-gray-800/30'
          }`}
          animate={{ scale: currentChart === 0 ? 1.05 : 1 }}
        >
          <CircularProgress progress={progress1} color="#06b6d4" size={60} />
          <div className="text-xs text-gray-400 mt-1">IA</div>
        </motion.div>

        <motion.div
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-500 ${
            currentChart === 1 ? 'bg-purple-900/30 shadow-lg shadow-purple-500/20' : 'bg-gray-800/30'
          }`}
          animate={{ scale: currentChart === 1 ? 1.05 : 1 }}
        >
          <CircularProgress progress={progress2} color="#8b5cf6" size={60} />
          <div className="text-xs text-gray-400 mt-1">BOT</div>
        </motion.div>

        <motion.div
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-500 ${
            currentChart === 2 ? 'bg-green-900/30 shadow-lg shadow-green-500/20' : 'bg-gray-800/30'
          }`}
          animate={{ scale: currentChart === 2 ? 1.05 : 1 }}
        >
          <CircularProgress progress={progress3} color="#10b981" size={60} />
          <div className="text-xs text-gray-400 mt-1">AUTO</div>
        </motion.div>
      </div>

      {/* Gráfico de Ondas */}
      <div className="bg-gray-800/50 rounded-lg p-3 mb-4 border border-gray-600/30">
        <div className="flex items-end justify-between h-16">
          {waveData.map((valor, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-t from-cyan-500 via-purple-500 to-green-400 rounded-full"
              style={{ width: '8px' }}
              initial={{ height: 0 }}
              animate={{ height: `${valor}%` }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            />
          ))}
        </div>
      </div>

      {/* Matriz de Dots Animados */}
      <div className="grid grid-cols-10 gap-1 mb-4">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor: [
                'rgb(55 65 81)', // gray-700
                Math.random() > 0.7 ? 'rgb(6 182 212)' : // cyan-500
                Math.random() > 0.5 ? 'rgb(139 92 246)' : // purple-500
                'rgb(16 185 129)' // emerald-500
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Barra de Progresso Fluída */}
      <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden mb-4">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-400 rounded-full"
          animate={{ width: [`${progress1}%`, `${progress2}%`, `${progress3}%`, `${progress1}%`] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>

      {/* Elementos Flutuantes */}
      <div className="absolute top-4 right-4">
        <motion.div
          className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute bottom-4 left-4">
        <motion.div
          className="w-3 h-3 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Efeito Scan Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
        animate={{ y: [0, 320, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}