require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area shadow shrug rebel sad artwork coral light army gate'; 
let testAccounts = [
"0xcd3cfb652bb78cff41eb428b2874a4406a557abc30277683eaa09f7d700d2bda",
"0xe64fb5bc0619c29f0ffc2b76cfeab434cce88e199bf518451cee965d42e0ce39",
"0xdb6e59e18b011ce4b90d0a8ebd30998b1bd3a68b351a5e4b1bf18625e52fbbe1",
"0x8ddd6df2f7ed811c01731c3d15e2e2cc61f41390f74ffdfc621a44e29e73bd7e",
"0xac106bea1c65af604db3d59d15877b663f24db57f766721949f89f7b2c1a72eb",
"0x8daf4402e1294594020c097aad8793da4afb88ede0f40e0dee8338fc344a866d",
"0xd447b7efdef58f12711621bada3036c1868065cc397c0db1f5441192cf2a3208",
"0xbabeb15150fbb46e8eb2d2e8f8e448e9f0e7a22230b9862b87fc7042afa81b07",
"0x7f0050a8055bfa58daf45118431629c9ec9f773077db6ca00cfc98c32e86c64a",
"0x64423530cebcc3ff0256d80f0ab5f7356b190e367c6b6cb545dc5b6c0c27b6d9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

