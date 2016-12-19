/**
 * Created by igornepipenko on 12/19/16.
 */


// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
//
// let sequence: Observable<string> = Observable.from(['Hi', 'rxjs', '!!!!']);
// sequence.subscribe((res: string) => console.log(res));


// interface IListener{
//     update(message:string):void;
// }
//
// interface IObserver {
//     add(listener:IListener):void;
//     remove(listener:IListener):void;
//     notify(message:string):void;
// }
//
// class Observer implements IObserver{
//     private _listeners:IListener[] =[];
//     public add(listener:IListener):void{
//         this._listeners.push(listener)
//     };
//     public remove(listener:IListener):void{
//         this._listeners.splice(this._listeners.indexOf(listener),1)
//     };
//     public notify(message:string):void{
//         this._listeners.forEach((listener:IListener)=> listener.update(message))
//     };
// }
//
// let listener1:IListener ={
//     update(message:string){
//         console.log(`Listener 1 : ${message}`)
//     }
// }
// let listener2:IListener ={
//     update(message:string){
//         console.log(`Listener 2 : ${message}`)
//     }
// }
// let listener3:IListener ={
//     update(message:string){
//         console.log(`Listener 3 : ${message}`)
//     }
// }
//
// let observer = new Observer();
// observer.add(listener1);
// observer.add(listener2);
// observer.add(listener3);
// observer.remove(listener2);
//
// observer.notify('TypeScript -> cool')


// interface IIterator {
//     next(): any;
//     hasNext(): boolean;
// }
//
// class Iterator implements IIterator {
//     private _cursor: number = 0;
//     private _array: any[];
//     private _devisor: number;
//
//     public constructor(array: any[], divisor: number = 1) {
//         this._array = array;
//         this._devisor = divisor;
//     }
//
//     public next():any {
//         for (let i = this._cursor; i < this._array.length; i++) {
//             let value = this._array[i];
//             if (value % this._devisor === 0) {
//                 this._cursor = i < this._array.length ? i + 1 : this._cursor;
//                 return value;
//             }
//         }
//     }
//
//     public hasNext():boolean {
//         for (let i = this._cursor; i < this._array.length; i++) {
//           if(this._array[i+1]%this._devisor === 0){
//               return true;
//           }
//         }
//         return false;
//     }
// }
//
// let iterator:IIterator = new Iterator([1,2,3,4,5,6,7,8,9,10],3);
// console.log(iterator.next(),iterator.hasNext());
// console.log(iterator.next(),iterator.hasNext());
// console.log(iterator.next(),iterator.hasNext());
// console.log(iterator.next(),iterator.hasNext());
// console.log(iterator.next(),iterator.hasNext());
// console.log(iterator.next(),iterator.hasNext());
// console.log(iterator.next(),iterator.hasNext());

// import {Observable} from 'rxjs/Observable';
// import {Observer} from 'rxjs/Observer';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/observable/fromPromise';
// let sequence: Observable<string> = Observable.create((observer:Observer<string>)=>{
//     observer.next('TypeScript');
//     observer.next('=>');
//     observer.next('cool');
//     observer.complete();
// })
//
// sequence.subscribe((item:string)=>console.log(item),()=>{},()=>{
//     console.log('finish');
// })


// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/range';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/first';
//
// let sequence: Observable<number> = Observable.range(1, 4);
// sequence.map((item: number) => item ** 2)
//     .filter((item: number) => item % 2 === 0)
//     .first()
//     .subscribe((item: number) => console.log(item))


// AsyncSubject
// import {Observable} from 'rxjs/Observable';
// import {Observer} from 'rxjs/Observer';
// import {AsyncSubject} from 'rxjs/AsyncSubject';
// import 'rxjs/add/observable/range';
//
// function getValue(): Observable<number> {
//     let asyncSubject: AsyncSubject<number>;
//     return Observable.create((observer: Observer<number>) => {
//         if (!asyncSubject) {
//             let delayRange = Observable.range(0, 7);
//             asyncSubject = new AsyncSubject();
//             delayRange.subscribe(asyncSubject)
//         }
//         return asyncSubject.subscribe(observer)
//     })
// }
//
// let cacheVal = getValue();
// console.time('first result');
// cacheVal.subscribe(item =>{
//     console.timeEnd('first result');
//     console.log('first value', item)
// })
//
// console.time('second result');
// cacheVal.subscribe(item =>{
//     console.timeEnd('second result');
//     console.log('second value', item)
// })

// BehaviorSubject

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/range';

// let behaviorSubject:BehaviorSubject<string|number> = new BehaviorSubject('Init value');
//
// behaviorSubject.subscribe((item)=>console.log(item))

// Observable.range(0,5).subscribe(behaviorSubject)
// let sequence = Observable.range(0,5);
// sequence.subscribe(item => console.log(item));
// sequence.subscribe(item => console.log(item));
// sequence.subscribe(item => console.log(item));

//
// import {Subject} from 'rxjs/Subject';
//
// let subject:Subject<number> = new Subject();
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);
// subject.subscribe(item => console.log(item))
// subject.next(5);

import {ReplaySubject} from 'rxjs/ReplaySubject';
let replaySubject:ReplaySubject<number> = new ReplaySubject(null,20);
setTimeout(()=>replaySubject.next(1),100);
setTimeout(()=>replaySubject.next(2),200);
setTimeout(()=>replaySubject.next(3),300);
setTimeout(()=>replaySubject.next(4),400);
setTimeout(()=>replaySubject.subscribe(item => console.log(item)),350);