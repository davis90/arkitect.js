export type IGOFSingletoncreateFunction<T> = () => T

/**
 * TS Type for GOF factory pattern
 */
export interface IGOFSingleton<T> {
  getInstance: IGOFSingletoncreateFunction<T>
}