// tiny-console.js

// コンソール要素を取得
const consoleElement = document.getElementById('my-console');

// ログを表示する関数
function log(message) {
  const p = document.createElement('p'); // 新しい段落要素を作成
  p.textContent = message; // メッセージを設定
  consoleElement.appendChild(p); // コンソールに追加
  // 自動スクロール
  consoleElement.scrollTop = consoleElement.scrollHeight;
}

// グローバルに利用できるようにする（例）
// window.tinyConsole = {
//   log: log
// };

// テストとしてコンソールに何かを出力してみる
log('Tiny Console is ready!');
log('This is a test log message.');
