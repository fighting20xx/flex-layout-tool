/**
 * Created by Seven on 2019/9/23.
 * project: bpl-admin-frontend
 * email: fighting20xx@126.com
 */



import CryptoJS from "crypto-js";
const key =  "MINGDUREALTECHCO"; //16位
const iv =  "MINGDUREALTECHCO"; //16位

 const secret  = {
	//aes加密
	encrypt(word, secretKey= key, secretIv= iv) {
		let encrypted = "";
		if (typeof word == "string") {
			const srcs = CryptoJS.enc.Utf8.parse(word);
			encrypted = CryptoJS.AES.encrypt(srcs, utf8Parse(secretKey), {
				iv: utf8Parse(secretIv),
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7
			});
		} else if (typeof word == "object") {
			//对象格式的转成json字符串
			const data = JSON.stringify(word);
			const srcs = CryptoJS.enc.Utf8.parse(data);
			encrypted = CryptoJS.AES.encrypt(srcs,  utf8Parse(secretKey), {
				iv: utf8Parse(secretIv),
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7
			});
		}
		return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
	},
	// aes解密
	decrypt(word,secretKey = key, secretIv= iv) {
		const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
		const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
		const decrypt = CryptoJS.AES.decrypt(srcs,  utf8Parse(secretKey), {
			iv: utf8Parse(secretIv),
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
		return decryptedStr.toString();
	}
};

 function utf8Parse(value){
	 return CryptoJS.enc.Utf8.parse(value); //16位
 }

console.log(secret.encrypt('123456',key,key))

export default secret;
