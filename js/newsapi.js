$(document).ready(function () {

    $('#news').change(function () {
        var url = "";
        var optionValue = $('#news').val();

        switch (optionValue) {
            case "alj":
                url = "https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=eb2440ce518f490d8c3f1eb8ac65893a";
                break;
            case "ap":
                url = "https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=eb2440ce518f490d8c3f1eb8ac65893a";
                break;
            case "bbc":
                url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb2440ce518f490d8c3f1eb8ac65893a";
                break;
            case "cnn":
                url = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=eb2440ce518f490d8c3f1eb8ac65893a";
                break;
            case "reuters":
                url = "https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=eb2440ce518f490d8c3f1eb8ac65893a";
                break;
        }

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json'
        }).done(function (data, status, xhr) {

            console.log(data);

            $('#output').css('display', 'block');
            $('.scrollbtn').css('display', 'block');

            var output = "";
            for (var i = 0; i < data.articles.length; i++) {
                // output = output + "<img src=" + data.articles[i].urlToImage + " width='300' height='200'>" + "<br>" + "Title: " + data.articles[i].title + "<br>" + "Author: " + data.articles[i].author + "<br>" + "Description: " + data.articles[i].description + "<br>" + "<a id='read-more' class='btn' href=" + data.articles[i].url + " target='_blank'>Read More</a>" + "<br><br>";
                output = `${output} <article class="news-article">
                        <img src="${data.articles[i].urlToImage}" width='300' height='200'> <br> 
                        <strong>Title:</strong> ${data.articles[i].title} <br>
                        <strong>Author:</strong> ${data.articles[i].author} <br>
                        <strong>Description:</strong> ${data.articles[i].description} <br>
                        <a class="btn" target="_blank" href="${data.articles[i].url}">Read More</a> <br><br>
                        </article>`;

                $('#output').html(`<div> ${output} </div>`);

            }
        }).fail(function (xhr, status, error) {
            alert('Error: ' + status);
        });
    });

    // scroll to top
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});