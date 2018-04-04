$(document).ready(() => {
    listenToFormSubmitEvent()
})

const listenToFormSubmitEvent = () => {
    const formElement = $(".article-search-form");
    formElement.on("submit", async event => {
        event.preventDefault()
        $(".article-list").empty();
        /**
         * TODO:
         *  - Lấy từ khoá search của người dùng
         *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
         *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
         *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
         */
        let dataUserInput = $(".article-search-form__input").val();

        const respone = await $.ajax({
            // url: '/getquestion',
            // method:'POST',
            // data:{

            // },
            // success: function(res){
            //     $("#questionContent").html(res.question);
            // }

            url: 'https://en.wikipedia.org/w/api.php',
            method: 'POST',
            data: {
                action: "query",
                list: "search",
                format: "json",
                srprop: "snippet",
                origin: "*",
                srsearch: encodeURI(dataUserInput)
            }
        })
     
        var arr = [];
        for (let i = 0; i < respone.query.search.length; i++) {
            let autoId = respone.query.search[i].pageid;
            let autoTitle = respone.query.search[i].title;
            let autoSnippet = respone.query.search[i].snippet;
            arr[i] = `<a href='https://en.wikipedia.org/?curid=${autoId}' target="_blank" class="article-view">
            <h3 className="article-view__title"><${autoTitle}></h3>
            <p className="article-view__snippet"><${autoSnippet}></p> </a>`
        
        }

        
        $(".article-list").append(arr);
        
        
        

       
        



    })


}