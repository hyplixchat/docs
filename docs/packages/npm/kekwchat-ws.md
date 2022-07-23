# `@kekwchat/ws` 
This NPM package allows you to handle KekwChat's `WebSocket` events much more easier. It gives you an event-based system, which means you can handle KekwChat's events just like normal events.

## Installation
#### NPM
```bash
$ npm install @kekwchat/ws
```

#### Yarn
```bash
$ yarn add @kekwchat/ws
```

## Example
- NodeJS
```js
const { KekwChatWebSocket } = require("@kekwchat/ws");
const url = "wss://api.kekwchat.hyplix.com";

const ws = new KekwChatWebSocket(url, {
	token: "hack nasa with css",
	heartbeat: true, // Whether to start heartbeat automatically. (default: true)
	autoreconnect: true // Whether to reconnect on close. (default: true)
});

ws.on("user_ready", ({ username }) => {
	console.log(`Connected as : ${username}`);
});

ws.once("close", ({ code, reason }) => {
	console.log(`Connection was closed with code: ${code} and reason: ${reason}`);
});

// Start the connection.
ws.connect();
```
- Browser
```html
<html>
<head>
	<!-- Link script -->
	<script src="https://cdn.jsdelivr.net/npm/@kekwchat/ws@0.0.0/src/kekwchatwebsocket.js"></script>
</head>
<body>
	<h1>WebSocket</h1>
	<p id="username"></p>

	<script type="text/javascript">
		const url = "wss://api.kekwchat.hyplix.com";
		const ws = new KekwChatWebSocket(url, {
			token: "hack nasa with css"
		});

		ws.on("user_ready", ({ username }) => {
			document.getElementById("username").innerText = `Connected as ${username}.`;
		});

		ws.once("close", ({ code, reason }) => {
			console.log(`Connection was closed with code: ${code} and reason: ${reason}`);
		});

		ws.connect();
	</script>
</body>
</html>
```

## FAQ
1. How do I use the regular WS instance?
```js
// You can use the regular instance from the `<ws>.raw`.
ws.raw.send("Hello"); // Don't actually do this.
```