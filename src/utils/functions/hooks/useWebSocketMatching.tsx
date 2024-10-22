// hooks/useWebSocket.js

import { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
//import SCREENS from '@navigation/constants' 
import { Alert } from 'react-native'
const LIKES_NAMESPACE = `http://192.168.1.11:3000/likes`

const useWebSocketMatching = (navigation) => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = socketIOClient(LIKES_NAMESPACE)
    setSocket(newSocket)

    newSocket.on('match', (data) => {
      Alert.alert('Match Found', `You have matched with user ${data.user2}`)

      // navigation.navigate(SCREENS.CHAT_NAVIGATOR, {
      //   screen: SCREENS.GIFTED_CHAT,
      //   params: {
      //     data: {
      //       user: {
      //         firstName: 'WaqarS',
      //         lastName: 'Hussain',
      //         profileImage: 'title?.profileImage',
      //       },
      //     },
      //     userId: data.user2,
      //   },
      // })
    })

    return () => {
      newSocket.close()
    }
  }, [navigation])

  const emitLike = (userId, likedUserId) => {
    if (socket) {
      socket.emit('like', { userId, likedUserId })
    } else {
      console.error('Socket is not initialized')
    }
  }

  const emitSuperLike = (userId, superLikedUserId) => {
    if (socket) {
      socket.emit('superLike', { userId, superLikedUserId })
    } else {
      console.error('Socket is not initialized')
    }
  }

  const emitSkip = (userId, skippedUserId) => {
    if (socket) {
      socket.emit('skip', { userId, skippedUserId })
    } else {
      console.error('Socket is not initialized')
    }
  }

  return {
    emitLike,
    emitSuperLike,
    emitSkip,
  }
}

export default useWebSocketMatching
