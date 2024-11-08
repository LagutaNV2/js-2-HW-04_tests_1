import { getHealthStatus } from '../app';

test.each([
    [{ name: 'X', health: 90 }, 'healthy'],
    [{ name: 'Y', health: 30 }, 'wounded'],
    [{ name: 'Z', health: 10 }, 'critical'],
])
('Testing function getHealthStatus with %o ожидается статус %s', (character, expected) => {
    expect(getHealthStatus(character)).toBe(expected);
});
