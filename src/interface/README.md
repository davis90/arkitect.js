## **Interface**

An interface is used to specify a behavior that classes must implement.

### **How to use**

#### **Import**

 You can use import with es6 import:

    import { Interface } from 'arkitect.js';

 Or use required syntax:

    var arkitect = require('arkitect.js');
    var Interface = arkitect.Interface;

 #### **Examples:**

 Interface Creation:

    class MyInterface extends interface {
       toString(){}
       compute(){}
    }

 Other classes creation:

    class Implementation {
      constructor(){
        this._value = 14;
      }
      toString(){
        return String(this._value);
      }
    class Implementation2 extends Implementation {
      compute(){
        this._value += 1;
      }
     }

 Test if they implement the interface:

    const impl1 = new Implementation();
    const impl2 = new Implementation2();
    MyInterface.implements(impl1) // returns false
    MyInterface.implements(impl2) // returns true