import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import { ThemeProvider } from 'styled-components/native'
import { useColorScheme } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { lightTheme, darkTheme, Theme } from './theme'

interface ThemeContextProps {
  toggleTheme: () => void
  theme: Theme
  isDarkTheme: boolean
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProviderWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const deviceTheme = useColorScheme() // 'light' or 'dark'
  const [isDarkTheme, setIsDarkTheme] = useState(deviceTheme === 'dark')

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme')
        if (savedTheme) {
          setIsDarkTheme(savedTheme === 'dark')
        } else {
          setIsDarkTheme(deviceTheme === 'dark')
        }
      } catch (error) {
        console.error('Failed to load theme', error)
      }
    }

    loadTheme()
  }, [deviceTheme])

  const toggleTheme = async () => {
    try {
      const newTheme = !isDarkTheme ? 'dark' : 'light'
      await AsyncStorage.setItem('theme', newTheme)
      setIsDarkTheme(!isDarkTheme)
    } catch (error) {
      console.error('Failed to save theme', error)
    }
  }

  const theme = isDarkTheme ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme, isDarkTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
