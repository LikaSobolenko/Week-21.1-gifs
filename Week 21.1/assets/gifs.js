const onSearch = async () => {
    let getGif = document.getElementById('searchGif').value;
    let url =
        'https://api.giphy.com/v1/gifs/search?api_key=esI9K5pIqzIMnxnJzuJHeuw2lvcjVo37&limit=5&offset=0&rating=g&lang=en&q=' +
        getGif;
    let response = await fetch(url);
    let commits = await response.json();
    console.log(commits)
    document.getElementById('gif0').src = commits.data[0].images.original.url;
    document.getElementById('gif1').src = commits.data[1].images.original.url;
    document.getElementById('gif2').src = commits.data[2].images.original.url;
    document.getElementById('gif3').src = commits.data[3].images.original.url;
    document.getElementById('gif4').src = commits.data[4].images.original.url;
}