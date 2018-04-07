$(document).ready(() => {
    listenToFormSubmitEvent()
})

const listenToFormSubmitEvent = () => {
    // const formElement = $(".article-search-form");
    // formElement.on("submit", async event => {
    //     event.preventDefault()
    //     $(".article-list").empty();
        /**
         * TODO:
         *  - Lấy từ khoá search của người dùng
         *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
         *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
         *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
         */
    //     search();
    // })


    const throttledSearch = _.debounce(search,1000)
    const inputElement = $("#article-search-form__input");
    inputElement.on("input",event=>{
        clear();
        throttledSearch();
    })
    
   
}

function clear(){
    $(".article-list").empty();
}

async function search(){
    const searchQuery = getUserSearchQuery();
        const data = await searchWiki(searchQuery);
        if(searchQuery != getUserSearchQuery()){
            return; //Khong chay dong ben duoi
        }
        processData(data)
}

function processData(data) {
    const elementString = data.query.search.map(article => `
                <a href='https://en.wikipedia.org/?curid=${article.pageid}' target="_blank" class="article-view">
                             <h3 class="article-view__title">${article.title}</h3>
                             <p class="article-view__snippet">${article.snippet}</p> </a>
                `)
        .join("")

    $(".article-list").append(elementString);
}

function getUserSearchQuery () {
    let article = $(".article-search-form__input");
    let articleValue = article.val();
    return articleValue;
}

async function searchWiki(query) {
    return await $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        data: {
            action: "query",
            list: "search",
            format: "json",
            srprop: "snippet",
            origin: "*",
            srsearch: encodeURI(query)
        },
    })
}