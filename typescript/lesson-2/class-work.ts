/**
 * Created by igornepipenko on 12/8/16.
 */
// function a (this:void,a:number){
//
// }
//
// a(1);


//fetch('http.example.com').then((res:Response)=>res.json()).then()


// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;


// class MathLib {
//
//     @logMethod
//     public areaOfCircle(r: number): number {
//         return Math.PI * r ** 2;
//     }
// }
//
//
// function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//     let originalDesc = descriptor.value;
//     descriptor.value = (...args: number[]): number => {
//         let b = args.map((item: number) => JSON.stringify(item)).join();
//         let result = originalDesc(...args);
//         let r = JSON.stringify(result);
//         console.log(`Call: ${propertyKey}(${b}) => ${r}`)
//         return result;
//     }
//
//     return descriptor;
//
// }
// let a = new MathLib();
//
// a.areaOfCircle(3)


// class Account {
//
//     @logProperty
//     public firstName: string;
//     public lastName: string;
//
//     public constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
//
// function logProperty(target: any, propertyKey: string): void {
//     let _val = target[propertyKey];
//
//     let getter = (): typeof _val => {
//         console.log(`Get ${propertyKey} => ${_val}`)
//         return _val;
//     }
//
//
//     let setter = (newValue:string):void=> {
//         console.log(`Set ${propertyKey} => ${newValue}`)
//         _val=newValue;
//     }
//
//     Object.defineProperty(target,propertyKey,{
//         get:getter,
//         set:setter,
//         enumerable:true
//     })
// }
//
//
// let me = new Account('Igor','Nepipenko');
// let my_name = me.firstName;
// me.firstName = 'Vlad';

// @logClass
// class Account {
//
//
//     public firstName: string;
//     public lastName: string;
//
//     public constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
//
// function logClass(target: any): any {
//     return () => {
//         console.log(`New instance of ${target.name}`)
//         return target;
//     }
// }
//
// let person1 = new Account('Igor','Nepipenko');
// let person2 = new Account('Evgenia','Nepipenko');


// class Account {
//
//
//     public firstName: string;
//     public lastName: string;
//
//     public constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     @readMetaData
//     public sayMessage(@writeMetaData msg:string):string{
//         return `${this.firstName} ${this.lastName}: ${msg}`
//     }
// }
//
// function writeMetaData(target: any, propertyKey: string, parameterIndex: number): void{
//     let metadataKey = `___log_${propertyKey}__parameters`;
//     if(Array.isArray(target[metadataKey])){
//         target[metadataKey].push(parameterIndex)
//     }else{
//         target[metadataKey] =[parameterIndex]
//     }
// }
//
// function readMetaData(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor{
//     let metadataKey = `___log_${propertyKey}__parameters`;
//     let indices = target[metadataKey];
//     let originalDesc = descriptor.value;
//     descriptor.value=(...args:string[]):string =>{
//         console.log(`${propertyKey} arg[${indices}]: ${args[indices]}`);
//         return originalDesc(...args)
//     }
//     return descriptor
// }
// let persone = new Account('Igor', 'Nepipenko');
// persone.sayMessage('Angular 2 is awesome');
// persone.sayMessage('I like  TypeScript');

