var ws;
// var wsUrl = 'ws://192.168.0.100/';
var wsUrl = 'wss://rs.leangoo.com/';

// var wsUrl = 'wss://trello.com/1/Session/socket?token=57de32c543932ce39b90d70e/Pnv6ZfpDEGQ5x13h5qcyhOipJcvVBQfmYx6TWnTys5RchFLDaeLQsBrK841qCqkm';


function createWebSocket(url) {
    ws = new WebSocket(url);
    initEventHandle();
}

function initEventHandle() {
    ws.onopen = function (ev) {
        console.log("开始建立连接");
        // ws.send(JSON.stringify(["5", "board1441360"]));
        ws.send(JSON.stringify(["5", "board2805625"]));

        // ws.send(JSON.stringify(
        //     {
        //         type: "subscribe",
        //         modelType: "Board",
        //         invitationTokens: [],
        //         idModel: "59531190b035ec85f38c74fe",
        //         reqid: 2,
        //         tags: ["clientActions", "updates"]
        //     }
        // ))
    };


    ws.onmessage = function (ev) {
        document.getElementById("container").innerHTML += "使用原生的：<pre>" + ev.data + "</pre>";
    };

    ws.onclose = function (ev) {
        console.log('websocket 断开: ' + ev.code + ' ' + ev.reason + ' ' + ev.wasClean);
        console.log(ev);
        reconnect(wsUrl);
    };

    ws.onerror = function (ev) {
        console.log('websocket服务出错了');
        console.log(ev);
        reconnect(wsUrl);
    };
}

function reconnect(url) {
    createWebSocket(url);
}


createWebSocket(wsUrl);