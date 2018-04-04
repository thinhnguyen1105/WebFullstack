$(document).ready(function () {
    // $(".showModal").click((e)=>
    // {
    //     e.preventDefault();
    //     console.log(this)
    //     let autoID = $(this).attr("data-id"); // == 'phuong'
    //     $("#myModal").modal();
    //     $(".modal-title").text($("#"+ autoID).text());
    //     $(".auto-image").attr("src",$("."+ autoID).attr("src"));
    // })


    $(document).on('click', '.showModal', function () {
        let autoID = $(this).attr("data-id");
        $("#myModal").modal();
        $(".modal-title").text($("#" + autoID).text());
        $(".auto-image").attr("src", $("." + autoID).attr("src"));
    })
})