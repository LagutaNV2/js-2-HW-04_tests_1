import fetchData from '../http';

describe('Тестирование функции fetchData', () => {
    test('должна выбросить ошибку при вызове с любым URL', () => {
        expect(() => fetchData('https://example.com')).toThrow('Mock this!');
        expect(() => fetchData('https://another-url.com')).toThrow('Mock this!');
        expect(() => fetchData()).toThrow('Mock this!');
    });
});
