#!/usr/bin/env node
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var chalk_animation_1 = require("chalk-animation");
var sleep = function () {
    return new Promise(function (res) {
        setTimeout(res, 2000);
    });
};
function welcome() {
    return __awaiter(this, void 0, void 0, function () {
        var rainbowTitle, pulseTitle, neonTitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rainbowTitle = chalk_animation_1.default.rainbow('Lets start command line calculator');
                    return [4 /*yield*/, sleep()];
                case 1:
                    _a.sent();
                    rainbowTitle.replace('with NODE.JS, INQUIRERand CHALK');
                    return [4 /*yield*/, sleep()];
                case 2:
                    _a.sent();
                    rainbowTitle.replace('Lets enjoy calculation!!!');
                    return [4 /*yield*/, sleep];
                case 3:
                    _a.sent();
                    rainbowTitle.stop();
                    pulseTitle = chalk_animation_1.default.pulse('Developed by ABDULLAH KHAN for TypeScript faculty test');
                    return [4 /*yield*/, sleep()];
                case 4:
                    _a.sent();
                    pulseTitle.stop();
                    neonTitle = chalk_animation_1.default.neon("\n\n     ________________________\n    |   ___________________  | \n    |  |CALCULATOR         | |\n    |  |___________________| |                       \n    |   ___ ___ ___     ___  |                    \n    |  | 7 | 8 | 9 |   | + | |              \n    |  |___|___|___|   |___| |                    \n    |  | 4 | 5 | 6 |   | - | |\n    |  |___|___|___|   |___| |\n    |  | 1 | 2 | 3 |   | X | |   \n    |  |___|___|___|   |___| |      \n    |  | . | 0 | = |   | / | |      \n    |  |___|___|___|   |___| |                                \n    |________________________|");
                    return [4 /*yield*/, sleep()];
                case 5:
                    _a.sent();
                    neonTitle.stop();
                    StartLoop();
                    return [2 /*return*/];
            }
        });
    });
}
function askQuestion() {
    return __awaiter(this, void 0, void 0, function () {
        var answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "list",
                            name: "operator",
                            message: chalk_1.default.yellowBright("which operation you want to perfrom? \n"),
                            choices: ["+ Addition", "- Subraction", "* Multiplication", "/ Division"]
                        },
                        {
                            type: "number",
                            name: "num1",
                            message: chalk_1.default.greenBright("Enter First Number: ")
                        },
                        {
                            type: "number",
                            name: "num2",
                            message: chalk_1.default.greenBright("Enter Second Number: ")
                        }
                    ])];
                case 1:
                    answer = _a.sent();
                    switch (answer.operator) {
                        case "+ Addition": {
                            console.log(chalk_1.default.blue("".concat(answer.num1, " + ").concat(answer.num2, " = ").concat(answer.num1 + answer.num2)));
                            break;
                        }
                        case "- Subraction": {
                            console.log(chalk_1.default.blue("".concat(answer.num1, " - ").concat(answer.num2, " = ").concat(answer.num1 - answer.num2)));
                            break;
                        }
                        case "* Multiplication": {
                            console.log(chalk_1.default.blue("".concat(answer.num1, " * ").concat(answer.num2, " = ").concat(answer.num1 * answer.num2)));
                            break;
                        }
                        case "/ Division": {
                            console.log(chalk_1.default.blue("".concat(answer.num1, " / ").concat(answer.num2, " = ").concat(answer.num1 / answer.num2)));
                            break;
                        }
                        default: {
                            console.log("Default Code.");
                            break;
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function StartLoop() {
    return __awaiter(this, void 0, void 0, function () {
        var again;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, askQuestion()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "checkbox",
                                name: "restart",
                                choices: ["Yes", "No"],
                                message: chalk_1.default.yellowBright("Do you want to continue:")
                            }
                        ])];
                case 2:
                    again = _a.sent();
                    _a.label = 3;
                case 3:
                    if (again.restart == 'Yes') return [3 /*break*/, 0];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
welcome();
