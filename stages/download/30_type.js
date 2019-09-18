const { io } = require("lastejobb");

let data = io.lesDatafil("maritim-grense-ubehandlet/type");
io.skrivBuildfil("type", data);
