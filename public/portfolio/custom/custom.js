var valsection = "";
var valdisplaysection = "";
var userHasScrolled = false;

$(function() {

    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
        userHasScrolled = true;
        valdisplaysection = valsection.prop('id');
        $('#sidebar, #content').toggleClass('active');
	    setTimeout(setUserScroll, 300);
    });

    //Smooth scrolling to page anchor on click
    $("a[href*='#']:not([href='#'])").click(function() {
        if (location.hostname == this.hostname && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
	        valsection = anchor;
            if (anchor.length) {
                $("html, body").animate({ scrollTop: anchor.offset().top }, 1000);
            }
        }
    });

    //ScrollSpy
    jQuery(window).scroll(checkActiveSection);
    jQuery(document).ready(checkActiveSection);

});

function checkActiveSection() {
    setTimeout(enableActiveSection, 50);
}

window.onscroll = function (e) {
    if (userHasScrolled) {
	    navigate();
    }
}

function setUserScroll() {
    userHasScrolled = false;
}

function navigate() {
    var el = document.getElementById(valdisplaysection);
    $("html, body").scrollTop(el.offsetTop);
}

function enableActiveSection() {
    var fromTop = jQuery(window).scrollTop();
    jQuery('.hr').each(function(){
        var sectionOffset = jQuery(this).offset();
        if (sectionOffset.top <= fromTop + 10) {
		    valsection = $(this);
		    jQuery('#navbar li a').addClass('text-dark');
		    jQuery('#navbar li a').addClass('bg-light');
		    jQuery('#navbar li a').removeClass('text-light');
		    jQuery('#navbar li a').removeClass('bg-dark');
		    jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').removeClass('text-dark');
		    jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').removeClass('bg-light');
		    jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').addClass('text-light');
		    jQuery('#navbar li[data-id="' + jQuery(this).data('id') + '"] a').addClass('bg-dark');
        }
    });
}

//Type Writer
var i = 0;
var speed = 100;
var j = 0;
var txt = 'Creative';
var newtxt = '';
var txtarray = ["Creative", "Imaginative", "Worker", "Developer"];
var next = 1;

function typeWriter() {
    var htmlString = '';
    if (i < txt.length & j == 0) {
        document.getElementById("typewrite").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    if (i < txt.length & j == 1) {
        document.getElementById("typewrite").innerHTML = txt;
        i++;
        setTimeout(typeWriter, speed);
    }
    if (i < txt.length & j == 2) {
        newtxt = removeByIndex(newtxt, txt.length - i - 1)
        document.getElementById("typewrite").innerHTML = newtxt;
        i++;
        setTimeout(typeWriter, speed);
    }
    if (i >= txt.length) {
        i = 0;
        j++;
        newtxt = txt;
    }
    if (j >= 3) {
        j = 0;
        txt = txtarray[next];
        next++;
        if (next >= txtarray.length) {
            next = 0;
        }
    }
}

function removeByIndex(str,index) {
    return str.slice(0, index) + str.slice(index + 1);
}

$(function() {
    typeWriter();
});

//Print
function printHTML() {
    $('#sidebarCollapse').click();
    setTimeout(function(){ window.print(); }, 1500);
}