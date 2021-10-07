import $ from 'jquery';
import 'bootstrap';
import './sass/_index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

$('.text,.select,textarea').addClass("form-control");
$('.pd-checkbox input').addClass('form-check-input');
$('.pd-checkbox label').addClass('form-check-label');
$('.pd-checkbox span.value').addClass('form-check');

const defaults = {
	textColor: '#505050',
	primaryColor: '#69B4C6',
	secondaryColor: '#5c636a',
	hoverChange: 20,
	errorColor: '#dc3545',
	labels: true,
};

var options = {};

var styleDictionary = [];

export function init(optionsInput) {
	options = $.extend(defaults, optionsInput);
	
	if (options.placeholder === true) {
		enablePlaceholders();
	}
	
	setTextColor(options.textColor);
	setPrimaryColor(options.primaryColor);
	setSecondaryColor(options.secondaryColor);
	setErrorColor(options.errorColor);

	if (options.labels === false) {
		hideLabels();
	}
	
	setStyles();
}

function enablePlaceholders() {
	$('label').each(function() {
		var placeHolder = $(this).text();
		var forId = $(this).attr('for');
		
		$('#' + forId).attr('placeholder', placeHolder);
		
	});
}

function setTextColor(color) {
	styleDictionary.push(`body {color: ${color};}`);
}

function setPrimaryColor(color) {
	styleDictionary.push(`input[type="text"],select,textarea { border-color: ${color};}`);
	styleDictionary.push(`.btn-primary { background-color: ${color}; border-color: ${color};}`);
	
	var rgb = hexToRgb(color);
	var darker = rgbToHex(rgb.r - options.hoverChange, rgb.g - options.hoverChange, rgb.b - options.hoverChange);
	
	styleDictionary.push(`.btn-primary:hover { background-color: ${darker}; border-color: ${darker}; }`);
}

function setSecondaryColor(color) {
	styleDictionary.push(`.btn-secondary { background-color: ${color}; border-color: ${color};}`);
	
	var rgb = hexToRgb(color);
	var darker = rgbToHex(rgb.r - options.hoverChange, rgb.g - options.hoverChange, rgb.b - options.hoverChange);
	
	styleDictionary.push(`.btn-secondary:hover { background-color: ${darker}; border-color: ${darker}; }`);
}

function setErrorColor(color) {
	styleDictionary.push(`.text-danger { color: ${color}; }`);
}

function setStyles() {
	var style = document.createElement('style');
	style.type = 'text/css';
	styleDictionary.forEach(function(directive) {
		style.innerHTML += directive;
	});
	
	document.getElementsByTagName('head')[0].appendChild(style);
}

function hideLabels() {
	$('label').hide();
	enablePlaceholders();
}

function componentToHex(c) {
	if (c < 0) c = 0;
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}