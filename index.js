function decodeEntities(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}
var colors = ["#1B73D7", "#1FD8AD", "#1FD82C", "#D81F1F", "#D74B4B", "#D74B88", "#D74BC4", "#B64BD7", "#834BD7", "#4B9FD7", "#4BBFD7", "#4BD7A3", "#4BD783", "#D7B14B", "#D77E4B", "#D75E4B"]

var color = "black";
var tweet = $('#TWITTER');
$(document).ready(function() {
   tweet.attr('href', "https://twitter.com/intent/tweet?text=Why don’t we shut our mouths and let our souls, our hearts speak for themselves, because it’s 2:09 in the afternoon and words are much too slow for lover’s content -Lafayette White");
   
  $("#new-quote").on("click", function(){
    event.preventDefault();
    color = colors[Math.floor(Math.random()*colors.length)];
   
     
    $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      success: function(data){
        var info = data.shift();
        var quote = info.content.slice(3, info.content.length - 5);
      var fix = decodeEntities(quote);
         $('#QUOTE').fadeOut("slow", function(){
      $('#QUOTE').text("\"" + fix + "\"").css("color", color).fadeIn("slow");
           $('#TWITTER').css("color", color);
           $('#new-quote').css("background", color);
           $('body').css("background", color).fadeIn("slow");
           
    });
      $('#AUTHOR').fadeOut("slow", function(){
        $('#AUTHOR').text("-" + info.title).css("color", color).fadeIn("slow");
        
        tweet.attr('href', "https://twitter.com/intent/tweet?text=" + fix + " -" + info.title);
      });
        
      },
      cache: false
    })
     
   
     }
  
  )
});
