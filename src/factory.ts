import type { IGOFFactory, IGOFFactorycreateFunction } from './types/factory.d.ts'

export const createFactory = function<T>(createFunction: IGOFFactorycreateFunction<T>): IGOFFactory<T> {
  return {
    create: createFunction
  }
}
