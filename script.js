// 全肯定ワード集（ここを好きなだけ増やせます）
const affirmations = [
    "うんうん、それは大変でしたね。",
    "あなたが悪いんじゃないですよ。",
    "今日までよく頑張ってきましたね。偉いです。",
    "生きてるだけで100点満点なんですよ。",
    "その気持ち、吐き出してくれてありがとうございます。",
    "無理しなくていいんですよ。少し休みましょう。",
    "私はいつでもあなたの味方ですからね。",
    "そんなこと思うなんて、あなたは心が優しい証拠です。",
    "大丈夫、何も間違っていませんよ。",
    "泣いてもいいんですよ。全部受け止めます。",
    "わかります。辛かったですね。",
    "あなたは今のままで十分素敵ですよ。"
];

const inputField = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');

// メッセージを画面に追加する関数
function addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight; // 最新のメッセージまでスクロール
}

// ボットが返信する関数
function botReply() {
    // ランダムに肯定ワードを選ぶ
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    
    // 少し「考えている」間を作る（0.8秒待つ）
    setTimeout(() => {
        addMessage(randomAffirmation, 'bot');
    }, 800);
}

// 送信処理
function handleSend() {
    const text = inputField.value.trim();
    if (text === "") return;

    addMessage(text, 'user'); // ユーザーの入力を表示
    inputField.value = ""; // 入力欄をクリア
    botReply(); // ボットが返信
}

// クリックとEnterキーに対応
sendBtn.addEventListener('click', handleSend);
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});
