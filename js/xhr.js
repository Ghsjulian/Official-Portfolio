"use strict";

class XHR {
    constructor() {
        this.developer = "Ghs Julian";
        this.email = "ghsjulian@gmail.com";
        this.contact = "fb/ghs.julian.85";
    }
    get(getData = {}) {
        if (typeof getData === "object") {
            try {
                /* code */
                var req = new XMLHttpRequest();
                req.responseType = "json";
                req.open("GET", getData.url, true);
                req.onload = function () {
                    var response = req.response;
                    getData.getAction(response);
                };
                req.send(null);
            } catch (e) {
                console.warn("Error : " + e);
            }
        } else {
            console.warn("Please Send An Object!");
        }
    }

    delete(getData = {}) {
        if (typeof getData === "object") {
            try {
                /* code */
                var req = new XMLHttpRequest();
                req.responseType = "json";
                req.open("GET", getData.url, true);
                req.onload = function () {
                    var response = req.response;
                    getData.getAction(response);
                };
                req.send(null);
            } catch (e) {
                console.warn("Error : " + e);
            }
        } else {
            console.warn("Please Send An Object!");
        }
    }

    post(getData = {}) {
        if (typeof getData === "object") {
            try {
                /* code */
                var values = JSON.stringify(getData.body);
                var req = new XMLHttpRequest();
                req.responseType = "json";
                req.open("POST", getData.url, true);
                req.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                );

                req.onreadystatechange = () => {
                    if (
                        req.readyState === XMLHttpRequest.DONE &&
                        req.status === 200
                    ) {
                        var response = req.response;
                        getData.getAction(response);
                    }
                };
                req.send(values);
            } catch (e) {
                console.warn("Error : " + e);
            }
        } else {
            console.warn("Please Send An Object!");
        }
    }

    put(getData = {}) {
        if (typeof getData === "object") {
            try {
                /* code */
                var values = JSON.stringify(getData.body);
                var req = new XMLHttpRequest();
                req.responseType = "json";
                req.open("POST", getData.url, true);
                req.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                );

                req.onreadystatechange = () => {
                    if (
                        req.readyState === XMLHttpRequest.DONE &&
                        req.status === 200
                    ) {
                        var response = req.response;
                        getData.getAction(response);
                    }
                };
                req.send(values);
            } catch (e) {
                console.warn("Error : " + e);
            }
        } else {
            console.warn("Please Send An Object!");
        }
    }
}

/* MAKING OBJECT FROM CLASS*/
 var Request = new XHR();
export {Request } from "./xhr.js";