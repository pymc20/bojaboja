import aes from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";
import Jwt from "jsonwebtoken"

const decrypt = (word, key) => {
    const bytes = aes.decrypt(word, key)
    return JSON.parse(bytes.toString(enc))
}

export const tokenVerify = (secret, secretKey) => {
    const decryptToken = decrypt(secret, secretKey)
    try {
        Jwt.verify(decryptToken, secretKey)
        return true
    } catch (err) {
        return false
    }
}