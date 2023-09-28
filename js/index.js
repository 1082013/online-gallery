$(document).ready(function () {
    var audio = new Audio("SRC/AUDIO/classical-music (1).mp3");
    audio.play();
    audio.volume = 0.1;
    audio.loop = true;

    for (let i = 1; i <= 5; i++) {
        //點擊畫家introduction
        $(`#intro${i}`).click(function () {
            //關閉頁面縱向卷軸
            document.body.style.overflow = "hidden";
            //introduction彈跳小視窗出現
            $(`#i${i}`).show();
            //intro視窗背景灰底出現
            $('.i-bg').show();
        });
        $(`#close${i}`).click(function () {
            document.body.style.overflow = "auto";
            $(`#i${i}`).hide();
            $('.i-bg').hide();
        });
        $('.i-bg').click(() => {
            document.body.style.overflow = "auto";
            $(`#i${i}`).hide();
            $('.i-bg').hide();
        });
        $(`#arwk${i}`).click(function () {
            $(location).attr('href', 'PaintPage.html');
        });
    }
});