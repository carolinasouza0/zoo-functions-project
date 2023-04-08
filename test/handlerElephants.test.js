const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('O argumento count deve retornar o número inteiro 4', () => {
    const argumentCount = handlerElephants('count');
    expect(argumentCount).toBe(4);
  });
  it('O argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    const argumentNames = handlerElephants('names');
    expect(argumentNames.includes('Jefferson')).toBe(true);
  });
  it('O argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 2);
  });
  it('O argumento location deve retornar a localização NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('O argumento popularity de retornar o número inteiro 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('O argumento availability deve retornar um array com os dias da semana em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Ao passar nenhum argumento, a função deve retornar undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Ao passar um parâmetro que não seja uma string, a função deve retornar a mensagem: Parâmetro inválido, é necessário uma string', () => {
    const errorMessage = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(5)).toBe(errorMessage);
    expect(handlerElephants(true)).toBe(errorMessage);
    expect(handlerElephants(432)).toBe(errorMessage);
  });
  it('Ao passar uma string inadequada, a função deve retornar null', () => {
    expect(handlerElephants('carol')).toBe(null);
  });
});
