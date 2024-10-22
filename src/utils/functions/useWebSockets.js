/* eslint-disable no-unused-vars */
// ES6 import or TypeScript
/* eslint-disable */
import { chatServices } from '@services/chat-services'
import { useEffect, useRef } from 'react'
import Config from 'react-native-config'
import io from 'socket.io-client'

export const useWebSockets = ({
  userId,
  enabled,
  onConnected,
  arrayOfOtherUsers,
  receiveMsg,
  setConnected,
  getChatList,
}) => {
  const ref = useRef()
  const roomDataIdRef = useRef()

  const send = (msg) => {
    ref.current.emit('message', {
      roomId: roomDataIdRef.current,
      messagePayload: msg,
    })
  }

  const getConversation = async (page, limit) => {
    console.log('roomDataIdRef.current', roomDataIdRef.current)
    try {
      const result = await chatServices.getConversatioApi(
        roomDataIdRef.current,
        page,
        limit,
      )
      console.log('Here is the conversation ', result)
      return result
    } catch (error) {
      console.log(error)
    }
  }
  console.log('arrayOfOtherUsers', arrayOfOtherUsers)
  useEffect(() => {
    if (!enabled) {
      return
    }

    //pass url of socket io connection same base url
    const socket = io('http://192.168.1.11:3000')

    //first we need to make room with user
    // socket.emit('joinRoom', userId);

    socket.emit('identity', { userId })

    //create chat
    socket.emit('create', { otherUserId: arrayOfOtherUsers })

    socket.on('connected', () => {
      if (onConnected) {
        onConnected()
      }
    })

    //When room is successfully created this event is lisitened
    socket.on('OnJoin', (data) => {
      console.log('Room Data ', data)
      // setRoomData(data.chatRoomId);
      roomDataIdRef.current = String(data.chatRoomId)
      setConnected(true)
    })

    socket.on('new message', (data) => {
      console.log('Reply received ', data)
      receiveMsg(data)
    })

    socket.on('disconnect', () => {
      console.log('disconnected')
    })

    // socket.on('reconnect', () => {
    //   socket.emit('joinRoom', userId);
    // });

    ref.current = socket

    return () => {
      socket.emit('markUnread', { roomId: roomDataIdRef.current }),
        socket.disconnect(),
        getChatList()
    }
  }, [userId])

  return {
    send,
    getConversation,
  }
}
