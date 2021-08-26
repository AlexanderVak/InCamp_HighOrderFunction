import { curry, flow } from "lodash"

export const and = (p1, p2) => x => p1(x) && p2(x)
export const all = predicates => predicates.reduce(and, () => true)
export const any = predicates => predicates.reduce(or)
export const or = (p1, p2) => x => p1(x) || p2(x)

let hasColor = curry((color, rectangle) => rectangle.color === color)

export const isRed = hasColor('red')
export const isBlack = hasColor('black')
export const isWhite = hasColor('white')

                        //callbackFn => items => items.map(callbackFn)
export const map = curry((callbackFn, items) => items.map(callbackFn))  
export const filter = curry((callbackFn, items) => items.filter(callbackFn))
export const reduce = (callbackFn, initialValue) => items => items.reduce(callbackFn, initialValue)

export const isSquare = rectangle => rectangle.height === rectangle.width
const calcArea = rectangle => rectangle.width * rectangle.height

export let calcBlackSquareArea = flow(
    filterter(and(isSquare, isBlack)),
    map(calcArea)
)






