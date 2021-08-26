import { reduce } from "lodash";

export const and = (p1, p2) => x => p1(x) && p2(x)
export const all = predicates => predicates.reduce(and, () => true)
export const any = predicates => predicates.reduce(or)
export const or = (p1, p2) => x => p1(x) || p2(x)

let hasColor = color => figure => figure.color === color

export const isRed = hasColor('red')
export const isBlack = hasColor('black')
export const isWhite = hasColor('white')

export const isSquare = figure => figure.height === figure.width



