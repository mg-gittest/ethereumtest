source = "contract eric { int val; function set(int _val) { val = _val; } function add(int _a) { val = val + _a; } function get() returns(int) {return val; } }" ;

compiled = eth.compile.solidity(source);
admin.saveInfo(compiled.eric.info, "eric.info.txt")
contract = eth.contract( compiled.eric.info.abiDefinition );
admin.saveInfo
personal.unlockAccount( eth.accounts[0], "quota75fish");
txhash = eth.sendTransaction({ from: eth.accounts[0] , data: compiled.eric.code} ) ;
miner.start(1); admin.sleepBlocks(1);  miner.stop(0);
contractAddress = eth.getTransactionReceipt(txhash).contractAddress;
eric = eth.contract( contract.abi ).at( contractAddress );
console.log( "contract name: eric \tcontractAddress: " + contractAddress );


