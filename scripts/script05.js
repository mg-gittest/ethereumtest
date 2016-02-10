addSource = "contract add {\n" +
"   /// @notice will add `a` by 3.\n" +
"   function by3(uint a) returns (uint ret) {\n" +
"     return a + 3;\n" +
"   }\n" +
"   /// @notice will add `a` by 5.\n" +
"   function by5(uint a) returns (uint ret) {\n" +
"     return a + 5;\n" +
"   }\n" +
" }" ;

comp = eth.compile.solidity(addSource);

contract = eth.contract( comp.add.info.abiDefinition );

unlock(0);

txhash = eth.sendTransaction({ from: acct0 , data:comp.add.code} ) ;

mineFor(1);

contractAddress = eth.getTransactionReceipt(txhash).contractAddress;

addDo = eth.contract( contract.abi ).at( contractAddress );

addDo.by3.call(9);
addDo.by5.call(36);
addDo.by3.call( addDo.by5.call( 90 ) );
