//JSはシングルスレッドで動く　マルチスレッドには出来ず、上から順に実行されていく
//非同期処理は可能

console.log('A');
setTimeout(function () {
  console.log('B');
}, 0);
//setTimeoutは第二引数を指定しない場合は0ミリ
console.log('C');
// 第一引数として渡される関数が遅れて実行される


// setTimeout関数が入れ子構造になる例(callback地獄)
console.log('おはよう');
setTimeout(() => {
    setTimeout(() => {
        console.log('こんばんは');        
    }, 2000);
    console.log('こんにちは');    
}, 1000);