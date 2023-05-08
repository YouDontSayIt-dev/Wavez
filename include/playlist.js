// acc name global

let alltracks = [
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
    },
    {
        name: "All About You",
        artist: "Taeyeon",
        album: "Hotel Del Luna OST",
        duration: "3:23",
        image: "img5.jpg" 
    },
    {
        name: "Daydreamin'",
        artist: "Ariana Grande",
        album: "Yours Truly",
        duration: "3:21",
        image: "img6.png" 
    },
    {
        name: "Flower",
        artist: "Johnny Stimson",
        album: "Flower",
        duration: "3:21",
        image: "img7.jpg" 
    }
]

let allplaylist = [
    {
        name: "Fave",
        acc: "wavez",
        img: "img.png"
    },
    {
        name: "Reputation is Karma",
        acc: "wavez",
        img: "img1.jpg"
    },
    {
        name: "Kpop",
        acc: "wavez",
        img: "img2.png"
    },
    {
        name: "Rapgods",
        acc: "wavez",
        img: "img3.png"
    },
    {
        name: "Playlist 2",
        acc: "wavez",
        img: "img4.jpg"
    },
    {
        name: "Goddesses",
        acc: "wavez",
        img: "img5.jpg"
    }
]

let generateTrackList = () => {
    let count = 0;
    let content = document.getElementById('songlist');
    return content.innerHTML = alltracks.map((x) => {
        count++;
        let {name, artist, album, duration, image} = x;
        return `
            <div class="flex text-custom-color-song-more my-2 text-xs song hover:cursor-pointer">
                <p class="w-1/12 text-base pl-10 my-auto">${count}</p>
                <!-- Img and Title/Artist -->
                <div class="flex w-4/12"> 
                    <img src="/assets/playlist-mg-assets/${image}" alt="Song" class="w-12 rounded-md"> 
                    <div class="flex flex-col justify-center">
                        <p class="text-custom-color-song-font ml-4">${name}</p>
                        <p class="ml-4">${artist}</p>
                    </div>
                </div>
                <p class="w-4/12 my-auto">${album}</p>
                <span class="material-symbols-rounded w-1/12 m-auto">favorite</span>
                <p class="w-1/12 my-auto">${duration}</p>
                <div class="w-1/12 my-auto text-custom-color optcontainer">
                    <i class="fa-solid fa-ellipsis fa-xl option"></i>
                    <div class="flex-col absolute bg-webheffect px-5 py-2 rounded-lg text-custom-color-song-font text-xs hidden dropdown">
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
generateTrackList();


let generateAllPlaylist = () => {
    let content = document.getElementById('playlist');
    // console.log(content.innerHTML)
    return content.innerHTML = allplaylist.map((x) => {
        let {name, acc, img} = x;
        return `
            <div class="fex flex-col text-sm mr-8 mb-5 hover:cursor-pointer">
                <img src="/assets/playlist-mg-assets/${img}" alt="Playlist image" class="h-44 rounded-md" >
                <p class="text-custom-color-song-font mt-1">${name}</p>
                <p class="text-custom-color-song-more">By ${acc}</p>
            </div>
        `
    }).join("")
}
generateAllPlaylist();

/* Play Shuffle Button */

let playbtn = document.getElementById('playbtn');
let shufflebtn = document.getElementById('shufflebtn');

playbtn.addEventListener('click',()=>{
    console.log("playing")
})
shufflebtn.addEventListener('click',()=>{
    console.log("shuffle")
})

/* For song hover */

// song > optcontainer > option, dropdown

let trackshovered = Array.from(document.getElementsByClassName('song'));

trackshovered.forEach(track => {
    let optcontainer = track.querySelector('.optcontainer');
    let option = optcontainer.querySelector('.option');
    let dropdown = optcontainer.querySelector('.dropdown');

    track.addEventListener('mouseover', () => {
        track.setAttribute('style','background-color: rgb(9, 36, 49,0.5);border-radius:50px;');
        option.setAttribute('style','color: #797979;');
    })

    track.addEventListener('mouseout', () => {
        track.setAttribute('style','background-color: #04151D;');
        option.setAttribute('style','color: #04151D;');  
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


