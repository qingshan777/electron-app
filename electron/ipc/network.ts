import { ipcMain } from "electron-better-ipc";
import { queryNetworkStatus } from "#/service/network";

// 获取设备网络状态
ipcMain.on("get-network-status", async (event) => {
  const isOnline = await queryNetworkStatus();
  event.sender.send("get-network-status-response", isOnline);
});
