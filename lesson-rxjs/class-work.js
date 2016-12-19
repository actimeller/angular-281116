/**
 * Created by igornepipenko on 12/19/16.
 */
"use strict";
require("rxjs/add/observable/range");
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
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var replaySubject = new ReplaySubject_1.ReplaySubject(null, 20);
setTimeout(function () { return replaySubject.next(1); }, 100);
setTimeout(function () { return replaySubject.next(2); }, 200);
setTimeout(function () { return replaySubject.next(3); }, 300);
setTimeout(function () { return replaySubject.next(4); }, 400);
setTimeout(function () { return replaySubject.subscribe(function (item) { return console.log(item); }); }, 350);
