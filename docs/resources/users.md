# Users 
These creatures are everywhere, even though you're a user of your computer.
They are the main entities in Hyplix and they are available on our global channel.

## User Structure
| Field    | Type    | Description                          |
|----------|---------|--------------------------------------|
| id       | string  | The id of the user.                  |
| username | string  | The unique username of the user.     |
| avatar   | string  | The avatar url of the user.          |
| verified | boolean | Whether the user is verified or not. |

## Get Current User
<span style="color: yellow">GET</span> - /user/me

```js
const headers = {
	Authorization: "Bearer <token>"
}

const response = await fetch(api_url + "/user/me", {
	method: "GET",
	headers
});

response.json((data) => {
	console.log(data)
});
```

##  Get User By ID
<span style="color: yellow">GET</span> - /user/:id
```js
const headers = {
	Authorization: "Bearer <token>"
}

const response = await fetch(api_url + "/user/2022072110821093", {
	method: "GET",
	headers
});

response.json((data) => {
	console.log(data)
});
```