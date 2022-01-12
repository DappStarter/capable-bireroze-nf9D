require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note meadow comic grace nature teach skin'; 
let testAccounts = [
"0xc49cfbeedd2cfeb7b38176d175b31c8b28e9b78bb9c0776400fb5ce6722c37d3",
"0x5bdeaee0e4cc2c19704c087f7d7f99b55dc1ec3c623719bddc85935bca875a89",
"0xd178cdf0d86f9c93e1c69566a87d527ac1d617797a4771b60fb5b06ab9e7b914",
"0xb0bf8cc1dc1c581eb1fbdc3631a25cd0494444b40df3bf7b9c55e26ad6c84287",
"0x5d3fd8c8369a197ea3dc6d7d10d0b087f44bb4c9ded9f59ee2cf3b7a3b7ed105",
"0x3060cdf36d17e286d9829a8838c903dd5e81fb2356360f56532f7963fee5a8d5",
"0x16b510693c30090b924bbfcc96aec2872368408e3481fc67f650155a103472df",
"0xf4e32b96328ea3eb7127d7bf41d9fda8be07ac3b3e8828f59854d57524e399ab",
"0xfeb858d58c7297dfe70d54d56b66b1bdef2a092441e3115c66df0b45181d080a",
"0xd76edb9d080a9330a0b27a34e83854e88083604a50d5407f22e9e29290833ace"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


