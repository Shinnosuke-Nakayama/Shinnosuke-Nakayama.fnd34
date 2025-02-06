const start = document.getElementById('start'); // 開始ボタン
const OK = document.getElementById('OK');
let num = document.getElementById('num');

let mode = ['steps(100, start)','steps(50, start)','steps(25, start)','steps(10, start)','steps(5, start)'];
const screenSize = document.body.clientWidth

console.log(screenSize);

OK.addEventListener('click',()=>{
  let num = document.getElementById('num');
  let entry = num.value;
  let runner = document.getElementById('runner');

  for(i = 1; i <= entry; i++){
    runner.insertAdjacentHTML('beforeend',  `<div id = line><img id="image" src="https://shinnosuke-nakayama.github.io/Shinnosuke-Nakayama.fnd34/keiba_jockey1_white.png" width="100" height="100" alt="site-logo">${i}レーン</div>`)
  }

});


// スタートボタンをクリックしたら
start.addEventListener('click', () => {

  let image = document.querySelectorAll("#image"); // ロゴ画像
  let a = image.length;

  console.log(a);
  /** 重複チェック用配列 */
var randoms = [];
/** 最小値と最大値 */
var min = 1, max = a;
 
/** 重複チェックしながら乱数作成 */
for(i = min; i <= max; i++){
  while(true){
    var tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
};
/** min以上max以下の整数値の乱数を返す */
function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
};

console.log(randoms);

  // 画像を左端から200px右に動かす
  image.forEach((image,I)=> {
    
  image.animate(
    // 途中の状態を表す配列
    [
      { transform: 'translateX(0)'}, // 開始時の状態（左端）
      { transform: 'translateX(1150px)' } // 終了時の状態（左端から200pxの位置）
    ], 
    // タイミングに関する設定
    {
      fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
      duration: 5000 + (randoms[I]*500), // 再生時間（1000ミリ秒）
      easing: mode[I]
    },
  );
}
  );
});
