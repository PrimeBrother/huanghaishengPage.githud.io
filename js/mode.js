/**
 * Created by Administrator on 2017/4/11.
 */
    $(function () {
        //��������
        $('#topNav').on('mouseenter', function () {
            $('.main-layout-sub').stop().slideDown(500);
            console.log(1);
        })
        $('.main-nav').on('mouseleave', function () {
            $('.main-layout-sub').stop().slideUp(500);
        })






    })






