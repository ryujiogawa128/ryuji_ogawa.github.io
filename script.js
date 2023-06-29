'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// document.getElementById("button").onclick = function() {
//   // ここに#buttonをクリックしたら発生させる処理を記述する
// };


function generate() {
    var random = Math.floor(Math.random() * 20) + 1;
    //   var image = document.getElementById("image");
    //   var text = document.getElementById("text");
    // console.log(image);
    // console.log(text);

    var str = "";
    switch (random) {
        case 1:
            str = "人と比べなくていい。比べるなら過去の自分！";
            break;
        case 2:
            str = "９９対１でも１が正しいこともある！";
            break;
        case 3:
            str = "失敗の反対はなんだと思う？それは成功ではないんだよ。成功の延長線上に失敗があって成功するんだ。失敗の本当の反対は、「何も行動しないこと」なんだ。";
            break;
        case 4:
            str = "あなたはあなたのままで素晴らしい";
            break;
        case 5:
            str = "コンプレックスは武器になる";
            break;
        case 6:
            str = "人は無力じゃない、微力なだけだ！";
            break;
        case 7:
            str = "思考、言葉、感情、行動という順序が有って、この最後の行動をするかでいかに人生を劇的に変化させるかが決まると言っても過言ではない！";
            break;
        case 8:
            str = "一度きりの人生、誰に遠慮がいるもんか！";
            break;
        case 9:
            str = "みんな素の自分は、スーパーポジティブ";
            break;
        case 10:
            str = "「何のために」動くかの理由がはっきりわかっている人は強い";
            break;
        case 11:
            str = "人を喜ばせることを、ど真ん中に据えて生きる";
            break;
        case 12:
            str = "自分のためではなく、人のために泣いて笑おう";
            break;
        case 13:
            str = "人を喜ばせることは、自分を喜ばせること";
            break;
        case 14:
            str = "与える人は、与えられる人";
            break;
        case 15:
            str = "死ぬこと以外かすり傷";
            break;
        case 16:
            str = "失敗は挑戦することで得られる価値である";
            break;
        case 17:
            str = "起こることは、すべて天からの試練";
            break;
        case 18:
            str = "いざというときに捨て身になれるか";
            break;
        case 19:
            str = "弱い立場の人の気持ちを大切にする";
            break;
        case 20:
            str = "人を動かす力は、人に惚れさせる力";
            break;
        // 略
        default:
            break;
    }
    text.innerHTML = str;
    // text.innerHTML = "";
    // console.log(str);
    image.src = "image" + random + ".jpg";
}

function reset() {
    //   var image = document.getElementById("image");
    //   var text = document.getElementById("text");
    // console.log(image);
    // console.log(text);

    text.innerHTML = "";
    image.src = "";
}
