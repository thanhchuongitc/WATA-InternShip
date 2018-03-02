$(function()
{
    ShowNav();
    ShowListMenu();
});
function ShowListMenu(){
    $('.sub-list-menu>li').click (function(){
        if ($(this).hasClass('active'))
        {
            $(this).removeClass('active');
            $(this).children('ul').stop(true,true).slideUp(300);
        }
        else 
        {
            $('.sub-list-menu>li').children('ul').stop(true,true).slideUp(300);
            $(this).children('ul').stop(true,true).slideDown(300);
            $('.sub-list-menu>li').removeClass('active');
            $(this).addClass('active');
        }
    });
}
function ShowNav ()
{
    $('.mega-menu').hover(function(){
        $(this).find('ul:first').stop(true,true).slideDown(300);
    },function(){
        $(this).find('ul:first').stop(true,true).slideUp(300);
    });
}
