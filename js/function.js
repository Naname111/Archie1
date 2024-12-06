$( document ).ready(function() {
	$( "#load_more" ).click(function() {
		$(this).hide();
	$( "#last" ).slideDown("slow");
	});
});
// 生成一个1到100之间的随机数字
const randomNumber = Math.floor(Math.random() * 100) + 1;

// 游戏函数
function playGame() {
    let guess = prompt("猜一个 1 到 100 之间的数字：");
    while (guess != randomNumber) {
        if (guess < randomNumber) {
            guess = prompt("太小了！再试一次：");
        } else {
            guess = prompt("太大了！再试一次：");
        }
    }
    alert("恭喜！你猜对了，答案是：" + randomNumber);
}
