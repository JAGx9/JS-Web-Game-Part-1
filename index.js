// Function to create and position background elements
function newBackground(src, left, bottom, width, height) {
    let background = document.createElement('div')
    background.style.position = 'fixed'
    background.style.left = left + 'px'
    background.style.bottom = bottom + 'px'
    background.style.width = width + 'px'
    background.style.height = height + 'px'
    background.style.backgroundImage = `url('${src}')`
    background.style.backgroundSize = 'cover'
    document.body.append(background)
}


newBackground('assets/sky.png', 0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2)

newBackground('assets/grass.png', 0, 0, window.innerWidth, window.innerHeight / 2)

function newImage(src, left, bottom) {
    let img = document.createElement('img')
    img.src = src
    img.style.position = 'fixed'
    img.style.left = left + 'px'
    img.style.bottom = bottom + 'px'
    document.body.append(img)
    return img
} 

newImage('assets/green-character.gif', 100, 250)
newImage('assets/pine-tree.png', 450, 200)
newImage ('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 425)
newImage('assets/well.png', 500, 425)

function newItem(src, left, bottom) {
    let item = document.createElement('img');
    item.src = src;
    item.style.position = 'fixed';
    item.style.left = left + 'px';
    item.style.bottom = bottom + 'px';
    document.body.append(item);

    // Add click event listener to remove the item
    item.addEventListener('dblclick', function(){
        item.remove();
    });

    return item;
}

newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)




