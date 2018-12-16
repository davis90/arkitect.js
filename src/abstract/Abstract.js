class Abstract {
  /**
   * Abstract constructor. Abstract can't be instantiated
   * @class
   * @abstract
   * @throws {Error} Try to instantiate an abstract class
   */
  constructor() {
    if (Object.getPrototypeOf(this.constructor) === Abstract) {
      throw new TypeError(`Abstract.constructor : ${this.name} is an abstract class. It cannot be instantiated.`);
    }
    if (this.constructor === Abstract) {
      throw new TypeError('Abstract.constructor : Abstract class cannot be instantiated.');
    }
  }
}

export default Abstract;
