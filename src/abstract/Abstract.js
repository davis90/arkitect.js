class Abstract {
  /**
   * Abstract constructor. Abstract can't be instantiated
   * @class
   * @abstract
   * @param {boolean} isAbstract : Know if class is an abstract class
   * @throws {Error} Try to instantiate an abstract class
   */
  constructor(isAbstract) {
    if (isAbstract !== false) {
      throw new TypeError(`Abstract.constructor :
        ${this.name} class cannot be instantiated directly.`);
    }
  }
}

export default Abstract;
