import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { startGameAPI, makeMoveAPI, getProfileAPI } from '../services/gameService'

// Define the game state interface
interface GameState {
  board: string[][]
  currentPlayer: 'X' | 'O'
  sessionId: string | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  winner: string | null
  wins: number
  loses: number
  draws: number
  email: string | null
  firstName: string | null
  lastName: string | null
}

// Initial state for the game slice
const initialState: GameState = {
  board: [['', '', ''], ['', '', ''], ['', '', '']],
  currentPlayer: 'X',
  sessionId: null,
  status: 'idle',
  error: null,
  winner: null,
  wins: 0,
  loses: 0,
  draws: 0,
  email: null,
  firstName: null,
  lastName: null,
}

// Async thunk for starting a game
export const startGame = createAsyncThunk<
  { board: string[][]; sessionId: string }, // Response type
  void, // No argument is passed
  { rejectValue: string }
>('game/startGame', async (_, { rejectWithValue }) => {
  try {
    const response = await startGameAPI()
    return response
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || 'Failed to start the game'
    return rejectWithValue(errorMessage)
  }
})

// Async thunk for making a move
export const makeMove = createAsyncThunk<
  { board: string[][]; winner: string | null }, // Response type
  { row: number; col: number; player: 'X' | 'O' }, // Payload type
  { rejectValue: string }
>('game/makeMove', async ({ row, col, player }, { rejectWithValue }) => {
  try {
    const response = await makeMoveAPI({ row, col, player })
    return response
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || 'Failed to make move'
    return rejectWithValue(errorMessage)
  }
})

// Async thunk for fetching user profile (wins, loses, draws, and other info)
export const getProfile = createAsyncThunk<
  { _id: string; wins: number; loses: number; draws: number; email: string; firstName: string; lastName: string }, // Response type
  void, // No argument is passed
  { rejectValue: string }
>('game/getProfile', async (_, { rejectWithValue }) => {
  try {
    const response = await getProfileAPI()
    return response
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message || 'Failed to fetch profile'
    return rejectWithValue(errorMessage)
  }
})

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: (state) => {
      state.board = [['', '', ''], ['', '', ''], ['', '', '']]
      state.currentPlayer = 'X'
      state.sessionId = null
      state.status = 'idle'
      state.error = null
      state.winner = null
    },
    changePlayer: (state) => {
      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X'
    },
  },
  extraReducers: (builder) => {
    // Handle start game
    builder
      .addCase(startGame.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(startGame.fulfilled, (state, action: PayloadAction<{ board: string[][]; sessionId: string }>) => {
        state.status = 'succeeded'
        state.board = action.payload.board
        state.sessionId = action.payload.sessionId
        state.error = null
        state.winner = null
      })
      .addCase(startGame.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed'
        state.error = action.payload || 'Failed to start the game'
      })
    
    // Handle make move
    builder
      .addCase(makeMove.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(makeMove.fulfilled, (state, action: PayloadAction<{ board: string[][]; winner: string | null }>) => {
        state.status = 'succeeded'
        state.board = action.payload.board
        state.winner = action.payload.winner
        state.error = null
        if (state.winner) {
          state.currentPlayer = 'X' // Reset to X after a winner is found
        }
      })
      .addCase(makeMove.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed'
        state.error = action.payload || 'Failed to make move'
      })

    // Handle fetching user profile
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<{ _id: string; wins: number; loses: number; draws: number; email: string; firstName: string; lastName: string }>) => {
        state.status = 'succeeded'
        state.wins = action.payload.wins
        state.loses = action.payload.loses
        state.draws = action.payload.draws
        state.email = action.payload.email
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
      })
      .addCase(getProfile.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed'
        state.error = action.payload || 'Failed to fetch profile'
      })
  },
})

export const { resetGame, changePlayer } = gameSlice.actions

export default gameSlice.reducer
