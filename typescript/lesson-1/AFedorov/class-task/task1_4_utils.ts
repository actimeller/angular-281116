/// <reference path="../typings/index.d.ts" />

import * as shim from 'es6-shim'

type Summable = number | string 
type Comparable = number | string | boolean | null

class Utils {
    static isInArray<T extends Comparable>(arr: T[], ...args: T[]): boolean {
        if (!arr || arr.length === 0)
            return args.length === 0

        let lookup = new Set<T>(arr)

        for (let val of args)
            if (!lookup.has(val))
                return false

        return true
    }

    static summator(...args: Summable[]): Summable {
        
        let res = 0
        if (args.length > 1)
            for (let v of args)                                     
                    res += Number(v)                                

        return res 
    }

    static getUnique<T> (...args: T[]): T[] {
        let lookup = new Set<T>()
        
        for (let val of args)
            if (!lookup.has(val))
                lookup.add(val)            

        return Array.from(lookup)
    } 
}

const testInArray = () => {
    console.log(Utils.isInArray([null]))
    console.log(Utils.isInArray([]))
    console.log(Utils.isInArray<number>([1, 5, 7, 88], 5, 7, 1))
    console.log(Utils.isInArray([1, 5, 7, 88], 5, 7, 1, 99))
    console.log(Utils.isInArray([1, 5, 7, 'xx'], 5, 7))
    console.log(Utils.isInArray([1, 5, 7, 'xx'], 5, 'xx',7))
    console.log(Utils.isInArray([1, 5, 7, 'xx'], 5, 'xx', 7, 'yy'))
}

const testSummator = () => {
    console.log(Utils.summator())
    //console.log(Utils.summator(null))
    console.log(Utils.summator(10, 20, 30))
    console.log(Utils.summator("a", "xx", "cc"))
    console.log(Utils.summator(10, 'zz', 30))
    console.log(Utils.summator(10, '5', 30))
}

const testUnique = () => {
    console.log(Utils.getUnique<number>(1, 12, 15, 5, 4, 1))
    console.log(Utils.getUnique<string>('xy', 'ab', 'cc', 'ab'))
}

console.log('testInArray')
testInArray()

console.log('testSummator')
testSummator()

console.log('testUnique')
testUnique()

