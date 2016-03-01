mint_failed = "mint failed";
mint_good = "mint good";
source = "contract Coin { address public minter; mapping (address => uint) public balances;     event Sent(address from, address to, uint amount);     function Coin() {         minter = msg.sender;     }     function mint(address receiver, uint amount) {         if (msg.sender != minter) { console.log(mint_failed); return; }  balances[receiver] += amount; console.log(mint_good); return;   }     function send(address receiver, uint amount) {         if (balances[msg.sender] < amount) return;         balances[msg.sender] -= amount;         balances[receiver] += amount;         Sent(msg.sender, receiver, amount);     } }" ;

compiled = eth.compile.solidity(source);
admin.saveInfo(compiled.Coin.info, "Coin.info.txt")
contract = eth.contract( compiled.Coin.info.abiDefinition );

personal.unlockAccount( eth.accounts[0], "quota75fish");
txhash = eth.sendTransaction({ from: eth.accounts[0] , data: compiled.Coin.code} ) ;
miner.start(1); admin.sleepBlocks(1);  miner.stop(0);
contractAddress = eth.getTransactionReceipt(txhash).contractAddress;
Coin = eth.contract( contract.abi ).at( contractAddress );
console.log( "contract name: Coin");
console.log( "contractAddress: " + contractAddress );
console.log( "abi: " + contract.abi );

/*
Coin.Sent().watch({}, '', function(error, result) {
				    if (!error) {
					console.log("Coin transfer: " + result.args.amount +
					    " coins were sent from " + result.args.from +
					    " to " + result.args.to + ".");
					console.log("Balances now:\n" +
					    "Sender: " + Coin.balances.call(result.args.from) +
					    "Receiver: " + Coin.balances.call(result.args.to));
				    }
				}
		)
*/
