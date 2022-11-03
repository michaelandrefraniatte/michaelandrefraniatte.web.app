var idarray = [
               ["Death in Vegas", "UCtAq0v4W8MWVWvoNZND_0wA", "UUtAq0v4W8MWVWvoNZND_0wA"],
               ["Black Uhuru", "UCKaO8ruDg6f826oeB7h_AjA", "UUKaO8ruDg6f826oeB7h_AjA"],
               ["Nirvana", "UCFMZHIQMgBXTSxsr86Caazw", "UUFMZHIQMgBXTSxsr86Caazw"],
               ["Black Sabbath", "UCrx-X329UKv0Y06VhfpFVvw", "UUrx-X329UKv0Y06VhfpFVvw"],
               ["RadioIntense", "UCCWHSZ6VQPr7cnJAF8JbDzA", "UUCWHSZ6VQPr7cnJAF8JbDzA"],
               ["Miss Monique", "UClIIy-aQBXRi1OHupBcrjJw", "UUlIIy-aQBXRi1OHupBcrjJw"],
               ["PortisheadVEVO", "UCmHx0F6J4kkizDtHAi-uXEQ", "UUmHx0F6J4kkizDtHAi-uXEQ"],
               ["Portishead", "UCweAx0TIRdAylp6G1nviqbQ", "UUweAx0TIRdAylp6G1nviqbQ"],
               ["Massive Attack Vevo", "UCNgjBASMIxygr65gJs9IyUA", "UUNgjBASMIxygr65gJs9IyUA"],
               ["bj�rk", "UCFbRdRGijPR4oBjQ0fVCSmw", "UUFbRdRGijPR4oBjQ0fVCSmw"],
               ["The Crystal Method", "UCXcaxvT0nRNzTUyJ1z66jGw", "UUXcaxvT0nRNzTUyJ1z66jGw"],
               ["Lewis Bennett", "UC9KDRE38qCLfQFgXG6iYzcA", "UU9KDRE38qCLfQFgXG6iYzcA"],
               ["France 24", "UCCCPCZNChQdGa9EkATeye4g", "UUCCPCZNChQdGa9EkATeye4g"],
               ["Aim To Head Official", "UC1KJEk-EZMmDF9DJKMK5OCQ", "UU1KJEk-EZMmDF9DJKMK5OCQ"],
               ["Art of Minimal Techno Trip", "UCDf6reK_hHcz0d7KWBhmPhA", "UUDf6reK_hHcz0d7KWBhmPhA"]
              ];
var apikeylive = '';
var apikeypage1 = '';
var apikeypage2 = '';
var apikeypage3 = '';
var token = 'ya29.a0AfH6SMB6ABGMO0YwS-7lmfMZBf0DesErjKP4H7BzAEf-4sSra44L6GXhfz5T7LQ6jgeFTsvW_7BCfCrcmTpSttXI4CqU-eh1p3tYlBh5ieaK8gqbYcrhk8KNM80wUXQuJ0DJ-NtEqYi5XOpcxVvy8FQC83mDtamwJ20'
var menuIndex = 1;
var slideIndex = 1;
const obj = {};
var videoPlayer = {};
var sizescreenx = $(document).width();
var sizescreeny = $(document).height();
var videos = {};
var done = false;
var wd = 2;
var wu = 2;
var checkfolder = "";
var collapse = false;
const objordered = {};
const thumbnails = {};
const titles = {};
var scriptstarted = false;
var playerstarted = false;
const objchannelid = {};
const objvideoidislive = {};
var nextpagetoken = '';
var nomorevideo = false;

function changeTitle() {
    document.title = "Michael Franiatte Clean Youtube";
}

$.ajax({
    url: "https://www.youtube.com/iframe_api",
    dataType: "script",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    }
}).done(function() {
    changeTitle();
    if (!scriptstarted) {
        loadPlayer();
        scriptstarted = true;
    }
});

function loadPlayer() {
    window.onYouTubePlayerAPIReady = function() {
        if (!playerstarted) {
            getAllFilesFromFolders();
            playerstarted = true;
        }
    };
}

function setVideoSource() {
    try {
        var id = $(".video:visible").attr('id'); 
        var folder = $(".folder:visible").text();
        var str = id.replace(folder + "-", "https://www.youtube.com/watch?v=");
        var a = document.getElementById("download");
        a.href = str;
    }
    catch {
        return;
    }
}

function setVideoPlayOverlay() {
    try {
        var element = document.getElementsByClassName("thumbnailed");
        for (var i = 0; i < element.length; i++) {
            element[i].style.width = "100%";
            element[i].style.height = "100%"; 
        }
        $("img").removeClass("thumbnailed");
        var id = $(".video:visible").attr('id');
        var el = document.getElementById(id + "-Overlay");
        el.classList.add("thumbnailed");
        var elements = document.getElementsByClassName("overlaytitle");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.cssText = "height:7vh;color:#FFFFFF;";
        }
        var e = document.getElementById(id + "-OverlayTitle");
        e.style.cssText = "height:7vh;color:#FFFFFF;font-style:italic;";
    }
    catch {
        return;
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
    setVideoSource();
    setVideoPlayOverlay();
}

function plusMenu(n) {
    showMenu(menuIndex += n);
}

function showMenu(n) {
    var menu = document.getElementsByClassName("myMenu");
    if (n > menu.length) {
        menuIndex = 1;
    }
    if (n < 1) {
        menuIndex = menu.length;
    }
    for (var i = 0; i < menu.length; i++) {
        menu[i].style.display = "none";
    }
    menu[menuIndex-1].style.display = "block";
    setTimeout((function(){
        document.getElementById("navbar").style.top = "0";
        document.getElementById("overlay").style.top = "65vh";
        createOverlay();
        setVideoPlayOverlay();
    })
    , 500);
}

function getAllFilesFromFolders() {
    (async () => {
        for (let channel of idarray) {
            try {
                var param = "";
                var array = [];
                param = "channelId=" + channel[1];
                const responsel = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&" + param + "&eventType=live&type=video&key=" + apikeylive);
                const lives = await responsel.json();
                for (let live of lives.items) {
                    var videoid = live.id.videoId;
    	            array.push(videoid);
                    var videothumbnail = live.snippet.thumbnails.medium.url;
                    thumbnails[videoid] = videothumbnail;
                    var title = live.snippet.title;
                    titles[videoid] = title;
                    var namelist = channel[0];
                    objchannelid[namelist] = channel[1];
                    objvideoidislive[videoid] = true;
                }
                param = "playlistId=" + channel[2];
                const responsef = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&videoEmbeddable=true&maxResults=50&" + param + "&key=" + apikeypage1);
                const files = await responsef.json();
                for (let file of files.items) {
                    var videoid = file.snippet.resourceId.videoId;
    	            array.push(videoid);
                    var videothumbnail = file.snippet.thumbnails.medium.url;
                    thumbnails[videoid] = videothumbnail;
                    var title = file.snippet.title;
                    titles[videoid] = title;
                    try {
                        nextpagetoken = files.nextPageToken;
                        nomorevideo = false;
                    }
                    catch {
                        nomorevideo = true;
                    }
                }
                if (!nomorevideo) {
                    const responsenf = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&videoEmbeddable=true&maxResults=50&pageToken=" + nextpagetoken + "&" + param + "&key=" + apikeypage2);
                    const nfiles = await responsenf.json();
                    for (let file of nfiles.items) {
                        var videoid = file.snippet.resourceId.videoId;
    	                array.push(videoid);
                        var videothumbnail = file.snippet.thumbnails.medium.url;
                        thumbnails[videoid] = videothumbnail;
                        var title = file.snippet.title;
                        titles[videoid] = title;
                        try {
                            nextpagetoken = nfiles.nextPageToken;
                            nomorevideo = false;
                        }
                        catch {
                            nomorevideo = true;
                        }
                    }
                }
                if (!nomorevideo) {
                    const responsepf = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&videoEmbeddable=true&maxResults=50&pageToken=" + nextpagetoken + "&" + param + "&key=" + apikeypage3);
                    const pfiles = await responsepf.json();
                    for (let file of pfiles.items) {
                        var videoid = file.snippet.resourceId.videoId;
    	                array.push(videoid);
                        var videothumbnail = file.snippet.thumbnails.medium.url;
                        thumbnails[videoid] = videothumbnail;
                        var title = file.snippet.title;
                        titles[videoid] = title;
                    }
                }
            }
            catch { }
            var namelist = channel[0];
            obj[namelist] = array;
        }
        var arraykeys = [];
        var keys = Object.keys(obj);
        for (let key of keys) {
            arraykeys.push(key);
        }
        arraykeys.sort(function (a, b) {
            return a.localeCompare(b);
        });
        for (let arraykey of arraykeys) {
          objordered[arraykey] = obj[arraykey];
        }
        loadThumbnails();
        createMenu();
        createSlides();
     })();
}

function createPlayer(classid, x, y, videoid){
    window.YT.ready(function() {
        videoPlayer[videoid] = new YT.Player(classid, {
            width: "auto",
            height: y,
            videoId: videoid,
            playerVars: {
            },
            events: {  
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange, 
                'onError': onPlayerError
            }
        });  
    });
}

function onPlayerReady(event) {  
    event.target.setPlaybackQuality('small');  
    if (event.target.getDuration() <= 0) {
        slideIndex += 1;
        showSlides(slideIndex);
        var id = $(".video:visible").attr('id'); 
        var folder = $(".folder:visible").text();
        var str = id.replace(folder + "-", "");
        videoPlayer[str].playVideo();
    }
} 

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        slideIndex += 1;
        showSlides(slideIndex);
        var id = $(".video:visible").attr('id'); 
        var folder = $(".folder:visible").text();
        var str = id.replace(folder + "-", "");
        videoPlayer[str].playVideo();
    }
}

function onPlayerError(event) {
    slideIndex += 1;
    showSlides(slideIndex);
    var id = $(".video:visible").attr('id'); 
    var folder = $(".folder:visible").text();
    var str = id.replace(folder + "-", "");
    videoPlayer[str].playVideo();
}

function createMenu() {
    var keyNames = Object.keys(objordered);
    let htmlString = '';
    htmlString = `<div class="bg-light collaspse" style="display:float;position:absolute;float:left;left:10px;" onclick="listCollaspse();">
                    <i class="fa fa-bars"></i></div>
                    <a href='#' onclick="plusMenu(-1)" style="text-decoration:none;"><</a>`;
    for (let keyName of keyNames) {
        htmlString += 
        `<div class="myMenu">
            <a href='#' onclick="clickMenu()" class="folder" style="text-decoration:none;">`+ keyName +`</a>
        </div>`;
    }
    htmlString += `<a href='#' onclick="plusMenu(1)" style="text-decoration:none;">></a>
                    <a href="" class="bg-light" style="display:float;position:absolute;float:right;right:10px;" id="download">
                    <i class="fa fa-download"></i></a>`;
    $(".menushow-container").append(htmlString);
    var folders = (Object.keys(objordered).map(key => key));
    var index = 0;
    htmlString = ``;
    for (let folder of folders) {
    	    htmlString += `<a onclick="goToChannel(this)" data-folder="` + index + `" class="gotochannel">` + folder + `</a>`;
            index++;
    }
    $("#list").append(htmlString);
    showMenu(1);
}
 
function createSlides() {
    var folder = Object.keys(objordered)[0];
    var files = Object.values(objordered)[0];
    let htmlString = ``;
    for (let file of files) {
        if (objvideoidislive[file] == true)
        {
    	    htmlString += `<div style="top:10%;align-items:center;position:absolute;">` + folder + `</div>
                           <div class="mySlides" align="center">
                            <div class="item"> 
                            <iframe id="` + folder + `-` + file + `" class="video" src="https://www.youtube.com/embed/live_stream?channel=` + objchannelid[folder] + `" style="width:60%;height:70%;top:15%;left:20%;display:block;position:absolute;"></iframe>
                            <div class="centered" style="top:90%;align-items:center;position:absolute;">` + titles[file] + `</div>
                            </div>
                           </div>`;
         }
         else {
    	    htmlString += `<div style="top:10%;align-items:center;position:absolute;">` + folder + `</div>
                           <div class="mySlides" align="center">
                            <div class="item"> 
                            <div id="` + folder + `-` + file + `" class="video" style="width:60%;height:70%;top:15%;left:20%;display:block;position:absolute;"></div>
                            <div class="centered" style="top:90%;align-items:center;position:absolute;">` + titles[file] + `</div>
                            </div>
                           </div>`;
         }
    }
    htmlString += `<div>
                    <a class="prev" onclick="plusSlides(-1)" style="text-decoration:none;color:white;">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)" style="text-decoration:none;color:white;">&#10095;</a>
                   </div>`
    $(".slideshow-container").html(htmlString);
    for (let file of files) {
        if (objvideoidislive[file] != true) {
            createPlayer(folder + `-` + file, sizescreenx, sizescreeny, file);
        }
    }
    slideIndex = 1;
    showSlides(1);
 }

 function clickMenu() {
    var folder = $(".folder:visible").text();
    var files = objordered[folder];
    $(".slideshow-container").html("");
    let htmlString = ``;
    for (let file of files) {
        if (objvideoidislive[file] == true)
        {
    	    htmlString += `<div style="top:10%;align-items:center;position:absolute;">` + folder + `</div>
                           <div class="mySlides" align="center">
                            <div class="item"> 
                            <iframe id="` + folder + `-` + file + `" class="video" src="https://www.youtube.com/embed/live_stream?channel=` + objchannelid[folder] + `" style="width:60%;height:70%;top:15%;left:20%;display:block;position:absolute;"></iframe>
                            <div class="centered" style="top:90%;align-items:center;position:absolute;">` + titles[file] + `</div>
                            </div>
                           </div>`;
        }
        else {
        htmlString += `<div style="top:10%;align-items:center;position:absolute;">` + folder + `</div>
                        <div class="mySlides" align="center">
                        <div class="item"> 
                        <div id="` + folder + `-` + file + `" class="video" style="width:60%;height:70%;top:15%;left:20%;display:block;position:absolute;"></div>
                        <div class="centered" style="top:90%;align-items:center;position:absolute;">` + titles[file] + `</div>
                        </div>
                        </div>`;
        }
    }
    htmlString += `<div>
                    <a class="prev" onclick="plusSlides(-1)" style="text-decoration:none;color:white;">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)" style="text-decoration:none;color:white;">&#10095;</a>
                   </div>`
    $(".slideshow-container").html(htmlString);
    for (let file of files) {
        if (objvideoidislive[file] != true) {
            createPlayer(folder + `-` + file, sizescreenx, sizescreeny, file);
        }
    }
    slideIndex = 1;
    showSlides(1);
 }

function createOverlay() {
    var folder = $(".folder:visible").text();
    var folderindex = (Object.keys(objordered).map(key => key)).indexOf(folder);
    var fileindex = 0;
    if (folder != checkfolder) {
        checkfolder = folder;
        var files = objordered[folder];
        let htmlString = `<div class="container">
                             <div class="row row-eq-height">`;
        for (let file of files) {
    	     htmlString += `<a onclick="goToVideo(this)" data-folderindex="` + folderindex + `" data-fileindex="` + fileindex + `" class="goto">
                              <div class="col-xs-3" style="margin-top:3vh;">
                                <img class="align-middle" src="` + thumbnails[file] + `" id="` + folder + `-` + file + `-Overlay" style="height:100%;width:100%;">
                                <div class="text-center align-middle overlaytitle" id="` + folder + `-` + file + `-OverlayTitle" style="height:7vh;color:#FFFFFF;">` + titles[file] + `</div>
                              </div>
                            </a>`;
             fileindex++;
        }
        htmlString += `</div>
                      </div>`;
        $("#overlay").html(htmlString);
        document.getElementById("overlay").scrollTop = "0px";
    }
}

function goToVideo(el) {
    clickMenu();
    var fileindex = Number(el.dataset.fileindex);
    slideIndex += fileindex;
    showSlides(slideIndex);
}

function goToChannel(el) {
    var folderindex = Number(el.dataset.folder);
    menuIndex = folderindex + 1;
    showMenu(menuIndex);
}

function loadThumbnails() {
    var folders = Object.keys(objordered);
    for (let folder of folders) {
        var files = obj[folder];
        for (let file of files) {
            var img = new Image();
            img.src= thumbnails[file];
            img.addEventListener("load", function () {
            });
        }
    }
}

$(document).on("mousemove", function(event) {
    mouseOnTop(event.pageY);
});

function mouseOnTop(y) {
    if (wd == 1) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("overlay").style.top = "65vh";
        createOverlay();
    }
    if (wu == 1 & !collapse) {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("overlay").style.top = "100vh";
    }
    if (y < 50 | y > window.screen.availHeight - 280)
    {
	    if (wd <= 1) {
		    wd = wd + 1;
	    }
	    wu = 0;
    }
    else
    {
	    if (wu <= 1) {
		    wu = wu + 1;
	    }
	    wd = 0;
    }
}

function listCollaspse() {
    if (!collapse) {
        collapse = true;
        document.getElementById("list").style.display = "inline-block";
    }
    else {
        collapse = false;
        document.getElementById("list").style.display = "none";
    }
}