import type { IGOFSingletoncreateFunction, IGOFSingleton } from "./types/singleton.d.ts";

export const createSingleton = function<T>(createFunction: IGOFSingletoncreateFunction<T>): IGOFSingleton<T> {
  let instance: T
  return {
    getInstance(): T {
      if (instance === null) {
        instance = createFunction()
      }
      return instance
    }
  }
}