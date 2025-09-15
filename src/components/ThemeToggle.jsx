import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { applyTheme, getInitialTheme } from '../theme'

function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const initial = applyTheme(getInitialTheme())
    setTheme(initial)
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    applyTheme(next)
    setTheme(next)
  }

  return (
    <Button variant="outline-secondary" size="sm" onClick={toggle} aria-label="Toggle theme">
      {theme === 'light' ? 'Dark' : 'Light'} mode
    </Button>
  )
}

export default ThemeToggle

