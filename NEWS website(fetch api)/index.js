// Your API key is: d537148eb78147f992a88886f61d0bec

let newsAccordion = document.getElementById('newsAccordion');
let url = "http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d537148eb78147f992a88886f61d0bec";

const xhttp = new XMLHttpRequest();
xhttp.open('GET', url, true);
xhttp.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        // console.log(json)
        let articles = json.articles;
        console.log(articles)

        let newshtml = "";

        articles.forEach((element, index) => {
            // console.log(element, index)
            let news = ` <div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0 searchItem">
                    <button class="btn btn-link btn-block text-left coolapsed" type="button" data-toggle="collapse"
                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collaps${index}">
                       <h5><b>BREAKING NEWS ${index + 1}:</b> <span class="text">${element.title}</span></h5>
                    </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                data-parent="#newsAccordion">
                <div class="card-body">
                   ${element.content}<a href="${element.url}" target="_blank">Read More</a>
                </div>
            </div>
        </div>`
            newshtml += news;
        });
        newsAccordion.innerHTML = newshtml
    }
    else {
        console.log('error ocured!')
    }
}
// xhttp.onprogress = function () {
//     console.log(xhttp.readyState)
// }
xhttp.send();

let search = document.getElementById('search');

search.addEventListener('input', function () {
    let searchValue = search.value;

    let searchItem = document.getElementsByClassName('searchItem')
    // console.log(searchItem)

    Array.from(searchItem).forEach(function (element) {
        let a = element.getElementsByClassName('text')[0].innerText;
        // console.log(a)
        if (a.includes(searchValue)) {
            element.style.display = ""

        } else {
            element.style.display = "none"
        }

    })
})