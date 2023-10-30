import type { IGOFFactory, IGOFFactorycreateFunction } from "./factory.d.ts"

type IGOFAbstractFactoryPair = [
  name: string,
  factory: IGOFFactory<any>
]

/**
 * TS Type for GOF factory pattern
 */
interface IGOFAbstractFactory {
  [k: `create${string}`]: IGOFFactorycreateFunction<any>
}