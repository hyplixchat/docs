import{_ as t,c as e,o as d,d as o}from"./app.2404b54a.js";const m=JSON.parse('{"title":"OP Codes","description":"","frontmatter":{},"headers":[],"relativePath":"websocket/opcodes.md"}'),r={name:"websocket/opcodes.md"},a=o('<h1 id="op-codes" tabindex="-1">OP Codes <a class="header-anchor" href="#op-codes" aria-hidden="true">#</a></h1><p>Every message from <code>Server</code> to <code>Client</code> has an op code within it. These op codes describe the purpose of it. Below is the list of these op codes:</p><table><thead><tr><th>Code</th><th>Action</th><th>Description</th></tr></thead><tbody><tr><td>0</td><td>Receive</td><td>An event was done.</td></tr><tr><td>1</td><td>Receive</td><td>Sent immediately as a welcome after connecting.</td></tr><tr><td>2</td><td>Send</td><td>Start the session by verifying with a token.</td></tr><tr><td>3</td><td>Receive</td><td>Sent with the hearbeat interval after being verified.</td></tr><tr><td>4</td><td>Send</td><td>Fired from time to time by the client to keep the connection alive.</td></tr><tr><td>5</td><td>Receive</td><td>Sent to acknowledge that it has been received.</td></tr></tbody></table>',3),i=[a];function c(s,n,h,_,p,l){return d(),e("div",null,i)}var v=t(r,[["render",c]]);export{m as __pageData,v as default};