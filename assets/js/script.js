$(document).ready(function(){
    let currentPath = window.location.pathname;
    console.log(currentPath)

    $('.menu a').each(function() {
        let linkPath = $(this).attr('href');

        if (currentPath.indexOf(linkPath) !== -1) {
            $(this).addClass('active');
        }
    });
});
