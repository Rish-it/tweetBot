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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenFromLLM = getTokenFromLLM;
const axios_1 = __importDefault(require("axios"));
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
function getTokenFromLLM(contents) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
                contents: [
                    {
                        parts: [
                            {
                                text: `You are an AI agent that needs to tell me if this tweet is about buying a token. Return me either the address of the Solana token, or return null if you can't find a Solana token address in this tweet. Only return if it says it is a bull post. The token address will be very visible in the tweet. Tweet: ${contents}`
                            }
                        ]
                    }
                ]
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Extracting the response and returning the result
            const result = response.data.generatedContent || "null";
            return result;
        }
        catch (error) {
            console.error('Error interacting with Gemini:', error);
            return "null";
        }
    });
}
