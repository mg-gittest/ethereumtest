source = "contract erica { int val; function set(int _val) { val = _val; } function add(int _a) { val = val + _a; } function get() returns(int) {return val; } }" ;

compiled = eth.compile.solidity(source);
contract = eth.contract( compiled.erica.info.abiDefinition );
personal.unlockAccount( eth.accounts[0], "quota75fish");
txhash = eth.sendTransaction({ from: eth.accounts[0] , data: compiled.erica.code} ) ;
miner.start(1); admin.sleepBlocks(1);  miner.stop(0);
contractAddress = eth.getTransactionReceipt(txhash).contractAddress;
erica = eth.contract( contract.abi ).at( contractAddress );



