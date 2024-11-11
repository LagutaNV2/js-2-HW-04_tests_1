/* eslint-disable no-undef */
// задача 1
import { getHealthStatus } from '../app';

test.each([
    [{ name: 'X', health: 90 }, 'healthy'],
    [{ name: 'Y', health: 30 }, 'wounded'],
    [{ name: 'Z', health: 10 }, 'critical'],
])
('Testing function getHealthStatus with %o ожидается статус %s', (character, expected) => {
    expected(getHealthStatus(character)).toBe(expected);
});


// задача 2 Matchers
import { sortHeroesByHealth } from '../app';

describe('Тестирование сортировки героев по здоровью', () => {
    test.each([
        [
            [
                { name: 'мечник', health: 10 },
                { name: 'маг', health: 100 },
                { name: 'лучник', health: 80 },
            ],
            [
                { name: 'маг', health: 100 },
                { name: 'лучник', health: 80 },
                { name: 'мечник', health: 10 },
            ]
        ],
        [
            [
                { name: 'волшебник', health: 40 },
                { name: 'боец', health: 90 },
            ],
            [
                { name: 'боец', health: 90 },
                { name: 'волшебник', health: 40 },
            ]
        ],
        [
            [
                { name: 'солдат', health: 30 },
                { name: 'разведчик', health: 30 },
            ],
            [
                { name: 'солдат', health: 30 },
                { name: 'разведчик', health: 30 },
            ]
        ],
    ])('для героев %o ожидается сортировка %o', (heroes, expected) => {
        expected(sortHeroesByHealth(heroes)).toEqual(expected);
    });
});
