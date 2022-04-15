$(document).ready(function() {

    setTimeout(function() {
        $(".now_time").fadeIn();
        $(".map_field > div").addClass("t-fx");
    }, 2000);

    $("#member").change(function() {
        var member_val = $(this).val();
        member_val = member_val.split(",");
        var chk_selected = $(".insert_member .class_select ul li.disable").length;

        if(chk_selected >= 1) {
            alert("이미 선택된 인원이 있습니다.");
        } else {
            let element = ".insert_member .class_select ul li h4";
            for(var i=0; i < member_val.length; i++) {
                $(element).eq(i).text($.trim(member_val[i]));
            }
        }
        // 입력 후 값을 비워줌
        $(this).val("");
    });

    selectClass();
    function selectClass() {
        $(".insert_member .class_select ul li span").click(function() {
            if($(this).siblings("h4").text() == "미입력" || $(this).siblings("h4").text() == "") {
                alert("선택된 인원이 없습니다.");
                return;
            }

            var class_name = $(this).attr("class");
            var class_div;

            switch(class_name) {
                case "archor" : {
                    var cname1_num = $("#cname1").siblings().text();
                    cname1_num = parseInt(cname1_num);
                    cname1_num += 1;
                    $("#cname1").siblings().text(cname1_num);
                    class_div = 1;
                }; break;
                case "slayer" : {
                    var cname2_num = $("#cname2").siblings().text();
                    cname2_num = parseInt(cname2_num);
                    cname2_num += 1;
                    $("#cname2").siblings().text(cname2_num);
                    class_div = 2;
                }; break;
                case "warload" : {
                    var cname3_num = $("#cname3").siblings().text();
                    cname3_num = parseInt(cname3_num);
                    cname3_num += 1;
                    $("#cname3").siblings().text(cname3_num);
                    class_div = 3;
                }; break;
                case "elementallist" : {
                    var cname4_num = $("#cname4").siblings().text();
                    cname4_num = parseInt(cname4_num);
                    cname4_num += 1;
                    $("#cname4").siblings().text(cname4_num);
                    class_div = 4;
                }; break;
                case "mystic" : {
                    var cname5_num = $("#cname5").siblings().text();
                    cname5_num = parseInt(cname5_num);
                    cname5_num += 1;
                    $("#cname5").siblings().text(cname5_num);
                    class_div = 5;
                }; break;
                case "assassin" : {
                    var cname6_num = $("#cname6").siblings().text();
                    cname6_num = parseInt(cname6_num);
                    cname6_num += 1;
                    $("#cname6").siblings().text(cname6_num);
                    class_div = 6;
                }; break;
                case "gunner" : {
                    var cname7_num = $("#cname7").siblings().text();
                    cname7_num = parseInt(cname7_num);
                    cname7_num += 1;
                    $("#cname7").siblings().text(cname7_num);
                    class_div = 7;
                }; break;
                case "paladin" : {
                    var cname8_num = $("#cname8").siblings().text();
                    cname8_num = parseInt(cname8_num);
                    cname8_num += 1;
                    $("#cname8").siblings().text(cname8_num);
                    class_div = 8;
                }; break;
            }

            var total_sum = $("#total_sum").siblings().text();
            total_sum = parseInt(total_sum);
            total_sum += 1;
            $("#total_sum").siblings().text(total_sum);

            var member_name = $(this).parent().children("h4").text();
            var member_order = $(this).parent().index();
            member_order += 1;

            if(class_div == 1) {
                $(".map_field > div .start_point").append("<div class='card member archor mm"+member_order+"'><span class='card-header'>"+member_name+"</span></div>");
            }

            if(class_div == 2) {
                $(".map_field > div .start_point").append("<div class='card member slayer mm"+member_order+"'><span class='card-header'>"+member_name+"</span></div>");
            }

            if(class_div == 3) {
                $(".map_field > div .start_point").append("<div class='card member warload mm"+member_order+"'><span class='card-header'>"+member_name+"</span></div>");
            }

            if(class_div == 4) {
                $(".map_field > div .start_point").append("<div class='card member elementallist mm"+member_order+"'><span class='card-header'>"+member_name+"</span></div>");
            }

            if(class_div == 5) {
                $(".map_field > div .start_point").append("<div class='card member mystic mm"+member_order+"'><span class='card-header'>"+member_name+"</span></div>");
            }

            if(class_div == 6) {
                $(".map_field > div .start_point").append("<div class='card member assassin mm"+member_order+"'><span class='card-header'>"+member_name+"</span></div>");
            }

            if(class_div == 7) {
                $(".map_field > div .start_point").append("<div class='card member gunner mm"+member_order+"'><span class='card-header'>"+member_name+"</span></div>");
            }

            if(class_div == 8) {
                $(".map_field > div .start_point").append("<div class='card member paladin mm"+member_order+"'><span class='card-header'>"+member_name+"</span></div>");
            }

            $(this).addClass("on");
            $(this).parent().addClass("disable").prepend("<b class='reset_member'>초기화</b>");

            var memberName = $(this);

            setTimeout(function() {
                disableField(memberName);
            }, 100);

            if($(".insert_member .class_select ul li.disable").length == 10) {
                alert("10명 선택완료.\n배치를 시작해주세요.")
            }

            $(".insert_member .member_list p .memeber_cnt").each(function() {
                if(parseInt($(this).text()) >= 3) {
                    $(this).css({"color":"red"});
                    // $(this).parent().append("<span class='over_cnt'>3개 이상</span>");
                    $("#total_sum").siblings().css({"color":"#000"});
                } else {
                    $(this).css({"color":"#000"});
                    // $(this).parent().children().find(".over_cnt").remove();
                    $("#total_sum").siblings().css({"color":"#000"});
                }
            });
        });
    }


    function disableField(memberName) {
        $(memberName).parent().find("b").click(function(e) {
            var member_order2 = $(this).parent().index();
            member_order2 += 1;
            if(confirm("다시 선택하시겠습니까?")) {
                $(this).parent().find("span").each(function() {
                    if($(this).attr("class").indexOf("on") > -1) {
                        var selected_class = $(this).text();
                        switch(selected_class) {
                            case "아" : {classCntMius(1); classMapMius(member_order2); }; break;
                            case "슬" : {classCntMius(2); classMapMius(member_order2);}; break;
                            case "워" : {classCntMius(3); classMapMius(member_order2);}; break;
                            case "엘" : {classCntMius(4); classMapMius(member_order2);}; break;
                            case "미" : {classCntMius(5); classMapMius(member_order2);}; break;
                            case "어" : {classCntMius(6); classMapMius(member_order2);}; break;
                            case "거" : {classCntMius(7); classMapMius(member_order2);}; break;
                            case "팔" : {classCntMius(8); classMapMius(member_order2);}; break;
                        }
                    }
                });

                $(this).parent().removeClass("disable");
                $(this).parent().find("span").removeClass("on");
                $(this).remove();
            } else {
                return;
            }
        });
    }

    function classCntMius(c) {
        var fcnt = $("#cname"+c).siblings().text();
        var ftcnt = $("#total_sum").siblings().text();
        fcnt = parseInt(fcnt);
        ftcnt = parseInt(ftcnt);
        fcnt -= 1;
        ftcnt -= 1;
        $("#cname"+c).siblings().text(fcnt);
        $("#total_sum").siblings().text(ftcnt);
    }

    function classMapMius(d) {
        $(".mm"+d).remove();
    }

    var memberNum;
    $(".column").sortable({
        // 드래그 앤 드롭 단위 css 선택자
        connectWith: ".column",
        // 움직이는 css 선택자
        handle: ".card-header",
        // 움직이지 못하는 css 선택자
        cancel: ".no-move",
        // 이동하려는 location에 추가 되는 클래스
        placeholder: "card-placeholder",
        stop: function(event, ui) {
            $("#map1 > ul li span").text(""); // 드랍될때 텍스트 제거
            $("#map2 > ul li span").text(""); // 드랍될때 텍스트 제거
            $("#map3 > ul li span").text(""); // 드랍될때 텍스트 제거

            $("#map1 .row .column:not(.start_point)").each(function() {
                var this_len = $(this).children().length;
                if(this_len > 0) {

                    var member_class = $(this).children().attr("class");
                    member_class = member_class.replace(/ /gi, "");member_class = member_class.replace("member","");member_class = member_class.replace("card","");member_class = member_class.replace("warload","");member_class = member_class.replace("mystic","");member_class = member_class.replace("gunner","");member_class = member_class.replace("elementallist","");member_class = member_class.replace("slayer","");member_class = member_class.replace("archor","");
                    var set_member = $(this).attr("class");
                    set_member = set_member.replace(/ /gi, "");set_member = set_member.replace("column","");set_member = set_member.replace("ui-sortable","");
                    var member_text = $("#map1 ."+set_member+"").html();
                    $("#map1 > ul > li").find("."+set_member+"").append(member_text);
                }
            });

            $("#map2 .row .column:not(.start_point)").each(function() {
                var this_len = $(this).children().length;
                if(this_len > 0) {

                    var member_class = $(this).children().attr("class");
                    member_class = member_class.replace(/ /gi, "");
                    member_class = member_class.replace("member","");
                    member_class = member_class.replace("card","");
                    member_class = member_class.replace("warload","");
                    member_class = member_class.replace("mystic","");
                    member_class = member_class.replace("gunner","");
                    member_class = member_class.replace("elementallist","");
                    member_class = member_class.replace("slayer","");
                    member_class = member_class.replace("archor","");
                    member_class = member_class.replace("paladin","");
                    var set_member = $(this).attr("class");
                    set_member = set_member.replace(/ /gi, "");set_member = set_member.replace("column","");set_member = set_member.replace("ui-sortable","");
                    var member_text = $("#map2 ."+set_member+"").html();
                    $("#map2 > ul > li").find("."+set_member+"").append(member_text);
                }
            });

            $("#map3 .row .column:not(.start_point)").each(function() {
                var this_len = $(this).children().length;
                if(this_len > 0) {

                    var member_class = $(this).children().attr("class");
                    member_class = member_class.replace(/ /gi, "");member_class = member_class.replace("member","");member_class = member_class.replace("card","");member_class = member_class.replace("warload","");member_class = member_class.replace("mystic","");member_class = member_class.replace("gunner","");member_class = member_class.replace("elementallist","");member_class = member_class.replace("slayer","");member_class = member_class.replace("archor","");
                    var set_member = $(this).attr("class");
                    set_member = set_member.replace(/ /gi, "");set_member = set_member.replace("column","");set_member = set_member.replace("ui-sortable","");
                    var member_text = $("#map3 ."+set_member+"").html();
                    $("#map3 > ul > li").find("."+set_member+"").append(member_text);
                }
            });


            memberNum = $(".map_field > div > ul li span").children().length;
            if(memberNum == 30) {
                if (!confirm("인원 배치가 완료되었습니다\n스크린샷을 저장하시겠습니까?")) {

                } else {
                    $("#capture_btn").fadeIn();
                }
            }
        }
    });
    // 해당 클래스 하위의 텍스트 드래그를 막는다.
    $(".column .card").disableSelection();

    memberNameChange()
    memberInsertValue();

    var member_name_value = "";

    function memberNameChange() {
        $(".member_name").click(function() {
            $(this).parent().prepend("<input class='member_insert_input' type='text' value='"+member_name_value+"'>");
            $(this).remove();
            $(".member_insert_input").focus();

            memberInsertValue();
        });
    }

    function memberInsertValue() {
        $(".member_insert_input").change(function() {
            member_name_value = $(this).val();
            $(this).parent().prepend("<h4 class='member_name'>"+member_name_value+"</h4>");
            $(this).remove();

            member_name_value = "";
            memberNameChange();
        });
    }

    //복사하기
    //nowStatCopy();
    function nowStatCopy() {
        console.log($("#map1 ul li").text());
        console.log($("#map2 ul li").text());
        console.log($("#map3 ul li").text());
    }

    setInterval(function() {
        if(element_now_time == null){
            element_now_time = $(".now_time");
        }
        $(element_now_time).children("span.time").text(timestamp());
        $(element_now_time).children("span.day").text(getday());
    }, 999)

    mapHover(1);
    function mapHover(ht) {
        if (ht == 1) {
            $(".map_field > div").mouseenter(function() {
                $(this).addClass("on").siblings().addClass("off");
            });

            $(".map_field > div").mouseleave(function() {
                $(".map_field > div").removeClass("on").removeClass("off");
            });
        } else {
            $(".map_field > div").removeClass("on").removeClass("off");
        }
    }

    $("#capture_btn span").on("click", function () {
        var nowDay = $(".time").text();
        nowDay += " ";
        nowDay += $(".day").text();

        $(".map_field > div > .row .area_name").css({"animation":"none"});

        mapHover(2);
        $("#capture_btn").fadeOut();
        // 캡쳐 라이브러리를 통해서 canvas 오브젝트를 받고 이미지 파일로 리턴한다.
        html2canvas(document.querySelector("#capture_area")).then(canvas => {
            saveAs(canvas.toDataURL('image/png'), nowDay+"_클랜전.png");
        });

        setTimeout(function() {
            console.log("언제 찍힘?");
            mapHover(1);
        }, 2000);
    });

    function saveAs(uri, filename) {
        // 캡쳐된 파일을 이미지 파일로 내보낸다.
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }
});

let today = null;
let element_now_time = null;

function timestamp() {
    today = new Date();
    today.setHours(today.getHours() + 9);
    // return today.toISOString().replace('T', ' ').substring(0, 19);
    return today.toISOString().replace('T', ' ').substring(0, 10);
}

function getday() {
    var day = new Date();
    var week = new Array('일','월','화','수','목','금','토');
    return week[day.getDay()] + "요일";
}

function remaindTime() {
    var now = new Date(); //현재시간을 구한다.
    var end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),00,00,00);

    //오늘날짜의 저녁 9시 - 종료시간기준
    var open = new Date(now.getFullYear(),now.getMonth(),now.getDate(),21,00,00);

    //오늘날짜의 오전9시 - 오픈시간기준

    var nt = now.getTime(); // 현재의 시간만 가져온다
    var ot = open.getTime(); // 오픈시간만 가져온다
    var et = end.getTime(); // 종료시간만 가져온다.

    if(nt<ot){ //현재시간이 오픈시간보다 이르면 오픈시간까지의 남은 시간을 구한다.
        $(".time").fadeIn();
        $(".time-title").html("클랜전 시작까지 <span style='color:red;'>남은시간</span>");

        sec =parseInt(ot - nt) / 1000;
        day  = parseInt(sec/60/60/24);
        sec = (sec - (day * 60 * 60 * 24));
        hour = parseInt(sec/60/60);
        sec = (sec - (hour*60*60));
        min = parseInt(sec/60);
        sec = parseInt(sec-(min*60));
    if(hour<10){
        hour="0"+hour;

    }

    if(min<10){
        min="0"+min;
    }

    if(sec<10){
        sec="0"+sec;
    }

    $(".hours").html(hour);
    $(".minutes").html(min);
    $(".seconds").html(sec);

    } else if(nt>et) { //현재시간이 종료시간보다 크면
        $(".time-title").html("클랜전 진행중");
        $(".time-title").css({
            "color":"#ed1846;"
        });
    } else {     //현재시간이 오픈시간보다 늦고 마감시간보다 이르면 마감시간까지 남은 시간을 구한다.
        $(".time-title").css({
            "color":"blue"
        });
        $(".time-title").html("클랜전 시작까지 남은 시간");
        sec = parseInt(et - nt) / 1000;
        day  = parseInt(sec/60/60/24);
        sec = (sec - (day * 60 * 60 * 24));
        hour = parseInt(sec/60/60);
        sec = (sec - (hour*60*60));
        min = parseInt(sec/60);
        sec = parseInt(sec-(min*60));
        if(hour<10) {
            hour="0"+hour;
        }
        if(min<10) {
            min="0"+min;
    }
        if(sec<10) {
            sec="0"+sec;
        }
        $(".hours").html(hour);
        $(".minutes").html(min);
        $(".seconds").html(sec);
    }

}

setInterval(remaindTime,999); //1초마다 검사를 해주면 실시간으로 시간을 알 수 있다.

