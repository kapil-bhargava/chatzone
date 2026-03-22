let onlineUsers = [];

exports.socketConnection = (io) => {
  io.on("connection", (socket) => {
    console.log("📡 New client connected:", socket.id);

    socket.on("joinRoom", ({ roomId, username }) => {
      socket.join(roomId);
      socket.to(roomId).emit("message", {
        sender: "System",
        text: `${username} joined the room`,
      });
    });

    socket.on("sendMessage", ({ roomId, message, sender }) => {
      io.to(roomId).emit("message", { sender, text: message });
    });

    socket.on("publicMessage", (data) => {
      socket.broadcast.emit("publicMessage", data);
    });

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });
};
