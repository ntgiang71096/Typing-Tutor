if(disableConsoleLog)console.log=function(){};
$(document).ready(function(){$(".topics-nav li").click(function(){var a=$(this).attr("id").replace("-nav","");$(this).hasClass("current")?($(this).removeClass("current"),$("#"+a).slideUp()):($(".topics-nav li").removeClass("current"),$(this).addClass("current"),$(".topics-wrapper").hide(),$("#"+a).slideDown())});typeof isChooseTopicPage!=="undefined"&&isChooseTopicPage&&($("#current-topics .topics-listing").length>0?$("#current-topics-nav").click():$("#remaining-topics-nav").click());$(".word-family .heading-wrapper").click(function(){var a=
$(".word-family .all-family-words-wrapper");a.is(":visible")||($(".usage-patterns .all-usage-patterns-wrapper").hide(),$(".usage-patterns .heading-wrapper .click-to-view").show(),$(".usage-patterns .pattern-wrapper").removeClass("current"),$(".word-family .heading-wrapper .click-to-view").hide(),$(".examples .example-wrapper").hide(),a.slideDown())});$(".usage-patterns .heading-wrapper").click(function(){var a=$(".usage-patterns .all-usage-patterns-wrapper");a.is(":visible")||($(".word-family .all-family-words-wrapper").hide(),
$(".word-family .heading-wrapper .click-to-view").show(),$(".word-family .word-wrapper").removeClass("current"),$(".usage-patterns .heading-wrapper .click-to-view").hide(),$(".examples .example-wrapper").hide(),a.slideDown())});$(".word-family .word-wrapper .view-example, \t\t\t.word-family .word-wrapper .word, \t\t\t.word-family .word-wrapper .meaning").click(function(){$(".examples .example-wrapper").hide();$(".word-family .word-wrapper").removeClass("current");$wordWrapper=$(this).parent(".word-wrapper");
$wordWrapper.addClass("current");var a="word-example-wrapper-"+$wordWrapper.attr("id").replace("word-wrapper-","");$("#"+a).show();$("#"+a+" .content").click()});$(".usage-patterns .pattern-wrapper").click(function(){$(".examples .example-wrapper").hide();$(".usage-patterns .pattern-wrapper").removeClass("current");$(this).addClass("current");var a="pattern-example-wrapper-"+$(this).attr("id").replace("pattern-wrapper-","");$("#"+a).show();$("#"+a+" .content").click()});$("#view-meaning-example").click(function(){$(".examples .example-wrapper").hide();
$("#meaning-example-wrapper").show();$("#meaning-example-wrapper .content").click()})});
