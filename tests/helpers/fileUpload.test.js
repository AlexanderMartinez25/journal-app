import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "dibroa7qj",
  api_key: "615876231563487",
  api_secret: "7HsE9rObWhiPyVxid6sIzgb73wc",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "God-of-War.png");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".png", "");
    const cloudResp = await cloudinary.api.delete_resources(
      ["journal/" + imageId],
      { resource_type: "image" }
    );

    console.log(cloudResp);
  });

  test("debe de retornar null", async () => {
    const file = new File([], "God-of-War.jpg");

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
