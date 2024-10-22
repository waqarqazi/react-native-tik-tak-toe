// src/types/auth.d.ts
export interface AuthState {
  isLoggedIn: boolean
  userToken: string | null
  loading: boolean // Add loading state
  error: string | null // Add error state
}
