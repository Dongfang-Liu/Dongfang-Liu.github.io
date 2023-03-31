function f(indexs, imgNum) {
    $('.bnner').on('mouseenter',function(){
        clearInterval(time)
        console.log(111)
    }).on('mouseleave',function(){
        time = setInterval(move,indexs)
    })
    // 图片
    let ssd=$('.nav').width()
    console.log(ssd)
    let ss=-ssd;
    let sum=0;
    function move(){
        sum++;
        if (sum>=imgNum){
            $('.nav_img').css({
                'margin-left':0
            });
            sum=0
        }
        // console.log(sum)
        $('.nav_xiao li').css('background','grey')
        $('.nav_xiao li').eq(sum).css('background','black')
        $('.nav_img').animate({
            'margin-left':ss*sum
        },500)
        if (sum==5){
            $('.nav_xiao li').css('background','grey')
            $('.nav_xiao li').eq(0).css('background','black')
        }
    }
    //小圆点
    $('.nav_xiao li').each(function(index,ele){
        $(this).on('click',function(){
            $('.nav_xiao li').css('background','grey')
            $(this).css('background','black')
            $('.nav_img').animate({
                'margin-left':ss*index
            })
            sum=index
        })
    })

      //右
    //     $('.nav_left div:nth-child(2)').on('click',function(){
    //     // function mover(){
    //         sum++
    //     if (sum>=6){
    //         $('.nav_img').css({
    //         'margin-left':0
    //     });
    //         sum=1
    //     }
    //     $('.nav_img').stop().animate({
    //         'margin-left':ss*sum
    //     },500)
    //     $('.nav_xiao li').css('background','grey')
    //     $('.nav_xiao li').eq(sum).css('background','black')
    //         if (sum==5){
    //         $('.nav_xiao li').css('background','grey')
    //         $('.nav_xiao li').eq(0).css('background','black')
    //     }
    // })
    //左
    // $('.nav_left div:nth-child(1)').on('click',function(){
    //     sum--;
    //     if (sum<0){
    //         $('.nav_img').css({
    //         'margin-left':-4100  //最后一张图片的起始距离 注意并不是总长度 总长度-一张的长度
    //     })
    //         sum=4
    //     }
    //     console.log(sum)
    //     $('.nav_img').animate({
    //         'margin-left':ss*sum
    //     })
    //     $('.nav_xiao li').css('background','grey')
    //     $('.nav_xiao li').eq(sum).css('background','black')
    // });

    let time = setInterval(move,indexs)
}