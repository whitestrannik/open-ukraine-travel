// Environment configuration for different deployment targets

export interface AppConfig {
  apiUrl: string
  baseUrl: string
  environment: 'development' | 'github-pages' | 'railway-production'
  enableAnalytics: boolean
  enableDevTools: boolean
}

const configs: Record<string, AppConfig> = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    baseUrl: '/',
    environment: 'development',
    enableAnalytics: false,
    enableDevTools: true,
  },
  'github-pages': {
    apiUrl: 'https://your-railway-backend.railway.app/api', // Update with actual Railway backend URL
    baseUrl: '/explore-ukraine-travel/', // Update with actual repo name
    environment: 'github-pages',
    enableAnalytics: true,
    enableDevTools: false,
  },
  'railway-production': {
    apiUrl: 'https://api.exploreukraine.travel', // Update with actual production API URL
    baseUrl: '/',
    environment: 'railway-production',
    enableAnalytics: true,
    enableDevTools: false,
  }
}

export const getConfig = (): AppConfig => {
  // Check for GitHub Pages deployment
  if (window.location.hostname.includes('github.io')) {
    return configs['github-pages']
  }
  
  // Check for localhost development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return configs.development
  }
  
  // Default to Railway production
  return configs['railway-production']
}

// Export current config
export const config = getConfig()

// Utility functions
export const isDevelopment = () => config.environment === 'development'
export const isGitHubPages = () => config.environment === 'github-pages'
export const isProduction = () => config.environment === 'railway-production'

// Asset URL helper for different environments
export const getAssetUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In development or production Railway, assets are at root
  if (isDevelopment() || isProduction()) {
    return `/${cleanPath}`
  }
  
  // For GitHub Pages, prepend the base URL
  return `${config.baseUrl}${cleanPath}`
}

// API URL helper
export const getApiUrl = (endpoint: string): string => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint
  return `${config.apiUrl}/${cleanEndpoint}`
}
