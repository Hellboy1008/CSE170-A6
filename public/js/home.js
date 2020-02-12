name = localStorage["user-name"];

$(window).on("load", function() {
    $('.user-name').text('Welcome back, ');
    $('.user-name').append(name);
    $('.user-name').append('!');
});