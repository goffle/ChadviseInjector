// this is the code which will be injected into a given page...
(function () {
	const url = "https://chadvisechatbox-dot-artemis-6031a.appspot.com/?apikey=-Kw-WxphgxRb4uBSgM-_";
	var wrapper = document.createElement("div");
	wrapper.innerHTML = '<iframe id="chadvise-id" src=' + url + ' style="visibility: hidden;pointer-events: all;width: 800px;height: 550px;border: 0;position: fixed;z-index: 999;bottom: 0;right: 0;background-color: transparent;border: 1;"/>';
	document.body.appendChild(wrapper);
	document.getElementById('chadvise-id').onload = function () {
		this.style.visibility = 'visible';
		setTimeout(() => {
			setInterval(() => {
				var frame = window.frames['chadvise-id'];
				frame.contentWindow.postMessage(window.location.href, '*');
			}, 3000);
		}, 5000);
	};
})();
