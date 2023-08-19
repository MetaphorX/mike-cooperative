const CooperativeBlockchain = artifacts.require('CooperativeBlockchain')

module.exports = async function (deployer) {
  await deployer.deploy(CooperativeBlockchain)
}
