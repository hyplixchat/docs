# OP Codes
Every message from `Server` to `Client` has an op code within it. These op codes describe the purpose of it. Below is the list of these op codes:

| Code | Action  | Description                                                           |
|------|---------|-----------------------------------------------------------------------|
| 0    | Receive | An event was done.                                                    |
| 1    | Receive | Sent immediately as a welcome after connecting.                       |
| 2    | Send    | Start the session by verifying with a token.                          |
| 3    | Receive | Sent with the hearbeat interval after being verified.                 |
| 4    | Send    | Fired from time to time by the client to keep the connection alive.   |
| 5    | Receive | Sent to acknowledge that it has been received.                        |