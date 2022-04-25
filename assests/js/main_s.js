//===========================================GLOBAL VARIABLE
var
    persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
var TownId = -1;
var TownIds = ["1", "2", "3"];
var DeviceOS = -1;
var messaging;
var loadedModal = false;
var isLogin;
var notifShowed = 0; 
var titlePage = '';
var Id;
var clipboardsharelink;
var loadcategory = 0;
//==========================================================================================================================
window.addEventListener("scroll", function (event) {
    var viewportHeight = $(window).height();
    var footerTop = $('footer.Footer').position().top - viewportHeight;
    var top = this.scrollY,
        left = this.scrollX;
    if (top > 30) {
        $('header').addClass('fixdedHeader');
        //$('.playerel #container').addClass('fixdedcontainerplayer');
        //var ht = $('.fixdedcontainerplayer').height();
        //$('.playerel .info-video').addClass('fixdedinfovideo').css('top', ht + 30);
    }
    else {
        $('header').removeClass('fixdedHeader');
        //$('.playerel #container').removeClass('fixdedcontainerplayer');
        //$('.playerel .info-video').removeClass('fixdedinfovideo');
    }

    if (top > 280) {
        $('.gototop').fadeIn();
        if ($('.blog-option').hasClass('showedoption') === false) {

        }
    }
    else if (top < 280) {
        $('.gototop').fadeOut();
    }

    if (top > 50) {
        if ($('.blog-option').hasClass('showedoption') === false) {
            $('.playerel div#container').css('height', 350).css('opacity', 0);
            $('.playerel div#container').css('height', $('.playerel div#container video').height() + 2).css('opacity', 1).addClass('fixedvideo');
            $('.playerel').addClass('fixedvideo');
            $('.realted-tags-video').addClass('fixedvideo').css('top', $('.playerel div#container video').height());
            $('.playerel #anothercontainer').css('margin-top', $('.playerel div#container video').height() + 2);
        }
    }
    else if (top < 50) {
        $('.gototop').fadeOut();
        $('.playerel div#container').css('height', '').removeClass('fixedvideo');
        $('.playerel').removeClass('fixedvideo');
        $('.playerel #anothercontainer').css('margin-top', '');
        $('.realted-tags-video').removeClass('fixedvideo').css('top', '');
    }


    if (footerTop < top) {
        $('Footer').empty().append('<div class="col-12"> <img width="60" height="60" alt="برقکارآن :: رسانه تصویری" src="/assests/common/img/blog/logobv.png"></div><div class="col-12"><h2>خلاقیت و نوآوری رو می&zwnj;تونی اینجا پیدا کنی</h2></div><div class="col-12"><ul class="footer-sociallinks"><li><a target="_blank" href="https://www.instagram.com/barghkaron"><i class="icon-telegram"></i></a></li><li><a target="_blank" href="https://www.telegram.me/barghkaron"><i class="icon-instagram"></i></a></li><li><a target="_blank" href="https://www.twitter.com/barghkaron"><i class="icon-twitter"></i></a></li></ul></div><div class="col-12"><ul class="footer-otherlink"><li><a href="/Order">سفارش خدمات برقکاری</a></li><li><a href="/Blog">وبلاگ برقکارآن</a></li><li><a href="/?q=RegisterExpert">استخدام برقکار</a></li><li><a href="/Hamkaran">درخواست همکاری</a></li></ul></div><div class="col-12 footer-copyright"><div class="row justify-content-center"><div class="col-12"> <span>استفاده از مطالب وبلاگ برقکارآن برای مقاصد غیرتجاری با ذکر نام وبلاگ برقکارآن و لینک به منبع بلامانع است.</span></div><div class="col-12"><p class="footer-madewith">Made with</p><div class="footer-heartbeatnewpnl"><div class="footer-heartbeatnew"><div class="heart">`</div></div></div><p class="footer-madewith">by BarghkarOn</p></div><div class="col-12"><p>© 2017-2021 BarghkarOn. All rights reserved.</p></div></div></div>');
    }
    else if (footerTop > top) {
        $('Footer').empty();
        $('.gototop').show();
    }


    if (top > 280 && footerTop < top) {
        $('.gototop').hide();
        $('.playerel div#container').hide();
    }
    else {
        $('.playerel div#container').show();
        $('.gototop').show();
    }
});
$(document).on('click', function (e) {
    if ($(e.target).closest(".additional-control-sharecontent").length === 0 && $(e.target).closest("ul.intraction-user li:nth-child(3)").length === 0 && $(e.target).closest("ul.additonalctrl_topbtns li[data-click='share']").length === 0) {
        closeshare();
    }
});

//===========================================GLOBAL FUNCTIONS
function getUrlVars() {
    for (var e, a = [], s = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), t = 0; t < s.length; t++)
        e = s[t].split("="),
            a.push(e[0]),
            a[e[0]] = e[1];
    return a
}
function getCookie(e) {
    var a = ("; " + document.cookie).split("; " + e + "=");
    if (2 == a.length)
        return a.pop().split(";").shift()
}
function DisablePage() {
    $("body").addClass("disabledbutton")
}
function EnablePage() {
    $("body").removeClass("disabledbutton")
}
var sto;
function ShowMsg(type, Text) {
    clearTimeout(sto);
    //event.preventDefault();
    //$("#ShowMsg").show();
    //$("#ShowMsg").fadeIn().delay(2000).fadeOut();
    $("#ShowMsg span:first").text(Text);
    $("#ShowMsg").removeClass();
    if (type === 0) {
        $("#ShowMsg").addClass("ShowSuccessMsg");
    }
    if (type === 1) {
        $("#ShowMsg").addClass("ShowErrorMsg");
    }
    if (type === 2) {
        $("#ShowMsg").addClass("ShowWarningMsg");
    }
    if (type === 3) {
        $("#ShowMsg").addClass("ShowInfoMsg");
    }
    //$("#ShowMsg").show();
    //$("#ShowMsg").slideDown(180);
    //$("#ShowMsg").fadeIn().delay(50000).fadeOut();
    //$("#ShowMsg").show();
    //$("#ShowMsg").slideDown(180);
    sto = setTimeout(function () {
        clearTimeout(sto);
        $("#ShowMsg").removeClass();
    }, 5000);
}
function HideMsg() {
    clearTimeout(sto);
    $("#ShowMsg").removeClass();
}
$(document).on('click', '.closemsg', function () {
    HideMsg();
});
function showwait() {
    HideScrollBody();
    $('#backgroundLoading').fadeIn();
    $('#bgloadingpnl').fadeIn();
    $('.progress').show();
}
function hidewait() {
    ShowScrollBody();
    $('#backgroundLoading').fadeOut();
    $('#bgloadingpnl').fadeOut();
    $('.progress').hide();
}
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
function check(s) {
    var PersianOrASCII = /[آ-ی]|([a-zA-Z])/;
    if ((m = s.match(PersianOrASCII)) !== null) {
        if (m[1]) {
            return false;
        }
        else { return true; }
    }
    else { return true; }
}
function decimaltonumber(e) {
    if (null != e) return e.toLocaleString(void 0, {
        minimumFractionDigits: 0
    })
}
function fixedEncodeURI(e) {
    return encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")
}
function escapeRegExp(e) {
    return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
}
function replaceAll(e, a, t) {
    return e.replace(new RegExp(escapeRegExp(a), "g"), t)
}
function fixNumbers(str) {
    if (typeof str === 'string') {
        for (var i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }
    return str;
};
function persianPhoneNumber(phoneNumber) {
    phoneNumber = fixNumbers(phoneNumber);
    var phoneReg = /(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;
    return phoneReg.test(phoneNumber);
}
function ShowScrollBody() {
    $("body").removeClass("hidescroll")
}
function HideScrollBody() {
    $("body").addClass("hidescroll");
}
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
function LoadIntroHeader() {
    var div = '<div class="intro"><img class="intro_mob_1" src="/assests/common/img/intro/2.svg" alt="برقکارآن" width="114" height="143"> <img class="intro_mob_2" src="/assests/common/img/intro/2.svg" alt="برقکارآن" width="114" height="143"> <img class="intro_mob_3" src="/assests/common/img/intro/3.svg" alt="برقکارآن" width="114" height="143"> <img class="intro_mob_4" src="/assests/common/img/intro/4.svg" alt="برقکارآن" width="114" height="143"> <img class="intro_mob_5" src="/assests/common/img/intro/5.svg" alt="برقکارآن" width="114" height="143"> <img class="intro_mob_6" src="/assests/common/img/intro/6.svg" alt="برقکارآن" width="114" height="143"> <img class="intro_mob_7 opc-100-intro_mob_7" src="/assests/common/img/intro/7.svg" alt="برقکارآن" width="114" height="143"> <img class="intro_mob_7-2 opc-100-intro_mob_7" src="/assests/common/img/intro/bgHandMobile.svg" alt="برقکارآن" width="114" height="143"><img class="intro_mob_8" src="/assests/common/img/intro/8.svg" alt="برقکارآن" width="114" height="143" /><img class="intro_mob_9" src="/assests/common/img/intro/9.svg" alt="برقکارآن" width="114" height="143" /><img class="intro_mob_10" src="/assests/common/img/intro/10.svg" alt="برقکارآن" width="114" height="143" /><img class="intro_mob_11" src="/assests/common/img/intro/11.svg" alt="برقکارآن" width="114" height="143" /><img class="intro_mob_12" src="/assests/common/img/intro/12.svg" alt="برقکارآن" width="114" height="143" /><img class="intro_mob_13" src="/assests/common/img/intro/13.svg" alt="برقکارآن" width="114" height="143" /></div>';
    $('#ActiveCodeForm .modal-header').append(div);
    $('#LoginModal .modal-header').append(div);
    loadedModal = true;
}
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
//==========================================================================================================================
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
//===========================================Page Function
var isfixed = 0;
$(document).ready(function () {
    Id = $('[id*="hdnPostId"]').val();
    $('footer.Footer').empty();
    LoadFireAndRayChat();
    DeviceOS = getMobileOperatingSystem();
    if (DeviceOS === 'Android') {
        userToken = localStorage.getItem('pushToken');
        if (userToken != null && userToken != 'null' && userToken != '') {
            $('.showNotificationModal').hide();
            setTimeout(function () {
                requestPermissions();
            }, 13000);
        }
        if (localStorage.getItem("notifShowed") === null || localStorage.getItem("notifShowed") === "0") {
            setTimeout(function () {
                $("#NotificationRequestModal").modal('toggle');
                localStorage.setItem("notifShowed", "1");
                notifShowed = 1;
            }, 9000);
        }
    }
    else {
        $('.showNotificationModal').remove();
    }
    loadMultipleCss();
    LoadContentPost();
    hidewait();
    $('.blog-option').css('right', window.innerWidth * -1);

    $('.user-area').css('right', window.innerWidth * -1);

    $('header').delegate("a.icon-barghkaron-blog-option", "click", function () {
        if ($("header .blog-option").hasClass("showedoption")) {
            showraychat();
            $('.blog-option').removeClass('showedoption');
            $('.icon-barghkaron-blog-option').removeClass('showed');
            hidebackdrop();
            ShowScrollBody();
            $('.gototop').fadeIn();
            if (isfixed == 1)
                $('.playerel div#container').addClass('fixedvideo');
        }
        else {
            $('.blog-option').addClass('showedoption');
            $('.icon-barghkaron-blog-option').addClass('showed');
            showbackdrop();
            hideraychat();
            HideScrollBody();
            $('.gototop').fadeOut();
            if ($('.playerel div#container').hasClass('fixedvideo')) {
                isfixed = 1;
                $('.playerel div#container').removeClass('fixedvideo');
            }
            else
                isfixed = 0;

        }
    });
    //////////////////////
    $('header').delegate("a.icon-barghkaron-blog-user", "click", function () {
        if (isLogin === 1) {
            if ($("header .user-area").hasClass("showuserarea")) {
                showraychat();
                $('.user-area').removeClass('showuserarea');
                $('.icon-barghkaron-blog-user').removeClass('showed');
                showbackdrop();
            }
            else {
                $('.user-area').addClass('showuserarea');
                $('.icon-barghkaron-blog-user').addClass('showed');
                showbackdrop();
                hideraychat();
            }
        }
        else {
            LoginForm();
        }
    });


    $('header').delegate("a.icon-barghkaron-blog-search", "click", function () {
        $('.blog-search').addClass('blog-search-show');
        HideScrollBody();
        $('.bg-blog-sidebar').show();
        var GABCM = '/api/BlogPosts/GABCM';
        $('header li.hot-tags').empty();
        $.getJSON(GABCM)
            .done(function (data) {
                categories = data;
                var lis = '';
                for (var i = 0; i < data.length; i++) {
                    lis = lis + '<li><a href="/media/category/' + data[i].EnglishName + '">' + data[i].PersianName + '</a></li>';
                }
                $('.blog-option ul li.category').empty().append('<span>دسته بندی</span>').append(lis);
                var hottags = '';
                for (var j = 0; j < data[0].HotTags.length; j++) {
                    hottags = hottags + '<a href="/media/tag/' + data[0].HotTags[j].Name + '">' + data[0].HotTags[j].Name + '</a>';
                }
                $('header li.hot-tags').empty().append('<img src="/assests/common/img/blog/hoticon.png"><p>#</p>' + hottags);
                $('#txtblogsearch').trigger('focus');
            });
    });

    $('.latesttopics-item-otherdetails').delegate("a.latesttopics-item-icon-bookmark", "mouseover", function () {
        $(this).find('ul.share-item').addClass('share-item-show');
        $(this).addClass('showsharebtns');
    });

    $('.latesttopics-item-otherdetails').delegate("a.latesttopics-item-icon-bookmark", "mouseleave", function () {
        $(this).find('ul.share-item').removeClass('share-item-show');
        $(this).removeClass('showsharebtns');
    });

    $('#txtBelongingSearch').on("keypress", function () {
        var mainVal = $(this).val();
        if (mainVal.length > 2) {
            $('.progressSearch').show();
            $('.Belonging-List-Result').empty();
            $('#Belonging-lg span.Title-Result-Search').text('درحال جستجو');
            delay(function () { SearchBelonging(mainVal) }, 2000);
        }
        else {
            $('.progressSearch').hide();
            $('.hot-tags').removeClass('hide');
        }
    });

    $('body').delegate("#favlist", "click", function () {
        GetFavouriteslist();
        window.location = '/media/feed/favorites';
    });

    $('body').delegate("#commentlist", "click", function () {
        GetCommentsList();
    });

    $('body').delegate(".gotocomment", "click", function () {
        $('html, body').animate({
            scrollTop: $(".containerPages .blog-item-show-comments").offset().top
        }, 500);
        $('.containerPages .send-body').trigger('focus');
    });

    $('body').delegate(".gototop", "click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('#recentlyview').on("click", function () {
        closeuserarea();
        window.location = '/media/feed/newest';
    });

    $('#txtblogsearch').on("keypress", function () {
        var mainVal = $(this).val();
        if (mainVal.length > 2) {
            $('.progressSearch').show();
            $('.blog-List-Result').empty();
            $('.hot-tags').addClass('hide');
            $('#blog-search-outer span.title-result-search').text('درحال جستجو');
            delay(function () { SearchBlogPost(mainVal) }, 2000);
        }
        else {
            $('.progressSearch').hide();
            $('.hot-tags').removeClass('hide');
        }
    });

    $('body').delegate("#txtblogsearchpined", "keypress", function () {
        var mainVal = $(this).val();
        if (mainVal.length > 2) {
            $('.hot-tags').addClass('hide');
            $('.progressSearch').show();
            $('.blog-List-Result').empty();
            $('#blog-search-outer span.title-result-search').text('درحال جستجو');
            delay(function () { SearchBlogPost(mainVal) }, 2000);
        }
        else {
            $('.progressSearch').hide();
            $('.hot-tags').removeClass('hide');
        }
    });

    $('body').delegate("#txtblogsearch", "keypress", function () {
        var mainVal = $(this).val();
        if (mainVal.length > 2) {
            $('.hot-tags').addClass('hide');
            $('.progressSearch').show();
            $('.blog-List-Result').empty();
            $('#blog-search-outer span.title-result-search').text('درحال جستجو');
            delay(function () { SearchBlogPost(mainVal) }, 2000);
        }
        else {
            $('.progressSearch').hide();
            $('.hot-tags').removeClass('hide');
        }
    });

    $('#LoginModal div#LoginForm-Group #txtPhoneNumberLogin').bind('input keypress', function (e) {
        keytxtPhoneNumberLogin(e);
    });

    $('#ActiveCodeForm div#ActiveCodeForm-Group #txtActiveCode').bind('input keypress', function (e) {
        keytxtActiveCode(e);
    });

    $('#LoginModal').delegate("div#LoginForm-Group #LoginForm", "click", function (e) {
        e.preventDefault();
        var txtPhoneNumbers = [];
        var txtPhoneNumber = fixNumbers($('#txtPhoneNumberLogin').val());
        if (txtPhoneNumber == 0 || txtPhoneNumber == '' || txtPhoneNumber == undefined || typeof (txtPhoneNumber) == 'undefined') {
            ShowMsg(1, 'شماره تماس خود را وارد نمائید.');
            return false;
        }
        var name = 'media';
        txtPhoneNumbers.push(txtPhoneNumber);
        txtPhoneNumbers.push(name);
        var AddUser = '/api/Users/AddUser';
        showwait();
        $.ajax({
            url: AddUser,
            type: "POST",
            contentType: "application/json",
            dataType: "text",
            data: JSON.stringify(txtPhoneNumbers),
            dataType: "json",
            success: function (response) {
                var results = response.split('#');
                if (results[0] == 'Success') {
                    ShowMsg(0, 'کد تائید برای شما ارسال شد.');
                    $('#PhoneNumber').text(results[1]);
                    hidewait();
                    $('#LoginModal').modal('toggle');
                    $('#ActiveCodeForm').modal('toggle');
                    ProgressCountdown(120, '#ResendActiveCode').then();
                }
                if (results[0] == 'Faild') {
                    hidewait();
                    ShowMsg(1, results[1]);
                }
            },

            error: function (x, e) {
                ShowMsg(1, 'سیستم با خطا مواجه شد.');
                hidewait();
            }
        });
    });

    $('#ActiveCodeForm').delegate("div#ActiveCodeForm-Group #ActiveCode", "click", function () {
        var txtActiveCodes = [];
        var txtActiveCode = $('#txtActiveCode').val();
        txtActiveCode = fixNumbers(txtActiveCode);

        if (txtActiveCode == '' || txtActiveCode == undefined || typeof (txtActiveCode) == 'undefined') {
            ShowMsg(1, 'کد تائیدیه خود را وارد نمائید.');
            return false;
        }
        txtActiveCodes.push(txtActiveCode);
        var ActiveCodeLogin = '/api/Users/Login';
        showwait();
        $.ajax({
            url: ActiveCodeLogin,
            type: "POST",
            contentType: "application/json",
            dataType: "text",
            data: JSON.stringify(txtActiveCodes),
            dataType: "json",
            success: function (response) {
                var results = response.split('#');
                if (results[0] == 'Success') {
                    hidewait();
                    ShowMsg(0, 'با موفقیت وارد شدید.');
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                    $('#ActiveCodeForm').modal('toggle');
                    //$carousel.flickity('next');
                }
                if (results[0] == 'Faild') {
                    hidewait();
                    ShowMsg(1, results[1]);
                }
            },

            error: function (x, e) {
                ShowMsg(1, 'سیستم با خطا مواجه شد.');
                hidewait();
            }
        });
    });

    $('#ActiveCodeForm').delegate("div#ActiveCodeForm-Group #ResendActiveCode", "click", function () {
        var ResendActivationCode = '/api/Users/ResendActivationCode';
        showwait();
        $.ajax({
            url: ResendActivationCode,
            type: "POST",
            contentType: "application/json",
            dataType: "text",
            dataType: "json",
            success: function (response) {
                var results = response.split('#');
                if (results[0] == 'Success') {
                    hidewait();
                    ShowMsg(0, results[1]);
                    ProgressCountdown(15, '#ResendActiveCode').then();
                }
                if (results[0] == 'Faild') {
                    hidewait();
                    ShowMsg(1, results[1]);
                }
            },

            error: function (x, e) {
                ShowMsg(1, 'سیستم با خطا مواجه شد.');
                hidewait();
            }
        });
    });

    $('body').delegate(".playerel a.next-video", "click", function () {
        //go to url
        $('#anothercontainer').empty();
        $('.additional-control-players').remove();
        $('.next-video-outer').remove();
        Id = $(this).attr('data-id');
        $('video').unbind('play');
        $('video').unbind('ended');
        LoadContentPost();
    });

    $('body').delegate(".playerel a.prev-video", "click", function () {
        $('#anothercontainer').empty();
        $('.additional-control-players').remove();
        $('.next-video-outer').remove();
        Id = $(this).attr('data-id');
        $('video').unbind('play');
        $('video').unbind('ended');
        LoadContentPost();
    });

    $('.latesttopics-item-otherdetails').delegate("a.latesttopics-item-icon-bookmark", "mouseover", function () {
        $(this).find('ul.share-item').addClass('share-item-show');
        $(this).addClass('showsharebtns');
    });

    $('.containerPages').delegate("ul.intraction-user a.gotocomment", "click", function () {
        $('html, body').animate({
            scrollTop: $(".outer-video-comment").offset().top
        }, 500);
    });

    $('.containerPages').delegate("ul.sharepost li[data-target=twitter]", "click", function () {
        sharetwitter();
    });
    $('.containerPages').delegate("ul.sharepost li[data-target=facebook]", "click", function () {
        sharefacebook();
    });
    $('.containerPages').delegate("ul.sharepost li[data-target=telegram]", "click", function () {
        sharetelegram();
    });
    $('.containerPages').delegate("ul.sharepost li[data-target=whatsapp]", "click", function () {
        sharewhatsapp();
    });
    $('.containerPages').delegate("ul.sharepost li[data-target=pinterest]", "click", function () {
        shareppinterest();
    });
    $('.containerPages').delegate("ul.sharepost li[data-target=mail]", "click", function () {
        sharemail();
    });
    $('body').delegate(".showmore", "click", function () {
        $(this).attr('data-selected', function (index, attr) {
            if (attr == "0") {
                $('.outer-video-content .descvideo .desc-video').addClass('showed');
                $(this).attr('data-selected', "1");
                $(this).text('نمایش کمتر');
            }
            if (attr == "1") {
                $('.outer-video-content .descvideo .desc-video').removeClass('showed');
                $(this).attr('data-selected', "0");
                $(this).text('نمایش بیشتر');
            }
        });
    });

    $('body').delegate(".showNotificationModal", "click", function () {
        $("#NotificationRequestModal").modal('toggle');
        localStorage.setItem("notifShowed", "1");
        notifShowed = 1;
    });
    var modalNotificationRequest = function (callback) {
        $('#NotificationRequestModal').delegate("a.NotacceptNotification", "click", function () {
            callback(false);
            $("#NotificationRequestModal").modal('hide');
        });

        $('#NotificationRequestModal').delegate("a.acceptNotification", "click", function () {
            callback(true);
        });
    };
    modalNotificationRequest(function (confirm) {
        if (confirm) {
            requestPermissions();
            $('.notifShowAllowOrNot').addClass('showed');
        } else {
            localStorage.setItem("pushToken", null);
            localStorage.setItem("notifShowed", "1");
            return false;
        }
    });

    $('#SubscribeModal').delegate("a.closeSubscribeModal", "click", function () {
        $("#SubscribeModal").modal('hide');
    });

    setTimeout(function () {

    }, 4000);

    window.setInterval(function () {
        $('.mail-subscribe img').hide();
    }, 10000);
    window.setInterval(function () {
        $('.mail-subscribe img').show();
    }, 10000);

    $('body').delegate(".showSubscribeModal", "click", function () {
        $("#SubscribeModal").modal('toggle');
        localStorage.setItem("showSubscribeModal", "1");
        showSubscribeModal = 1;
        $(this).hide();
    });

    $('body').delegate("li.otherlinks a.freeconsultationlink", "click", function () {
        $('#freeconsultationModal').modal('toggle');
        setTimeout(function () {
            $('.btncall').addClass('wiggle');
        }, 1000);
        setTimeout(function () {
            $('.btncall').removeClass('wiggle');
        }, 3000);
    });
    $('#freeconsultationModal').delegate("a#startChat", "click", function () {
        //$('.raychat_main_button.bottom').fadeIn();
        //window.Raychat.open();
        //$('#freeconsultationModal').modal('toggle');
        var win = window.open('https://wa.me/+989214476154', '_blank');
        win.focus();
    });
    $('#freeconsultationModal').delegate("input#btnfreeconsultationForm", "click", function () {
        var txtPhoneNumbers = [];
        var FirstName = $('#FirstNamefreeCall').val();
        var PhoneNumber = $('#PhoneNumberfreeCall').val();
        if (FirstName == '' || FirstName == undefined || typeof (FirstName) == 'undefined') {
            ShowMsg(1, 'لطفا نام خود را وارد نمائید.');
            $('#FirstNamefreeCall').trigger('focus');
            return false;
        }
        if (PhoneNumber == '' || PhoneNumber == undefined || typeof (PhoneNumber) == 'undefined') {
            ShowMsg(1, 'شماره تماس خود را وارد نمائید.');
            $('#PhoneNumberfreeCall').trigger('focus');
            return false;
        }

        var FreeCall = {};
        FreeCall.PhoneNumber = PhoneNumber;
        FreeCall.FirstName = FirstName;
        var myData = {};
        myData.FreeCall = FreeCall;

        var AddFreeCall = '/api/Users/AddFreeCall';
        showwait();
        $.ajax({
            url: AddFreeCall,
            type: "POST",
            data: myData,
            dataType: "json",
            success: function (response) {
                var results = response.split('#');
                if (results[0] == 'Success') {
                    ShowMsg(0, 'درخواست شما با موفقیت ارسال شد. همکاران ما در کوتاه‌ترین زمان با شما تماس خواهند گرفت.');
                    hidewait();
                }
                if (results[0] == 'Faild') {
                    hidewait();
                    ShowMsg(1, results[1]);
                }
            },

            error: function (x, e) {
                ShowMsg(1, 'سیستم با خطا مواجه شد.');
                hidewait();
            }
        });
    });
});

function sharetwitter() {
    var url = 'https://www.barghkaron.com/media/' + Id;
    url = 'https://twitter.com/share?text=' + nowitem.GBCBPIBlogPostTitle + '&url=' + url;
    window.open(url, "_blank");
}

function sharefacebook() {
    var url = 'https://www.barghkaron.com/media/' + Id + '/' + encodeURIComponent(nowitem.GBCBPIBlogPostTitle.replace(/ /g, "-"));
    url = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    window.open(url, "_blank");
}

function sharetelegram() {
    var url = 'https://www.barghkaron.com/media/' + Id + '/' + encodeURIComponent(nowitem.GBCBPIBlogPostTitle.replace(/ /g, "-"));
    url = 'https://telegram.me/share?text=' + url;
    window.open(url, "_blank");
}

function sharewhatsapp() {
    var url = 'https://www.barghkaron.com/media/' + Id + '/' + encodeURIComponent(nowitem.GBCBPIBlogPostTitle.replace(/ /g, "-"));
    url = 'whatsapp://send?text=' + url;
    window.open(url, "_blank");
}

function sharemail() {
    var url = 'https://www.barghkaron.com/media/' + Id + '/' + encodeURIComponent(nowitem.GBCBPIBlogPostTitle.replace(/ /g, "-"));
    //href="mailto:mail@address.com?subject=just-a-subject"href="mailto:mail@address.com?subject=just-a-subject"
    window.open("mailto:?subject= سلام. ویدئوی زیر رو حتمن مشاهده کنید." + '&body=' + url,
        "_blank", "toolbar=no, scrollbars=no, resizable=no, top=0, right=0, width=750, height=320");
}

function shareppinterest() {
    var url = 'https://www.barghkaron.com/media/' + Id + '/' + nowitem.GBCBPIBlogPostTitle.replace(/ /g, "-");
    var media = 'https://www.barghkaron.com/' + '/Content/Images/Blog/' + nowitem.GBCBPIBlogPicSeoFilename + '_300.jpg';
    var desc = nowitem.GBCBPIBlogPostBody;
    window.open("//www.pinterest.com/pin/create/button/" +
        "?url=" + url +
        "&media=" + media +
        "&description=" + desc, "_blank", "toolbar=no, scrollbars=no, resizable=no, top=0, right=0, width=750, height=320");
    return false;
}

function showProfile() {
    $('.profileInfo').addClass('show-profileInfo');
    $('.bg-blog-sidebar').show();
}

function closeProfileInfo() {
    $('.profileInfo').removeClass('show-profileInfo');
    $('.bg-blog-sidebar').hide();
    event.stopPropagation();
}


function showbackdrop() {
    if (!$('div').hasClass("backdroppage")) {
        $('.container-fluid').append('<div class="backdroppage fade"></div>');
        $('.backdroppage').addClass('show');
        HideScrollBody();
    }
}

function hidebackdrop() {
    $('div.backdroppage').remove();
    $('.backdroppage').removeClass('show');
    ShowScrollBody();
}

function showraychat() {
    $('.raychat_main_button').show();
}

function hideraychat() {
    $('.raychat_main_button').hide();
}

function closesearch() {
    $('.hot-tags').removeClass('hide');
    ShowScrollBody();
    $('.blog-List-Result').empty().fadeIn().height(0);
    $('.txtblogsearch').val('');
    $('.blog-search').removeClass('blog-search-show');
    $('.backdroppage').css('top', '0');
    $('.blog-search-pined').removeClass('blog-search-pined-show');
    $('.bg-blog-sidebar').hide();
}

function SearchBlogPost(keySearch) {
    var Blog_Post = {};
    Blog_Post.Title = keySearch;
    var myData = {};
    myData.Blog_Post = Blog_Post;
    var Search = '/api/BlogPosts/Search';
    $('.resultSearch').fadeOut();
    $('#txtblogsearch').prop('disabled', true);
    $.ajax({
        type: 'POST',
        url: Search,
        data: myData,
        success: function (data) {
            HideScrollBody();
            $('.progressSearch').hide();
            $('#txtblogsearch').prop('disabled', false);
            $('.blog-List-Result').empty();
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var src_str = data[i].Title;
                    var term = keySearch;
                    term = term.replace(/(\s+)/, "(<[^>]+>)*$1(<[^>]+>)*");
                    var pattern = new RegExp("(" + term + ")", "gi");
                    src_str = src_str.replace(pattern, "<mark>$1</mark>");
                    src_str = src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/, "$1</mark>$2<mark>$4");

                    var Duration = 0;
                    if (data[i].BlogPostType == 1) {
                        var hours = Math.floor(data[i].PopularityMinutesRead / 3600);
                        var minutes = Math.floor(data[i].PopularityMinutesRead / 60);
                        var seconds = data[i].PopularityMinutesRead % 60;
                        Duration = hours + ':' + minutes > 10 ? ('0' + minutes).slice(-2) : minutes
                            + ':' + ('0' + seconds).slice(-2);
                    }
                    else
                        Duration = data[i].PopularityMinutesRead;

                    var rowResult = '<div class="row"><div class="col-12 ' + (data[i].BlogPostType == "0" ? "blgresitm" : "mdresitm") + '"><a title="' + data[i].Title + '" href="/' + (data[i].BlogPostType == "0" ? "blog" : "media") + '/' + data[i].Id + '/' + data[i].Title.replace(/ /g, "-") + '" tabindex="-1"><h3>' + src_str + '</h3></a><div class="col-12"><span class="blog-item-past-time"><i class="icon-clock"></i>' + data[i].PersianDate + '</span><span class="blog-item-read-time"><i class="icon-stopwatch"></i>' + (data[i].BlogPostType == 0 ? "زمان برای مطالعه: " : "زمان ویدئو: ") + '' + Duration + '</span></div></div></div>';
                    $('.blog-List-Result').append(rowResult);
                }
                //$('.blog-List-Result').append('<a href="/media?utm_source=selectsearchblog&utm_medium=blog&utm_campaign=selectfromsearchblog&utm_term=insidepage&utm_content=barghkaron" target="_blank" class="row ads"><div class="col-12 ads"><img width="100" height="60" alt="برقکارآن :: رسانه تصویری" src="/assests/common/img/blog/blogvlogo.jpg?v=0.01258412"></div></a>');
                $('.blog-List-Result').fadeIn().height(window.innerHeight - 60);
                $('.blog-search-show').height($('.blog-List-Result').height() + $('#navbarlg').height());
                $('.blog-search-pined-show').height($('.outer-blog-search-pined .blog-List-Result').height() + $('.header-pined').height());
            }
            else {
                var rowResult = '<div class="row contentResult"><div class="col-auto p-0">جستجوی شما نتیجه&zwnj;ای نداشت.</div></div>';
                $('.blog-List-Result').append(rowResult);
                $('.blog-List-Result').fadeIn().height(0);
                $('.blog-search-show').height($('.blog-List-Result').height() + $('#navbarlg').height());
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

var loadMultipleCss = function () {
    loadCss('/assests/common/css/bvmvp.min.css?v=' + randomString(12, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
}
var loadCss = function (cssPath) {
    var cssLink = document.createElement('link');
    cssLink.as = 'style';
    cssLink.rel = 'preload';
    cssLink.href = cssPath;
    var head = document.getElementsByTagName('head')[0];
    head.parentNode.insertBefore(cssLink, head);

    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = cssPath;
    cssLink.onload = function () {
        setTimeout(function () {
            $('#backgroundPreLoading').remove();
            $('#StylesBeforLoad').remove();
        }, 500);
    }
    var head = document.getElementsByTagName('head')[0];
    head.parentNode.insertBefore(cssLink, head);
};
let lazyImages = [...document.querySelectorAll(".lazy-image")]
    , inAdvance = 900;
function lazyLoad() {
    lazyImages.forEach(e => {
        var a = window.pageYOffset
            , s = $(e).offset().top;
        a + inAdvance > s && (e.src = e.dataset.src,
            e.onload = (() => e.classList.add("loaded")))
    }
    )
}

var gtag;
function LoadFireAndRayChat() {
    $.ajax({
        dataType: "script",
        cache: true,
        async: false,
        url: '/assests/common/js/slick.min.js',
        success: function (response) {
            GenerateOtherContent();
            GetUser();
        }
    });
    $.ajax({
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        data: "",
        contentType: "application/json; charset=utf-8",
        url: '/assests/common/js/bootstrap.min.js',
        success: function (response) {
            $.ajax({
                dataType: "script",
                cache: true,
                async: false,
                url: '/assests/lib/bootstrap/js/popper.min.js',
                success: function (response) {
                    $.ajax({
                        dataType: "script",
                        cache: true,
                        async: false,
                        url: '/assests/common/js/clipboard.min.js',
                        success: function (response) {

                        }
                    });
                    $('#LoginModal').modal({
                        backdrop: 'true',
                        keyboard: true,
                        show: false
                    });

                    $('#LoginModal').on('shown.bs.modal', function (e) {
                        //LoadIntroHeader();
                        $('.raychat_main_button.bottom').fadeOut();
                        $('#txtPhoneNumberLogin').trigger('focus');
                        if (!loadedModal)
                            LoadIntroHeader();
                    });

                    $('#LoginModal').on('hidden.bs.modal', function (e) {
                        //LoadIntroHeader();
                        $('.raychat_main_button.bottom').fadeIn();
                        if (!loadedModal)
                            LoadIntroHeader();
                    });

                    $('#ActiveCodeForm').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: false
                    });

                    $('#ActiveCodeForm').on('shown.bs.modal', function () {
                        $('.raychat_main_button.bottom').fadeOut();
                        $('#txtActiveCode').trigger('focus');
                    });

                    $('#ActiveCodeForm').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: false
                    });

                    $('#freeconsultationModal').modal({
                        backdrop: 'true',
                        keyboard: true,
                        show: false
                    });
                    $(document).on('show.bs.modal', '#freeconsultationModal', function () {
                        $('#freeconsultationModal').removeClass('fade').append('<div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><div><h5 class="modal-title">مشاوره رایگان بازسازی برق ساختمان</h5></div> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button><div> <img src="/assests/common/img/land/freeconsultationModal.png"></div></div><div class="modal-body"><div class="form-group row w-100 p-0 m-0" id="freeconsultationForm-Group" onsubmit="return false"><div class="col-12"><span class="infotitlehfc">اطلاعات خواسته شده را برای ما ارسال کنید تا همکاران ما در اولین فرصت با شما تماس حاصل نمایند.</span></div><div class="col-12 mt-4"> <label> <input type="text" class="form-control" id="FirstNamefreeCall" placeholder=" " required=""> <span>نام و نام خانوادگی شما</span> </label></div><div class="col-12"> <label> <input type="tel" class="form-control" maxlength="11" id="PhoneNumberfreeCall" placeholder=" " required=""> <span>شماره تلفن همراه شما</span> </label></div><div class="col-12 text-center"> <input id="btnfreeconsultationForm" class="btnSendfc mainbtn-sm bg-blue shadow-blue mt-2" type="submit" onsubmit="return false" value="ثبت درخواست"></div></div></div><div class="col-12 text-center"><a href="#" id="startChat" class="btnSendfc mainbtn-sm bg-green shadow-green mb-3" onclick="return false;">گفتگوی آنلاین</a><a href="tel:02136900710" class="btncall mainbtn-xm bg-purple shadow-purple mb-3 mr-2"> <span>تماس با خط شماره ۱</span> <span class="icon-phone-call"></span></a></div></div></div>');
                    });
                    $('#freeconsultationModal').on('hidden.bs.modal', function (e) {
                        $('#freeconsultationModal').empty();
                    });

                    $('#contactusModal').modal({
                        backdrop: 'true',
                        keyboard: true,
                        show: false
                    });
                    $(document).on('show.bs.modal', '#contactusModal', function () {
                        $('#contactusModal').removeClass('fade').append('<div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><div><h5 class="modal-title">تماس با ما</h5></div> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span> </button></div><div class="modal-body" style="width: auto; height: auto; max-height: 100%;"><div class="form-group row w-100 p-0 m-0 justify-content-center" id="contactusForm-Group" onsubmit="return false"><div class="col-6"><div class="row w-100 h-100"><div id="HeaderContactus"><div class="col-12 mt-2"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.462091831741!2d51.420409639062754!3d35.690244765556706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01104abe6e87%3A0x916a15b690e27732!2z2KjYsdmC2qnYp9ix2KfZhg!5e0!3m2!1sen!2sus!4v1571560139539!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="width: 100%; border: 0; height: 200px;" allowfullscreen=""></iframe></div><div class="col-12"></div><div class="col-12"><span class="icon icon-phone"></span><span>021-36900710</span></div><div class="col-12"><span class="icon icon-envelope"></span><span>Info@Barghkaron.com</span></div><div class="col-12 col-12 mt-4" id="SocialPnl"><div class="row justify-content-center"><ul class="socialLinks-Footer row w-100 mr-4"><li><div id="twitter"> <span class="icon-twitter"></span> <a target="_blank" title="توییتر برقکارآن" href="https://twitter.com/barghkaron"> <span>برقکارآن را در</span><p>توییتر</p> <span>دنبال کنید</span> </a></div></li><li><div id="instagram"> <span class="icon-instagram"></span> <a target="_blank" title="اینستاگرام برقکارآن" href="https://instagram.com/barghkaron/"> <span>برقکارآن را در</span><p>اینستاگرام</p> <span>دنبال کنید</span> </a></div></li></ul></div></div></div></div></div><div class="col-6"><div class="row w-100 pnlleft"><div class="col-12"><span class="infotitlehfc">اطلاعات خواسته شده را برای ما ارسال کنید تا همکاران ما در اولین فرصت با شما تماس حاصل نمایند.</span></div><div class="col-12 mt-4"> <label> <input type="text" class="form-control" maxlength="11" id="FirstLastName-ContactUs" placeholder=" " required="" tabindex="40001"> <span>نام و نام خانوادگی شما</span> </label></div><div class="col-12"> <label> <input type="tel" class="form-control" maxlength="11" id="PhoneNumber-ContactUs" placeholder=" " required="" tabindex="40002"> <span>شماره تلفن همراه شما</span> </label></div><div class="col-12"> <label> <input type="text" class="form-control" maxlength="11" id="Email-ContactUs" placeholder=" " tabindex="40003"> <span>آدرس ایمیل شما (اختیاری)</span> </label></div><div class="col-12"> <label> <input type="tel" class="form-control" maxlength="11" id="Subject-ContactUs" placeholder=" " required="" tabindex="40004"> <span>موضوع پیغام</span> </label></div><div class="col-12"><grammarly-extension class="_1KJtL" style="position: absolute; top: 0px; left: 0px; pointer-events: none;"><div data-grammarly-part="highlights" class="u_fNK" style="position: absolute; top: 0px; left: 0px;"><div style="box-sizing: content-box; top: 0px; left: 0px; width: 0px; height: 0px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;"><div style="position: absolute; top: 0px; left: 0px;"><div style="height: 1040px; width: 1920px;"><div class="_3F-Wk _3mEyK _2Qe2S" style="top: 9px; left: 2.26563px; width: 7.73438px; height: 301px;"></div></div><div style="position: absolute; top: 0px; left: 0px; height: 1040px; width: 1920px;"></div></div></div></div><div data-grammarly-part="button" class="u_fNK" style="position: absolute; top: 0px; left: 0px;"><div style="box-sizing: content-box; top: 0px; left: 0px; width: 0px; height: 0px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;"><div style="position: absolute; transform: translate(-100%, -100%); top: -10px; left: -10px; width: auto; height: auto; pointer-events: all;"><div style="flex-direction: row; display: flex;"><div style="position: relative;"></div><div class="_3-ITD"><div class="_5WizN aN9_b _1y8ub _34Jb6 _1QzSN"><div class="_3YmQx"><div title="Found 1 error in text" class="_3QdKe">1</div></div></div></div></div></div></div></div></grammarly-extension><textarea id="Body-ContactUs" placeholder="متن پیغام" style="margin-top: 0px; margin-bottom: 0px; height: 100px;" spellcheck="false" tabindex="40005"></textarea></div><div class="col-12 text-center"> <input id="btncontactusForm" class="btnSendcu mainbtn-sm bg-blue shadow-blue mt-2" type="submit" onsubmit="return false" value="ارسال فرم"></div></div></div></div></div><div class="col-12 text-center"> <a href="#" id="startChat" class="btnSendfc mainbtn-sm bg-green shadow-green mb-3" onclick="return false;">گفتگوی آنلاین</a> <a href="tel:02136900710" class="btncall mainbtn-xm bg-purple shadow-purple mb-3 mr-2"> <span>تماس با خط شماره ۱</span> <span class="icon-phone-call"></span></a></div></div></div>');
                        $(this).find('.modal-body').css({
                            width: 'auto', //probably not needed
                            height: 'auto', //probably not needed 
                            'max-height': '100%'
                        });
                    });
                    $('#contactusModal').on('hidden.bs.modal', function (e) {
                        $('#contactusModal').empty();
                    });

                    $('#NotificationRequestModal').modal({
                        backdrop: 'static',
                        keyboard: false,
                        show: false
                    });
                    $(document).on('show.bs.modal', '#NotificationRequestModal', function () {
                        $('#NotificationRequestModal').removeClass('fade').append('<div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"> <a href="#" onclick="return false;" title="بستن" class="NotacceptNotification"><i class="icon-clear"></i></a></div><div class="modal-body"><i class="icon-notification"></i><span>اولین کسی باشید که از مطلب جدید با خبر می&zwnj;شوید. </span><p> از تازه&zwnj;ترین&zwnj;ها زودی با خبر بشین</p></div><div class="modal-footer"> <a href="#" class="acceptNotification" onclick="return false;">باشه</a></div></div></div>');
                    });
                    $('#NotificationRequestModal').on('hidden.bs.modal', function (e) {
                        $('#NotificationRequestModal').empty();
                    });

                    $('#SubscribeModal').modal({
                        backdrop: 'true',
                        keyboard: true,
                        show: false
                    });
                    $('#SubscribeModal').on('hidden.bs.modal', function (e) {
                        $('#SubscribeModal').empty();
                    });
                    $(document).on('show.bs.modal', '#SubscribeModal', function () {
                        $('#SubscribeModal').removeClass('fade').append('<div class="modal-dialog modal-dialog-centered modal-sm" role="document"><div class="modal-content"><div class="modal-header"><a href="#" title="بستن" class="closeSubscribeModal" onclick="return false;"><i class="icon-clear"></i></a><div class="intro_subscribe"><img class="intro_subscribe_1" src="/assests/common/img/blog/introsubscribe/1.png" alt="برقکارآن"> <img class="intro_subscribe_2" src="/assests/common/img/blog/introsubscribe/2.png" alt="برقکارآن" style="display: block;"> <img class="intro_subscribe_3" src="/assests/common/img/blog/introsubscribe/3.png" alt="برقکارآن" style="display: block;"> <img class="intro_subscribe_4" src="/assests/common/img/blog/introsubscribe/4.png" alt="برقکارآن" style="display: block;"><img class="intro_subscribe_6" src="/assests/common/img/blog/introsubscribe/6.png" alt="برقکارآن"></div></div><div class="modal-body"><h3>خبرنامه هفتگی وبلاگ برقکار<p>آن</p></h3><p>دیگه هیچ مطلب مهمی از سایت رو از دست نمی&zwnj;دی ;)</p><div class="col-12 blog-subscribe-modal"><label> <input type="text" class="txtUserNameSubscription-m" placeholder=" "> <span>نام شما:</span> </label> <label> <input type="text" class="txtEmailSubscription-m" placeholder=" "> <span>آدرس ایمیل شما:</span> </label></div><div class="col-12 col-lg-12 col-md-12 col-sm-12 lastcol"> <a href="#" class="btnSubscribemodal" onclick="Subscriptionmodal(); return false;">تکمیل عضویت در خبرنامه</a></div></div></div></div>');
                        setTimeout(function () { $('.intro_subscribe_2').show(); $('.intro_subscribe_3').show(); }, 2);
                        setTimeout(function () { $('.intro_subscribe_4').show(); }, 1);
                    });
                    $('#SubscribeModal').on('hidden.bs.modal', function (e) {
                        setTimeout(function () { $('.intro_subscribe_2').hide(); $('.intro_subscribe_3').hide(); }, 0);
                        setTimeout(function () { $('.intro_subscribe_4').hide(); }, 0);
                    });
                }
            })
            $.ajax({
                dataType: "script",
                cache: true,
                async: false,
                url: '/assests/common/js/lodash.min.js',
                success: function (response) {
                    window.addEventListener("scroll", _.throttle(lazyLoad, 16));
                    window.addEventListener("resize", _.throttle(lazyLoad, 16));
                }
            })
        }
    });

    $.ajax({
        async: true,
        url: "https://www.googletagmanager.com/gtag/js?id=UA-131304409-3",
        dataType: "script",
        success: function () {
            window.dataLayer = window.dataLayer || [];
            gtag = function () { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-131304409-3');
        }
    });
}

var username, mail;
var urls = [];
function GetUser() {
    var AddUser = '/api/Users/GetUser';
    $.ajax({
        url: AddUser,
        type: "POST",
        data: "",
        contentType: "application/json",
        dataType: "json",
        async: false,
        success: function (response) {
            hidewait();
            var results = response.split('#');
            if (results[0] === 'Success') {
                if (results[1] !== '[]') {
                    isLogin = 1;
                    var datas = JSON.parse(results[1]);
                    $('#Username').html(datas.Username);
                    $('#txtUsername').val(datas.Username);
                    $('#PhoneNumber').val(datas.PhoneNumber);
                    $('#Email').val(datas.Email);
                    username = datas.Username;
                    mail = datas.Email;
                    if (username && mail) {
                        $('.send-name').val(username).prop('disabled', true);
                        $('.send-mail').val(mail).prop('disabled', true);
                    }
                    $('header').empty().append('<div id="navbarlg" class="row"><div class="col-2 p-0 order-0"> <a href="#" onclick="return false;" class="icon-barghkaron-blog-option"><div><span class="line"></span><span class="line"></span></div> <span>امکانات سایت</span></a><div class="blog-option" style="right: -375px;"> <a href="#" class="closeoption" onclick="closeoption(); return false;"></a><div class="aboutus-menuheader"> <img width="288" height="75" alt="برقکارآن :: رسانه تصویری برقکارآن" src="/assests/common/img/blog/blogvlogo.png"><ul class="blog-sidebar-sociallinks"><li><a href="https://telegram.me/barghkaron" title="تلگرام برقکاران"><i class="icon-telegram"></i></a></li><li><a href="https://instagram.com/barghkaron" title="اینستاگرام برقکاران"><i class="icon-instagram"></i></a></li><li><a href="https://twitter.com/barghkaron" title="توییتر برقکاران"><i class="icon-twitter"></i></a></li></ul></div><ul><li><a href="/media"><i class="icon-home"></i>خانه</a></li><li><a href="/media/feed/trending" class="red"><i class="icon-fire"></i>داغ‌ترین</a></li><li><a href="/media/feed/newest"><i class="icon-power"></i>تازه&zwnj;ها</a></li><li><hr></li><li><a href="/media/feed/history"><i class="icon-history"></i>تاریخچه</a></li><li><a href="/media/feed/library"><i class="icon-playlist_play"></i>لیست تماشا</a></li><li><a href="/media/feed/favorites" class="red"><i class="icon-heart"></i>علاقمندی&zwnj;ها</a></li><li><hr></li><li class="category"><a href="#" onclick="return false;">دسته‌بندی‌ها</a>><ul></ul></li><li><hr></li><li class="otherlinks hometarget"><a target="_blank" href="/"><i class="icon icon-home"></i>صفحه اصلی برقکارآن</a></li><li class="otherlinks freeconsultation"><a class="freeconsultationlink"><i class="icon icon-freeconsultation"></i>مشاوره رایگان بازسازی برق ساختمان</a></li><li class="otherlinks mediatarget"><a target="_blank" href="/Blog"><i class="icon-create"></i>وبلاگ برقکارآن</a></li><li class="otherlinks questionstarget"><a target="_blank" href="/Questions"><i class="icon icon-forum"></i>سوال جواب کوتاه</a></li><li class="otherlinks addorder"><a target="_blank" href="/Order"><i class="icon icon-construction"></i>سفارش خدمات برقکاری</a></li><li class="otherlinks partnertaget"><a target="_blank" href="/Hamkaran"><i class="icon-pan_tool"></i>درخواست همکاری</a></li><li class="otherlinks employmenttarget"><a target="_blank" href="/?q=RegisterExpert"><i class="icon-person_add"></i>استخدام برقکار</a></li></ul></div></div><div class="col-6 align-content-center order-3 text-center"> <a href="/media" title="رسانه تصویری برقکاران" class="icon-barghkaron-blog-logo"> <img width="288" height="75" alt="برقکارآن :: رسانه تصویری برقکارآن" src="/assests/common/img/blog/blogvlogo.png" title="رسانه تصویری برقکاران" alt="رسانه تصویری برقکاران"> </a></div><div class="col-2 div-blog-user p-0 order-1"> <a href="#" onclick="return false;" class="icon-barghkaron-blog-user"> <span>حساب کاربری</span> <i class="icon-person"></i> </a><div class="user-area"></div></div><div class="col-2 div-blog-search p-0 order-2"><a href="#" onclick="return false;" class="icon-barghkaron-blog-search"><i class="icon-search1"></i></a></div></div><div class="row blog-search"><ul><li> <a href="#" class="closesearch" onclick="closesearch(); return false;"></a> <input id="txtblogsearch" type="text" placeholder="جستجو از میان عناوین رسانه تصویری برقکاران برقکارآن ..."><div class="progressSearch"><div class="indeterminate"></div></div><div id="blog-search-outer" class="row justify-content-center h-100"><div class="col-12 p-0"><div class="blog-List-Result"></div></div></li><li class="hot-tags"> <img width="24" height="24" alt="برقکارآن :: رسانه تصویری برقکارآن :: داغ‌ترین ویدئوها" src="/assests/common/img/blog/hoticon.png"><p>#</p> <a href="#" onclick="return false;">چراغ خواب</a><a href="#" onclick="return false;">چراغ</a><a href="#" onclick="return false;">بازیافتی</a><a href="#" onclick="return false;">کاردستی</a><a href="#" onclick="return false;">LED</a><a href="#" onclick="return false;">زیر یک ساعت</a></li></ul></div>');
                    $('header .div-blog-user .user-area').empty().append('<ul><li><a class="closeuserarea" onclick="closeuserarea()"></a></li><li><a id="Username" onclick="showProfile()">' + datas.Username + '<b>(نمایش جزئیات)</b></a></li><li><a href="#" onclick="return false;" id="favlist"><i class="icon-favorite"></i>علاقمندی&zwnj;ها</a></li><li><a id="commentlist"><i class="icon-chat"></i>نظرات</a></li><li><a id="recentlyview"><i class="icon-history1"></i>بازدیدهای اخیر</a></li><li><hr></li><li><a onclick="Logout()">خروج</a></li></ul>');
                    $('.container-fluid').append('<div id="blog-search-outer" class="row justify-content-center"><div class="col-12 p-0"><div class="blog-List-Result"></div></div></div>');
                }
            }
            if (results[0] === 'Faild') {
                if (localStorage.getItem("urls") != null) {
                    urls = JSON.parse(localStorage.getItem("urls"));
                }
                var currenturl = Id;
                if (urls.length > 0) {
                    var result = urls.filter(obj => {
                        return obj.Id === currenturl;
                    })
                    if (result.length === 0) {
                        var url = {};
                        url.Id = currenturl;
                        urls.push(url);
                    }
                }
                else {
                    var url = {};
                    url.Id = currenturl;
                    urls.push(url);
                }
                localStorage.setItem("urls", JSON.stringify(urls));
                isLogin = 0;
                hidewait();
                $('header').empty().append('<div id="navbarlg" class="row"><div class="col-2 p-0 order-0"> <a href="#" onclick="return false;" class="icon-barghkaron-blog-option"><div><span class="line"></span><span class="line"></span></div> <span>امکانات سایت</span></a><div class="blog-option" style="right: -375px;"> <a href="#" class="closeoption" onclick="closeoption(); return false;"></a><div class="aboutus-menuheader"> <img width="288" height="75" alt="برقکارآن :: رسانه تصویری برقکارآن" src="/assests/common/img/blog/blogvlogo.png"><ul class="blog-sidebar-sociallinks"><li><a href="https://telegram.me/barghkaron" target="_blank" title="تلگرام برقکاران"><i class="icon-telegram"></i></a></li><li><a href="https://instagram.com/barghkaron" title="اینستاگرام برقکاران"><i class="icon-instagram"></i></a></li><li><a href="https://twitter.com/barghkaron" title="توییتر برقکاران"><i class="icon-twitter"></i></a></li></ul></div><ul><li><a href="/media"><i class="icon-home"></i>خانه</a></li><li><a href="/media/feed/trending" class="red"><i class="icon-fire"></i>داغ‌ترین</a></li><li><a href="/media/feed/newest"><i class="icon-power"></i>تازه&zwnj;ها</a></li><li><hr></li><li><a href="/media/feed/history"><i class="icon-history"></i>تاریخچه</a></li><li><a href="/media/feed/library"><i class="icon-playlist_play"></i>لیست تماشا</a></li><li><a href="/media/feed/favorites" class="red"><i class="icon-heart"></i>علاقمندی&zwnj;ها</a></li><li><hr></li><li class="category"><a href="#" onclick="return false;">دسته‌بندی‌ها</a>><ul></ul></li><li><hr></li><li class="otherlinks"><a target="_blank" href="/Order">سفارش خدمات برقکاری</a></li><li class="otherlinks"><a target="_blank" href="/?q=RegisterExpert">استخدام برقکار</a></li><li class="otherlinks"><a target="_blank" href="/Blog">وبلاگ برقکارآن</a></li></ul></div></div><div class="col-6 align-content-center order-3 text-center"> <a href="/media" title="رسانه تصویری برقکاران" class="icon-barghkaron-blog-logo"> <img width="288" height="75" alt="برقکارآن :: رسانه تصویری برقکارآن" src="/assests/common/img/blog/blogvlogo.png" title="رسانه تصویری برقکاران" alt="رسانه تصویری برقکاران"> </a></div><div class="col-2 div-blog-user p-0 order-1"> <a href="#" onclick="return false;" class="icon-barghkaron-blog-user"> <span>حساب کاربری</span> <i class="icon-person"></i> </a><div class="user-area"></div></div><div class="col-2 div-blog-search p-0 order-2"><a href="#" onclick="return false;" class="icon-barghkaron-blog-search"><i class="icon-search1"></i></a></div></div><div class="row blog-search"><ul><li> <a class="closesearch" onclick="closesearch()"></a> <input id="txtblogsearch" type="text" placeholder="جستجو از میان عناوین رسانه تصویری برقکاران برقکارآن ..."><div class="progressSearch"><div class="indeterminate"></div></div><div id="blog-search-outer" class="row justify-content-center h-100"><div class="col-12 p-0"><div class="blog-List-Result"></div></div></li><li class="hot-tags"> <img src="/assests/common/img/blog/hoticon.png"><p>#</p> <a href="#" onclick="return false;">چراغ خواب</a><a href="#" onclick="return false;">چراغ</a><a href="#" onclick="return false;">بازیافتی</a><a href="#" onclick="return false;">کاردستی</a><a href="#" onclick="return false;">LED</a><a href="#" onclick="return false;">زیر یک ساعت</a></li></ul></div>');
                $('header .div-blog-user .user-area').empty().append('<ul><li><a href="#" onclick="return false;" id="login" onclick="LoginForm()">ورود | ثبت نام</a></li></ul>');
                if (results[1] === '[]') {
                    $('.profile-options div[data-gs=0]').hide();
                }
            }
        },

        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function GenerateOtherContent() {
    $('.Footerlg').append('<div class="row w-100 footer-lg"><div class="col-2 col-lg-2 col-md-6"><h4>سرویس&zwnj;ها</h4><ul class="Footer-Services"></ul></div><div class="col-3 col-lg-3 col-md-6"><h4>خدمات</h4><ul class="Footer-Belonging"></ul></div><div class="col-5 col-lg-5 col-md-8 mr-4 p-0"><h4>تماس با ما</h4><div><div class="row InfoUs"><div class="col-lg-12 col-md-12 col-sm-auto col-auto titlelandbrgh"><h2 title="برقکار">برقکار</h2><h3 title="آنلاین">آن</h3></div><div class="col-lg-12 col-md-12 col-sm-auto col-auto subtitlelandbrgh"><h5>برقکار</h5><h5>آنلاین</h5></div><div class="col-12 mt-2"><span class="icon icon-map-marker"></span><span> </span></div><div class="col-12"><span class="icon icon-phone"></span><span>021-36900710</span></div><div class="col-12"><span class="icon icon-envelope"></span><span>Info@Barghkaron.com</span></div><div class="col-12 mt-4"><a href="/Aboutus" class="AboutUs-Footer mainbtn-sm bg-green shadow-green">درباره ما</a> <a id="termcondition" class="AboutUs-Footer mainbtn-sm bg-green shadow-green">قوانین و مقررات</a></div><div class="col-12 col-12 mt-4" id="SocialPnl"><div class="row justify-content-center"><ul class="socialLinks-Footer row w-100 mr-4"><li><div id="twitter"> <span class="icon-twitter"></span> <a target="_blank" title="توییتر برقکارآن" href="https://twitter.com/barghkaron"> <span>برقکارآن را در</span><p>توییتر</p> <span>دنبال کنید</span> </a></div></li><li><div id="instagram"> <span class="icon-instagram"></span> <a target="_blank" title="اینستاگرام برقکارآن" href="https://instagram.com/barghkaron/"> <span>برقکارآن را در</span><p>اینستاگرام</p> <span>دنبال کنید</span> </a></div></li></ul><div class="col-7 copyright"><div class="row"><div class="col-12"><p class="Madewith">Made with</p><div class="heartbeatNewpnl"><div class="heartbeatNew"><div class="heart">`</div></div></div><p class="Madewith">by BarghkarOn</p></div><div class="col-12"><p>© 2017-2021 BarghkarOn. All rights reserved.</p></div></div></div><div class="col-5 copyright"></div></div></div></div></div></div><div class="col-auto p-0"><ul class="certificates"><li> <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=113712&amp;Code=yp0RNfBf7awQFgC8rxwh"><img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=113712&amp;Code=yp0RNfBf7awQFgC8rxwh" alt="" style="cursor:pointer" id="yp0RNfBf7awQFgC8rxwh"></a></li></ul></div></div>');
    $('#ActiveCodeForm').append('<div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body"><div class="form-group" id="ActiveCodeForm-Group" onsubmit="return false"><div class="form-row mb-1"><div class="form-group w-100 rtl"> <label> <input type="tel" class="form-control" maxlength="4" id="txtActiveCode" placeholder=" " required=""> <span>کد تائیدیه را وارد نمایید.</span> </label> <input id="ActiveCode" class="mainbtn-sm btnLogin bg-green shadow-green mb-2" type="submit" onsubmit="return false" value="ورود به سایت"><small style="color: #6c757d !important; display: block; margin-top: 0.25rem; font-size: 80%; font-weight: 400;" id="activeCode" class="form-text text-muted">درصورتی که بعد از دو دقیقه کد را دریافت نکردید از گزینه ارسال مجدد استفاده نمایید.</small></div></div> <input id="ResendActiveCode" class="mainbtn-sm btnLogin bg-red shadow-red" type="submit" onsubmit="return false" value="ارسال مجدد کد">  <button type="button" class="mainbtn-sm btnLogin bg-black shadow-black" data-dismiss="modal">انصراف</button></div></div></div></div>');
    $('#LoginModal').append('<div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body"><div class="form-group" id="LoginForm-Group" onsubmit="return false"><div class="form-row"><div class="form-group w-100 rtl"> <label> <input type="tel" class="form-control" maxlength="11" id="txtPhoneNumberLogin" placeholder=" " required=""> <span>شماره موبایل خود را وارد نمایید.</span> </label> <small style="color: #6c757d !important; display: block; margin-top: 0.25rem; font-size: 80%; font-weight: 400;" id="emailHelp" class="form-text text-muted">برای استفاده از خدمات برقکارآن ما به شماره تماس شما نیاز داریم</small></div></div> <input id="LoginForm" class="btnLogin mainbtn-sm bg-green shadow-green mt-5" type="submit" onsubmit="return false" value="ارسال کد تائیدیه"> <button type="button" class="mainbtn-sm btnLogin bg-black shadow-black mr-3" data-dismiss="modal">انصراف</button></div></div></div></div>');
    $('body').append('<a href="#" onclick="return false;" title="برو به بالا" class="gototop ripple"></a>');
    $('body').append('<a href="#" onclick="return false;" title="اشتراک خبرنامه" class="showNotificationModal notAllowed ripple"></a>');
    $('body').append('<div class="notifShowAllowOrNot"> <span>برای دریافت خبرنامه روی گزینه Allow کلیک نمایید.<span> </span></span></div>');
    $('body').append('<a href="#" onclick="return false;" title="خبرنامه هفتگی وبلاگ برقکارآن" class="showSubscribeModal"></a>');
    $('<div class="col-12 col-lg-8 col-sm-12 col-xl-8 col-md-12 pt-3"><div class="yn-bnr" id="ynpos-12185"></div></div>').insertBefore('.outer-related-videos');
    $('.outer-video-comment').append('<div class="blog-item-show-comments row"><div class="section-title"> <span>نظرات کاربران</span> <span>منتظر دیدگاههای ارزشمند شما هستیم</span></div><div class="col-12"><input type="text" placeholder="دیدگاه خود را در رابطه به این مطلب بنویسید" class="send-body"/></div><div class="col-12"> <input placeholder="نام خود را وارد نمایید." class="send-name" type="text"></div><div class="col-12"> <input placeholder="ایمیل خود را وارد نمایید." class="send-mail" type="email"></div><div class="col-12"> <a id="A1" runat="server" onclick="SendComment()" class="SendComment mainbtn-sm bg-green shadow-green mt-2 ripple position-relative">ارسال دیدگاه</a></div></div>');
}

function LoadMessageFireBase() {
    messaging.onTokenRefresh(function () {
        messaging.getToken().then(function (e) {
            userToken = token,
                AddCustomer_DeviceToken(userToken),
                isSubscribed = !0,
                $(".token").val(token),
                localStorage.setItem("pushToken", token),
                TokenElem.innerHTML = "token is : " + token
        }).catch(function (e) {
            console.log("Unable to retrieve refreshed token ", e),
                showToken("Unable to retrieve refreshed token ", e)
        })
    }),
        messaging.onMessage(function (e) {
            null != e.notification && ($(".notificationPWA").prepend('<li class="row"><span class="icon icon-close closenot col-1"></span><a target="_blank" class="col-11 pl-0" href="' + e.notification.click_action + '"><div class="row ml-0"><div class="col-auto pl-0"><img id="imgnot" src="/assests/common/img/BGHnotification.png"></div><div class="col-9 pl-0"><span id="titlenot">' + e.notification.title + '</span><span id="bodynot">' + e.notification.body + "</span></div></div></a></li>"),
                setTimeout(function () {
                    $(".notificationPWA li").first().addClass("show")
                }, 500),
                new Notification(e.notification.title, {
                    icon: e.notification.icon,
                    body: e.notification.body
                }).onclick = function () {
                    window.open(e.notification.click_action)
                }
            )
        })
}

function SearchBelonging(keySearch) {
    var Belonging = {};
    Belonging.displayName = keySearch;
    var myData = {};
    myData.Belonging = Belonging;
    var Search = '/api/Belongings/SearchBelonging';
    $.ajax({
        type: 'POST',
        url: Search,
        data: myData,
        success: function (response) {
            $('.progressSearch').hide();
            $('.Belonging-List-Result').empty();
            if (response.length > 0) {
                $('#Belonging-lg span.Title-Result-Search').text('نتیجه جستجو');
                for (var i = 0; i < response.length; i++) {
                    var li = '<li class="col-auto"><a target="_blank" href="/Order/Step-1?q=' + response[i].Id + '"><div class="row"><div class="col-auto p-0"><img src="/assests/common/img/' + response[i].iconUrl + '" /></div><div class="col-8 p-0"><h6>' + response[i].SCDisplayName + '</h6><h3>' + response[i].displayName + '</h3><span>' + response[i].price.toLocaleString() + ' ریال</span></div></div></a></li>';
                    $('.Belonging-List-Result').append(li);
                }
            }
            else {
                $('#Belonging-lg span.Title-Result-Search').text('جستجوی شما نتیجه ای نداشت');
                var li = '<li class="col-auto" data-empty="1"><div><a target="_blank" href="/Services">نمایش تمامی خدمات و سرویس‌ها</a></div></li>';
                $('.Belonging-List-Result').append(li);
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function tabsShow(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function closeoption() {
    $('.blog-option').removeClass('showedoption');
    $('.icon-barghkaron-blog-option').removeClass('showed');
    hidebackdrop();
    ShowScrollBody();
    $('.gototop').fadeIn();
    if (isfixed == 1)
        $('.playerel div#container').addClass('fixedvideo');
}

function closeuserarea() {
    $('.user-area').removeClass('showuserarea');
    $('.icon-barghkaron-blog-user').removeClass('showed');
    hidebackdrop();
}

function closefavlist() {
    $('#Favlist').removeClass('show-SideBarMain');
    $('.resultFavlistSearch').empty();
    hidebackdrop();
    event.stopPropagation();
}

function closeCommentList() {
    $('#CommentList').removeClass('show-SideBarMain');
    hidebackdrop();
    event.stopPropagation();
}

function closeRecentlyView() {
    $('#RecentlyView').removeClass('show-SideBarMain');
    hidebackdrop();
    event.stopPropagation();
}

function GetFavouriteslist() {
    var AddUser = '/api/BlogPosts/GetFavouriteslist';
    showwait();
    $.ajax({
        url: AddUser,
        type: "POST",
        contentType: "application/json",
        dataType: "text",
        dataType: "json",
        success: function (data) {
            $('.resultFavlistSearch').fadeIn();
            $('.resultFavlistSearch').empty();

            for (var i = 0; i < data.length; i++) {
                var fav = '';
                var book = '';
                if (data[i].IsFavourites === true) {
                    fav = '<span class="icon-heart heart_Active"></span>';
                }
                if (data[i].IsBookmark === true) {
                    book = '<span class="icon-bookmark bookmark_Active"></span>';
                }

                var rowResult =
                    '<div class="col-12 p-0 contentResult"><div class="row v-center col-centered">' +
                    '<div class="col-12 p-0 pr-3"><a target="_blank" title= "' + data[i].Title + '" href= "/Blog/' + data[i].Id + '/' + data[i].Title.replace(/ /g, "-") + '" ><span class="fvBlog_Post_Title">' + data[i].Title + '</span></a></div>' +
                    '<div class="col-6 mt-2 p-0 pr-3"><span class="fvBlog_Post_Date">۱۲ بهمن ۱۳۹۷</span></div>' +
                    '<div class="col-6 mt-2 p-0 pl-3 text-left"><span class="favbooklist">' + fav + book + '</span></div></div></div></div>';
                $('.resultFavlistSearch').append(rowResult);
            }
            $('#Favlist').addClass('show-SideBarMain');
            showbackdrop();
            hidewait();
        },

        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function GetCommentsList() {
    var AddUser = '/api/BlogPosts/GetCommentsList';
    showwait();
    $.ajax({
        url: AddUser,
        type: "POST",
        contentType: "application/json",
        dataType: "text",
        dataType: "json",
        success: function (data) {
            hidewait();
            $('.resultBookmarklistSearch').fadeIn();
            $('.resultBookmarklistSearch').empty();

            for (var i = 0; i < data.length; i++) {
                var fav = '';
                var book = '';
                if (data[i].IsFavourites === true) {
                    fav = '<span class="icon-heart heart_Active"></span>';
                }
                if (data[i].IsBookmark === true) {
                    book = '<span class="icon-bookmark bookmark_Active"></span>';
                }

                var rowResult =
                    '<div class="col-12 p-0 contentResult"><div class="row v-center col-centered">' +
                    '<div class="col-12 p-0 pr-3"><span class="fvBlog_Post_text">' + data[i].CommentText.slice(0, 100) + ' ...</span></div>' +
                    '<div class="col-6 mt-2 p-0 pr-3"><span class="fvBlog_Post_Date">' + data[i].CreatedOnUtcPersian + '</span></div>' +
                    '<div class="col-6 mt-2 p-0 pl-3 text-left"><a target="_blank" href= "/Blog/' + data[i].BlogPostId + '/" >مشاهده پست</a></div></div></div></div>';
                $('.resultBookmarklistSearch').append(rowResult);
            }
            $('#CommentList').addClass('show-SideBarMain');
            showbackdrop();
            hidewait();
        },

        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function LoginForm() {
    $('#LoginModal').modal('toggle');
}

function Logout() {
    var Logout = '/api/Users/Logout';
    showwait();
    $.ajax({
        url: Logout,
        type: "POST",
        contentType: "application/json",
        dataType: "text",
        dataType: "json",
        success: function (response) {
            var results = response.split('#');
            if (results[0] == 'Success') {
                localStorage.setItem('HelpOrderAnim', 'notshown');
                localStorage.setItem('FirstOrderOrNot', 'notshown');
                ShowMsg(0, results[1]);
                hidewait();
                setTimeout(function () {
                    window.location.href = "/";
                }, 1000);
            }
            if (results[0] == 'Faild') {
                hidewait();
                ShowMsg(1, results[1]);
            }
        },

        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function UpdateInfoUser() {
    if ($('#txtUsername').val() == '' || $('#PhoneNumber').val() == '' || $('#Email').val() == '') {
        ShowMsg(1, 'اطلاعات خواسته شده را وارد نمائید.')
        return false;
    }

    if (!validateEmail($('#Email').val())) {
        ShowMsg(1, 'ایمیل وارد شده صحیح نمی‌باشد.')
        return false;
    }

    var Customer = {};
    Customer.Username = $('#txtUsername').val();
    Customer.Email = $('#Email').val();
    Customer.PhoneNumber = $('#PhoneNumber').val();

    var myData = {};
    myData.Customer = Customer;

    var UpdateInfoUser = '/api/Users/UpdateInfoUser';
    showwait();
    $.ajax({
        type: 'POST',
        url: UpdateInfoUser,
        data: myData,
        success: function (data) {
            hidewait();
            var results = data.split('#');
            if (results[0] == 'Success') {
                ShowMsg(0, results[1]);
            }
            if (results[0] == 'Faild') {
                ShowMsg(1, results[1]);
                hidewait();
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}
//==========================================================================================================================


var liked, disliked, unliked, undiliked, CntLiked, CntdiLiked, isbookmarked, realted, mediaVideo, nowitem;
function LoadContentPost() {
    $('p.remaintimeprev').remove();
    $('a.cancelprev').remove();
    $('.outer-related-videos-item').empty();

    $('.outer-related-videos-item').append('<ul></ul>');
    var emptycard = '<li class="card"><div class="card__image"><img class="js-image" alt="" src=""></div><div class="card__content"><span class="card__headingspan"></span><h1 class="card__heading js-heading"></h1><p class="card__paragraph js-paragraph"></p></div></li>';
    for (var i = 0; i < 4; i++) {
        $('.outer-related-videos-item ul').append(emptycard);
    }
    $('.outervideoloading').empty().append('<div class="card-player"><i class="icon-play_arrow"></i></div>');

    var GCBVPBI = '/api/BlogPosts/GCBVPBI';
    $.getJSON(GCBVPBI + '/' + Id)
        .done(function (data) {
            //yektanet
            //now = new Date();
            //var head = document.getElementsByTagName('head')[0];
            //var script = document.createElement('script');
            //script.async = true;
            //script.type = 'text/javascript';
            //var script_address = 'https://cdn.yektanet.com/template/bnrs/yn_bnr.min.js';
            //script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
            //head.appendChild(script);
            //
            $('.playerel #anothercontainer').removeClass('anothercontainer_card').empty();
            generatecategory(data.Blog_Category_media);
            //$('.containerPages .outer-video-content').empty();
            $('.containerPages .outer-related-videos-item').empty();
            var data1 = data.GetBlogVideoContentByPostId;
            nowitem = data1;
            var tags = data.GetBlogTagsById.split('##');
            realted = data.RelatedBlogPostByBlogPostId_List;
            var src = '/Content/Video/Blog/' + data1.GBCBPIBPVSeoFilename + '.mp4';
            var poster = '/Content/Images/Blog/' + data1.GBCBPIBlogPicSeoFilename + '_300.jpg';
            const teasers = ["barghkaron_teaser1.mp4", "barghkaron_teaser2.mp4", "barghkaron_teaser3.mp4"];
            const teasersselected = Math.floor(Math.random() * teasers.length);
            $('video').attr('src', '/Content/Video/Blog/' + teasers[teasersselected] + '');
            $('video').attr('data-src', src);
            $('video').attr('data-playprev', "0");
            $('video').attr('poster', poster);
            //var video = '<video autoplay="true" poster="' + img + '" id="videoarea"><source src="/Content/Video/Blog/' + data1.GBCBPIBPVSeoFileName + '.mp4" type="video/mp4" /></video>';
            //$('.playerel #container').append('<div class="video-box"><div class="additional-control-seekbar"><div id="custom-seekbar"><span></span></div></div><div class="additional-control-next"><a title="ویدئوی بعدی" class="next-video"></a></div> <div class="additional-control-prev"><a title="ویدئوی قبلی" class="prev-video"></a></div> <div class="next-video-outer"><div class="next-video-inner row"><div class="col-3 position-relative outer-loader"><div class="inner-loader"><svg viewBox="0 0 100 100" id="loadf"><path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#eee" stroke-width="3" fill-opacity="0"></path><path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#FFEA82" stroke-width="6" fill-opacity="0" style="stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 295px;"></path></svg></div></div><div class="col-8"><span>در حال نمایش ویدئوی بعدی</span><h3>نحوه ساخت چراغ قوه با کدو تنبل. آره میشه.</h3><a class="cancelnextvideo" onclick="cancelnextvideo()">انصراف</a></div></div><div class="backdropinnervideo"></div><img src="/Content/Images/Blog/' + data1.GBCBPIBlogPicSeoFilename + '_220.jpg" /></div></div>');
            var rpnl = '<div class="info-video"><ul class="realted-tags-video"></ul> <h1 class="title-video">' + data1.GBCBPIBlogPostTitle + '</h1> <span class="video-item-past-time">' + data1.GBCBPIBlogPostCountViewed + ' بازدید .' + data1.PersianDate + '</span><hr/><ul class="intraction-user"><li data-attr="like" data-liked="0" onclick="like(this)"><a href="#" onclick="return false;"><p>24</p><i class="icon-favorite"></i><span>پسندیدم</span></a></li><li data-attr="save" data-saved="0" onclick="save(this)"><a href="#" onclick="return false;"><i class="icon-library_add"></i><span>ذخیره</span></a></li><li><a href="#" onclick="share(); return false;"><i class="icon-reply"></i><span>اشتراک</span></a></li><li><a href="#" onclick="return false;" class="gotocomment"><i class="icon-add_comment"></i><span>نظر شما</span></a></li><li><a href="#" onclick="return false;"><i class="icon-download"></i><span>دانلود</span></a></li></ul> <hr /></div><div class="yn-bnr" id="ynpos-12144"></div><div class="descvideo"><span class="desc-video">' + data1.GBCBPIBlogPostBody + '</span><div class="fadedesc"></div><a href="#" onclick="return false;" class="showmore" data-selected="0">نمایش بیشتر</a></div><hr />';
            $('.playerel #anothercontainer').append(rpnl);
            var imagescontent = $('div.descvideo img');
            for (var i = 0; i < imagescontent.length; i++) {
                var srcmain = $(imagescontent[i]).attr('src');
                $(imagescontent[i]).attr('src', '#').attr('data-src', srcmain).addClass('inlinepic lazy-image');
            }
            var imginline = $('.desc-video img[data-src*="ckeditor.com"]');
            for (var i = 0; i < imginline.length; i++) {
                $(imginline[i]).addClass('emoji').removeClass('lazy-image').attr('src', $(imginline[i]).attr('data-src'));
            }
            for (var i = 0; i < tags.length; i++) {
                if (tags[i] !== "") {
                    var li = '<li><a href="/media/tag/' + tags[i] + '">' + tags[i] + '</a></li>';
                    $('.realted-tags-video').append(li);
                }
            }
            var rated = data.GetBlogRateById;
            CntLiked = rated.Cntall;
            GenerateComments(data.GetBlogCommentsById_List);
            $('.intraction-user li[data-attr=like] p').text(rated.Cntall);
            for (var i = 0; i < realted.length; i++) {

                var hours = Math.floor(realted[i].PopularityMinutesRead / 3600);
                var minutes = Math.floor(realted[i].PopularityMinutesRead / 60);
                var seconds = realted[i].PopularityMinutesRead % 60;
                var Duration = hours + ':' + minutes > 10 ? ('0' + minutes).slice(-2) : minutes
                    + ':' + ('0' + seconds).slice(-2);
                if (i === 4)
                    $('.outer-related-videos-item').append('<div class="row related-videos-item"><div class="yn-bnr" id="ynpos-12174"></div></div>');
                var relatedItem = '<div class="row related-videos-item"><a href="/media/' + realted[i].Id + '?utm_source=barghkaronmedia&utm_medium=media&utm_campaign=selectrelatedpost&utm_term=insidepage&utm_content=barghkaron" data-num="0" data-src="/Content/Video/Blog/2.mp4" href="#" onclick="PlayVideo(this)"><div class="col-12"><time>' + Duration + '</time><img class="lazy-image" width="260" height="194" alt="برقکارآن :: رسانه تصویری :: ' + realted[i].Title + '" data-src="/Content/Images/Blog/' + realted[i].SeoFilename + '_220.jpg"></div><div class="col-12"><h3>' + realted[i].Title + '</h3><div class="col-12"><span class="video-item-past-time">' + realted[i].CountViewed + ' بازدید .' + realted[i].PersianDate + '</span></div></div></a></div>';
                $('.outer-related-videos-item').append(relatedItem);
            }
            $('.outer-related-videos-item').append('<div class="row related-videos-item"><div class="yn-bnr" id="ynpos-12178"></div></div>');
            lazyImages = [...document.querySelectorAll('.lazy-image')];
            window.addEventListener("scroll", _.throttle(lazyLoad, 16));
            document.title = 'رسانه تصویری برقکارآن | ' + data1.GBCBPIBlogPostTitle;
            var seachvalue = window.location.search;
            window.history.pushState('media/' + Id + '/' + data1.GBCBPIBlogPostTitle.replace(/ /g, "-"), 'رسانه تصویری برقکارآن | ' + data1.GBCBPIBlogPostTitle, '/media/' + Id + '/' + data1.GBCBPIBlogPostTitle.replace(/ /g, "-") + seachvalue);
            //
            mediaVideo = $("#videoarea").get(0);
            var sumtime, currenttime;
            var hours = Math.floor(data1.GBCBPIBPVDuration / 3600);
            data1.GBCBPIBPVDuration %= 3600;
            var minutes = Math.floor(data1.GBCBPIBPVDuration / 60);
            var seconds = data1.GBCBPIBPVDuration % 60;
            var Duration = hours + ':' + minutes > 10 ? ('0' + minutes).slice(-2) : minutes
                + ':' + ('0' + seconds).slice(-2);
            sumtime = Duration;
            currenttime = '00:00';
            $('.playerel #container').after('<p class="remaintimeprev"></p><a onclick="cancelprev()" class="cancelprev"></a>');
            $('.playerel #container').append('<div class="additional-control-players"><img class="posterimg" src="' + poster + '" /><ul class="additonalctrl_topbtns"><li data-click="more" data-click="more"><a href="#" onclick="return false;"><i class="icon-more_vert"></i><span>بیشتر</span></a></li><li data-attr="save" data-saved="0" onclick="save(this)" data-click="save"><a href="#" onclick="return false;"><i class="icon-library_add"></i><span>ذخیره</span></a></li><li onclick="share()" data-click="share" data-click="share"><a href="#" onclick="return false;"><i class="icon-reply"></i><span>اشتراک</span></a></li></ul><span class="title_topscreen">' + data1.GBCBPIBlogPostTitle + '</span></div>');
            $('.additional-control-players').append('<ul class="additonalctrl_bottombtns"><li onclick="fullscreen()" data-click="fullscreen"><a href="#" onclick="return false;"><i class="icon-fullscreen2"></i></a></li><li onclick="exitfullscreen()" data-click="exitfullscreen"><a href="#" onclick="return false;"><i class="icon-fullscreen_exit"></i></a></li></ul>');
            $('.additional-control-players').append('<ul class="additonalctrl_timershow"><li data-click="timershow"><span id="current-time">' + currenttime + '</span>/<span id="sum-time">' + sumtime + '</span></li></ul>');
            $('.additional-control-players').append('<ul class="additonalctrl_players"><li data-click="replay10" onclick="replay10()"><a href="#" onclick="return false;"><i class="icon-replay_10"></i></a></li><li data-click="prev" onclick="prev()"><a href="#" onclick="return false;"><i class="icon-skip_previous"></i></a></li><li data-click="play" onclick="play()"><a href="#" onclick="return false;"><i class="icon-play_arrow"></i></li><li data-click="playinfo" onclick="play()"><a href="#" onclick="return false;">برای پخش ویدئو کلیک کنید.</li><li data-click="replay" onclick="replay()"><a href="#" onclick="return false;"><i class="icon-replay"></i></a></li></a></li><li data-click="pause" onclick="pause()"><a href="#" onclick="return false;"><i class="icon-pause"></i></a></li><li data-click="next" onclick="next()"><a href="#" onclick="return false;"><i class="icon-skip_next"></i></a></li><li data-click="forward10" onclick="forward10()"><a href="#" onclick="return false;"><i class="icon-forward_10"></i></ul>');
            $('.playerel #container .additional-control-players').append('<div class="additional-control-seekbar"><div id="custom-seekbar"><span></span></div></div><div class="additional-control-next"><a href="#" onclick="return false;" title="ویدئوی بعدی" class="next-video"></a></div> <div class="additional-control-prev"><a href="#" onclick="return false;" title="ویدئوی قبلی" class="prev-video"></a></div></div>');
            $('.playerel #container').append('<div class="next-video-outer"><div class="next-video-inner row"><div class="col-3 position-relative outer-loader"><div class="inner-loader"><svg viewBox="0 0 100 100" id="loadf"><path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#eee" stroke-width="3" fill-opacity="0"></path><path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#FFEA82" stroke-width="6" fill-opacity="0" style="stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 295px;"></path></svg></div></div><div class="col-9 pl-0"><span>در حال نمایش ویدئوی بعدی</span><h3>نحوه ساخت چراغ قوه با کدو تنبل. آره میشه.</h3><a class="cancelnextvideo" onclick="cancelnextvideo()">انصراف</a></div></div><div class="backdropinnervideo"></div><img src="/Content/Images/Blog/' + data1.GBCBPIBlogPicSeoFilename + '_220.jpg" />');
            $('.additonalctrl_bottombtns li[data-click=exitfullscreen]').hide();
            $('.additonalctrl_players li[data-click=replay]').hide();


            setInterval(function () {
                var ct = mediaVideo.currentTime;
                var minutes = Math.floor(ct / 60);
                var seconds = Math.floor(ct - minutes * 60)
                var x = minutes < 10 ? "0" + minutes : minutes;
                var y = seconds < 10 ? "0" + seconds : seconds;
                currenttime = x + ":" + y;
                $('#current-time').html(currenttime);
                if (Math.floor(mediaVideo.duration) < 10)
                    $('p.remaintimeprev').html(Math.floor(mediaVideo.duration) - seconds + ' ثانیه تا شروع نمایش ویدئو ');
                if (Math.floor(mediaVideo.duration) > 10) {
                    $('p.remaintimeprev').html(10 - seconds + ' ثانیه تا رد کردن آگهی');
                    if (seconds > 10 && $(mediaVideo).attr('data-playprev') == "0") {
                        $('p.remaintimeprev').hide();
                        $('a.cancelprev').text('رد کردن آگهی').show();
                    }
                }
            }, 1000);


            //set next video
            var nextId = realted.filter(obj => {
                return obj.Id > parseInt(Id)
            });
            var PrevId = realted.filter(obj => {
                return obj.Id < parseInt(Id)
            });
            if (nextId[0]) {
                $('.additional-control-next a.next-video').attr('data-id', nextId[nextId.length - 1].Id);
            }
            else {
                $('.additional-control-next a.next-video').attr('data-id', realted[realted.length - 1].Id);
            }
            if (PrevId[0]) {
                $('.additional-control-prev a.prev-video').attr('data-id', PrevId[0].Id);
            }
            else
                $('.additional-control-prev a.prev-video').attr('data-id', realted[0].Id);

            //set prev video
            var nextId = $('.additional-control-next a.next-video').attr('data-id');
            var nextrow = realted.filter(obj => {
                return obj.Id === parseInt(nextId);
            });
            nextrow = nextrow[0];
            $('.next-video-outer img').addClass('lazy-image').attr('data-src', '/Content/Images/Blog/' + nextrow.SeoFilename + '_220.jpg').attr('src', '#');
            $('.next-video-outer h3').text(nextrow.Title);
            lazyImages = [...document.querySelectorAll('.lazy-image')];
            window.addEventListener("scroll", _.throttle(lazyLoad, 16));
            setTimeout(function () {
                $('#backgroundPreLoading').remove();
                $('#StylesBeforLoad').remove();
            }, 500);

            //CustomizePlayer

            $('#custom-seekbar').css('width', window.innerWidth - 150);
            $('.additional-control-seekbar').css('width', window.innerWidth - 150);
            var vid = document.getElementById("videoarea");
            vid.ontimeupdate = function () {
                $('.additional-control-seekbar').css('top', $('.playerel div#container video').height());
                if ($(mediaVideo).attr('data-playprev') == "1") {
                    var ct = mediaVideo.duration;
                    var minutes = Math.floor(ct / 60);
                    var seconds = Math.floor(ct - minutes * 60)
                    var x = minutes < 10 ? "0" + minutes : minutes;
                    var y = seconds < 10 ? "0" + seconds : seconds;
                    var sumtimeprev = x + ":" + y;
                    $('span#sum-time').text(sumtimeprev);
                    $('ul.additonalctrl_topbtns').show();
                    $('.realted-tags-video').show();
                    $('p.remaintimeprev').hide();
                    $('a.cancelprev').hide();
                    $('.additional-control-players img.posterimg').remove();
                    $('.additonalctrl_players li[data-click=playinfo]').hide();
                    $('.additonalctrl_players li[data-click=replay]').hide();
                    $('.additonalctrl_players li[data-click=play]').hide();
                    $('.additonalctrl_players li[data-click=pause]').show();
                    $('.additonalctrl_players li[data-click=replay10]').show();
                    $('.additonalctrl_players li[data-click=forward10]').show();
                    $('.additonalctrl_players li[data-click=next]').show();
                    $('.additonalctrl_players li[data-click=prev]').show();
                    var percentage = (vid.currentTime / vid.duration) * 100;
                    $("#custom-seekbar span").css("width", percentage + "%");

                    if (mediaVideo.paused) {
                        $('.additional-control-players li[data-click=pause]').hide();
                        $('.additional-control-players li[data-click=play]').show();
                    } else {
                        $('.additional-control-players li[data-click=play]').hide();
                        $('.additional-control-players li[data-click=pause]').show();
                    }
                }
                else {
                    var percentage = (vid.currentTime / vid.duration) * 100;
                    $("#custom-seekbar span").css("width", percentage + "%");
                    $('.realted-tags-video').hide();
                    var ct = mediaVideo.duration;
                    var minutes = Math.floor(ct / 60);
                    var seconds = Math.floor(ct - minutes * 60)
                    var x = minutes < 10 ? "0" + minutes : minutes;
                    var y = seconds < 10 ? "0" + seconds : seconds;
                    var sumtimeprev = x + ":" + y;
                    $('span#sum-time').text(sumtimeprev);
                }
            };

            $('#videoarea').on('loadstart', function (event) {

            });

            $('#videoarea').on('canplay', function (event) {
                setTimeout(function () {
                    $('.outervideoloading').removeClass('showed');
                }, 4500);
            });

            $('video').bind('play', function (e) {
                //$('video').unbind('play');
                $('.additional-control-seekbar').css('top', $('.playerel div#container video').height());
                if ($(mediaVideo).attr('data-playprev') == "0") {
                    $('p.remaintimeprev').show();
                    $('.additonalctrl_players li[data-click=replay]').hide();
                    $('.additonalctrl_players li[data-click=play]').hide();
                    $('.additonalctrl_players li[data-click=pause]').hide();
                    $('.additonalctrl_players li[data-click=replay10]').hide();
                    $('.additonalctrl_players li[data-click=forward10]').hide();
                    $('.additonalctrl_players li[data-click=prev]').hide();
                    $('.additonalctrl_players li[data-click=next]').hide();
                    $('.additonalctrl_players li[data-click=next]').hide();
                    $('.additional-control-players').addClass('showed');
                    $('.additional-control-players').show();
                    $('ul.additonalctrl_topbtns').hide();
                    $('.additonalctrl_players li[data-click=playinfo]').hide();
                    $('.additional-control-players ul.additonalctrl_timershow').show();
                    $('.additional-control-players img.posterimg').hide();
                }
                if ($(mediaVideo).attr('data-playprev') == "1") {
                    //$('.additional-control-players img.posterimg').show();
                    //$('p.remaintimeprev').hide();
                    //$('a.cancelprev').hide();
                    //$('.additonalctrl_players li[data-click=replay]').hide();
                    //$('.additonalctrl_players li[data-click=play]').hide();
                    //$('.additonalctrl_players li[data-click=pause]').show();
                    //$('.additonalctrl_players li[data-click=replay10]').show();
                    //$('.additonalctrl_players li[data-click=forward10]').show();
                    //$('.additonalctrl_players li[data-click=prev]').show();
                    //$('.additonalctrl_players li[data-click=next]').show();
                    //$('.additional-control-players').removeClass('showed');
                    //$('ul.additonalctrl_topbtns').show();
                    //$('.additonalctrl_players li[data-click=playinfo]').show();
                    //$('.additional-control-players ul.additonalctrl_timershow').show();
                }
            });
            $("video").bind("ended", function () {
                //$('video').unbind('ended');
                //$('video').bind('play');
                if ($(mediaVideo).attr('data-playprev') == "0") {
                    $(mediaVideo).attr('src', $(mediaVideo).attr('data-src'));
                    mediaVideo.play();
                    $(mediaVideo).attr('data-playprev', '1');
                }
                else if ($('#status').prop('checked')) {
                    showprogressend();
                }
            });

            $("#custom-seekbar").on("click", function (e) {
                var offset = $(this).offset();
                var left = (e.pageX - offset.left);
                var totalWidth = $("#custom-seekbar").width();
                var percentage = (left / totalWidth);
                var vidTime = vid.duration * percentage;
                vid.currentTime = vidTime;
            });
            BPUAO(data.UserActivityOptions);
            isSavedToWishlist(data.IsSaveToWishList);

            $('#container').append('<div class="additional-control-sharecontent"><div class="share-header"><h5 class="share-title">این ویدئو را به اشتراک بگذارید</h5> <a class="ripple" onclick="closeshare()"><i class="icon-clear"></i></a></div><div class="share-body"><h4>ارسال به:</h4><ul class="sharepost"><li class="ripple" data-target="pinterest"><a href="#" onclick="return false;"><i class="icon-pinterest"></i><span>پینترست</span></a></li><li class="ripple" data-target="facebook"><a href="#" onclick="return false;"><i class="icon-facebook"></i><span>فیس بوک</span></a></li><li class="ripple" data-target="twitter"><a href="#" onclick="return false;"><i class="icon-twitter"></i> <span>توییتر</span></a></li><li class="ripple" data-target="telegram"><a href="#" onclick="return false;"><i class="icon-telegram"></i> <span>تلگرام</span></a></li><li class="ripple" data-target="whatsapp"><a href="#" onclick="return false;"><i class="icon-whatsapp"></i> <span>واتس اپ</span></a></li><li class="ripple" data-target="mail"><a href="#" onclick="return false;"><i class="icon-email"></i> <span>ایمیل</span></a></li></ul><div data-target="copy"> <span id="videolink">https://www.barghkaron.com/media/85/ساخت-چراغ-خواب-با-کاغذ-توالت-در-کمتر-از-یک-ساعت</span><a href="#" onclick="return false;" class="copysharelink ripple" data-clipboard-action="copy" data-clipboard-target="#videolink">کپی</a></div></div></div>');

            $('span#videolink').text('https://www.barghkaron.com/media/' + Id + '/' + data1.GBCBPIBlogPostTitle.replace(/ /g, "-"));

            TrackingGA();
            mediaVideo.volume = 0.2;
            $(mediaVideo).prop('muted', false);
            //$('.additional-control-players').addClass('showed');
            //$('.additional-control-players li[data-click=play]').show();
            //$('.containerPages div.innervideo').empty().append('<p></p><p class="playfirstinfo">برای پخش ویدئو کلیک کنید.</p>');
            //$('.containerPages div.innervideo').find('>:first-child').addClass('playfirst');


            clearInterval(si);
            $($('#loadf path')[1]).css('stroke-dashoffset', 295 + 'px');
            $('.next-video-outer').hide();
            $('.additonalctrl_players li[data-click=replay]').hide();
            $('.additonalctrl_players li[data-click=play]').show();
            $('.additonalctrl_players li[data-click=playinfo]').show();
            $('.additonalctrl_players li[data-click=pause]').hide();
            $('.additonalctrl_players li[data-click=replay10]').hide();
            $('.additonalctrl_players li[data-click=forward10]').hide();
            $('.additonalctrl_players li[data-click=next]').hide();
            $('.additonalctrl_players li[data-click=prev]').hide();
            $('.additional-control-players').addClass('showed');


        });
}

function cancelprev() {
    $(mediaVideo).attr('src', $(mediaVideo).attr('data-src'));
    mediaVideo.play();
    $(mediaVideo).attr('data-playprev', '1');
}

function UserActivity(e, type) {
    showwait();
    var BlogPost_UserActivityOptions = {};
    var url;
    if (type === '0') {
        BlogPost_UserActivityOptions.IsBookmark = $(e).attr('data-isbookmark') === '0' ? true : false;
        isbookmarked = $(e).attr('data-isbookmark') === '0' ? true : false;
        url = '/api/BlogPosts/isFavourites';
    }
    if (type === '1') {
        BlogPost_UserActivityOptions.Liked = $(e).attr('data-liked') === '0' ? true : false;
        liked = $(e).attr('data-liked') === '0' ? true : false;
        unliked = $(e).attr('data-liked') === '1' ? true : false;
        url = '/api/BlogPosts/Liked';
    }
    if (type === '2') {
        BlogPost_UserActivityOptions.Disliked = $(e).attr('data-disliked') === '0' ? true : false;
        disliked = $(e).attr('data-disliked') === '0' ? true : false;
        undiliked = $(e).attr('data-disliked') === '1' ? true : false;
        url = '/api/BlogPosts/DisLiked';
    }
    BlogPost_UserActivityOptions.Blog_PostId = Id;
    var myData = {};
    myData.BlogPost_UserActivityOptions = BlogPost_UserActivityOptions;

    showwait();
    $.ajax({
        type: 'POST',
        url: url,
        data: myData,
        success: function (data) {
            hidewait();
            var results = data.split('#');
            if (results[0] == 'Success') {
                if (results[1] == '#isbook') {
                    $($('.blog-item-show-intractionuser li.bisili')[3]).find('a').attr('data-isbookmark', '1').addClass('isbookmarked');
                    $('.header-pined').find('a.isbookmark').attr('data-isbookmark', '1').addClass('isbookmarked');
                }
                if (results[1] == 'liked') {
                    $('.intraction-user li[data-attr=like]').attr('data-liked', '1').addClass('isliked');
                }
                if (results[1] == 'unliked') {
                    $('.intraction-user li[data-attr=like]').attr('data-liked', '0').removeClass('isliked');
                }
                ShowMsg(0, results[2]);
            }
            if (results[0] == 'Faild') {
                ShowMsg(1, results[1]);
                hidewait();
                if (results[2] === 'LoginFaild') {
                    $('#LoginModal').modal('toggle');
                }
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function keytxtPhoneNumberLogin(e) {
    if (event.keyCode === 13) {
        e.preventDefault();
        $('#LoginModal div#LoginForm-Group #LoginForm').trigger("click");
    }
}

function keytxtActiveCode(e) {
    if (event.keyCode === 13) {
        e.preventDefault();
        $('#ActiveCodeForm div#ActiveCodeForm-Group #ActiveCode').trigger("click");
    }
}

//var si;
//document.addEventListener('ended', function (e) {
//    if ($(e.target).is('video')) {
//        $("#videoarea").bind("ended", function () {
//            if ($('#status').prop('checked')) {
//                $('.next-video-outer img.lazy-image').attr('src', $('.next-video-outer img.lazy-image').attr('data-src'));
//                $('.next-video-outer').show();
//                var i = 295;
//                si = setInterval(function () {
//                    i--;
//                    if (i === 0) {
//                        clearInterval(si);
//                        $($('#loadf path')[1]).css('stroke-dashoffset', 295 + 'px');
//                        $('.next-video-outer').hide();
//                        $('.playerel a.next-video').click();
//                    }
//                    renderProgress(i);
//                }, 50);
//                function renderProgress(i) {
//                    $($('#loadf path')[1]).css('stroke-dashoffset', i + 'px');
//                }
//            }
//        });
//    }
//}, true);


var si = null;
function showprogressend() {
    $('.next-video-outer img.lazy-image').attr('src', $('.next-video-outer img.lazy-image').attr('data-src'));
    $('.next-video-outer').show();
    var i = 295;
    si = window.setInterval(function () {
        i--;
        if (i === 0) {
            $('video').unbind('play');
            $('video').unbind('ended');
            clearInterval(si);
            $($('#loadf path')[1]).css('stroke-dashoffset', 295 + 'px');
            $('.next-video-outer').hide();
            $('.playerel a.next-video').click();
        }
        renderProgress(i);
    }, 50);
}

function renderProgress(i) {
    $($('#loadf path')[1]).css('stroke-dashoffset', i + 'px');
}

function cancelnextvideo() {
    window.clearInterval(si);
    si = null;
    $($('#loadf path')[1]).css('stroke-dashoffset', 295 + 'px');
    $('.next-video-outer').hide();
    $('.additonalctrl_players li[data-click=replay]').show();
    $('.additonalctrl_players li[data-click=play]').hide();
    $('.additonalctrl_players li[data-click=pause]').hide();
    $('.additonalctrl_players li[data-click=replay10]').show();
    $('.additonalctrl_players li[data-click=forward10]').show();
    $('.additional-control-players').addClass('showed');
}

var puases = 0;
var stoacp;
$('body').delegate(".additional-control-players", "click", function () {
    clearTimeout(stoacp);
    if (mediaVideo.paused) {
        $('.additional-control-players li[data-click=pause]').hide();
        $('.additional-control-players li[data-click=play]').show();
        $('.additional-control-players').addClass('showed');
    } else {
        $('.additional-control-players li[data-click=play]').hide();
        $('.additional-control-players li[data-click=pause]').show();
        $('.additional-control-players').addClass('showed');
        if (puases === 0) {
            stoacp = setTimeout(function () {
                if (puases === 0)
                    $('.additional-control-players').removeClass('showed');
            }, 4000);
        }
    }
});

function play() {
    if ($('.additional-control-players').hasClass('showed')) {
        mediaVideo.play();
        puases = 0;
        setTimeout(function () {
            $('.additional-control-players').removeClass('showed');
        }, 2000);
    }
}

function pause() {
    if ($('.additional-control-players').hasClass('showed')) {
        mediaVideo.pause();
        puases = 1;
        $('.additional-control-players li[data-click=pause]').hide();
        $('.additional-control-players li[data-click=play]').show();
        $('.additional-control-players').addClass('showed');
    }
}

function replay() {
    $('.additonalctrl_players li[data-click=replay]').hide();
    $('.additonalctrl_players li[data-click=play]').hide();
    $('.additonalctrl_players li[data-click=pause]').show();
    $('.additional-control-players').removeClass('showed');
    $('.additonalctrl_players li[data-click=replay10]').show();
    $('.additonalctrl_players li[data-click=forward10]').show();
    mediaVideo.play();
}

function prev() {
    $('p.remaintimeprev').remove();
    $('a.cancelprev').remove();
    $('.additional-control-sharecontent');
    if ($('.additional-control-players').hasClass('showed')) {
        $('.playerel a.prev-video').click();
    }
}

function next() {
    $('p.remaintimeprev').remove();
    $('a.cancelprev').remove();
    $('.additional-control-sharecontent');
    if ($('.additional-control-players').hasClass('showed')) {
        $('.playerel a.next-video').click();
    }
}

function forward10() {
    if ($('.additional-control-players').hasClass('showed')) {
        mediaVideo.currentTime = mediaVideo.currentTime + 10;
    }
}

function replay10() {
    if ($('.additional-control-players').hasClass('showed')) {
        mediaVideo.currentTime = mediaVideo.currentTime - 10;
    }
}

function save(e) {
    showwait();
    var Video_WishList = {};
    var url;
    Video_WishList.Enable = $(e).attr('data-saved') === '0' ? true : false;
    Video_WishList.Blog_Post_Video_Id = Id;
    url = '/api/BlogPosts/addtoWishList';
    var myData = {};
    myData.Video_WishList = Video_WishList;

    showwait();
    $.ajax({
        type: 'POST',
        url: url,
        data: myData,
        success: function (data) {
            hidewait();
            var results = data.split('#');
            if (results[0] == 'Success') {
                ShowMsg(0, results[2]);
                if (results[1] === "addtoWishList") {
                    $('.intraction-user li[data-attr=save]').attr('data-saved', '1').addClass('issaved');
                    $('.intraction-user li[data-attr=save]').find('span').text('ذخیره شده');
                    $('.additonalctrl_topbtns li[data-attr=save]').attr('data-saved', '1').addClass('issaved');
                }
                if (results[1] === "removefromWishList") {
                    $('.intraction-user li[data-attr=save]').attr('data-saved', '0').removeClass('issaved');
                    $('.intraction-user li[data-attr=save]').find('span').text('ذخیره');
                    $('.additonalctrl_topbtns li[data-attr=save]').attr('data-saved', '0').removeClass('issaved');
                }
            }
            if (results[0] == 'Faild') {
                ShowMsg(1, results[1]);
                hidewait();
                if (results[2] === 'LoginFaild') {
                    $('#LoginModal').modal('toggle');
                }
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function like(e) {
    var BlogPost_UserActivityOptions = {};
    var url;
    BlogPost_UserActivityOptions.Liked = $(e).attr('data-liked') === '0' ? true : false;
    liked = $(e).attr('data-liked') === '0' ? true : false;
    unliked = $(e).attr('data-liked') === '1' ? true : false;
    url = '/api/BlogPosts/Liked';
    if (BlogPost_UserActivityOptions.Liked) {
        $('.intraction-user li[data-attr=like]').attr('data-liked', '1').addClass('isliked');
        CntLiked = CntLiked + 1;
        $('.intraction-user li[data-attr=like] p').text(CntLiked);
    }
    else {
        CntLiked = CntLiked - 1;
        $('.intraction-user li[data-attr=like] p').text(CntLiked);
        $('.intraction-user li[data-attr=like]').attr('data-liked', '0').removeClass('isliked');
    }
    BlogPost_UserActivityOptions.Blog_PostId = Id;
    var myData = {};
    myData.BlogPost_UserActivityOptions = BlogPost_UserActivityOptions;
    $.ajax({
        type: 'POST',
        url: url,
        data: myData,
        success: function (data) {
            var results = data.split('#');
            if (results[0] == 'Success') {
                if (results[1] == 'liked') {
                }
                if (results[1] == 'unliked') {
                }
                //ShowMsg(0, results[2]);
            }
            if (results[0] == 'Faild') {
                ShowMsg(1, results[1]);
                hidewait();
                if (results[2] === 'LoginFaild') {
                    $('#LoginModal').modal('toggle');
                }
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function fullscreen() {
    if ($('.additional-control-players').hasClass('showed')) {
        $('.additonalctrl_bottombtns li[data-click=fullscreen]').hide();
        $('.additonalctrl_bottombtns li[data-click=exitfullscreen]').show();
        $('.additional-control-seekbar').css('top', '');
        $('#custom-seekbar').css('width', window.innerHeight - 150);
        $('.additional-control-players span.title_topscreen').show();
        if (container.requestFullscreen)
            container.requestFullscreen();
        else if (container.mozRequestFullScreen)
            container.mozRequestFullScreen();
        else if (container.webkitRequestFullscreen)
            container.webkitRequestFullscreen();
        else if (container.msRequestFullscreen)
            container.msRequestFullscreen();
    }
}

function exitfullscreen() {
    if ($('.additional-control-players').hasClass('showed')) {
        $('.additonalctrl_bottombtns li[data-click=fullscreen]').show();
        $('.additonalctrl_bottombtns li[data-click=exitfullscreen]').hide();
        $('.additional-control-seekbar').css('top', '0');
        setTimeout(function () {
            $('.additional-control-seekbar').css('top', $('.playerel div#container video').height());
        }, 700)
        $('#custom-seekbar').css('width', window.innerWidth - 150);
        $('.additional-control-players span.title_topscreen').hide();
        if (document.exitFullscreen) {
            document.exitFullscreen(); // Standard
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen(); // Blink
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen(); // Gecko
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen(); // Old IE
        }
    }
}

function SendComment() {
    if ($('.send-body').val() == '' || typeof ($('.send-body').val()) == undefined ||
        $('.send-mail').val() == '' || typeof ($('.send-mail').val()) == undefined ||
        $('.send-name').val() == '' || typeof ($('.send-name').val()) == undefined) {
        ShowMsg(1, 'اطلاعات خواسته شده را وارد نمائید.')
        if ($('.send-body').val() == '' || typeof ($('.send-body').val()) == undefined) { $('.send-body').trigger('focus'); }
        if ($('.send-mail').val() == '' || typeof ($('.send-mail').val()) == undefined) { $('.send-mail').trigger('focus'); }
        if ($('.send-name').val() == '' || typeof ($('.send-name').val()) == undefined) { $('.send-name').trigger('focus'); }
        return false;
    }

    var Blog_Comment = {};
    Blog_Comment.CommentText = $('.send-body').val();
    Blog_Comment.Name = $('.send-mail').val();
    Blog_Comment.mailAddress = $('.send-name').val();
    Blog_Comment.BlogPostId = $('[id*="hdnPostId"]').val();
    var myData = {};
    myData.Blog_Comment = Blog_Comment;

    var AddBlog_Comment = '/api/BlogPosts/AddBlog_Comment';
    showwait();
    $.ajax({
        type: 'POST',
        url: AddBlog_Comment,
        data: myData,
        success: function (data) {
            hidewait();
            var results = data.split('#');
            if (results[0] == 'Success') {
                $("#ratingModal").modal('hide');
                ShowMsg(0, results[1]);
            }
            if (results[0] == 'Faild') {
                ShowMsg(1, results[1]);
                hidewait();
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

var openshare = 0;
function share() {
    //showbackdrop();
    $('.additional-control-sharecontent').addClass('showed');
    openshare = 1;
    mediaVideo.pause();
    clipboardsharelink = new ClipboardJS('.copysharelink');
    clipboardsharelink.on('success', function (e) {
        ShowMsg(0, 'کپی شد');
    });
    clipboardsharelink.on('error', function (e) {
        ShowMsg(0, 'مجددن سعی کنید');
    });
}

function closeshare() {
    hidebackdrop();
    $('.additional-control-sharecontent').removeClass('showed');
    openshare = 0;
    //if (mediaVideo.played.length > 0)
    //    mediaVideo.play();
}

function copy() {
    var $temp = $("span#videolink");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function BPUAO(data) {
    $('[id*="bpuaohdn"]').val(data);
    var bpuaohdn = $('[id*="bpuaohdn"]').val();
    if (bpuaohdn != null && bpuaohdn != "null" && bpuaohdn != undefined && bpuaohdn !== "") {
        var databpuaohdn = JSON.parse(bpuaohdn);
        if (databpuaohdn.Liked) {
            $('.intraction-user li[data-attr=like]').attr('data-liked', '1').addClass('isliked');
        }
    }
    var tolisted = $('[id*="tolisted"]').val();
    if (tolisted != null && bpuaohdn != "null" && tolisted != undefined && tolisted !== "") {
        if (tolisted == "1") {
            $('.intraction-user li[data-attr=save]').attr('data-saved', '1').addClass('issaved');
            $('.additonalctrl_topbtns li[data-attr=save]').attr('data-saved', '1').addClass('issaved');
        }
    }
}

function isSavedToWishlist(data) {
    if (data === "1") {
        $('.intraction-user li[data-attr=save]').attr('data-saved', '1').addClass('issaved');
        $('.intraction-user li[data-attr=save]').find('span').text('ذخیره شده');
        $('.additonalctrl_topbtns li[data-attr=save]').attr('data-saved', '1').addClass('issaved');
    }
    if (data === "0") {
        $('.intraction-user li[data-attr=save]').attr('data-saved', '0').removeClass('issaved');
        $('.intraction-user li[data-attr=save]').find('span').text('ذخیره');
        $('.additonalctrl_topbtns li[data-attr=save]').attr('data-saved', '0').removeClass('issaved');
    }
}
var loadedcat = 0;
function generatecategory() {
    $($('.blog-option ul')[1]).empty().append('<li><a href="/media"><i class="icon-home"></i>خانه</a></li><li><a href="/media/feed/trending" class="red"><i class="icon-fire"></i>داغ‌ترین‌ها</a></li><li><a href="/media/feed/newest" ><i class="icon-power"></i>تازه&zwnj;ها</a></li><li><hr></li><li><a href="/media/feed/history"><i class="icon-history"></i>تاریخچه</a></li><li><a href="/media/feed/library"><i class="icon-playlist_play"></i>لیست تماشا</a></li><li><a href="/media/feed/favorites" class="red"><i class="icon-heart"></i>علاقمندی&zwnj;ها</a></li><li><hr></li><li class="category"><a href="#"  onclick="return false;">دسته&zwnj; بندی</a></li><li><hr></li><li class="otherlinks hometarget"><a target="_blank" href="/"><i class="icon icon-home"></i>صفحه اصلی برقکارآن</a></li><li class="otherlinks freeconsultation"><a href="#"  onclick="return false;" class="freeconsultationlink"><i class="icon icon-freeconsultation"></i>مشاوره رایگان بازسازی برق ساختمان</a></li><li class="otherlinks mediatarget"><a target="_blank" href="/Blog"><i class="icon-create"></i>وبلاگ برقکارآن</a></li><li class="otherlinks questionstarget"><a target="_blank" href="/Questions"><i class="icon icon-forum"></i>سوال جواب کوتاه</a></li><li class="otherlinks addorder"><a target="_blank" href="/Order"><i class="icon icon-construction"></i>سفارش خدمات برقکاری</a></li><li class="otherlinks partnertaget"><a target="_blank" href="/Hamkaran"><i class="icon-pan_tool"></i>درخواست همکاری</a></li><li class="otherlinks employmenttarget"><a target="_blank" href="/?q=RegisterExpert"><i class="icon-person_add"></i>استخدام برقکار</a></li>');
    if (loadedcat == 0) {
        var GABCM = '/api/BlogPosts/GABC';
        $.getJSON(GABCM)
            .done(function (data) {
                var lis = '';
                for (var i = 0; i < data.length; i++) {
                    lis = lis + '<li><a href="/Blog/Category/' + data[i].EnglishName + '">' + data[i].PersianName + '</a></li>';
                }
                $('.blog-option ul li.category').empty().append('<ul>' + lis + '</ul>');
                loadedcat = 1;
            });
    }
}

function TrackingGA() {
    var origin = window.location.protocol + '//' + window.location.host;
    var pathname = window.location.href.substr(origin.length);
    if (typeof (gtag) != 'undefined')
        gtag('config', 'UA-131304409-3', { 'page_path': pathname });
    else {
        setTimeout(function () {
            gtag('config', 'UA-131304409-3', { 'page_path': pathname });
        }, 3000);
    }
}

function requestPermissions() {
    $.ajax({
        async: false,
        url: "https://www.gstatic.com/firebasejs/5.8.5/firebase-app.js",
        dataType: "script",
        success: function () {
            $.getScript("https://www.gstatic.com/firebasejs/5.8.5/firebase-messaging.js", function () {
                setTimeout(function () {
                    firebase.initializeApp(config),
                        messaging = firebase.messaging(),
                        LoadMessageFireBase();

                    messaging
                        .requestPermission()
                        .then(function () {

                            return messaging.getToken()
                        })
                        .then(function (token) {
                            userToken = localStorage.getItem('pushToken');
                            if (userToken != null) {
                                if (userToken.match(token) == null) {
                                    userToken = token;
                                    AddCustomer_DeviceToken(token);
                                    isSubscribed = true;
                                    localStorage.setItem('pushToken', token);
                                }
                            }
                            else {
                                userToken = token;
                                AddCustomer_DeviceToken(token);
                                isSubscribed = true;
                                localStorage.setItem('pushToken', token);
                            }
                        })
                        .catch(function (err) {
                            ShowMsg(1, 'اجازه ارسال نوتیفیکیشن سفارشات داده نشده است.');
                            setTimeout(function () {
                                ShowMsg(1, 'برقکارآن برای ارسال خبرنامه اجازه ارسال نوتیفیکیشن را نیاز دارد.');
                            }, 2000);
                            localStorage.setItem('pushToken', '');
                            $('.showNotificationModal').addClass('notAllowed').show();
                        });
                }, 2000)
            });
        }
    });
}

function AddCustomer_DeviceToken(userToken) {
    $('.notifShowAllowOrNot').removeClass('showed');
    $("#NotificationRequestModal").modal('hide');
    var Register_DeviceToken = {};
    Register_DeviceToken.DeviceToken = userToken;
    var myData = {};
    myData.Register_DeviceToken = Register_DeviceToken;
    var Add = '/api/PushNotification/RegDtBlg';
    showwait();
    $.ajax({
        type: 'POST',
        url: Add,
        data: myData,
        success: function (data) {
            var results = data.split('#');
            if (results[0] == 'Success') {
                ShowMsg(0, 'تبریک. اشتراک دریافت نوتفیکیشن خبرنامه انجام شد.');
                hidewait();
                $('.showNotificationModal').removeClass('notAllowed');
                localStorage.setItem("notifShowed", "1");
                $('.showNotificationModal').hide();
            }
            if (results[0] == 'Faild') {
                ShowMsg(1, 'سیستم با خطا مواجه شد.');
                hidewait();
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function initializePush() {
    userToken = localStorage.getItem('pushToken')
    isSubscribed = userToken !== null
    updateBtn()
}

function updateBtn() {
    if (Notification.permission === 'denied') {
        return
    }
}

function Subscription() {
    if ($('.txtUserNameSubscription').val() == '' || typeof ($('.txtUserNameSubscription').val()) == undefined) {
        ShowMsg(1, 'نام خود را وارد نمائید.')
        $('.txtUserNameSubscription').trigger('focus');
        return false;
    }
    if ($('.txtEmailSubscription').val() == '' || typeof ($('.txtEmailSubscription').val()) == undefined) {
        ShowMsg(1, 'آدرس ایمیل را وارد نمائید.');
        $('.txtEmailSubscription').trigger('focus');
        return false;
    }
    if (!validateEmail($('.txtEmailSubscription').val())) {
        ShowMsg(1, 'ایمیل وارد شده صحیح نیست');
        $('.txtEmailSubscription').trigger('focus');
        return false;
    }
    var Blog_Subscription = {};
    Blog_Subscription.Email = $('.txtEmailSubscription').val();
    Blog_Subscription.FLName = $('.txtUserNameSubscription').val();
    CallAddSubscription(Blog_Subscription);
}

function Subscriptionmodal() {
    if ($('.txtUserNameSubscription-m').val() == '' || typeof ($('.txtUserNameSubscription-m').val()) == undefined) {
        ShowMsg(1, 'نام خود را وارد نمائید.')
        $('.txtUserNameSubscription-m').trigger('focus');
        return false;
    }
    if ($('.txtEmailSubscription-m').val() == '' || typeof ($('.txtEmailSubscription-m').val()) == undefined) {
        ShowMsg(1, 'آدرس ایمیل را وارد نمائید.');
        $('.txtEmailSubscription-m').trigger('focus');
        return false;
    }
    if (!validateEmail($('.txtEmailSubscription-m').val())) {
        ShowMsg(1, 'ایمیل وارد شده صحیح نیست');
        $('.txtEmailSubscription-m').trigger('focus');
        return false;
    }
    var Blog_Subscription = {};
    Blog_Subscription.Email = $('.txtEmailSubscription-m').val();
    Blog_Subscription.FLName = $('.txtUserNameSubscription-m').val();
    CallAddSubscription(Blog_Subscription);
}

function CallAddSubscription(Blog_Subscription) {
    var myData = {};
    myData.Blog_Subscription = Blog_Subscription;
    var AddOrderReview = '/api/BlogPosts/AddSubscription';
    showwait();
    $.ajax({
        type: 'POST',
        url: AddOrderReview,
        data: myData,
        success: function (data) {
            hidewait();
            var results = data.split('#');
            if (results[0] == 'Success') {
                ShowMsg(0, results[1]);
            }
            if (results[0] == 'Faild') {
                ShowMsg(1, results[1]);
                hidewait();
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
        }
    });
}

function ProgressCountdown(timeleft, text) {
    $(text).val(timeleft);
    $(text).prop('disabled', true);
    $(text).removeClass();
    $(text).addClass('btnCounterTime');
    return new Promise((resolve, reject) => {
        var countdownTimer = setInterval(() => {
            timeleft--;
            $(text).val(timeleft + ' ثانیه تا ارسال مجدد کد');
            if (timeleft <= 0) {
                clearInterval(countdownTimer);
                resolve(true);
                $(text).val('ارسال مجدد کد');
                $(text).prop('disabled', false);
                $(text).removeClass('btnCounterTime');
                $(text).addClass('mainbtn-sm btnLogin bg-red shadow-red');
            }
        }, 1000);
    });
}

function GenerateComments(cmnts) {
    if (cmnts.length > 0) {
        $('.blog-item-show-comments').append('<div class="col-12 cmnts"></div>');
        for (var i = 0; i < cmnts.length; i++) {
            var row = '<div class="row blog-view-CommentBox"><div class="col-9"><div class="row"><div class="col-12">' +
                '<span class="blog-view-CommentBoxUserName">' + cmnts[i].Username + '</span><span class="blog-view-CommentBoxCreatedDate">' + cmnts[i].PersianDate + '</span></div>' +
                '</div></div>' +
                '<div class="col"><div class="row"><div class="col-6 p-0 Helpful"> <a data-item="HelpfulYesTotal" data-id="' + cmnts[i].Id + '" onclick="HelpfulTotal(' + cmnts[i].Id + ',true,this)">' +
                '<span class="HelpfulYesTotal">' + cmnts[i].HelpfulYesTotal + '</span><span data-item="HelpfulYesTotal" data-id="' + cmnts[i].Id + '" class="icon icon-thumbs-up1">' +
                '</span></a></div><div class="col-6 p-0 Helpful"> <a data-item="HelpfulNoTotal" data-id="' + cmnts[i].Id + '" onclick="HelpfulTotal(' + cmnts[i].Id + ',false,this)">' +
                '<span class="HelpfulNoTotal">' + cmnts[i].HelpfulNoTotal + '</span><span data-item="HelpfulNoTotal" data-id="' + cmnts[i].Id + '" class="icon icon-thumbs-down"></span></a></div>' +
                '</div></div><div class="col-12"><span class="blog-view-CommentBoxCommenttext">' + cmnts[i].CommentText + '</span>' +
                '</div><div class="col-12">' + (cmnts[i].ReplyText != null ? '<img src="/assests/common/img/land/logolandsm.png" width="31" height="41"/>' : '') + '<span class="blog-view-CommentBoxReplyText">' + (cmnts[i].ReplyText != null ? cmnts[i].ReplyText : '') + '</span></div></div>';
            $('.blog-item-show-comments div.cmnts').append(row);
        }
    }
}

function HelpfulTotal(BlogCommentId, operation, e) {
    showwait();
    var BlogCommentHelpfulness = {};
    BlogCommentHelpfulness.BlogCommentId = BlogCommentId;
    BlogCommentHelpfulness.BlogPostId = $('[id*="hdnPostId"]').val();
    BlogCommentHelpfulness.WasHelpful = operation;

    var myData = {};
    myData.BlogCommentHelpfulness = BlogCommentHelpfulness;

    var AddBlogPost_UserActivityOptions_Rated = '/api/BlogPosts/AddBlogCommentHelpfulness';
    showwait();

    $(e).css({
        "cursor": "wait",
        "pointer-events": "none"
    });

    $.ajax({
        type: 'POST',
        url: AddBlogPost_UserActivityOptions_Rated,
        data: myData,
        success: function (data) {
            hidewait();
            var results = data.split('#');
            if (results[0] == 'Success') {
                ShowMsg(0, results[1]);
                var BlogCommentId = results[2];
                var WasHelpful = results[3];
                if (WasHelpful)
                    $("span[data-item='HelpfulYesTotal'][data-id='" + BlogCommentId + "']").addClass('active');
                else
                    $("span[data-item='HelpfulNoTotal'][data-id='" + BlogCommentId + "']").addClass('active');

            }
            if (results[0] == 'Faild') {
                ShowMsg(1, results[1]);
                hidewait();
                if (results[2] === 'LoginFaild') {
                    $('#LoginModal').modal('toggle');
                }
            }
        },
        error: function (x, e) {
            ShowMsg(1, 'سیستم با خطا مواجه شد.');
            hidewait();
            $('.HelpfulYesTotal').css({
                "cursor": "auto",
                "pointer-events": "auto"
            });
        }
    });
}