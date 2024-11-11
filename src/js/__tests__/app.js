/* eslint-disable no-undef */
// задача 1
import { getHealthStatus } from '../app';

test.each([
    [{ name: 'X', health: 90 }, 'healthy'],
    [{ name: 'Y', health: 30 }, 'wounded'],
    [{ name: 'Z', health: 10 }, 'critical'],
])('Testing function getHealthStatus with %o ожидается статус %s', (character, expected) => {
    expect(getHealthStatus(character)).toBe(expected);
});


// задача 2 Matchers
import { sortHeroesByHealth } from '../app';

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
    expect(sortHeroesByHealth(heroes)).toEqual(expected);
});



// Задача 3

import fetchData from '../http';
import { getLevel } from '../app';
import { beforeEach } from 'node:test';

// Мокаем fetchData с помощью jest.mock
jest.mock('../http');

beforeEach(()=> {
    jest.resetAllMocks();
});

// describe('Тестирование функции getLevel', () => {
test('должна вернуть уровень пользователя при успешном ответе', () => {
    // Мокируем fetchData для успешного ответа
    fetchData.mockReturnValue({ status: 'ok', level: 5 });

    const result = getLevel(1);
    expect(result).toBe('Ваш текущий уровень: 5');
});

test('должна вернуть сообщение об ошибке при неудачном ответе', () => {
    // Мокируем fetchData для неудачного ответа
    fetchData.mockReturnValue({ status: 'error' });

    const result = getLevel(1);
    expect(result).toBe('Информация об уровне временно недоступна');
});
