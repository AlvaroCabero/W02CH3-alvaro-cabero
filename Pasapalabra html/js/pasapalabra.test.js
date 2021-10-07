function respuestaSinTildes(respuesta) {
  respuesta = respuesta.replace(/á/gi, "a");
  respuesta = respuesta.replace(/é/gi, "e");
  respuesta = respuesta.replace(/í/gi, "i");
  respuesta = respuesta.replace(/ó/gi, "o");
  respuesta = respuesta.replace(/ú/gi, "u");

  return respuesta;
}

describe("Function respuestaSinTildes", () => {
  test("When you get álvaro, it should return alvaro", () => {
    //Arrange
    const word = "álvaró";
    const expected = "alvaro";

    //Act
    const result = respuestaSinTildes(word);

    //Asset
    expect(result).toBe(expected);
  });
});
