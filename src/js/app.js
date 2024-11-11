// TODO: write your code here

// задача 1
export function getHealthStatus(character) {
    const { health } = character;
    if (health > 50) {
        return 'healthy';
    } else if (health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}

// задача 2 Matchers
// slice() - создание копии массива, чтобы не изменять исходник
// Использовать toBe в этом случае нельзя, так как массивы не будут равны
// по ссылке (даже если их содержимое одинаковое),
// поэтому применяется toEqual

export function sortHeroesByHealth(heroes) {
    return heroes.slice().sort((a, b) => b.health - a.health);
}


// Задача 3 Демо-реализация функции fetchData (модуль http):

import fetchData from './http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

 // TODO: логика обработки
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`;
  }

  return `Информация об уровне временно недоступна`;
}
