//コールバック関数
function helloWorld(num1) {
    console.log("おはよう" + num1);
  }

  function test1(callback1) {
    const number1 = 1111;
    callback1(number1);
  }

  test1(helloWorld); //こんにちは1111


 //コールバック関数・無名関数ver
  function test2(callback1) {
    const number2 = 2222;
    callback1(number2);
  }//ここのcallback1は、test2を実行した際に処理内容を実装することができる

  test2(function (num1) {
    console.log("こんにちは" + num1);
  }); //こんにちは2222


  function test3(callback1) {
    const number3 = 3333;
    callback1(number3);
  }

  test3(num1 => console.log("こんばんは" + num1)); //こんにちは3333


//   ターミナルで実行する際は node callback.ts
