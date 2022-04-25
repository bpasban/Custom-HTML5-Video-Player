var stoac;
var CntLiked = 85;
var isMobile = false;

$(document).ready(function () {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    //load content video player
    loadcontentvideo();

    //fire when user mousemove video box for show or hide additional control
    $(".containerPages").delegate("div.playerel div#container", "mouseover", function () {
        if (!isMobile) {
            if (!mediaVideo.paused) {
                $(".additional-control-players").addClass("showed");
                clearTimeout(stoac);
                stoac = setTimeout(function () {
                    clearTimeout(stoac);
                    $(".additional-control-players").removeClass("showed");
                }, 3000);
            } else if (mediaVideo.played.length > 0)
                $(".additional-control-players").addClass("showed");
        }
    });

    //fire when user mousemove video box for show or hide additional control
    $(".containerPages").delegate("div.playerel div#container", "mousemove", function () {
        if (!isMobile) {
            if (!mediaVideo.paused) {
                $(".additional-control-players").addClass("showed");
                clearTimeout(stoac);
                stoac = setTimeout(function () {
                    clearTimeout(stoac);
                    $(".additional-control-players").removeClass("showed");
                }, 3000);
            }
        }
    });

    //fire when user mousemove video box for hide additional control
    $(".containerPages").delegate("div.playerel", "mouseleave", function () {
        if (!mediaVideo.paused) {
            clearTimeout(stoac);
            $(".additional-control-players").removeClass("showed");
        }
    });

    //fire when user clicked video box for show or hide additional control (mobile version)
    $(".containerPages").delegate("div.innervideo", "click", function () {
        $(this).empty().append("<p></p>");
        if (mediaVideo.paused) {
            if (isMobile) {
                if ($(".additional-control-players").hasClass("showed") == false) {
                    mediaVideo.play();
                    $(this).empty().append("<p></p>");
                    $(this).find("p").addClass("play");
                    $(".additional-control-players li[data-click=pause]").show();
                    $(".additional-control-players li[data-click=play]").hide();
                }
            }
            if (!isMobile) { mediaVideo.play(); $(this).find("p").addClass("play"); }
            return false;
        }
        if (mediaVideo.play) {
            if (!isMobile) {
                mediaVideo.pause(); $(this).empty().append("<p></p>");
                $(this).find("p").addClass("paused");
                $(".additional-control-players li[data-click=pause]").hide();
                $(".additional-control-players li[data-click=play]").show();
            }
            else {
                $(".additional-control-players").addClass("showed");
                $(this).addClass('clicked');
                clearTimeout(stoac);
                stoac = setTimeout(function () {
                    clearTimeout(stoac);
                    $(".additional-control-players").removeClass("showed");
                    $("div.innervideo").removeClass('clicked');
                }, 3000);

                $(".additional-control-players li[data-click=pause]").show();
                $(".additional-control-players li[data-click=play]").hide();
            }
        }

    });

    //show next video
    $("body").delegate(".playerel a.next-video", "click", function () {
        $("#anothercontainer").empty();
        $(".additional-control-players").remove();
        $(".next-video-outer").remove();
        Id = $(this).attr("data-id");
        $("video").unbind("play");
        $("video").unbind("ended");
        loadcontentvideo();
    });

    //show prev video
    $("body").delegate(".playerel a.prev-video", "click", function () {
        $("#anothercontainer").empty();
        $(".additional-control-players").remove();
        $(".next-video-outer").remove();
        Id = $(this).attr("data-id");
        $("video").unbind("play");
        $("video").unbind("ended");
        loadcontentvideo();
    });

    //show volume bar
    $(".containerPages").delegate("div.playerel ul.additonalctrl_timershow li[data-click='volume']", "mouseover", function () {
        $(this).addClass("showed");
    });

    //hide volume bar
    $(".containerPages").delegate("div.playerel ul.additonalctrl_timershow li[data-click='volume']", "mouseleave", function () {
        $(this).removeClass("showed");
    });

    //show tooltip preview next video
    $(".containerPages").delegate("div.playerel ul.additonalctrl_players li[data-click='next']", "mouseover", function () {
        $(this).find("div.nextitempopup").addClass("showed");
    });

    //hide tooltip preview next video
    $(".containerPages").delegate("div.playerel ul.additonalctrl_players li[data-click='next']", "mouseleave", function () {
        $(this).find("div.nextitempopup").removeClass("showed");
    });

    //show tooltip preview prev video
    $(".containerPages").delegate("div.playerel ul.additonalctrl_players li[data-click='prev']", "mouseover", function () {
        $(this).find("div.previtempopup").addClass("showed");
    });

    //hide tooltip preview prev video
    $(".containerPages").delegate("div.playerel ul.additonalctrl_players li[data-click='prev']", "mouseleave", function () {
        $(this).find("div.previtempopup").removeClass("showed");
    });
});

//all data (for next or prev video)
//SeoFilename is the name of video and thumbnail
var alldata = [{ Id: 1, Title: "Custome HTML5 Video Player -1", countviewed: "950", date: "2020-09-20", Body: "Hello.I'm Behnam. This custom player is made to display your videos. It is based on HTML, JavaScript and jQuery code. You can use this player on your website. The controllers of this player are displayed correctly on the desktop and Android browsers, but iOS? Nop!.</br>I hope you like this custom player and use it.", Duration: 347, SeoFilename: "9P6WA71R5V3BDE3", tags: ["Custome HTML5 Video Player - 1", "Custome HTML5 Video Player", "Responsive", "For Desktop Browsers", "For Android Browsers", "Easy Code", "Show Even When Rotate Screen", "Mute", "Full Screen", "Increase or Decrease Volum", "With Teaser Video(AD Video) and skip button", "Show Thumb Prev Next Video", "Show Now Time In SeekBar", "Show Time", "Forward 15 seconds", "Backward 15 seconds", "Progress Next Video"] }
    , { Id: 2, Title: "Custome HTML5 Video Player - 2", countviewed: "950", date: "2020-09-20", Body: "Hello.I'm Behnam. This custom player is made to display your videos. It is based on HTML, JavaScript and jQuery code. You can use this player on your website. The controllers of this player are displayed correctly on the desktop and Android browsers, but iOS? Nop!.</br>I hope you like this custom player and use it.", Duration: 119, SeoFilename: "I4SG9V56TJNOM9Y", tags: ["Custome HTML5 Video Player - 2", "Custome HTML5 Video Player", "Responsive", "For Desktop Browsers", "For Android Browsers", "Easy Code", "Show Even When Rotate Screen", "Mute", "Full Screen", "Increase or Decrease Volum", "With Teaser Video(AD Video) and skip button", "Show Thumb Prev Next Video", "Show Now Time In SeekBar", "Show Time", "Forward 15 seconds", "Backward 15 seconds", "Progress Next Video"] }
    , { Id: 3, Title: "Custome HTML5 Video Player - 3", countviewed: "950", date: "2020-09-20", Body: "Hello.I'm Behnam. This custom player is made to display your videos. It is based on HTML, JavaScript and jQuery code. You can use this player on your website. The controllers of this player are displayed correctly on the desktop and Android browsers, but iOS? Nop!.</br>I hope you like this custom player and use it.", Duration: 377, SeoFilename: "N0U1CPIPN2LYAM8", tags: ["Custome HTML5 Video Player - 3", "Custome HTML5 Video Player", "Responsive", "For Desktop Browsers", "For Android Browsers", "Easy Code", "Show Even When Rotate Screen", "Mute", "Full Screen", "Increase or Decrease Volum", "With Teaser Video(AD Video) and skip button", "Show Thumb Prev Next Video", "Show Now Time In SeekBar", "Show Time", "Forward 15 seconds", "Backward 15 seconds", "Progress Next Video"] }
    , { Id: 4, Title: "Custome HTML5 Video Player - 4", countviewed: "950", date: "2020-09-20", Body: "Hello.I'm Behnam. This custom player is made to display your videos. It is based on HTML, JavaScript and jQuery code. You can use this player on your website. The controllers of this player are displayed correctly on the desktop and Android browsers, but iOS? Nop!.</br>I hope you like this custom player and use it.", Duration: 337, SeoFilename: "T6CVG8W5HJOVKH5", tags: ["Custome HTML5 Video Player - 4", "Custome HTML5 Video Player", "Responsive", "For Desktop Browsers", "For Android Browsers", "Easy Code", "Show Even When Rotate Screen", "Mute", "Full Screen", "Increase or Decrease Volum", "With Teaser Video(AD Video) and skip button", "Show Thumb Prev Next Video", "Show Now Time In SeekBar", "Show Time", "Forward 15 seconds", "Backward 15 seconds", "Progress Next Video"] }];


var Id = 2;//default video id
function loadcontentvideo() {
    $(".outer-video-content").addClass("p-0");
    $(".anothercontainer").addClass("loading");
    $(".playerel #container .outervideoloading").empty().append('<div class="card_player"><div class="inner"><div class="outer_icon"><i class="icon-play_arrow"></i></div></div></div>');
    $(".outervideoloading").css("opacity", "1");
    $(".anothercontainer").removeClass("loading");
    $(".outervideoloading").css("opacity", "0");
    $(".card_info-video").remove();
    $(".containerPages .outer-related-videos-item").empty();
    $(".playerel #container .outervideoloading").empty().append('<div class="videowrapper"><div class="spinner spinnervideo"></div></div>');

    //get main data by default video id
    var datamain = alldata.filter((obj) => {
        return obj.Id == parseInt(Id);
    });
    var tags = datamain[0].tags;
    var src = "https://www.barghkaron.com/Content/Video/Blog/" + datamain[0].SeoFilename + ".mp4";
    var poster = "https://www.barghkaron.com/Content/thumbnail/" + datamain[0].SeoFilename + ".jpg";

    //custome ad
    const ads = ["https://www.barghkaron.com/Content/Video/Blog/barghkaron_teaser1.mp4", "https://www.barghkaron.com/Content/Video/Blog/barghkaron_teaser2.mp4", "https://www.barghkaron.com/Content/Video/Blog/barghkaron_teaser3.mp4"];

    const teasersselected = Math.floor(Math.random() * ads.length);
    $("video").attr("src", ads[teasersselected] + "");
    $("video").attr("data-src", src);
    $("video").attr("data-playprev", "0");
    $("video").attr("poster", poster);
    var rpnl =
        '<ul class="realted-tags-video"></ul> <h1 class="title-video">' +
        datamain[0].Title +
        '</h1> <span class="video-item-past-time">' +
        datamain[0].countviewed +
        " Views | " +
        datamain[0].date +
        '</span> <ul class="intraction-user"><li data-attr="like" data-liked="0" onclick="like(this)"><a href="#"  onclick="return false;"><p>24</p><i class="icon-favorite"></i><span>Like</span></a></li><li data-attr="save" data-saved="0" onclick="save(this)"><a href="#"  onclick="return false;"><i class="icon-library_add"></i><span>Save</span></a></li><li><a onclick="share()"><i class="icon-reply"></i><span>Sare</span></a></li><li><a href="#" onclick="return false;" class="gotocomment"><i class="icon-add_comment"></i><span>Comment</span></a></li><li><a href="#"  onclick="return false;"><i class="icon-download"></i><span>Download</span></a></li></ul> <hr /><div class="yn-bnr" id="ynpos-12144"></div><div class="descvideo"><span class="desc-video">' +
        datamain[0].Body +
        '</span><div class="fadedesc"></div><a href="#" onclick="return false;" class="showmore" data-selected="0">more</a></div><hr />';
    $(".playerel #anothercontainer").append(rpnl);

    //append tags
    for (var i = 0; i < tags.length; i++) {
        if (tags[i] !== "") {
            var li =
                '<li><a href="/media/tag/' + tags[i] + '">' + tags[i] + "</a></li>";
            $(".realted-tags-video").append(li);
        }
    }

    document.Title = "Behnam Pasban | " + datamain[0].Title;

    //set count like (customer)
    $(".intraction-user li[data-attr=like] p").text(CntLiked);

    mediaVideo = $("#videoarea").get(0);//get video object
    var sumtime, currenttime;
    var hours = Math.floor(datamain[0].Duration / 3600);
    datamain[0].Duration %= 3600;
    var minutes = Math.floor(datamain[0].Duration / 60);
    var seconds = datamain[0].Duration % 60;
    var Duration = hours + ":" + minutes > 10 ? ("0" + minutes).slice(-2) : minutes + ":" + ("0" + seconds).slice(-2);
    sumtime = Duration;
    currenttime = "00:00";
    $(".playerel #container").append(
        '<p class="remaintimeprev"></p><a onclick="cancelprev()" class="cancelprev"></a><div class="additional-control-players"><ul class="additonalctrl_topbtns"><li data-click="more" data-click="more"><a href="#"  onclick="return false;"><i class="icon-more_vert"></i><span>بیشتر</span></a></li><li data-attr="save" data-saved="0" onclick="save(this)" data-click="save"><a href="#"  onclick="return false;"><i class="icon-library_add"></i><span>ذخیره</span></a></li><li onclick="share()" data-click="share" data-click="share"><a href="#"  onclick="return false;"><i class="icon-reply"></i><span>اشتراک</span></a></li></ul><span class="title_topscreen">' +
        datamain[0].Title +
        "</span></div>"
    );

    //append additional bottom controls
    $(".additional-control-players").append(
        '<ul class="additonalctrl_bottombtns"><li onclick="fullscreen()" data-click="fullscreen"><a href="#"  onclick="return false;"><i class="icon-fullscreen2"></i></a></li><li onclick="exitfullscreen()" data-click="exitfullscreen"><a href="#"  onclick="return false;"><i class="icon-fullscreen_exit"></i></a></li></ul>'
    );

    //append timer show
    $(".additional-control-players").append(
        '<ul class="additonalctrl_timershow"><li data-click="timershow"><span id="current-time">' +
        currenttime +
        '</span>/<span id="sum-time">' +
        sumtime +
        '</span></li><li data-click="volume"><a href="#"  onclick="return false;"><i class="icon-volume_down"></i></a><input type="range" name="playbackRate" class="volume" min="0" max="1" step="0.01" value="0.3"></li></ul>'
    );

    //append additional controls
    $(".additional-control-players").append('<ul class="additonalctrl_players"><li data-click="replay10" onclick="replay10()"><a href="#"  onclick="return false;"><i class="icon-replay_10"></i></a></li><li data-click="prev" onclick="prev()"><a href="#"  onclick="return false;"><i class="icon-skip_previous"></i></a></li><li data-click="play" onclick="play()"><a href="#"  onclick="return false;"><i class="icon-play_arrow"></i><li data-click="replay" onclick="replay()"><a href="#"  onclick="return false;"><i class="icon-replay"></i></a></li></a></li><li data-click="pause" onclick="pause()"><a href="#"  onclick="return false;"><i class="icon-pause"></i></a></li><li data-click="next" onclick="next()"><a href="#"  onclick="return false;"><i class="icon-skip_next"></i></a></li><li data-click="forward10" onclick="forward10()"><a href="#"  onclick="return false;"><i class="icon-forward_10"></i></ul>');

    //append seekbar
    $(".playerel #container .additional-control-players").append('<div class="additional-control-seekbar"><span class="time"></span><canvas id="canvas"></canvas><div id="custom-seekbar"><span></span></div></div><div class="additional-control-next"><a href="#" onclick="return false;" title="ویدئوی next" class="next-video"></a></div> <div class="additional-control-prev"><a href="#" onclick="return false;" title="ویدئوی prev" class="prev-video"></a></div></div>');

    //append next video container (show when video ended)
    $(".playerel #container").append(
        '<div class="next-video-outer"><div class="next-video-inner row"><div class="col-3 position-relative outer-loader"><div class="inner-loader"><svg viewBox="0 0 100 100" id="loadf"><path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#eee" stroke-width="3" fill-opacity="0"></path><path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#FFEA82" stroke-width="6" fill-opacity="0" style="stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 295px;"></path></svg></div></div><div class="col-8"><span>Showing the next video</span><h3></h3><a class="cancelnextvideo" onclick="cancelnextvideo()">cancel</a></div></div><div class="backdropinnervideo"></div><img src="./Content/thumbnail/' +
        datamain[0].Title +
        '_300.jpg" />'
    );
    $(".additonalctrl_bottombtns li[data-click=exitfullscreen]").hide();
    $(".additonalctrl_players li[data-click=replay]").hide();
    $(".additional-control-players li[data-click=play]").hide();
    mediaVideo.volume = 0.2;

    setInterval(function () {
        var ct = mediaVideo.currentTime;
        var minutes = Math.floor(ct / 60);
        var seconds = Math.floor(ct - minutes * 60);
        var x = minutes < 10 ? "0" + minutes : minutes;
        var y = seconds < 10 ? "0" + seconds : seconds;
        currenttime = x + ":" + y;
        $("#current-time").html(currenttime);
        if (Math.floor(mediaVideo.duration) < 10)
            $("p.remaintimeprev").html(Math.floor(mediaVideo.duration) - seconds + " seconds to start playing the video");
        if (Math.floor(mediaVideo.duration) > 10) {
            $("p.remaintimeprev").html(10 - seconds + " seconds to start playing the video ");
            if (seconds > 10 && $(mediaVideo).attr("data-playprev") == "0") {
                $("p.remaintimeprev").hide();
                $("a.cancelprev").text("Skip ad").show();
            }
        }
    }, 1000);

    //set next video
    var nextId = alldata.filter((obj) => {
        return obj.Id > parseInt(Id);
    });

    //set prev video
    var PrevId = alldata.filter((obj) => {
        return obj.Id < parseInt(Id);
    });
    if (nextId[0]) {
        $(".additional-control-next a.next-video").attr("data-id", nextId[nextId.length - 1].Id);
    } else {
        $(".additional-control-next a.next-video").attr("data-id", alldata[alldata.length - 1].Id);
    }
    if (PrevId[0]) {
        $(".additional-control-prev a.prev-video").attr("data-id", PrevId[0].Id);
    } else
        $(".additional-control-prev a.prev-video").attr("data-id", alldata[0].Id);

    //set prev video
    var nextId = $(".additional-control-next a.next-video").attr("data-id");
    var nextrow = alldata.filter((obj) => {
        return obj.Id === parseInt(nextId);
    });
    nextrow = nextrow[0];
    $(".next-video-outer img").attr("src", "https://www.barghkaron.com/Content/thumbnail/" + nextrow.SeoFilename + ".jpg");
    $(".next-video-outer h3").text(nextrow.Title);
    setTimeout(function () {
        $("#backgroundPreLoading").remove();
        $("#StylesBeforLoad").remove();
    }, 500);

    //CustomizePlayer
    var vid = document.getElementById("videoarea");
    vid.ontimeupdate = function () {
        if (window.innerWidth < 768) {
            $('.additional-control-seekbar').css('top', $('.playerel div#container video').height());
            $('#custom-seekbar').css('width', window.innerWidth);
        }
        var ct = mediaVideo.duration;
        var minutes = Math.floor(ct / 60);
        var seconds = Math.floor(ct - minutes * 60);
        var x = minutes < 10 ? "0" + minutes : minutes;
        var y = seconds < 10 ? "0" + seconds : seconds;
        var sumtimeprev = x + ":" + y;
        $("span#sum-time").text(sumtimeprev);
        if (vid.currentTime < 3)
            $(".containerPages div.innervideo").empty();

        var percentage = (vid.currentTime / vid.duration) * 100;
        $("#custom-seekbar span").css("width", percentage + "%");
    };

    //go to choose time video
    $("#custom-seekbar").on("click", function (e) {
        var offset = $(this).offset();
        var left = e.pageX - offset.left;
        var totalWidth = $("#custom-seekbar").width();
        var percentage = left / totalWidth;
        var vidTime = vid.duration * percentage;
        vid.currentTime = vidTime;
    });

    $("#custom-seekbar").mouseover(function (e) {
        var offset = $(this).offset();
        var left = e.pageX - offset.left;
        var totalWidth = $("#custom-seekbar").width();
        var percentage = left / totalWidth;
        var vidTime = vid.duration * percentage;
        $("div.additional-control-seekbar span.time")
            .text(gettimenow(vidTime))
            .css("left", left + 50)
            .addClass("showed");
    });

    //show now time in seekbar
    $("#custom-seekbar").mousemove(function (e) {
        var offset = $(this).offset();
        var left = e.pageX - offset.left;
        var totalWidth = $("#custom-seekbar").width();
        var percentage = left / totalWidth;
        var vidTime = vid.duration * percentage;
        $("div.additional-control-seekbar span.time")
            .text(gettimenow(vidTime))
            .css("left", left + 50)
            .addClass("showed");
    });

    //hide now time in seekbar
    $("#custom-seekbar").mouseout(function (e) {
        var offset = $(this).offset();
        var left = e.pageX - offset.left;
        var totalWidth = $("#custom-seekbar").width();
        var percentage = left / totalWidth;
        var vidTime = vid.duration * percentage;
        $("div.additional-control-seekbar span.time")
            .text(gettimenow(vidTime))
            .removeClass("showed");
    });

    //change volume
    $(".volume").on("change mousemove", function () {
        var val = ($(this).val() - $(this).attr("min")) / ($(this).attr("max") - $(this).attr("min"));

        $(this).css("background-image", "-webkit-gradient(linear, left top, right top, " + "color-stop(" + val + ", #fff), " + "color-stop(" + val + ", #3a3a3a)" + ")");

        if (val <= 0.02)
            $('.additonalctrl_timershow li[data-click="volume"] a i').removeClass().addClass("icon-volume_off");

        if (val < 0.25 && val > 0.05)
            $('.additonalctrl_timershow li[data-click="volume"] a i').removeClass().addClass("icon-volume_mute");

        if (val >= 0.25 && val <= 0.75)
            $('.additonalctrl_timershow li[data-click="volume"] a i').removeClass().addClass("icon-volume_down");

        if (val >= 0.75)
            $('.additonalctrl_timershow li[data-click="volume"] a i').removeClass().addClass("icon-volume_up");

        mediaVideo.volume = $(this).val();
    });

    $("#videoarea").on("loadstart", function (event) {
        $(".outervideoloading").addClass("showed");
    });

    $("#videoarea").on("canplay", function (event) {
        setTimeout(function () {
            $(".outervideoloading").removeClass("showed");
        }, 500);
    });

    mediaVideo.addEventListener("progress", function () {
        var range = 0;
        var bf = this.buffered;
        var time = this.currentTime;
        while (!(bf.start(range) <= time && time <= bf.end(range))) {
            range += 1;
        }
        var loadStartPercentage = bf.start(range) / this.Duration;
        var loadEndPercentage = bf.end(range) / this.Duration;
        var loadPercentage = loadEndPercentage - loadStartPercentage;
    });

    nextId = $(".additional-control-next a.next-video").attr("data-id");
    prevId = $(".additional-control-prev a.prev-video").attr("data-id");
    var nextrows = alldata.filter((obj) => {
        return obj.Id === parseInt(nextId);
    });
    var nextitemtime = calcstringDuration(nextrows[0].Duration);

    var prevrows = alldata.filter((obj) => {
        return obj.Id === parseInt(prevId);
    });
    var previtemtime = calcstringDuration(prevrows[0].Duration);

    //append html preview next and prev video
    //when mouse over this element showed
    $('.additonalctrl_players li[data-click="next"]').append(
        '<div class="nextitempopup"> <img width="300" height="150" alt="Custome HTML5 Video Player :: ' +
        nextrows[0].Title +
        '" src="https://www.barghkaron.com/Content/thumbnail/' +
        nextrows[0].SeoFilename +
        '.jpg"> <span>' +
        nextrows[0].Title +
        "</span> <time>" +
        nextitemtime +
        "</time></div>"
    );
    $('.additonalctrl_players li[data-click="prev"]').append(
        '<div class="previtempopup"> <img width="300" height="150" alt="Custome HTML5 Video Player :: ' +
        prevrows[0].Title +
        '" src="https://www.barghkaron.com/Content/thumbnail/' +
        prevrows[0].SeoFilename +
        '.jpg"> <span>' +
        prevrows[0].Title +
        "</span> <time>" +
        previtemtime +
        "</time></div>"
    );

    //mute video when video loaded for first time
    $(mediaVideo).prop("muted", false);

    setTimeout(function () {
        var isPlaying =
            mediaVideo.currentTime > 0 &&
            !mediaVideo.paused &&
            !mediaVideo.ended &&
            mediaVideo.readyState > mediaVideo.HAVE_CURRENT_DATA;
        if (!isPlaying) {
            $(".containerPages div.innervideo")
                .empty()
                .append(
                '<p></p><p class="playfirstinfo">Click to play video.</p>'
                );
            $(".containerPages div.innervideo")
                .find(">:first-child")
                .addClass("playfirst");
        }
    }, 1000);

    //when video play
    $("video").bind("play", function (e) {
        //$('video').unbind('play');
        if ($(mediaVideo).attr("data-playprev") == "0") {
            var ct = mediaVideo.duration;
            var minutes = Math.floor(ct / 60);
            var seconds = Math.floor(ct - minutes * 60);
            var x = minutes < 10 ? "0" + minutes : minutes;
            var y = seconds < 10 ? "0" + seconds : seconds;
            var sumtimeprev = x + ":" + y;

            $("span#sum-time").text(sumtimeprev);
            $("p.remaintimeprev").show();
            $(".additonalctrl_players li[data-click=replay]").hide();
            $(".additonalctrl_players li[data-click=play]").hide();
            $(".additonalctrl_players li[data-click=pause]").show();
            $(".additonalctrl_players li[data-click=replay10]").hide();
            $(".additonalctrl_players li[data-click=forward10]").hide();
            $(".additonalctrl_players li[data-click=prev]").hide();
            $(".additonalctrl_players li[data-click=next]").hide();
            $(".additonalctrl_players li[data-click=next]").hide();
            //$('.additional-control-players ul.additonalctrl_timershow').hide();
        }
        if ($(mediaVideo).attr("data-playprev") == "1") {
            var ct = mediaVideo.duration;
            var minutes = Math.floor(ct / 60);
            var seconds = Math.floor(ct - minutes * 60);
            var x = minutes < 10 ? "0" + minutes : minutes;
            var y = seconds < 10 ? "0" + seconds : seconds;
            var sumtimeprev = x + ":" + y;

            $("span#sum-time").text(sumtimeprev);
            $("p.remaintimeprev").hide();
            $("a.cancelprev").hide();
            $(".additonalctrl_players li[data-click=replay]").hide();
            $(".additonalctrl_players li[data-click=play]").hide();
            $(".additonalctrl_players li[data-click=pause]").show();
            $(".additonalctrl_players li[data-click=replay10]").show();
            $(".additonalctrl_players li[data-click=forward10]").show();
            $(".additonalctrl_players li[data-click=prev]").show();
            $(".additonalctrl_players li[data-click=next]").show();
            //$('.additional-control-players ul.additonalctrl_timershow').show();
        }
    });

    //fire when video eneded
    //data-playprev == 0     ======> ads videos
    $("video").bind("ended", function () {
        if ($(mediaVideo).attr("data-playprev") == "0") {
            $(mediaVideo).attr("src", $(mediaVideo).attr("data-src"));
            mediaVideo.play();
            $(mediaVideo).attr("data-playprev", "1");
        } else if (true) {
            showprogressend();
        }
    });
}

var si = null;
//show progress bar whene video ended
function showprogressend() {
    $(".next-video-outer").show();
    var i = 295;
    si = window.setInterval(function () {
        i--;
        if (i === 0) {
            $("video").unbind("play");
            $("video").unbind("ended");
            clearInterval(si);
            $($("#loadf path")[1]).css("stroke-dashoffset", 295 + "px");
            $(".next-video-outer").hide();
            $(".playerel a.next-video").click();
        }
        renderProgress(i);
    }, 50);
}

function renderProgress(i) {
    $($("#loadf path")[1]).css("stroke-dashoffset", i + "px");
}

function gettimenow(sum) {
    sum = Math.floor(sum);
    hours = Math.floor(sum / 3600);
    minutes = Math.floor(sum / 60);
    seconds = sum % 60;
    var Duration =
        hours + ":" + minutes > 10
            ? ("0" + minutes).slice(-2)
            : minutes + ":" + ("0" + seconds).slice(-2);
    return Duration;
}

//calculate video time by seconds
function calcstringDuration(Durationdt) {
    var sumtime, currenttime;
    var hours = Math.floor(Durationdt / 3600);
    Durationdt %= 3600;
    var minutes = Math.floor(Durationdt / 60);
    var seconds = Durationdt % 60;
    var Duration =
        hours + ":" + minutes > 10
            ? ("0" + minutes).slice(-2)
            : minutes + ":" + ("0" + seconds).slice(-2);
    return Duration;
}

//cancel next video and show replay icon for user
function cancelnextvideo() {
    window.clearInterval(si);
    si = null;
    $($("#loadf path")[1]).css("stroke-dashoffset", 295 + "px");
    $(".next-video-outer").hide();
    $(".additonalctrl_players li[data-click=replay]").show();
    $(".additonalctrl_players li[data-click=play]").hide();
    $(".additonalctrl_players li[data-click=pause]").hide();
    $(".additonalctrl_players li[data-click=replay10]").show();
    $(".additonalctrl_players li[data-click=forward10]").show();
    $(".additional-control-players").addClass("showed");
    $("div.innervideo").addClass('clicked');
}

var puases = 0;

//play video function
function play() {
    if ($(".additional-control-players").hasClass("showed")) {
        mediaVideo.play();
        puases = 0;
        clearTimeout(stoac);
        stoac = setTimeout(function () {
            clearTimeout(stoac);
            $(".additional-control-players").removeClass("showed");
            $("div.innervideo").removeClass('clicked');
        }, 3000);
        return false;
    }
}

//pause video function
function pause(e) {
    if ($(".additional-control-players").hasClass("showed")) {
        mediaVideo.pause();
        puases = 1;
        $(".additional-control-players li[data-click=pause]").hide();
        $(".additional-control-players li[data-click=play]").show();
        clearTimeout(stoac);
        stoac = setTimeout(function () {
            clearTimeout(stoac);
            $(".additional-control-players").removeClass("showed");
            $("div.innervideo").removeClass('clicked');
        }, 100000);
    }
}

//replay video function
function replay() {
    $(".additonalctrl_players li[data-click=replay]").hide();
    $(".additonalctrl_players li[data-click=play]").hide();
    $(".additonalctrl_players li[data-click=pause]").show();
    $(".additional-control-players").removeClass("showed");
    $(".additonalctrl_players li[data-click=replay10]").show();
    $(".additonalctrl_players li[data-click=forward10]").show();
    $("div.innervideo").removeClass('clicked');
    mediaVideo.play();
}

//prev video function
function prev() {
    $("p.Duration").remove();
    $("a.cancelprev").remove();
    if ($(".additional-control-players").hasClass("showed")) {
        $(".playerel a.prev-video").click();
    }
}

//next video function
function next() {
    $("p.remaintimeprev").remove();
    $("a.cancelprev").remove();
    if ($(".additional-control-players").hasClass("showed")) {
        $(".playerel a.next-video").click();
    }
}

//forward 10 seconds video function
function forward10() {
    if ($(".additional-control-players").hasClass("showed")) {
        mediaVideo.currentTime = mediaVideo.currentTime + 10; clearTimeout(stoac);
        stoac = setTimeout(function () {
            clearTimeout(stoac);
            $(".additional-control-players").removeClass("showed");
            $("div.innervideo").removeClass('clicked');
        }, 3000);
    }
}

//backward 10 seconds video function
function replay10() {
    if ($(".additional-control-players").hasClass("showed")) {
        mediaVideo.currentTime = mediaVideo.currentTime - 10; clearTimeout(stoac);
        stoac = setTimeout(function () {
            clearTimeout(stoac);
            $(".additional-control-players").removeClass("showed");
            $("div.innervideo").removeClass('clicked');
        }, 3000);

    }
}

//Fullscreen video function
var isfullscreen = 0;
function fullscreen() {
    if ($(".additional-control-players").hasClass("showed")) {
        clearTimeout(stoac);
        stoac = setTimeout(function () {
            clearTimeout(stoac);
            $(".additional-control-players").removeClass("showed");
            $("div.innervideo").removeClass('clicked');
        }, 3000);
        isfullscreen = 1;
        $(".additonalctrl_bottombtns li[data-click=fullscreen]").hide();
        $(".additonalctrl_bottombtns li[data-click=exitfullscreen]").show();
        if (container.requestFullscreen) container.requestFullscreen();
        else if (container.mozRequestFullScreen) container.mozRequestFullScreen();
        else if (container.webkitRequestFullscreen)
            container.webkitRequestFullscreen();
        else if (container.msRequestFullscreen) container.msRequestFullscreen();
    }
}

//Exit Fullscreen video function
function exitfullscreen() {
    if ($(".additional-control-players").hasClass("showed")) {
        clearTimeout(stoac);
        stoac = setTimeout(function () {
            clearTimeout(stoac);
            $(".additional-control-players").removeClass("showed");
            $("div.innervideo").removeClass('clicked');
        }, 3000);
        isfullscreen = 0;
        $(".additonalctrl_bottombtns li[data-click=fullscreen]").show();
        $(".additonalctrl_bottombtns li[data-click=exitfullscreen]").hide();
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

//Like video function
function like(e) {
    liked = $(e).attr('data-liked') === '0' ? true : false;
    if (liked) {
        $('.intraction-user li[data-attr=like]').attr('data-liked', '1').addClass('isliked');
        CntLiked = CntLiked + 1;
        $('.intraction-user li[data-attr=like] p').text(CntLiked);
    } else {
        $('.intraction-user li[data-attr=like]').attr('data-liked', '0').removeClass('isliked');
        CntLiked = CntLiked - 1;
        $('.intraction-user li[data-attr=like] p').text(CntLiked);
    }

}

//cancel ad function
function cancelprev() {
    $(mediaVideo).attr("src", $(mediaVideo).attr("data-src"));
    mediaVideo.play();
    $(mediaVideo).attr("data-playprev", "1");
}