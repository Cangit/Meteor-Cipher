# Meteor-Cipher

Simplified and minimalistic meteor package for encryption and decryption of
strings using [AES-256](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard) w/ [CBC](http://en.wikipedia.org/wiki/Cipher_block_chaining#Cipher-block_chaining_.28CBC.29).

### Instructions

```js
// Encryption
var encrypted = Cipher.encrypt('This is the secret message', 'passphrase');

// Decryption
var plaintext = Cipher.decrypt(encrypted, 'passphrase');
```
