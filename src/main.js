const Web3 = require('web3');

async function main() {
    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    const { address, privateKey } = web3.eth.accounts.create();

    console.log(`Public: ${address}`);
    console.log(`Private: ${privateKey}`);
}

main();