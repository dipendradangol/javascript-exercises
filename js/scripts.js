var flickrAPI = '//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

/**
 * Call the render function to rendre image content if there are result,
 * otherwise, discard and print out the notification that nothing is found
 * Call addFavouriteButtonEvent function once finished rendering images
 * 
 * @param {object} resp containts the data we retrived from the Ajax call to the flickr
 * @return {Boolean} false if no image is found
 * @return {void} if images get rendered 
 */

function handleResponse(resp) {
    console.log('The request has been completed'); 
    console.log(resp);

    if (resp.items.length === 0) {
        $('#imageWrapper').text('There is no image matching your search term');
        return;
    }

    renderContent(resp);
    addFavouriteButtonEvent();
}
function addFavouriteButtonEvent(){
    $('.favourite').click(function(){
        var _sourceOfClickedImage = $(this).siblings('img')[0].getAttribute('src');
        //get all of the img siblings of the .favourite element that has been clicked
        // and get the src attribute of that sblings
        //console.log(extractImageUnique(_sourceOfClickedImage));
        var uniqueId = extractImageUnique(_sourceOfClickedImage);

        $.ajax({
            method: 'GET',
            url: 'handleFavourite.php',
            data: {
                favouriteImageId: uniqueId
            },
            success: onSuccess,
            error: onError
        });
    });
}

function onSuccess(data){
    console.log(data);
}
function onError(err){
    console.log('Oops something has gone wrong:' + err.statusText);
}

function extractImageUnique(url){
    url = url.split('/'); //turns url into an array of elements, separated by backslash /
    return url[url.length-2] + '/' + url[url.length-1].replace('.jpg', '');
}

function renderContent(resp) {
    $('#flickrLink').text(resp.link);
    $('#flickrTitle').text(resp.title);
    $('#imageWrapper').html(''); // clear out previous search result

    for (var i = 0; i < resp.items.length; i++) {
        createImage(resp.items[i].media.m);
    }
}

function createImage(url) {
    $('#imageWrapper').append('<div class="col-md-3 col-sm-4 col-xs-6"><img class="img-responsive" src="' + url + '"></img><button class="favourite">Favourite</button></div>');
    
}

function doAjaxCall(searchTerm) {
    var paramsForFlickr = {
        tags: searchTerm,
        tagmode: 'any',
        format: 'json'
    };

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
    });

    $('#searchTerm').on('change', function(){
        var searchTerm = $('#searchTerm').val();
        console.log(searchTerm);
        doAjaxCall(searchTerm);
    });
});


