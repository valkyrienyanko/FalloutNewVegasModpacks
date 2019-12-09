# Template for your Modpack Page

1. Replace `<title>Valks Fallout Mods</title>` and `<h1>Valks Fallout New Vegas Modpack</h1>` with your own name.
2. All mod IDs must be from the [Nexus Mods Site](https://www.nexusmods.com). Replace the `00000` in `mod(00000)` with the proper mod ID.
3. You may have as many categories as you want or none at all.
4. You do not have to leave a description at the top of your mods.
5. Leave everything else as is.

```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<title>Valks Fallout Mods</title>
	<link rel="stylesheet" href="css/universal.css" type="text/css">
	<link rel="stylesheet" href="css/index.css" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
	<script src="js/index.js"></script>
</head>

<body>
	<h1>Valks Fallout New Vegas Modpack</h1>
	<p>Leave any extra details about your modpack here. Use links like <a href="https://www.duckduckgo.com/" target="_blank">this</a>.</p>
	<h2>Category 1</h2>
	<ul>
		<li><button onclick='mod(00000)'>Mod Name 1</button></li>
    <li><button onclick='mod(00000)'>Mod Name 2</button></li>
	</ul>
</body>

</html>
```
