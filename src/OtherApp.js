import { myClass } from "./MyClass";

export { myClass as myOtherAppClass };
console.log("from other...", myClass);
