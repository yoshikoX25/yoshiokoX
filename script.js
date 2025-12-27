body {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    background-color: #fdfcf0;
    color: #5a4e4e;
    margin: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
}

.container {
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 0 20px rgba(0,0,0,0.05);
}

header {
    background-color: #e3f2fd; /* 優しい水色 */
    padding: 15px;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 1.2rem;
    color: #455a64;
}

header p {
    margin: 5px 0 10px;
    font-size: 0.8rem;
    color: #607d8b;
}

.api-key-box input {
    width: 80%;
    padding: 8px;
    border: 1px solid #b0bec5;
    border-radius: 5px;
    background: #fff;
    font-size: 0.8rem;
    text-align: center;
}

.chat-box {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.message {
    padding: 12px 16px;
    border-radius: 18px;
    max-width: 85%;
    line-height: 1.6;
    font-size: 0.95rem;
    word-wrap: break-word;
    animation: fadeUp 0.3s ease;
}

.bot-message {
    background-color: #e8f5e9; /* 薄い緑 */
    color: #2e7d32;
    align-self: flex-start;
    border-bottom-left-radius: 2px;
}

.user-message {
    background-color: #ffebee; /* 薄いピンク */
    color: #c62828;
    align-self: flex-end;
    border-bottom-right-radius: 2px;
}

.input-area {
    padding: 15px;
    background-color: #fff;
    border-top: 1px solid #f0f0f0;
    display: flex;
    gap: 10px;
}

.input-area input {
    flex: 1;
    padding: 12px;
    border: 2px solid #eee;
    border-radius: 25px;
    outline: none;
    font-size: 1rem;
}

.input-area input:focus {
    border-color: #90caf9;
}

button {
    background-color: #81d4fa;
    color: white;
    border: none;
    padding: 0 25px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    background-color: #4fc3f7;
}

button:disabled {
    background-color: #ccc;
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
