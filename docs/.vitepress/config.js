module.exports = {
	title: "Hyplix Documentation",
	description: "The Official documentation of Hyplix Chat",
	lang: "en-US",
	themeConfig: {
		sidebar: sidebar(),

		editLink: {
			pattern: "https://github.com/hyplixchat/docs/:path",
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
				{ text: "Rust", link: "/cli-tool/rust"}
			]
		},
		{
			text: "Resources",
			collapsible: true,
			items: [
				{ text: "Global Channel", link: "/resources/global-channel.md"},
				{ text: "Users", link: "/resources/users.md"}
			]
		}
	]
}