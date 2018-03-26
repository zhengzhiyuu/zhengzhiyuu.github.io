//timer

setTimeout(function () {
    document.getElementsByClassName('top')[0].style.display = 'block'
}, 100)

// function

function returnTop() {
    window.scroll(0, 0);
}


function changeImgUrl(el, be, af) {
    var imgItme = document.getElementsByClassName(el);
    var imgUrlBf = be;
    var imgUrlAf = af;
    for (var i = 0; i < imgItme.length; i++) {
        (function (i) {
            imgItme[i].children[0].addEventListener('mouseover', function () {
                imgItme[i].children[0].setAttribute('src', imgUrlAf);
            })
            imgItme[i].children[0].addEventListener('mouseout', function () {
                if (i === 0) {
                    imgItme[i].children[0].setAttribute('src', imgUrlAf);
                } else {
                    imgItme[i].children[0].setAttribute('src', imgUrlBf);
                }
            })
        })(i)
    }
    // 此代码不兼容ie
    // Array.from(imgItme).forEach((element, index) => {
    //     element.addEventListener('mouseover', () => {
    //         element.children[0].setAttribute('src', imgUrlAf);
    //     })
    //     element.addEventListener('mouseout', () => {
    //         if (index === 0) {
    //             element.children[0].setAttribute('src', imgUrlAf);
    //         } else {
    //             element.children[0].setAttribute('src', imgUrlBf);
    //         }
    //     })
    // });
}

function getBroswer(){
    var sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/edge\/([\d.]+)/)) ? sys.edge = s[1] :
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;

    if (sys.edge) return { broswer : "Edge", version : sys.edge };
    if (sys.ie) return { broswer : "IE", version : sys.ie };
    if (sys.firefox) return { broswer : "Firefox", version : sys.firefox };
    if (sys.chrome) return { broswer : "Chrome", version : sys.chrome };
    if (sys.opera) return { broswer : "Opera", version : sys.opera };
    if (sys.safari) return { broswer : "Safari", version : sys.safari };
    
    return { broswer : "", version : "0" };
}

//style

var workFirstFilterEl = document.getElementsByClassName('img-filter')[0];
var workFirstWorkAddEl = document.getElementsByClassName('work-add')[0];
var workFirstWorkText = document.getElementsByClassName('wirk-itme-text')[0];

workFirstFilterEl.style.display = 'none';
workFirstWorkAddEl.style.display = 'block';
workFirstWorkText.style.color = '#37b6a9';

var broswer = getBroswer().broswer;
var version = getBroswer().version;
    if (broswer == 'IE') {
        document.getElementsByClassName('s')[0].style.top = '9.5px';
    }else if(broswer == 'Edge') {
        document.getElementsByClassName('s')[0].style.top = '9.5px';
    }else if(broswer == 'Chrome') {
        document.getElementsByClassName('s')[0].style.top = '8.5px';
    }