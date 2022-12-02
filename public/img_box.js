var bg_color_img_box = 'rgba(0,0,0,0.9)'
var allow_hide_scroll_img_box = 'yes'
var use_fade_inout_img_box = 'no'
var speed_img_box = 0.08
var z_index_dv_img_box = 999
var vopa_img_box, idpopup_img_box
var hwin_img_box = window.innerHeight
var wwin_img_box = window.innerWidth
var himg_img_box, padtop_img_box, idfadein_img_box
var img_img_box = new Image()
var imagesource = ''
var imageinc = 0
var imagearray = []
var crtdv_img_box = document.createElement('div')
crtdv_img_box.id = 'img_box'
document.getElementsByTagName('body')[0].appendChild(crtdv_img_box)
idpopup_img_box = document.getElementById("img_box")
idpopup_img_box.style.top = 0
idpopup_img_box.style.left = 0
idpopup_img_box.style.opacity = 0
idpopup_img_box.style.width = '100%'
idpopup_img_box.style.height = '100%'
idpopup_img_box.style.display = 'none'
idpopup_img_box.style.position = 'fixed'
idpopup_img_box.style.cursor = 'pointer'
idpopup_img_box.style.textAlign = 'center'
idpopup_img_box.style.zIndex = z_index_dv_img_box
idpopup_img_box.style.backgroundColor = bg_color_img_box
function img_box(self) {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    var namepic_img_box = typeof self === 'string' ? self : self.src
    imagesource = namepic_img_box
    vopa_img_box = 0
    img_img_box.src = namepic_img_box
    img_img_box.onload = function() {
        himg_img_box = img_img_box.height
        wimg_img_box = img_img_box.width
        idpopup_img_box.innerHTML = '<img src=' + namepic_img_box + '>'
        if (wimg_img_box > wwin_img_box) {
            idpopup_img_box.getElementsByTagName('img')[0].style.width = '90%'
        }
        else if (himg_img_box > hwin_img_box) {
            idpopup_img_box.getElementsByTagName('img')[0].style.height = '90%'
            himg_img_box = hwin_img_box * 90 / 100
        }
        if (himg_img_box < hwin_img_box) {
            padtop_img_box = (hwin_img_box / 2) - (himg_img_box / 2)
            idpopup_img_box.style.paddingTop = padtop_img_box + 'px'
        }
        else {
            idpopup_img_box.style.paddingTop = '0px'
        }

        if (allow_hide_scroll_img_box == 'yes') {
            document.body.style.overflow = 'hidden'
        }
        idpopup_img_box.style.display = 'block'
    }
    if (use_fade_inout_img_box == 'yes') {
        idfadein_img_box = setInterval(function() {
            if (vopa_img_box <= 1.1) {
                idpopup_img_box.style.opacity = vopa_img_box
                vopa_img_box += speed_img_box
            }
            else {
                idpopup_img_box.style.opacity = 1
                clearInterval(idfadein_img_box)
            }
        }, 10)
    }
    else {
        idpopup_img_box.style.opacity = 1
    }
}
idpopup_img_box.onclick = function() {
	    if (imagesource == 'img/myfavours-main.png' | imagesource == 'img/myfavours-down.png' | imagesource == 'img/myfavours-crash.png' | imagesource == 'img/myfavours-mp4.png')
	    {
		imagearray = ['img/myfavours-main.png', 'img/myfavours-down.png', 'img/myfavours-crash.png', 'img/myfavours-mp4.png']
	    }
	    else if (imagesource == 'img/localstreamplay-main.png' | imagesource == 'img/localstreamplay-host.png' | imagesource == 'img/localstreamplay-script.png')
	    {
		imagearray = ['img/localstreamplay-main.png', 'img/localstreamplay-host.png', 'img/localstreamplay-script.png']
	    }
	    else if (imagesource == 'img/faceto-main.png' | imagesource == 'img/faceto-message.png' | imagesource == 'img/faceto-list.png' | imagesource == 'img/faceto-search.png' | imagesource == 'img/faceto-modal.png')
	    {
		imagearray = ['img/faceto-main.png', 'img/faceto-message.png', 'img/faceto-list.png', 'img/faceto-search.png', 'img/faceto-modal.png']
	    }
	    else if (imagesource == 'img/playmedia-main.png' | imagesource == 'img/playmedia-audio.png' | imagesource == 'img/playmedia-book.png' | imagesource == 'img/playmedia-map.png' | imagesource == 'img/playmedia-menu.png' | imagesource == 'img/playmedia-shot.png' | imagesource == 'img/playmedia-song.png' | imagesource == 'img/playmedia-video.png')
	    {
		imagearray = ['img/playmedia-main.png', 'img/playmedia-audio.png', 'img/playmedia-book.png', 'img/playmedia-map.png', 'img/playmedia-menu.png', 'img/playmedia-shot.png', 'img/playmedia-song.png', 'img/playmedia-video.png']
	    }
	    else if (imagesource == 'img/playtube-main.png' | imagesource == 'img/playtube-menu.png' | imagesource == 'img/playtube-play.png' | imagesource == 'img/playtube-api.png')
	    {
		imagearray = ['img/playtube-main.png', 'img/playtube-menu.png', 'img/playtube-play.png', 'img/playtube-api.png', ]
	    }
	    else if (imagesource == 'img/daynote-main.png' | imagesource == 'img/daynote-2024.png' | imagesource == 'img/daynote-edit.png' | imagesource == 'img/daynote-memento.png')
	    {
		imagearray = ['img/daynote-main.png', 'img/daynote-2024.png', 'img/daynote-edit.png', 'img/daynote-memento.png']
	    }
	    else if (imagesource == 'img/webviewer-main.png' | imagesource == 'img/webviewer-playaudio-autocompletion.png' | imagesource == 'img/webviewer-playaudio-editoff.png' | imagesource == 'img/webviewer-playaudio.png')
	    {
		imagearray = ['img/webviewer-main.png', 'img/webviewer-playaudio-autocompletion.png', 'img/webviewer-playaudio-editoff.png', 'img/webviewer-playaudio.png']
	    }
	    else if (imagesource == 'img/otep-checkers.png' | imagesource == 'img/otep-chess.png' | imagesource == 'img/otep-chinese-checkers.png' | imagesource == 'img/otep-othello.png' | imagesource == 'img/otep-power4.png')
	    {
		imagearray = ['img/otep-checkers.png', 'img/otep-chess.png', 'img/otep-chinese-checkers.png', 'img/otep-othello.png', 'img/otep-power4.png']
	    }
	    else if (imagesource == 'img/gamergate-main.png' | imagesource == 'img/gamergate-loop.png' | imagesource == 'img/gamergate-end.png' | imagesource == 'img/gamergate-edit.png')
	    {
		imagearray = ['img/gamergate-main.png', 'img/gamergate-loop.png', 'img/gamergate-end.png', 'img/gamergate-edit.png']
	    }
	    else if (imagesource == 'img/wiimotetheory-main.png' | imagesource == 'img/wiimotetheory-settings.png')
	    {
		imagearray = ['img/wiimotetheory-main.png', 'img/wiimotetheory-settings.png']
	    }
	    else if (imagesource == 'img/joyconstheory-main.png' | imagesource == 'img/joyconstheory-settings.png')
	    {
		imagearray = ['img/joyconstheory-main.png', 'img/joyconstheory-settings.png']
	    }
	    else if (imagesource == 'img/kme-cancelreload.png' | imagesource == 'img/kme-doubleclickreload.png' | imagesource == 'img/kme-keepaimdownsight.png' | imagesource == 'img/kme-mousemovetokeys.png' | imagesource == 'img/kme-pushreload.png' | imagesource == 'img/kme-shockmouse.png')
	    {
		imagearray = ['img/kme-cancelreload.png', 'img/kme-doubleclickreload.png', 'img/kme-keepaimdownsight.png', 'img/kme-mousemovetokeys.png', 'img/kme-pushreload.png', 'img/kme-shockmouse.png']
	    }
	    else if (imagesource == 'img/playandlisten-client.png' | imagesource == 'img/playandlisten-main.png')
	    {
		imagearray = ['img/playandlisten-client.png', 'img/playandlisten-main.png']
	    }
	    else if (imagesource == 'img/eosresol-main.png' | imagesource == 'img/eosresol-reaction1.png' | imagesource == 'img/eosresol-reaction2.png' | imagesource == 'img/eosresol-reaction3.png')
	    {
		imagearray = ['img/eosresol-main.png', 'img/eosresol-reaction1.png', 'img/eosresol-reaction2.png', 'img/eosresol-reaction3.png']
	    }
	    else if (imagesource == 'img/pgm-main.png' | imagesource == 'img/pgm-ir.png' | imagesource == 'img/pgm-classic.png' | imagesource == 'img/pgm-extra.png')
	    {
		imagearray = ['img/pgm-main.png', 'img/pgm-ir.png', 'img/pgm-classic.png', 'img/pgm-extra.png']
	    }
	    else if (imagesource == 'img/presentation-1.png' | imagesource == 'img/presentation-2.png' | imagesource == 'img/presentation-3.png' | imagesource == 'img/presentation-4.png')
	    {
		imagearray = ['img/presentation-1.png', 'img/presentation-2.png', 'img/presentation-3.png', 'img/presentation-4.png']
	    }
	    else if (imagesource == 'img/onsale-1.png' | imagesource == 'img/onsale-2.png' | imagesource == 'img/onsale-3.png' | imagesource == 'img/onsale-4.png')
	    {
		imagearray = ['img/onsale-1.png', 'img/onsale-2.png', 'img/onsale-3.png', 'img/onsale-4.png']
	    }
	    else if (imagesource == 'img/fta-script.png' | imagesource == 'img/fta-keyboard.png' | imagesource == 'img/fta-mouse.png' | imagesource == 'img/fta-controller.png')
	    {
		imagearray = ['img/fta-script.png', 'img/fta-keyboard.png', 'img/fta-mouse.png', 'img/fta-controller.png']
	    }
	    else if (imagesource == 'img/bc-router.png' | imagesource == 'img/bc-server.png')
	    {
		imagearray = ['img/bc-router.png', 'img/bc-server.png']
	    }
	    else if (imagesource == 'img/arva-monitor.png' | imagesource == 'img/arva-main.png')
	    {
		imagearray = ['img/arva-monitor.png', 'img/arva-main.png']
	    }
	    else if (imagesource == 'img/tt-main.png' | imagesource == 'img/tt-add.png')
	    {
		imagearray = ['img/tt-main.png', 'img/tt-add.png']
	    }
	    else if (imagesource == 'img/mo-main.png' | imagesource == 'img/mo-xc.png')
	    {
		imagearray = ['img/mo-main.png', 'img/mo-xc.png']
	    }
	    else if (imagesource == 'img/encryptedpages-main.png' | imagesource == 'img/pp-main.png')
	    {
		imagearray = ['img/encryptedpages-main.png', 'img/pp-main.png']
	    }
	    else if (imagesource == 'img/dc-main.png' | imagesource == 'img/dc-managed.png')
	    {
		imagearray = ['img/dc-main.png', 'img/dc-managed.png']
	    }
	    else if (imagesource == 'img/audiomerger-main.png' | imagesource == 'img/audiospliter-main.png')
	    {
		imagearray = ['img/audiomerger-main.png', 'img/audiospliter-main.png']
	    }
	    else if (imagesource == 'img/wjp-main.png' | imagesource == 'img/wjr-main.png')
	    {
		imagearray = ['img/wjp-main.png', 'img/wjr-main.png']
	    }
	    else
	    	imagearray = []
	    imageinc++
	    if (imageinc >= imagearray.length) {
    		document.getElementsByTagName('html')[0].style.overflowY = 'visible'
                imageinc = 0
            	var idfadeout_img_box = setInterval(function() {
                	if (vopa_img_box >= 0) {
                	    idpopup_img_box.style.opacity = vopa_img_box
                	    vopa_img_box -= speed_img_box
                	} else {
                	    idpopup_img_box.style.opacity = 0
                	    clearInterval(idfadeout_img_box)
                	    idpopup_img_box.style.display = 'none'
                	    idpopup_img_box.innerHTML = ''
                	    document.body.style.overflow = 'visible'
                	    vopa_img_box = 0
                	}
            	}, 10)
	    }
	    else
	    	img_box(imagearray[imageinc])
}