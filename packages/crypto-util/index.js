import aes from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";

export const decrypt = (word, key) => {
    const bytes = aes.decrypt(word, key)
    return JSON.parse(bytes.toString(enc))
}

