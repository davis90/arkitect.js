/**
 * Get recursive property names recursively in all prototypes of a class definition
 * @private
 * @param {Object} classDef - Object of the class to find property names
 * @returns {Array<string>} return all property names
 */
const getRecursivePropertyNames = (classDef) => {
  const propertyNames = Object.getOwnPropertyNames(classDef.prototype);
  const previousPrototype = Object.getPrototypeOf(classDef);
  if (previousPrototype.prototype !== undefined) {
    return propertyNames.concat(getRecursivePropertyNames(previousPrototype));
  }
  return propertyNames;
};

class Interface {
  /**
   * Interface constructor. Interface can't be instantiated
   * @class
   * @throws {Error} Try to instantiate an Interface
   */
  constructor() {
    throw new Error(`Interface.constructor : ${this.constructor.name} cannot be instantiated directly.`);
  }

  /**
   * Check if an object implements this interface
   * @param {Object} object - Object to check
   * @returns {boolean} return true if object implements this interface, false otherwise
   */
  static implements(object) {
    const propertyNames = getRecursivePropertyNames(this).filter(p => !['constructor', 'implements'].includes(p));
    return propertyNames.every((p) => {
      if ((typeof this.prototype[p] === 'function') && !(typeof object[p] === 'function')) {
        return false;
      }
      return true;
    });
  }
}

export default Interface;
