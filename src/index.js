/* const homepage = require("./homepage.js");
const itempage= require("./itempage.js"); */
import homepage from "./homepage.js";
import itempage from "./itempage.js";



window.addEventListener("load", () => {
    homepage.setup();
    itempage.setup();
}); 
