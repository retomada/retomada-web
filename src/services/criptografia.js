import { getCryptoKey } from './service';

var aes256 = require('aes256');

export const enCryptoWS = async(message) =>{
    getCryptoKey()
        .then(res => {
            var key = res;
            var plaintext = ''+ message;
            //console.log("mensagem 1:",message);
            //console.log(plaintext);
            //console.log("criptografada", aes256.encrypt(key[0].key, plaintext));
            
            return aes256.encrypt(key[0].key, plaintext);
        });
}