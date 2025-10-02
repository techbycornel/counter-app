// Button
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

// Layout
export interface LayoutProps {
  children: React.ReactNode
}

// PageRoute
export interface PageRouteProps {
  pageRoute: string
}
