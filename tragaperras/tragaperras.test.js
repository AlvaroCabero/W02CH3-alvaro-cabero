function escogerNumero() {
  return Math.floor(Math.random() * 7);
}
/*????
describe("Function escogerNumero", () => {
  test("When you get no input, it should return number between 0 - 6", () => {
    //Arrange
    const expected;
    expected = expected >= 0 && expected <= 6;

    //Act
    const result = escogerNumero();

    //Asset
    expect(result).toBe(expected);
  });
});*/
