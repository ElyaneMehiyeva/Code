$(function(){
    $(".left").click(function(){
        $id = parseInt($(".mainImage").attr("id"));
        if($id==1){
            $id = 19;
        }
        $id--;
        $images = $("#images img");
        $images.each(function(){
            if($(this).attr("data-id")==$id){
                $(".mainImage").attr("src",$(this).attr("src")).attr("id",$id);
            }
        });
    });
    $(".right").click(function(){
        $id = parseInt($(".mainImage").attr("id"));
        if($id == 18){
            $id = 0;
        }
        $id++;
        $images = $("#images img");
        $images.each(function(){
            if($(this).attr("data-id")==$id){
                $(".mainImage").attr("src",$(this).attr("src")).attr("id",$id);
            }
        })
    })


    $allImages = $("#images img");
    $allImages.each(function(){
        $(this).click(function(){
            $dataId = parseInt($(this).attr("data-id"));
            $src = $(this).attr("src");
            $(".mainImage").attr("src",$src).attr("id",$dataId);            
        });
    });


    setInterval(() => {
        $id = $(".mainImage").attr("id");
        $allImages = $("#images img");
        $allImages.each(function(){
            $(this).removeClass("active");
            if($(this).attr("data-id")==$id){
                $(this).addClass("active");
            }
        })
    }, 100);
































})
