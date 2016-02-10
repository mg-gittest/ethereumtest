divideSource = "contract divide {\n" +
"   /// @notice will divide `a` by 3.\n" +
"   function by3(uint a) returns (uint ret) {\n" +
"     return a / 3;\n" +
"   }\n" +
"   /// @notice will divide `a` by 5.\n" +
"   function by5(uint a) returns (uint ret) {\n" +
"     return a / 5;\n" +
"   }\n" +
" }" ;

comp = eth.compile.solidity(divideSource);

contract = eth.contract( comp.divide.info.abiDefinition );

unlock(0);

txhash = eth.sendTransaction({ from: acct0 , data:comp.divide.code} ) ;

eth.getBlock("pending", true).transactions;

mineFor(1);

contractAddress = eth.getTransactionReceipt(txhash).contractAddress;

eth.getCode(contractAddress);

divideDo = eth.contract( contract.abi ).at( contractAddress );

divideDo.by3.call(9);
divideDo.by5.call(36);
divideDo.by3.call( divideDo.by5.call( 90 ) );
