export type IGOFFactorycreateFunction<T> = (...args: any[]) => T

/**
 * TS Type for GOF factory pattern
 */
export interface IGOFFactory<T> {
  create: IGOFFactorycreateFunction<T>
}

