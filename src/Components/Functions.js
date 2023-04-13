import CryptoJS from "crypto-js";
export const carrt = [];

const key = CryptoJS.enc.Hex.parse(process.env.REACT_APP_FireBase_ApiKey);
const iv = CryptoJS.enc.Hex.parse(process.env.REACT_APP_FireBase_App_Id);
export const enCrypt = (plaintext) => {
  // const plaintext = 'This is my secret message';

  const encrypted = CryptoJS.AES.encrypt(plaintext, key, { iv: iv }).toString();

  return encrypted;
};
// Decrypting a message
export const deCrypt = (encrypted) => {
  const decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  );

  return decrypted;
};
