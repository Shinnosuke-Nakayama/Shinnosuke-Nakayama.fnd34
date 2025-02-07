
const start = document.getElementById('start'); // 開始ボタン

const OK = document.getElementById('ok');

let memver = document.getElementById('member');

const pattern = ['','コンバインハーベスター','トゥクトゥク','ハイエース','高所作業車','消防車'];

const step = ['steps(100,start)','steps(50,start)','steps(25,start)','steps(10,start)','steps(5,start)']


OK.addEventListener('click',()=>{
  
  let b = document.getElementById('num');
  let c = b.value;

   /** 重複チェック用配列 */
var randoms = [];
/** 最小値と最大値 */
var min = 1, max = c;

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


  for(var i = min; i <= c; i++){
    let y = i-1;
    let x = randoms[y]

    memver.insertAdjacentHTML('beforeend',`<p><img id="image" src="https://github.com/Shinnosuke-Nakayama/Shinnosuke-Nakayama.fnd34/blob/main/${pattern[x]}.png" width="200" height="150" alt="site-logo"></p>`);
    // console.log(y);
    console.log(x);

  }

}
);

 
// スタートボタンをクリックしたら
start.addEventListener('click', () => {
  let image = document.querySelectorAll("#image"); // ロゴ画像
  let a = image.length

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
}
 
/** min以上max以下の整数値の乱数を返す */
function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}


  // 画像を左端から200px右に動かす
  image.forEach((image,I)=> {
  image.animate(
    // 途中の状態を表す配列
    [
      { transform: 'translateX(0)'}, // 開始時の状態（左端）
      { transform: 'translateX(2000px)' } // 終了時の状態（左端から200pxの位置）
    ], 
    // タイミングに関する設定
    {
      fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
      duration: 5000+(randoms[I]*500), // 再生時間（1000ミリ秒）
      easing:step[I]
    },
  );
}
  );
});
