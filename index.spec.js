import { isBlack, isRed, isWhite, or, and, isSquare, any, all, filter, calcBlackSquareArea } from '.';
import rectangles from './figures'

describe('All figures', () => {
    it('should return figures with red color', () => {
        expect(filter(isRed, rectangles)).toEqual([
            rectangles[0], rectangles[3]
        ])
    });
    it('should return figures with black color', () => {
        expect(filter(isBlack, rectangles)).toEqual([
            rectangles[1], rectangles[4]
        ]);
    });

    it('should return figures with white color', () => {
        expect(filter(isWhite, rectangles)).toEqual([
            rectangles[2], rectangles[5]
        ]);
    });
});
describe('Predicates', () => {
    it('should return red or black figures', () => {
        expect(filter(or(isRed, isBlack), rectangles)).toEqual([
            rectangles[0], rectangles[1], rectangles[3], rectangles[4],
        ]);
    });

    it('should return red square', () => {
        expect(filter(and(isRed, isSquare), rectangles)).toEqual([rectangles[0]]);
    });

    it('should return squares or white figures or figures with height > 4', () => {
        expect(filter(any([isWhite, isSquare, (figure) => figure.height > 4]), rectangles)).toEqual([
            rectangles[0], rectangles[1], rectangles[2], rectangles[5],
        ]);
    });

    it('should return white square with height > 2', () => {
        expect(filter(all([isWhite, isSquare, (figure) => figure.height > 2]), rectangles)).toEqual([rectangles[2]]);
    });
});

describe('Flow functions', () => {
    it('should return array of areas', () => {
        expect(calcBlackSquareArea(rectangles)).toEqual([
            100, 40
        ]);
    });
});