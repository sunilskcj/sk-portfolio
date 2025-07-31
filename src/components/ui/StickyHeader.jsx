import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const dayName = dateTime.toLocaleDateString('en-US', { weekday: 'long' })
  const date = dateTime.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

  return `${dayName} ${date}`
}

export const StickyHeader = () => {
  return null
}
