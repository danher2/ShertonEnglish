function open_lesson(url){ext_lesson=open(url,"ext_lesson","width=800, height=600, menubar=no, toolbar=no, location=no, statusbar=no, scrollbars=yes, resizable=yes");if(window.focus){ext_lesson.focus();}}
function lesson_complete(url,lesson_id,is_registered,top){if(is_registered){$('.complete_button').addClass('loader');$.ajax({type:'POST',data:{lesson_id:lesson_id},url:url,success:function(result){if(result=='1'){$('.navigation').addClass('completed');}}});}else{if(top){$('.register.top').slideDown();}else{$('.register.bottom').slideDown();}}}
function init_lesson(url,lesson_id,logged){$(function(){$('#read_instructions').click(function(){$('.instructions').slideToggle();return false;});$('#close_instructions').click(function(){$('.instructions').slideUp();return false;});$('.open_lesson').click(function(){open_lesson($(this).attr('href'));return false;});$('.complete_button').click(function(){lesson_complete(url,lesson_id,logged,$(this).hasClass('top'));return false;});});}
function init_course(disabled){if(!disabled){$(function(){$('.view_options').click(function(){$('.week_email').animate({height:'42px'},500);$(this).hide();return false;});$('.deactivate').click(function(){$('.deactivate').addClass('loader');$.get($(this).attr('href'),function(data){$('.deactivate').hide();$('.act_options').hide();$('.deactivated').show();$('.week_email').animate({height:'18px'},500);});return false;});$('.activate').click(function(){$('.activate').addClass('loader');$.get($(this).attr('href'),function(data){$('.activate').hide();$('.act_text').hide();$('.activated').show();$('.act_note').show();$('.week_email').animate({height:'84px'},500);});return false;});});}}