$(document).ready(function () {

    // for variable lebel
    var var0_label = "var0",
        var1_label = "var1",
        var2_label = "var2",
        var3_label = "var3",
        var4_label = "var4",
        var5_label = "var5",
        var6_label = "var6",
        var7_label = "var7",
        var8_label = "var8",
        var9_label = "var9",
        label = [];

    function getlabel() {
        $.ajax({
            url: "ajax/custom/custom.php?getlabel=1",
            type: "post",
            data: {
                id: esp_id,
                skey: sk,
                data: "sec",
                point: 1
            },
            success: function (data) {

                var json = JSON.parse(data);
                let fulltime = json.time[0];
                // console.log(json);
                if (label[label.length - 1] != fulltime) {

                    if (json.label) {

                        let var_label = JSON.parse(json.label);

                        if (var_label.c0) {
                            var0_label = var_label.c0;
                        }
                        if (var_label.c1) {
                            var1_label = var_label.c1;
                        }
                        if (var_label.c2) {
                            var2_label = var_label.c2;
                        }
                        if (var_label.c3) {
                            var3_label = var_label.c3;
                        }
                        if (var_label.c4) {
                            var4_label = var_label.c4;
                        }
                        if (var_label.c5) {
                            var5_label = var_label.c5;
                        }
                        if (var_label.c6) {
                            var6_label = var_label.c6;
                        }
                        if (var_label.c7) {
                            var7_label = var_label.c7;
                        }
                        if (var_label.c8) {
                            var8_label = var_label.c8;
                        }
                        if (var_label.c9) {
                            var9_label = var_label.c9;
                        }

                    }

                    $("#var-0-value").html(json.var0[0]);
                    $("#var-1-value").html(json.var1[0]);
                    $("#var-2-value").html(json.var2[0]);
                    $("#var-3-value").html(json.var3[0]);
                    $("#var-4-value").html(json.var4[0]);
                    $("#var-5-value").html(json.var5[0]);
                    $("#var-6-value").html(json.var6[0]);
                    $("#var-7-value").html(json.var7[0]);
                    $("#var-8-value").html(json.var8[0]);
                    $("#var-9-value").html(json.var9[0]);

                    $("#var-0-label").html(var0_label);
                    $("#var-1-label").html(var1_label);
                    $("#var-2-label").html(var2_label);
                    $("#var-3-label").html(var3_label);
                    $("#var-4-label").html(var4_label);
                    $("#var-5-label").html(var5_label);
                    $("#var-6-label").html(var6_label);
                    $("#var-7-label").html(var7_label);
                    $("#var-8-label").html(var8_label);
                    $("#var-9-label").html(var9_label);

                    $("#this-time").html(fulltime);

                }
            }
        })
    }

    function updateLastData() {
        $.ajax({
            url: "ajax/custom/custom.php",
            type: "post",
            data: {
                id: esp_id,
                skey: sk,
                data: "sec",
                point: 1
            },
            success: function (data) {

                var json = JSON.parse(data);
                let fulltime = json.time[0];
                // console.log(json);
                if (label[label.length - 1] != fulltime) {

                    $("#var-0-value").html(json.var0[0]);
                    $("#var-1-value").html(json.var1[0]);
                    $("#var-2-value").html(json.var2[0]);
                    $("#var-3-value").html(json.var3[0]);
                    $("#var-4-value").html(json.var4[0]);
                    $("#var-5-value").html(json.var5[0]);
                    $("#var-6-value").html(json.var6[0]);
                    $("#var-7-value").html(json.var7[0]);
                    $("#var-8-value").html(json.var8[0]);
                    $("#var-9-value").html(json.var9[0]);
                    $("#this-time").html(fulltime);
                }
            }
        })
    }

    function pinUpdate() {
        $.ajax({
            url: "ajax/pin.php",
            type: "post",
            data: {
                id: esp_id,
                skey: sk
            },
            success: function (data) {
                // console.log(data);
                var json = JSON.parse(data);
                // console.log(json.data);

                let d5, d6;

                for (var i = 0; i < json.data.length; i++) {
                    if (json.data[i].indexOf("D5") != -1) {
                        d5 = i;
                    } else if (json.data[i].indexOf("D6") != -1) {
                        d6 = i;
                    }
                }

                // console.log(json.data[d5][2]);
                if (json.data[d5][2]==1) {
                    $("#output-D5").attr("checked", true);
                } else {
                    $("#output-D5").attr("checked", false);
                }

                if (json.data[d6][2]==1) {
                    $(".fa-lightbulb").addClass("fa-solid");
                    $(".fa-lightbulb").removeClass("fa-regular");
                    $(".fa-lightbulb").parent().css("color","red");
                } else {
                    $(".fa-lightbulb").removeClass("fa-solid");
                    $(".fa-lightbulb").addClass("fa-regular");
                    $(".fa-lightbulb").parent().css("color","gray");
                }

            }
        })
    }

    $("#output-D5").click(function (e) {
        // alert("click");
        let pin = $(this).attr('id').split("-");
        let value = ($(this).prop('checked')) ? 1 : 0;
        // console.log(pin[1] + " checkbox : " + value);

        $.ajax({
            url: 'ajax/pin.php?id=' + esp_id + '&skey=' + sk + '&pin=' + pin[1] + '&changevalue=' + value,
            success: function (data) {
                // console.log(data);
                if (data == 1) {

                }
            }
        });

    });

    getlabel();
    pinUpdate();

    setInterval(updateLastData, 5000);
    setInterval(pinUpdate, 5000);

    $("#project-tab > li > a").removeClass("active");
    $('#pin-tab').removeClass("active");
    $('#dashboard-tab').addClass("active");
});