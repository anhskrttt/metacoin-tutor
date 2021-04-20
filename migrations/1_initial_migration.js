// This file is the migration (deployment) script for the Migrations contract found in the Migrations.sol file

const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
