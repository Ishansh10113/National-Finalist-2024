require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    mainnet: {
      // url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      url: 'https://eth-mainnet.g.alchemy.com/v2/tv8wvm3p4inVGyFBam49-04vw45JTyzQ',
      // accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
    },
  },
};