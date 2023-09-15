const { http } = require("@artsdatabanken/lastejobb");

const url =
  "https://nedlasting.geonorge.no/geonorge/Generell/NorgesMaritimeGrenser.zip";

http.downloadBinary(url, "NorgesMaritimeGrenser.zip");
