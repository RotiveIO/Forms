![Rotive IO Forms for Pardot](https://github.com/RotiveIO/Forms/raw/main/Static/bannerv1.png)

## Overview

Rotive forms for Pardot is a simple script and markup based on [Bootstrap](https://getbootstrap.com/) and can be employed within a Pardot webform with ease and little, to no, dependencies.

## Installation

### CDN (edge)
```html
<script src="https://cdn.jsdelivr.net/gh/rotiveio/forms@master/dist/forms.js"></script>
```

### CDN (stable)
```html
<script src="https://cdn.jsdelivr.net/gh/rotiveio/forms@latest/dist/forms.js"></script>
```

## Getting Started

To initialize the library, add this basic boilerplate after the script call.

```javascript
Rotive.init();
```

## Customization

The library exposes several useful settings to customize the look and feel of the form to have it fit your site branding.

Confugration options are passed as a JSON object to the required `init` function on the `Rotive` object.

```javascript
Rotive.init({
	// Options here
});
```

### Example

Lets say for example, your primary color is purple (`#8b46c7`).

```javascript
Rotive.init({
	primaryColor: '#8b46c7',
	/* ... */
});
```

![Rotive IO Primary color example](https://github.com/RotiveIO/Forms/raw/main/Static/primaryColor.png)

As you can see, primary color sets the border of the fields and the primary call to action.

### Available options

|Option|Type|Description|Default|
|------|----|-----------|-------|
|`primaryColor`|HEX|Color of field border and primary CTA|`#69B4C6`|
|`secondaryColor`|HEX|Secondary CTA color.|`#5c636a`|
|`hoverChange`|Int|How much darker the buttons get on hover. Accepts an integer between 0-255.|`20`|
|`placeholder`|Boolean|When `true` sets the visibility of the placeholder text, which equals the label text. This option is ignored when `labels` is true.|`false`
|`labels`|Boolean|Indicates whether or not the field labels should be visible.|`true`
|`textColor`|HEX|Color of the body text.|`#505050`
|`errorColor`|HEX|Color of the error messages.|`#dc3545`