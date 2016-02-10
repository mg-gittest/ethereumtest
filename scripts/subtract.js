source = "contract subtract {" +
"   function un3(uint a) returns (uint ret) {" +
"     return a - 3;" +
"   }" +
"   function un5(uint a) returns (uint ret) {" +
"     return a - 5;" +
"   }" +
"   function bi2(uint a, uint b) returns (uint ret) {" +
"     return a - b;" +
"   }" +
" }" ;

comp = eth.compile.solidity(source);

contract = eth.contract( comp.subtract.info.abiDefinition );

pw = "quota75fish"
unlockPw(0, pw);

txhash = eth.sendTransaction({ from: acct0 , data:comp.subtract.code} ) ;

mineFor(1);

contractAddress = eth.getTransactionReceipt(txhash).contractAddress;

subtract = eth.contract( contract.abi ).at( contractAddress );



