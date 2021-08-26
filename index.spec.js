import { isBlack, isRed, isWhite, or, and, isSquare, any, all } from '.';
import rectangles from './figures'

describe('All figures', () => {
    it('should return figures with red color', () => {
        expect(rectangles.filter(isRed)).toEqual([
            rectangles[0], rectangles[3]
        ])
    });
    it('should return figures with black color', () => {
        expect(rectangles.filter(isBlack)).toEqual([
            rectangles[1], rectangles[4]
        ]);
    });

    it('should return figures with white color', () => {
        expect(rectangles.filter(isWhite)).toEqual([
            rectangles[2], rectangles[5]
        ]);
    });
});
describe('Predicates', () => {
    it('should return red or black figures', () => {
        expect(rectangles.filter(or(isRed, isBlack))).toEqual([
            rectangles[0], rectangles[1], rectangles[3], rectangles[4],
        ]);
    });

    it('should return red square', () => {
        expect(rectangles.filter(and(isRed, isSquare))).toEqual([rectangles[0]]);
    });

    it('should return squares or white figures or figures with height > 4', () => {
        expect(rectangles.filter(any([isWhite, isSquare, (figure) => figure.height > 4]))).toEqual([
            rectangles[0], rectangles[1], rectangles[2], rectangles[5],
        ]);
    });

    it('should return white square with height > 2', () => {
        expect(rectangles.filter(all([isWhite, isSquare, (figure) => figure.height > 2]))).toEqual([rectangles[2]]);
    });
});