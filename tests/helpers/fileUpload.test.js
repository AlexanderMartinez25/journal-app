import { fileUpload } from "../../src/helpers/fileUpload";

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudiinary", async () => {
    const imageUrl =
      "https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "God-of-War.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");
  });
});
