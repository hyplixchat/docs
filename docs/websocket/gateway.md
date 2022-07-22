# Gateway
Gateways are a form of real-time communication between a client and a server over websockets. They are really helpful for making stateful applications.

## Base URL
```
wss://api.kekwchat.hyplix.com
```

## Connect to Gateway
```js
const ws = new WebSocket("wss://api.kekwchat.hyplix.com");
const token = "very-secret-hacker-type-token"

ws.addEventListener("message", (payload) => {
	const data = JSON.parse(payload);

	if (data.op === 1) {
		const options = {
			token
		};

		ws.send(JSON.stringify(data));
	};
});
```

## Events and OP Codes
We have specific pages for the events and op codes in this documentation:

| Page     | Link                     |
|----------|--------------------------|
| Events   | [Click Here](events.md)  |
| OP Codes | [Click Here](opcodes.md) |