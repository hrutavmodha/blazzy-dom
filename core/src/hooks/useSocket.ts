import { io, Socket } from 'socket.io-client'
type EventMap = {
    [event: string]: (...args: Array<any>) => void
}
interface socketOptions {
    url: string
    autoConnect?: boolean
    reconnection?: boolean
    reconnectionAttempts?: number
    reconnectionDelay?: number
}
export default function useSocket(options: socketOptions) {
    const {
        url,
        autoConnect = true,
        reconnection = true,
        reconnectionAttempts = 2,
        reconnectionDelay = 1000
    } = options
    let socket: Socket | null = null
    let listeners: EventMap = {}
    const connect = () => {
        if (!socket) {
            socket = io(url, {
                autoConnect: false,
                reconnection,
                reconnectionAttempts,
                reconnectionDelay
            })
            socket.on('connect', () => {
                console.log(`Successfully connected to ${url}`)
                Object.entries(listeners).forEach(([event, handler]) => {
                    socket?.on(event, handler)
                })
            })
            socket.on('disconnect', (reason) => {
                console.warn(`Disconnected: ${reason}`)
            })
            socket.on('connect_error', (error) => {
                console.error(`Connection error: ${error.message}`)
            })
        }
        if (autoConnect) {
            socket?.connect()
        }
    }
    const disconnect = () => {
        socket?.disconnect()
    }
    const on = (
        event: string,
        handler: (...args: Array<any>) => void
    ) => {
        listeners[event] = handler
        socket?.on(event, handler)
    }
    const off = (event: string) => {
        delete listeners[event]
        socket?.off(event)
    }
    const emit = (
        event: string,
        ...args: Array<any>
    ) => {
        socket?.emit(event, ...args)
    }
    const isConnected = () => {
        return socket?.connected
    }
    connect()
    return {
        connect,
        disconnect,
        on,
        off,
        emit,
        isConnected
    }
}