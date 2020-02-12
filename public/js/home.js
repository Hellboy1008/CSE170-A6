name = localStorage["user-name"];
$.ajax({ url: '/', success: function(data) { console.log(data); } });

$(window).on("load", function() {
    $('.user-name').text('Welcome back, ');
    $('.user-name').append(name);
    $('.user-name').append('!');
});