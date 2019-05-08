var flickrAPI = '//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

$.getJSON( flickrAPI, {
    tags: 'pasila',
    tagmode: 'any',
    format: 'json'
    },
    function(data){
        console.log(data);
    }
);


function handleResponse(resp){
    console.log('The request has been completed');
    console.log(resp);

    if (resp.items.length === 0){
        $('#imageWrapper').text('There is no image matching your search term');
        return;
    }


    renderContent(resp);
}

function renderContent(resp){
    $('#flickrLink').text(resp.link);
    $('#flickrTitle').text(resp.title);

    for (var i = 0; i < resp.items.length; i++){
        $('#imageWrapper').append('<img src=" ' + url + '"></img>');
    }
}
function doAjaxCall(){
    $.getJSON(
        flickrAPI,
        paramsForFlickr,
        handleResponse
    );
}

$(document).ready(function(){
    $('#search').on('click', function(){
        var searchTerm = $('#searchTerm').val();
        console.log(searchTerm);
        doAjaxCall(searchTerm);
    })
})

