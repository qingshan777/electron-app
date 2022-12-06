import internetAvailable from "internet-available";
import { QUERY_TIMEOUT, DNS } from "#/config/network";

// 通过 internet-available 查询网络状态
export const queryNetworkStatus = async (): Promise<boolean> => {
  let isOnline = false;
  return new Promise((resolve, reject) => {
    internetAvailable({
      timeout: QUERY_TIMEOUT,
      host: DNS,
    })
      .then(() => {
        isOnline = true;
        resolve(isOnline);
      })
      .catch(() => {
        isOnline = false;
        reject(isOnline);
      });
  });
};
