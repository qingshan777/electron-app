import { ipcRenderer } from "electron-better-ipc";
import { QUERY_INTERVAL } from "@/config/network";

export default function () {
  const isOnline = ref<boolean | null>(null);
  const timer = ref<number | null>(null);

  // 通过 nodejs 获取网络状态
  const getNetworkStatus = () => {
    ipcRenderer.send("get-network-status");
  };

  // 注册监听器
  const initListener = () => {
    ipcRenderer.on("get-network-status-response", (event, status) => {
      isOnline.value = status;
    });
  };

  onMounted(() => {
    initListener();
    getNetworkStatus();
    timer.value = window.setInterval(getNetworkStatus, QUERY_INTERVAL);
  });

  onBeforeMount(() => {
    if (timer.value) clearInterval(timer.value);
  });

  return {
    isOnline,
  };
}
