class Abstract {
  /**
   * Abstract constructor. Abstract can't be instantiated
   * @class
   * @throws {Error} Try to instantiate an abstract class
   * @throws {Error} Try to instantiate Abstract class
   */
  constructor() {
    if (Object.getPrototypeOf(this.constructor) === Abstract) {
      throw new Error(`Abstract.constructor : ${this.name} is an abstract class. It cannot be instantiated.`);
    }
    if (this.constructor === Abstract) {
      throw new Error('Abstract.constructor : Abstract class cannot be instantiated.');
    }
  }
}

export default Abstract;
