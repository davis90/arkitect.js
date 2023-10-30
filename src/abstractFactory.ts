import type { IGOFAbstractFactory, IGOFAbstractFactoryPair } from './types/abstractFactory.d.ts'
import { capitalize } from './utils/capitalize'

export const createAbstractFactory = function(factories: Array<IGOFAbstractFactoryPair>): IGOFAbstractFactory {
  let abstractFactory: IGOFAbstractFactory = {createLol: () => ({})}
  factories.forEach((pair: IGOFAbstractFactoryPair) => {
    const attributeName: keyof IGOFAbstractFactory =  `create${capitalize(pair[0])}`
    abstractFactory[attributeName] = pair[1].create
  })
  return abstractFactory
}
