$(function () {
    $(window).on("resize",function () {
        let clientW=$(window).width();

        let bigImg=clientW>=800;

        let $allItems=$("#lk_carousel .item");

         $allItems.each(function (index,item) {
            let src=bigImg ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl='url("' + src +'")';
            $(item).css({
                backgroundImage:imgUrl
            });
            if(!bigImg){
                let $img="<img src='" + src + "'>";
                $(item).empty().append($img);

            }else {
                $(item).empty();
            }
        });
    });
        $(window).trigger("resize");
        // 2. 工具提示
        $('[data-toggle="tooltip"]').tooltip();

        // 3. 动态处理宽度
        $(window).on("resize", function () {
            let $ul = $("#lk_product .nav");
            let $allLis = $("[role='presentation']", $ul);
            // console.log($allLis);

            // 3.1 遍历
            let totalW = 0;
            $allLis.each(function (index, item) {
                totalW += $(item).width();
            });

            // console.log(totalW);

            let parentW = $ul.parent().width();

            // 3.2 设置宽度
            if(totalW > parentW){
                $ul.css({
                    width: totalW + "px"
                })
            }else {
                $ul.removeAttr("style");
            }
        });


        // 4. 导航处理
        let allLis = $("#lk_nav li");

        $(allLis[2]).on("click", function () {
            $("html,body").animate({ scrollTop: $("#lk_hot").offset().top }, 1000);
        });


        $(window).trigger("resize");





}
);
