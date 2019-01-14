## **Implementation**

Implementation is used to specify class that implements an interface.

### **How to use**

#### **Import**

 You can use import with es6 import:

    import { Implementation } from 'arkitect.js';

 Or use required syntax:

    var arkitect = require('arkitect.js');
    var Implementation = arkitect.Implementation;

 #### **Examples**

 Interface creation:

    class MyInterface extends Interface {
       toString(){}
       compute(){}
    }

 Implementation creation:

    class MyImplementation extends Implementation(MyInterface) {

       constructor(){
         this._name = "impl";
       }

       toString(){
          return this._name;
       }
       compute(val){
          return val + 10;
       }
    }

 Others Implementation creation:

    class MyImplementation2 extends Implementation(MyInterface) {
      constructor(){
        this._value = 14;
      }
      toString(){
        return String(this._value);
      }
     }

     class MyImplementation3 extends Implementation() {
     class MyImplementation4 extends Implementation(3) {


 Test if they implement the interface:

    const impl1 = new MyImplementation(); /* Works. MyImplementation implements
                                            MyInterface.*/
    const impl2 = new Implementation2(); /* Throws an error. MyImplementation2
                                            doesn't implement MyInterface. */
    const impl3 = new Implementation3(); /* Throws an error. MyImplementation3
                                            doesn't implement any valid Interface. */
    const impl4 = new Implementation4(); /* Throws an error. MyImplementation4
                                            doesn't implement any valid Interface. */