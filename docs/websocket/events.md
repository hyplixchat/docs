# Events

## Message Create
- name: "message_create" | Fires whenever someone sends a message on a global channel.
```json
{
	"op": 0,
	"name": "message_create",
	"data": {
		"id": "2022072222520754",
		"content": "Hello World",
		"user": {
			"id": "2022072219128065",
			"username": "colderry"
		}
	}
}
```

## Message Delete
- name: "message_delete" | Fires whenever someone deletes a message on a global channel.
```json
{
	"op": 0,
	"name": "message_delete",
	"data": {
		"id": "2022072222520754",
		"content": "Hello World",
		"user": {
			"id": "2022072219128065",
			"username": "colderry"
		}
	}
}
```

## User Ready
- name: "user_ready" | When the user is verified, this event is fired.
```json
{
	"op": 0,
	"name": "user_ready",
	"data": {
		"id": "2022072219128065",
		"username": "colderry",
		"avatar": "https://avatars.dicebear.com/api/open-peeps/64.svg",
		"verified": true,
		"createdAt": 1658495528971
	}
}
```