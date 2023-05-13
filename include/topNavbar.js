class topNavbar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback(){
        this.innerHTML = `
        <!-- TOP NAVBAR -->
            <div class="mb-5 justify-start sticky top-0 flex flex-row items-center py-1 md:mb-0 bg-custom-color bg-opacity-95 md:justify-end md:pr-16 md:pb-3 md:pt-3 z-50">
                <!-- LOGO -->
                <div class="pl-10 w-1/2 justify-start mt-2">
                    <a href="#" class="block justify-start lg:hidden">
                        <img src="/assets/wavesLogo.png" class="w-16 h-12" alt="Logo">
                    </a>
                </div>

                <!-- LEFT ITEMS  -->
                <div class="w-full justify-end flex flex-row space-x-5 items-center pr-5 md:pr-0 my-2">
                    <a href="#">
                        <svg class="text-white fill-current w-6 h-7 hover:text-custom-color-navbar-icons-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                        </svg>
                    </a>
                    <!-- <a href="#">
                        <svg class="text-white fill-current w-6 h-7 hover:text-custom-color-navbar-icons-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                        </svg>
                    </a> -->

                    <div class="flex md:hidden w-12 h-12 bg-custom-color-sidebar-brown justify-center items-center rounded-full">
                        <a href="#" class="block md:hidden">
                         <img class="w-10 h-10 rounded-full" src="/assets/addplaylist-assets/profilesample.jpg" alt="user">
                        </a>
                    </div>

                    <!--Profile button-->
                    <div id="dropdown-button" class="hidden md:flex -mb-1.5 dropdown"> 
                        <button  class="bg-custom-color-song-button hover:bg-custom-color-navbar-icons-hover text-white text-base rounded-full px-4 py-0.5 mb-0 inline-flex items-center" > 
                            <img src="/assets/song-assets/profilesample.jpg" alt="profile pic" class="rounded-full h-10 w-10"> 
                            <span class="ml-3">Profile</span> 
                            <svg id="dropdown-icon" class="w-7 h-7 text-black fill-current mt-1.5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                            </svg>
                        </button> 
                        <!--profile dropdown-->                
                        <ul id="dropdown-menu" class="absolute hidden text-custom-color-song-font w-40 pt-12 ml-1"> 
                            <li><a class="rounded-t-2xl bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 block whitespace-no-wrap" href="#">Account</a></li> 
                            <li><a class="bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 block whitespace-no-wrap" href="#">Profile</a></li> 
                            <li><a class="bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 block whitespace-no-wrap" href="#">Settings</a></li> 
                            <li><a class="bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 block whitespace-no-wrap" href="#">Support</a></li>
                            <hr class="bg-black">
                            <li><a class="rounded-b-2xl bg-custom-color-song-button hover:bg-custom-color-song-hover py-2 px-4 block whitespace-no-wrap" href="#">Logout</a></li> 
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('navbar-component', topNavbar);
