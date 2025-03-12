import { divide } from '.divide.mjs';
import { strict as assert } from 'node: assert';
import { describe, it }  from 'node:test';

// describe('Имя тестового набора в виде строки', коллбэк-функция с нашими тестами)
describe('Тесты для функции деления divide', () => {
  it ('Функция корректно делит одно число на другое', () => {
  // assert.equal(что_сравнить, какой_ответ_мы_ожидаем)
  assert.equal(divide(10, 5), 2);
 })
  it ('Функция корректно обрабатываетделение на ноль', () => {
    
  })
}
)
