import { CreationManager } from "../types/interface";
export function createTimeManager(interval: number): CreationManager {
  let lastCreationTime: number = 0; // last creation time

  return {
    canCreate() {
      const currentTime = Date.now();
      //console.log("currentTime: " + currentTime);
      //console.log("lastCreationTime: " + lastCreationTime);
      //console.log("interval: " + interval);
      //console.log(currentTime - lastCreationTime);
      if (currentTime - lastCreationTime >= interval) {
        lastCreationTime = currentTime;
        return true;
      }
      return false;
    },
    debug() {
      console.log(`Last Creation Time: ${lastCreationTime}`);
      console.log(`Creation Interval: ${interval}`);
    },
  };
}
