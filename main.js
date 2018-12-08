console.log('hi');

$(document).ready(startGallery);

var imageGallery = ['images/BOB_9640.jpg', "/images/JCQ_0002.jpg", "images/JCQ_0012.jpg"];

function startGallery() {
    console.log('startGallery');
   fillPageWithPhotos(imageGallery);
   
}

function fillPageWithPhotos(arrayOfPhotos) {
    console.log('fillPhotos');
    for ( var row = 0 ; row < 3; row ++ ) {
        var rowContainer = $('<div>', {
            css: {
                'font-size': '0',
            },
            height: '33.3%',
            width: '100%',
        });

        $('#photoContainer').append(rowContainer);
       
       for ( var photo = 0; photo < arrayOfPhotos.length; photo ++ ) {

            var imageContainer = $('<div>', {
                css: {
                    'border' : '1px solid black',
                    'background-color': 'yellow',
                    'box-sizing': 'border-box',
                     display: 'inline-block',
                },
                
                class: "imageContainer",
                height: '100%',
                width: '33.3%',
            });

            var image = $('<div>', {
                class: "image",
                height: '100%',
                width: '100%',
                src: arrayOfPhotos[photo],
            });

            imageContainer.append(image);
            rowContainer.append(imageContainer);

       
        }
        
        
    }

    

}