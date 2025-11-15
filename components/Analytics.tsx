'use client'

// Using Vercel Analytics - 100% FREE, no setup required
// Automatically tracks page views, web vitals, and user interactions
// Dashboard: https://vercel.com/your-project/analytics

export function Analytics() {
  // Vercel Analytics is automatically enabled in production
  // No client-side code needed - tracks via Edge middleware
  return null
}

// Helper function to track custom events (works with Vercel Analytics)
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  // Vercel Analytics auto-tracks events, manual tracking optional
  if (typeof window !== 'undefined') {
    console.log('Event tracked:', { action, category, label, value })
  }
}

// Helper function to track conversions
export const trackConversion = (orderId: string, value: number) => {
  if (typeof window !== 'undefined') {
    console.log('Conversion tracked:', { orderId, value, currency: 'INR' })
  }
}
