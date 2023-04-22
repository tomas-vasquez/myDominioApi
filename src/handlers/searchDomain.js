const domainCheck = require("domain-check");
const Domain = domainCheck.Domain;

var checkDomainName = async (name, res) => {
  const domain = new Domain(name);

  console.log("ooo:" + name);
  // var result = await domain.isFree();
  // console.log("pse");

  setTimeout(() => {
    res.send({ availableToRegister: Math.random() < 0.8 });
    res.end();
  }, 1000);
};

module.exports = { checkDomainName };
