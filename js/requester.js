"use strict";
import {Request} from "./xhr.js";

Request.post({
    url: "http://localhost:7070/data.php",
    body: {
        name: "Ghs Julian",
        profession: "Developer",
    },
    getAction: (data) => {
        console.log(data);
    },
});
