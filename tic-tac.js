var a = [];
	var player = 1;
	var player1;
	var player2;

var button = document.getElementById('button');
button.onclick = function(e) {
	e.preventDefault();
	player1 = document.getElementById('playerName').value;
	document.getElementById('labelPlayer').innerHTML = 'Player2 name';
	document.getElementById('playerName').value = '';
	player2 = document.getElementById('playerName').value;	
}
	var buttrel = document.getElementById('divrel');
	buttrel.onclick = function() {
		location.reload();
	}
	function changeBackground(target, color) {
		target.classList.add(color);
	}
	function insertText(playerName) {
		isWon = true;
		document.getElementById('winner').innerHTML = playerName + ' won!';
	}
	var isWon = false;
	function tieResult() {
		var isCompleted = true;
		for(var i = 0; i < a.length; i ++) {
			if (!a[i].classList.contains('circle') && !a[i].classList.contains('cross')) {
				// alert('tie result');
				isCompleted = false;
			}
		}
		if (isCompleted && !isWon) {
			alert("It is a draw!00");
		}
	}
	function judge() {
		var checks = ['circle', 'cross'];

		for (var i = checks.length - 1; i >= 0; i--) {
			var check = checks[i];
			var player = player1;
			function isLine(input1, input2, input3) {
				if (input1.classList.contains(check) && input2.classList.contains(check) && input3.classList.contains(check)) {
					return true;
				}
			}
			if (check === 'cross') {
				player = player2;
			}
			if (isLine(a[0], a[1], a[2])) {
			insertText(player);
		} else if (isLine(a[3], a[4], a[5])) {
			insertText(player);
		} else if (isLine(a[6], a[7], a[8])) {
			insertText(player);
		} else if (isLine(a[0], a[3], a[6])) {
			insertText(player);
		} else if (isLine(a[1], a[4], a[7])) {
			insertText(player);
		} else if (isLine(a[2], a[5], a[8])) {
			insertText(player);
		} else if (isLine(a[0], a[4], a[8])) {
			insertText(player);
		} else if (isLine(a[6], a[4], a[2])) {
			insertText(player);
		}
	}
}
	var clickHandler = function(e){
		if(isWon) { return; }
		console.log("target.style.background", e.target.style.background, player)
		var color;
		if (e.target.classList.contains('cross') || e.target.classList.contains('circle')) {
			return;
		}
		if (player === 1) {
			color = 'circle';
		} else {
			color = 'cross';
		}
		changeBackground(e.target, color);
		judge();
		tieResult();
		if (player === 1) {
			player = 2;
		} else {
			player = 1;
		}
	}
	for (var i = 0; i < 9; i ++) {
	var div = document.createElement('div');
	document.querySelector('.tic-tac_container').appendChild(div);
	a.push(div);
}
	for(var i = 0; i < a.length; i++){
		a[i].onclick = clickHandler;
	}
