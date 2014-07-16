
Cipher =
  encrypt: (msg, pass) -> CryptoJS.AES.encrypt msg, pass
  decrypt: (msg, pass) ->
    decrypted = CryptoJS.AES.decrypt msg, pass
    decrypted.toString CryptoJS.enc.Utf8
