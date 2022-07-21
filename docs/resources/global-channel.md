# Global Channel
This is a special kind of channel that connects all of the users together in Hyplix. Just like you can watch videos from global creators on YouTube. In the same sense, you can chat with global people on this channel.


## Global Channel Structure
This channel does not have it's own data (oh! kinda sad). It only contains your sweet messages and nothing else :]

## Message Structure
| Field    | Type    | Description                         |
|----------|---------|-------------------------------------|
| id       | string  | The id of the message.
| type     | string  | The type of the message. (text)
| content  | string  | The content of the message.
| user     | object  | The user object with id and username.

## Get Messages
<span style="color: yellow">GET</span> - /channels/global/messages
```js
const headers = {
	Authorization: "Bearer <token>"
}

const response = await fetch(api_url + "/channels/global/messages", {
	method: "GET",
	headers
});

response.json((data) => {
	console.log(data)
});

```

## Get Specific Message
<span style="color: yellow">GET</span> - /channels/global/messages/:id
```js
const headers = {
	Authorization: "Bearer <token>"
}

const response = await fetch(api_url + "/channels/global/messages/1658389041239", {
	method: "GET",
	headers
});

response.json((data) => {
	console.log(data)
});
```

## Create Message
<span style="color: yellow">POST</span> - /channels/global/messages/text
```js
const headers = {
	Authorization: "Bearer <token>"
}

const response = await fetch(api_url + "/channels/global/messages/text", {
	method: "POST",
	headers,
	body: JSON.stringify({
		content: "Hello World"
	})
});

response.json((data) => {
	console.log(data)
});
```

## Delete Message
<span style="color: yellow">POST</span> - /channels/global/messages/:id

**Note:** You can only delete your own message.
```js
const headers = {
	Authorization: "Bearer <token>"
}

const response = await fetch(api_url + "/channels/global/messages/1658389041239", {
	method: "DELETE",
	headers
});

response.json((data) => {
	console.log(data)
});
```