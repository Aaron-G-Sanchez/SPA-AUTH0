import { socket } from '../../socket'

export const SocketDemo = () => {
  const connect = () => {
    socket.connect()
  }

  const disconnect = () => {
    socket.disconnect()
  }

  return (
    <>
      <div className="socket-demo-container">
        <div className="connection-controls">
          <button onClick={connect}>Connect</button>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      </div>
    </>
  )
}
