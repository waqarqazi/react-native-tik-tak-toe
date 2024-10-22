// src/services/gameService.ts
import client from './client'

export const startGameAPI = async (): Promise<{ board: string[][]; sessionId: string }> => {
  try {
    const response = await client.post('/action/start-game')
    console.log("response", response);

    return response
  } catch (error) {
    console.error('Failed to start game:', error)
    throw error
  }
}

export const makeMoveAPI = async ({
  row,
  col,
  player,
}: {
  row: number
  col: number
  player: 'X' | 'O'
}): Promise<{ board: string[][]; winner: string | null }> => {
  try {
    const response = await client.post('/action/make-move', { row, col, player })
    return response
  } catch (error) {
    console.error('Failed to make move:', error)
    throw error
  }
}
export const getProfileAPI = async (): Promise<{
  user: {
    _id: string;
    wins: number;
    loses: number;
    draws: number;
    email: string,
    firstName: string,
    lastName: string,
  }
}> => {
  try {
    const response = await client.get('/action/profile');    
    return response.user;
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
};