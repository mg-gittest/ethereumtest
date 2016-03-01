function fromW( str ) {
  return web3.fromWei(str, "ether");
}

function toW(str) {
  return web3.toWei(str, "ether");
}

function checkBalance(i) {
  var e = eth.accounts[i];
  console.log("  eth.accounts[" + i + "]: " + e + " \tbalance: " + fromW(eth.getBalance(e)) );
}
  
function checkAllBalances() {
  var i = 0;
  for(i=0; i< eth.accounts.length; ++i) {
       checkBalance(i) 
     }
  return i;
};

function xfr( src, dst, amt) {
  return eth.sendTransaction({from:src, to:dst, value: web3.toWei(amt, "ether") })
}

function mineFor( cycles ) {
  miner.start(1); 
  admin.sleepBlocks( cycles ); 
  miner.stop(0);
  return true;
}

function unlock( acct ) {
  return personal.unlockAccount( eth.accounts[acct] );
}

function unlockAll() {
  var i = 0;
  while (i < eth.accounts.length ) {
    unlock(i);
    i += 1;
  }
  return i;
}

function unlockPw( acct, pw ) {
  return personal.unlockAccount( eth.accounts[acct], pw );
}

function unlockAllPw() {
  var i = 0;
  while (i < eth.accounts.length ) {
    unlockPw(i, pw);
    i += 1;
  }
  return i;
}



acct0 = eth.accounts[0];
acct1 = eth.accounts[1];

