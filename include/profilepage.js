let toptracks = [
    {
        name: "Hype Boy",
        artist: "New Jeans",
        album: "New Jeans",
        duration: "3:54",
        image: "img.png"
    },
    {
        name: "Cardigan",
        artist: "Taylor Swift",
        album: "Folklore",
        duration: "3:54",
        image: "img1.jpg" 
    },
    {
        name: "Turning Tables",
        artist: "Adele",
        album: "Adele",
        duration: "3:54",
        image: "img2.png" 
    },
    {
        name: "Easy On Me",
        artist: "Adele",
        album: "Adele",
        duration: "3:54",
        image: "img3.png" 
    },
    {
        name: "When this Rain Stops",
        artist: "Wendy",
        album: "Like Water",
        duration: "3:54",
        image: "img4.jpg" 
    }
]


let generateTopArtistList = () => {
    let content = document.getElementById('topartist-list');
    return content.innerHTML = toptracks.map((x) => {
        let {artist,image} = x;
        return `
            <div class="flex flex-col rounded-md bg-webtopartist">
                <div class="w-32 my-4 mx-3 large:w-28 md:w-24"> 
                    <img src="/assets/playlist-mg-assets/${image}" alt="" class="rounded-full">
                </div>
                <p class="ml-2 text-custom-color-song-font">${artist}</p>
                <p class="ml-2 mb-2">Artist</p>
            </div>
        `

    }).join("")
}
// generateTopArtistList();


let generateTopTrackList = () => {
    let count = 0;
    let content = document.getElementById('toptracklist');
    return content.innerHTML = toptracks.map((x) => {
        count++;
        let {name, artist, album, duration, image} = x;
        return `
            <div class="flex text-custom-color-song-more my-2 text-xs song hover:cursor-pointer">
            <p class="w-1/12 text-base pl-10 my-auto large:pl-8 mid:pl-6 mid2:pl-6 xsmall:pl-3">${count}</p>
            <!-- Img and Title/Artist -->
            <div class="flex w-4/12 xlarge:pl-4 mid:w-8/12 small:w-10/12"> 
                <img src="/assets/playlist-mg-assets/${image}" alt="Song" class="w-12 rounded-md"> 
                <div class="flex flex-col justify-center ml-4">
                    <p class="text-custom-color-song-font">${name}</p>
                    <p>${artist}</p>
                </div>
            </div>
            <p class="w-4/12 my-auto large:pl-8 mid:hidden">${album}</p>
            <p class="w-1/12 my-auto small:hidden"><span class="material-symbols-rounded">favorite</span></p>
            <p class="w-1/12 my-auto small:hidden">${duration}</p>
            <div class="w-1/12 relative my-auto optcontainer hidden small:flex xsmall:text-xs">
                <i class="fa-solid fa-ellipsis fa-xl option text-custom-color-song-more"></i>
                <div class="flex-col absolute -left-12 -bottom-44 xsmall:-left-24 w-32 bg-webheffect px-5 py-2 rounded-lg text-custom-color-song-font text-xs hidden dropdown">
                    <a href="" class="py-2 mb-1 border-b-1">Add to Queue</a>
                    <a href="" class="py-1">Go to songs</a>
                    <a href="" class="py-1">Go to artist</a>
                    <a href="" class="py-1">Go to album</a>
                    <a href="" class="py-2 mt-1 border-t-1">Add to playlist</a>                          
                </div>
            </div>
        </div>
            `
    }).join("")
}
generateTopTrackList();


/* For song hover */

// song > optcontainer > option, dropdown

let trackshovered = Array.from(document.getElementsByClassName('song'));

trackshovered.forEach(track => {
    let optcontainer = track.querySelector('.optcontainer');
    let option = optcontainer.querySelector('.option');
    let dropdown = optcontainer.querySelector('.dropdown');

    track.addEventListener('mouseover', () => {
        track.setAttribute('style','background-color: rgb(9, 36, 49,0.5);border-radius:50px;');
        optcontainer.setAttribute('style', 'display: flex;');
    })

    track.addEventListener('mouseout', () => {
        track.setAttribute('style','background-color: none;');
        optcontainer.setAttribute('style', 'display: none;');
    })

    option.addEventListener('click', () => {
        if(dropdown.clientHeight == "0"){
            dropdown.setAttribute('style','display: flex;');
        }
        else{
            dropdown.setAttribute('style','display: none;');
        }
    })
})


