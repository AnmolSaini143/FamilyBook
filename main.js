var images = 
[
    "IMG_4033.JPG", "6BF4A2C4-D64C-44FD-A619-A291895283E1.JPG", "654E5B01-02DF-444B-929C-30831847DD3E.JPG", "350330C5-6415-49C8-A1FC-388271DA3F99.JPG"
];

var captions = 
[
    "My Mom", "My Dad", "My Sister", "Me"
];

var i = 0;
function update()
{

    i++
    var numofitems = 5
    if(i > numofitems)
    {
        i = 0;
    }
    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById("Image").src = updatedImage;
    document.getElementById("Caption").innerHTML = updatedName;
}