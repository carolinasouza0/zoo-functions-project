const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se o nome do dia da semana passado como argumento é em inglês', () => {
    expect(() => { getOpeningHours('terça', '12:35-PM'); }).toThrow();
  });
  it('Verifica se o horário tem a seguinte formatação XX:XX-XM', () => {
    expect(() => { getOpeningHours('Tuesday', '1-35-PM'); }).toThrow();
  });
  it('Verifica se as horas estão validadas na nomenclatura AM e PM', () => {
    expect(() => { getOpeningHours('Tuesday', '10:35'); }).toThrow();
  });
  it('Verifica se a função não faz diferenciação entre maiúsculas e minúsculas', () => {
    const returned = 'The zoo is closed';
    expect(getOpeningHours('tuesday', '10:35-pm')).toBe(returned);
    expect(getOpeningHours('TUESDAY', '10:35-PM')).toBe(returned);
    expect(getOpeningHours('Tuesday', '10:35-Pm')).toBe(returned);
  });
  it('Verifica se a hora informada está entre 0 e 12', () => {
    expect(() => { getOpeningHours('tuesday', '13:30-pm'); }).toThrow();
  });
  it('Verifica se os minutos informados estão entre 0 e 59', () => {
    expect(() => { getOpeningHours('tuesday', '12:74-pm'); }).toThrow();
  });
  it('Verifica se a função traz o objeto específico caso não sejam passados nenhum argumento', () => {
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toMatchObject(obj);
  });
  it('Verifica se a função traz a mensagem de erro: The day must be valid. Example: Monday, caso o parâmetro dia seja passado de forma incorreta', () => {
    expect(() => { getOpeningHours('quinta', '11:35-PM'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('Verifica se a função traz a resposta correta de acordo com os horários e dias do funcionamento do zoo', () => {
    const closed = 'The zoo is closed';
    expect(getOpeningHours('Tuesday', '10:35-Pm')).toBe(closed);
    expect(getOpeningHours('Wednesday', '12:30-PM')).toBe('The zoo is open');
    expect(getOpeningHours('Saturday', '12:30-AM')).toBe(closed);
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
  });
});
