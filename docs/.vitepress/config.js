module.exports = {
	title: "KekwChat documentation",
	description: "Get started with our API with the help of this documentation. Do your creative work, such as automation.",
	lang: "en-US",
	base: "/docs",
	head: [
		["meta", { name: "theme-color", content: "#5f95c0" } ]
	],
	themeConfig: {
		sidebar: sidebar(),

		lastUpdated: true,

		editLink: {
			pattern: "https://github.com/kekwchat/docs/:path",
			text: "Edit this page on Github"
		},

		footer: {
			message: "Licensed under the GNU General Public License 3.0",
			copyright: "Copyright @ 2022 Hyplix"
		}
	}
}

function sidebar() {
	return [
	{
		text: "",
		items: [
			{ text: "Getting Started", link: "/index.md"},
			{ text: "Reference", link: "/reference.md"}
		]
	},
	{
		text: "CLI Tool",
		collapsible: true,
		items: [
			{ text: "NodeJS", link: "/cli-tool/nodejs.md"}
		]
	},
	{
		text: "Resources",
		collapsible: true,
		items: [
			{ text: "Global Channel", link: "/resources/global-channel.md"},
			{ text: "Users", link: "/resources/users.md"}
		]
	},
	{
		text: "WebSocket",
		collapsible: true,
		items: [
			{ text: "Gateway", link: "/websocket/gateway.md"},
			{ text: "Events", link: "/websocket/events.md"},
			{ text: "OP Codes", link: "/websocket/opcodes.md"}
		]
	},
	{
		text: "NPM Packages",
		collapsible: true,
		items: [
			{ text: "@kekwchat/ws", link: "/packages/npm/kekwchat-ws.md"}
		]
	},
	]
}