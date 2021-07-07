import $ from 'jquery';
import 'bootstrap';
import './sass/_index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

$('.text,.select,textarea').addClass("form-control");
$('.pd-checkbox input').addClass('form-check-input');
$('.pd-checkbox label').addClass('form-check-label');
$('.pd-checkbox span.value').addClass('form-check');

$('label').each(function() {
	var placeHolder = $(this).text();
	var forId = $(this).attr('for');
	//$('#' + forId).attr('placeholder', placeHolder);
	
	$('.text,.select,textarea').addClass("form-control");
	$('.pd-checkbox input').addClass('form-check-input');
	$('.pd-checkbox label').addClass('form-check-label');
	$('.pd-checkbox span.value').addClass('form-check');
});