const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


const OWNER = '0x63c1Bc5AE24BA0e636CCf4A36614496D106A89d3';

module.exports = buildModule("DonationModule", (m) => {
  
  const my_address = m.getParameter("address", OWNER);

  const donation = m.contract("donation", [my_address]);

  return { donation };
});

//0xF4E667Ff80DD21b3262D03F6851A4983635a53D9
