
Package.describe({
  summary: "Encryption package to encipher/decrypt strings with AES using CBC"
});

Package.on_use(function (api) {
  api.use('coffeescript', ['client', 'server']);
  api.add_files('aes.js', ['client', 'server']);
  api.add_files('cipher.coffee', ['client', 'server']);
  api.export('Cipher', ['client', 'server']);
});
