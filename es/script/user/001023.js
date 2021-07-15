function convert(value,separator){if(!separator){var separator=":";}
var hours=parseInt(value);value-=parseInt(value);value*=60;var mins=parseInt(value);value-=parseInt(value);value*=60;var secs=parseInt(value);var display_hours=hours;mins=(mins<10)?"0"+mins:mins;return display_hours+separator+mins;}
function calculate_time_zone(separator)
{if(!separator){var separator=":";}
var rightNow=new Date();var jan1=new Date(rightNow.getFullYear(),0,1,0,0,0,0);var june1=new Date(rightNow.getFullYear(),6,1,0,0,0,0);var temp=jan1.toGMTString();var jan2=new Date(temp.substring(0,temp.lastIndexOf(" ")-1));temp=june1.toGMTString();var june2=new Date(temp.substring(0,temp.lastIndexOf(" ")-1));var std_time_offset=(jan1-jan2)/(1000*60*60);var daylight_time_offset=(june1-june2)/(1000*60*60);var dst;if(std_time_offset==daylight_time_offset){dst="0";}else{var hemisphere=std_time_offset-daylight_time_offset;if(hemisphere>=0){std_time_offset=daylight_time_offset;}
dst="1";}
return dst+"|"+convert(std_time_offset,separator);};function cb_submit(){grecaptcha.execute();$('.register-form').submit();}
$(function(){var timezone=calculate_time_zone('.');$('#tz').val(timezone.substr(2));$('#dst').val(timezone.substr(0,1));});