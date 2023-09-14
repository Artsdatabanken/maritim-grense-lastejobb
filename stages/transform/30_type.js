const { io } = require("@artsdatabanken/lastejobb");

let data = io.lesTempJson("maritim-grense-ubehandlet/type");
io.skrivBuildfil("type", data);
