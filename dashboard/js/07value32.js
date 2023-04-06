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
        var10_label = "var10",
        var11_label = "var11",
        var12_label = "var12",
        var13_label = "var13",
        var14_label = "var14",
        var15_label = "var15",
        var16_label = "var16",
        var17_label = "var17",
        var18_label = "var18",
        var19_label = "var19",
        var20_label = "var20",
        var21_label = "var21",
        var22_label = "var22",
        var23_label = "var23",
        var24_label = "var24",
        var25_label = "var25",
        var26_label = "var26",
        var27_label = "var27",
        var28_label = "var28",
        var29_label = "var29",
        var30_label = "var30",
        var31_label = "var31";

    //last data
    var var0 = [],
        var1 = [],
        var2 = [],
        var3 = [],
        var4 = [],
        var5 = [],
        var6 = [],
        var7 = [],
        var8 = [],
        var9 = [],
        var10 = [],
        var11 = [],
        var12 = [],
        var13 = [],
        var14 = [],
        var15 = [],
        var16 = [],
        var17 = [],
        var18 = [],
        var19 = [],
        var20 = [],
        var21 = [],
        var22 = [],
        var23 = [],
        var24 = [],
        var25 = [],
        var26 = [],
        var27 = [],
        var28 = [],
        var29 = [],
        var30 = [],
        var31 = [],
        label = [];
    var lastupdate;

    // today and yesterday
    var var0_today = [],
        var1_today = [],
        var2_today = [],
        var3_today = [],
        var4_today = [],
        var5_today = [],
        var6_today = [],
        var7_today = [],
        var8_today = [],
        var9_today = [],
        var10_today = [],
        var11_today = [],
        var12_today = [],
        var13_today = [],
        var14_today = [],
        var15_today = [],
        var16_today = [],
        var17_today = [],
        var18_today = [],
        var19_today = [],
        var20_today = [],
        var21_today = [],
        var22_today = [],
        var23_today = [],
        var24_today = [],
        var25_today = [],
        var26_today = [],
        var27_today = [],
        var28_today = [],
        var29_today = [],
        var30_today = [],
        var31_today = [],
        label_day = [];

    // this mouth and last month
    var var0_thismouth = [],
        var1_thismouth = [],
        var2_thismouth = [],
        var3_thismouth = [],
        var4_thismouth = [],
        var5_thismouth = [],
        var6_thismouth = [],
        var7_thismouth = [],
        var8_thismouth = [],
        var9_thismouth = [],
        var10_thismouth = [],
        var11_thismouth = [],
        var12_thismouth = [],
        var13_thismouth = [],
        var14_thismouth = [],
        var15_thismouth = [],
        var16_thismouth = [],
        var17_thismouth = [],
        var18_thismouth = [],
        var19_thismouth = [],
        var20_thismouth = [],
        var21_thismouth = [],
        var22_thismouth = [],
        var23_thismouth = [],
        var24_thismouth = [],
        var25_thismouth = [],
        var26_thismouth = [],
        var27_thismouth = [],
        var28_thismouth = [],
        var29_thismouth = [],
        var30_thismouth = [],
        var31_thismouth = [],
        label_mouth = [];
    var fulldate;

    // custom history range
    var var0_history = [],
        var1_history = [],
        var2_history = [],
        var3_history = [],
        var4_history = [],
        var5_history = [],
        var6_history = [],
        var7_history = [],
        var8_history = [],
        var9_history = [],
        var10_history = [],
        var11_history = [],
        var12_history = [],
        var13_history = [],
        var14_history = [],
        var15_history = [],
        var16_history = [],
        var17_history = [],
        var18_history = [],
        var19_history = [],
        var20_history = [],
        var21_history = [],
        var22_history = [],
        var23_history = [],
        var24_history = [],
        var25_history = [],
        var26_history = [],
        var27_history = [],
        var28_history = [],
        var29_history = [],
        var30_history = [],
        var31_history = [],
        label_history = [],
        label_timestamp = [],
        uplot;

    // for device setting
    var setting;
    var online_state;

    var colorObject;

    var Chart0;
    displayChart();
    getLastData();

    $("#uplot").hide();
    $("#google_table").hide();
    $(".setting-page").hide();
    $("#Charthistory").hide();
    $("#range_display").hide();
    $(".history_view_class").hide();
    $(".history_option_class").hide();
    $("#ota-form").hide();
    $(".month-view-page").hide();
    $(".day-view-page").hide();

    // bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // display empty chart
    function displayChart() {

        // for display chart axis and legend
        function axiscontrol(e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;
            const scale = ci.data.datasets[index].yAxisID;
            // console.log(scale);
            if (ci.isDatasetVisible(index)) {
                ci.hide(index);
                legendItem.hidden = true;
            } else {
                ci.show(index);
                legendItem.hidden = false;
            }

            if (ci.isDatasetVisible(0) || ci.isDatasetVisible(1)) ci.options.scales['y'].display = true;
            else ci.options.scales['y'].display = false;
            if (ci.isDatasetVisible(2) || ci.isDatasetVisible(3)) ci.options.scales['yh'].display = true;
            else ci.options.scales['yh'].display = false;

            ci.update();
        };

        Chart0 = new Chart(
            document.getElementById('Chart0'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var0',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var0_label,
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var0",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart1 = new Chart(
            document.getElementById('Chart1'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var1',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var1_label,
                    },
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var1",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart2 = new Chart(
            document.getElementById('Chart2'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var2',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var2_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var2",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart3 = new Chart(
            document.getElementById('Chart3'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var3',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var3_label,
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var3",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart4 = new Chart(
            document.getElementById('Chart4'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var4',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var4_label,
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var4",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart5 = new Chart(
            document.getElementById('Chart5'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var5',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var5_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var5",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart6 = new Chart(
            document.getElementById('Chart6'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var6',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var6_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var6",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart7 = new Chart(
            document.getElementById('Chart7'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var7',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var7_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var7",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart8 = new Chart(
            document.getElementById('Chart8'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var8',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var8_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var8",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart9 = new Chart(
            document.getElementById('Chart9'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var9',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var9_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var9",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart10 = new Chart(
            document.getElementById('Chart10'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var10',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var0_label,
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var0",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart11 = new Chart(
            document.getElementById('Chart11'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var11',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var11_label,
                    },
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var1",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart12 = new Chart(
            document.getElementById('Chart12'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var12',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var12_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var2",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart13 = new Chart(
            document.getElementById('Chart13'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var13',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var13_label,
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var3",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart14 = new Chart(
            document.getElementById('Chart14'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var14',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var14_label,
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var4",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart15 = new Chart(
            document.getElementById('Chart15'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var15',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var15_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var5",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart16 = new Chart(
            document.getElementById('Chart16'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var16',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var16_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var6",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart17 = new Chart(
            document.getElementById('Chart17'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var17',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var17_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var7",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart18 = new Chart(
            document.getElementById('Chart18'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var18',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var18_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var8",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart19 = new Chart(
            document.getElementById('Chart19'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var19',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var19_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var9",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );


        Chart20 = new Chart(
            document.getElementById('Chart20'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var20',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var20_label,
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var0",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart21 = new Chart(
            document.getElementById('Chart21'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var21',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var21_label,
                    },
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var1",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart22 = new Chart(
            document.getElementById('Chart22'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var22',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var22_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var2",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart23 = new Chart(
            document.getElementById('Chart23'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var23',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var23_label,
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var3",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart24 = new Chart(
            document.getElementById('Chart24'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var24',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var24_label,
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var4",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart25 = new Chart(
            document.getElementById('Chart25'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var25',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var25_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var5",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart26 = new Chart(
            document.getElementById('Chart26'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var26',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var26_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var6",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart27 = new Chart(
            document.getElementById('Chart27'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var27',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var27_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var7",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart28 = new Chart(
            document.getElementById('Chart28'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var28',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var28_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var8",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart29 = new Chart(
            document.getElementById('Chart29'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var29',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var29_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var9",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart30 = new Chart(
            document.getElementById('Chart30'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var30',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var30_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var8",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );

        Chart31 = new Chart(
            document.getElementById('Chart31'), {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'var31',
                    data: [],
                    yAxisID: 'y',
                    tension: 0.1,
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var31_label,
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'time',
                        title: {
                            display: true,
                            text: "เวลา",
                        }, time: {
                            unit: 'minute'
                        },
                        // ticks: {
                        //     source: 'auto',
                        //     autoSkip: true,
                        // },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Var9",
                        },
                        type: 'linear',
                        display: true,
                        position: 'left',
                    }
                }
            }
        }
        );




        Chart_history_0 = new Chart(
            document.getElementById('Chart_history_0'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var0-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var0_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var0_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_1 = new Chart(
            document.getElementById('Chart_history_1'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var1-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var1_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var1_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_2 = new Chart(
            document.getElementById('Chart_history_2'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var2-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var2_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var2_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_3 = new Chart(
            document.getElementById('Chart_history_3'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var3-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var3_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var3_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_4 = new Chart(
            document.getElementById('Chart_history_4'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var4-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var4_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var4_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_5 = new Chart(
            document.getElementById('Chart_history_5'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var5-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var5_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var5_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_6 = new Chart(
            document.getElementById('Chart_history_6'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var6-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var6_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var6_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_7 = new Chart(
            document.getElementById('Chart_history_7'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var7-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var7_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var7_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_8 = new Chart(
            document.getElementById('Chart_history_8'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var8-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var8_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var8_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_9 = new Chart(
            document.getElementById('Chart_history_9'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var9-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var9_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var9_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_10 = new Chart(
            document.getElementById('Chart_history_10'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var10-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var10_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var0_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_11 = new Chart(
            document.getElementById('Chart_history_11'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var11-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var1_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var1_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_12 = new Chart(
            document.getElementById('Chart_history_12'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var12-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var2_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var2_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_13 = new Chart(
            document.getElementById('Chart_history_13'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var13-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var3_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var3_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_14 = new Chart(
            document.getElementById('Chart_history_14'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var14-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var4_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var4_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_15 = new Chart(
            document.getElementById('Chart_history_15'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var15-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var5_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var5_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_16 = new Chart(
            document.getElementById('Chart_history_16'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var16-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var6_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var6_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_17 = new Chart(
            document.getElementById('Chart_history_17'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var17-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var7_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var7_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_18 = new Chart(
            document.getElementById('Chart_history_18'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var18-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var8_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var8_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_19 = new Chart(
            document.getElementById('Chart_history_19'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var19-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var9_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var9_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_20 = new Chart(
            document.getElementById('Chart_history_20'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var20-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var0_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var0_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_21 = new Chart(
            document.getElementById('Chart_history_21'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var21-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var1_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var1_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_22 = new Chart(
            document.getElementById('Chart_history_22'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var22-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var2_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var2_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_23 = new Chart(
            document.getElementById('Chart_history_23'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var23-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var3_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var3_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_24 = new Chart(
            document.getElementById('Chart_history_24'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var24-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var4_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var4_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_25 = new Chart(
            document.getElementById('Chart_history_25'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var25-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var5_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var5_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_26 = new Chart(
            document.getElementById('Chart_history_26'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var26-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var6_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var6_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_27 = new Chart(
            document.getElementById('Chart_history_27'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var27-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var7_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var7_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_28 = new Chart(
            document.getElementById('Chart_history_28'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var28-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var8_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var8_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_29 = new Chart(
            document.getElementById('Chart_history_29'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var29-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var9_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var9_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_30 = new Chart(
            document.getElementById('Chart_history_30'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var30-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var8_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var8_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

        Chart_history_31 = new Chart(
            document.getElementById('Chart_history_31'), {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: [],
                datasets: [{
                    label: 'var31-Today',
                    data: [],
                    tension: 0.1,
                    yAxisID: 'y',
                    backgroundColor: 'rgba(60,141,188,0.5)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    fill: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    // pointRadius: 0.5,
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                plugins: {
                    title: {
                        display: true,
                        text: var9_label,
                    },
                    legend: {
                        display: false,
                        onClick: axiscontrol
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                                speed: 0.5,
                            },
                            pinch: {
                                enabled: true
                            },
                            // drag: {
                            //     enabled: true
                            // },
                            mode: 'x',
                        }, pan: {
                            enabled: true,
                            mode: 'x',
                        }
                    },
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                        formatter: (value) => {
                            return value != null ? Math.round(value) : '';
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "เวลา",
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: var9_label,
                        },
                        beginAtZero: false,
                    },
                },
                spanGaps: true, // enable for all datasets
                datasets: {
                    line: {
                        pointRadius: 0 // disable for all `'line'` datasets
                    }
                },
                elements: {
                    point: {
                        radius: 0 // default to disabled in all datasets
                    }
                }
            }
        });

    }

    function overlayNodata() {
        $(".overlay").show();
        $(".overlay .svg-inline--fa").hide();
        $(".overlay h3").text("ไม่มีข้อมูล");
    }

    function checkNull(val) {
        return val == '0.0';
    }

    function varUpdate() {

        $("#var-name-0").val(var0_label);
        $("#var-0-label").html(var0_label);
        $("#var-name-1").val(var1_label);
        $("#var-1-label").html(var1_label);
        $("#var-name-2").val(var2_label);
        $("#var-2-label").html(var2_label);
        $("#var-name-3").val(var3_label);
        $("#var-3-label").html(var3_label);
        $("#var-name-4").val(var4_label);
        $("#var-4-label").html(var4_label);
        $("#var-name-5").val(var5_label);
        $("#var-5-label").html(var5_label);
        $("#var-name-6").val(var6_label);
        $("#var-6-label").html(var6_label);
        $("#var-name-7").val(var7_label);
        $("#var-7-label").html(var7_label);
        $("#var-name-8").val(var8_label);
        $("#var-8-label").html(var8_label);
        $("#var-name-9").val(var9_label);
        $("#var-9-label").html(var9_label);

        $("#var-name-10").val(var10_label);
        $("#var-10-label").html(var10_label);
        $("#var-name-11").val(var11_label);
        $("#var-11-label").html(var11_label);
        $("#var-name-12").val(var12_label);
        $("#var-12-label").html(var12_label);
        $("#var-name-13").val(var13_label);
        $("#var-13-label").html(var13_label);
        $("#var-name-14").val(var14_label);
        $("#var-14-label").html(var14_label);
        $("#var-name-15").val(var15_label);
        $("#var-15-label").html(var15_label);
        $("#var-name-16").val(var16_label);
        $("#var-16-label").html(var16_label);
        $("#var-name-17").val(var17_label);
        $("#var-17-label").html(var17_label);
        $("#var-name-18").val(var18_label);
        $("#var-18-label").html(var18_label);
        $("#var-name-19").val(var19_label);
        $("#var-19-label").html(var19_label);

        $("#var-name-20").val(var20_label);
        $("#var-20-label").html(var20_label);
        $("#var-name-21").val(var21_label);
        $("#var-21-label").html(var21_label);
        $("#var-name-22").val(var22_label);
        $("#var-22-label").html(var22_label);
        $("#var-name-23").val(var23_label);
        $("#var-23-label").html(var23_label);
        $("#var-name-24").val(var24_label);
        $("#var-24-label").html(var24_label);
        $("#var-name-25").val(var25_label);
        $("#var-25-label").html(var25_label);
        $("#var-name-26").val(var26_label);
        $("#var-26-label").html(var26_label);
        $("#var-name-27").val(var27_label);
        $("#var-27-label").html(var27_label);
        $("#var-name-28").val(var28_label);
        $("#var-28-label").html(var28_label);
        $("#var-name-29").val(var29_label);
        $("#var-29-label").html(var29_label);

        $("#var-name-30").val(var30_label);
        $("#var-30-label").html(var30_label); 1
        $("#var-name-31").val(var31_label);
        $("#var-31-label").html(var31_label);

        Chart0.options.plugins.title.text = var0_label;
        Chart1.options.plugins.title.text = var1_label;
        Chart2.options.plugins.title.text = var2_label;
        Chart3.options.plugins.title.text = var3_label;
        Chart4.options.plugins.title.text = var4_label;
        Chart5.options.plugins.title.text = var5_label;
        Chart6.options.plugins.title.text = var6_label;
        Chart7.options.plugins.title.text = var7_label;
        Chart8.options.plugins.title.text = var8_label;
        Chart9.options.plugins.title.text = var9_label;
        Chart10.options.plugins.title.text = var10_label;
        Chart11.options.plugins.title.text = var11_label;
        Chart12.options.plugins.title.text = var12_label;
        Chart13.options.plugins.title.text = var13_label;
        Chart14.options.plugins.title.text = var14_label;
        Chart15.options.plugins.title.text = var15_label;
        Chart16.options.plugins.title.text = var16_label;
        Chart17.options.plugins.title.text = var17_label;
        Chart18.options.plugins.title.text = var18_label;
        Chart19.options.plugins.title.text = var19_label;
        Chart20.options.plugins.title.text = var20_label;
        Chart21.options.plugins.title.text = var21_label;
        Chart22.options.plugins.title.text = var22_label;
        Chart23.options.plugins.title.text = var23_label;
        Chart24.options.plugins.title.text = var24_label;
        Chart25.options.plugins.title.text = var25_label;
        Chart26.options.plugins.title.text = var26_label;
        Chart27.options.plugins.title.text = var27_label;
        Chart28.options.plugins.title.text = var28_label;
        Chart29.options.plugins.title.text = var29_label;
        Chart30.options.plugins.title.text = var30_label;
        Chart31.options.plugins.title.text = var31_label;

        Chart_history_0.options.plugins.title.text = var0_label;
        Chart_history_1.options.plugins.title.text = var1_label;
        Chart_history_2.options.plugins.title.text = var2_label;
        Chart_history_3.options.plugins.title.text = var3_label;
        Chart_history_4.options.plugins.title.text = var4_label;
        Chart_history_5.options.plugins.title.text = var5_label;
        Chart_history_6.options.plugins.title.text = var6_label;
        Chart_history_7.options.plugins.title.text = var7_label;
        Chart_history_8.options.plugins.title.text = var8_label;
        Chart_history_9.options.plugins.title.text = var9_label;
        Chart_history_10.options.plugins.title.text = var10_label;
        Chart_history_11.options.plugins.title.text = var11_label;
        Chart_history_12.options.plugins.title.text = var12_label;
        Chart_history_13.options.plugins.title.text = var13_label;
        Chart_history_14.options.plugins.title.text = var14_label;
        Chart_history_15.options.plugins.title.text = var15_label;
        Chart_history_16.options.plugins.title.text = var16_label;
        Chart_history_17.options.plugins.title.text = var17_label;
        Chart_history_18.options.plugins.title.text = var18_label;
        Chart_history_19.options.plugins.title.text = var19_label;
        Chart_history_20.options.plugins.title.text = var20_label;
        Chart_history_21.options.plugins.title.text = var21_label;
        Chart_history_22.options.plugins.title.text = var22_label;
        Chart_history_23.options.plugins.title.text = var23_label;
        Chart_history_24.options.plugins.title.text = var24_label;
        Chart_history_25.options.plugins.title.text = var25_label;
        Chart_history_26.options.plugins.title.text = var26_label;
        Chart_history_27.options.plugins.title.text = var27_label;
        Chart_history_28.options.plugins.title.text = var28_label;
        Chart_history_29.options.plugins.title.text = var29_label;
        Chart_history_30.options.plugins.title.text = var30_label;
        Chart_history_31.options.plugins.title.text = var31_label;
    }

    //second data
    function getLastData() {
        $(".overlay").show();

        $.ajax({
            url: "ajax/07value32.php",
            type: "post",
            data: {
                id: esp_id,
                skey: sk,
                data: "sec",
                point: 200
            },
            success: function (data) {
                if (data == "nodata") {
                    overlayNodata();
                    return;
                }
                // console.log(data);
                try {
                    var json = JSON.parse(data);

                    json.var0.reverse();
                    json.var1.reverse();
                    json.var2.reverse();
                    json.var3.reverse();
                    json.var4.reverse();
                    json.var5.reverse();
                    json.var6.reverse();
                    json.var7.reverse();
                    json.var8.reverse();
                    json.var9.reverse();
                    json.var10.reverse();
                    json.var11.reverse();
                    json.var12.reverse();
                    json.var13.reverse();
                    json.var14.reverse();
                    json.var15.reverse();
                    json.var16.reverse();
                    json.var17.reverse();
                    json.var18.reverse();
                    json.var19.reverse();
                    json.var20.reverse();
                    json.var21.reverse();
                    json.var22.reverse();
                    json.var23.reverse();
                    json.var24.reverse();
                    json.var25.reverse();
                    json.var26.reverse();
                    json.var27.reverse();
                    json.var28.reverse();
                    json.var29.reverse();
                    json.var30.reverse();
                    json.var31.reverse();
                    json.time.reverse();

                    var0 = json.var0;
                    var1 = json.var1;
                    var2 = json.var2;
                    var3 = json.var3;
                    var4 = json.var4;
                    var5 = json.var5;
                    var6 = json.var6;
                    var7 = json.var7;
                    var8 = json.var8;
                    var9 = json.var9;
                    var10 = json.var10;
                    var11 = json.var11;
                    var12 = json.var12;
                    var13 = json.var13;
                    var14 = json.var14;
                    var15 = json.var15;
                    var16 = json.var16;
                    var17 = json.var17;
                    var18 = json.var18;
                    var19 = json.var19;
                    var20 = json.var20;
                    var21 = json.var21;
                    var22 = json.var22;
                    var23 = json.var23;
                    var24 = json.var24;
                    var25 = json.var25;
                    var26 = json.var26;
                    var27 = json.var27;
                    var28 = json.var28;
                    var29 = json.var29;
                    var30 = json.var30;
                    var31 = json.var31;
                    label = json.time;

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
                        if (var_label.c10) {
                            var10_label = var_label.c10;
                        }
                        if (var_label.c11) {
                            var11_label = var_label.c11;
                        }
                        if (var_label.c12) {
                            var12_label = var_label.c12;
                        }
                        if (var_label.c13) {
                            var13_label = var_label.c13;
                        }
                        if (var_label.c14) {
                            var14_label = var_label.c14;
                        }
                        if (var_label.c15) {
                            var15_label = var_label.c15;
                        }
                        if (var_label.c16) {
                            var16_label = var_label.c16;
                        }
                        if (var_label.c17) {
                            var17_label = var_label.c17;
                        }
                        if (var_label.c18) {
                            var18_label = var_label.c18;
                        }
                        if (var_label.c19) {
                            var19_label = var_label.c19;
                        }
                        if (var_label.c20) {
                            var20_label = var_label.c20;
                        }
                        if (var_label.c21) {
                            var21_label = var_label.c21;
                        }
                        if (var_label.c22) {
                            var22_label = var_label.c22;
                        }
                        if (var_label.c23) {
                            var23_label = var_label.c23;
                        }
                        if (var_label.c24) {
                            var24_label = var_label.c24;
                        }
                        if (var_label.c25) {
                            var25_label = var_label.c25;
                        }
                        if (var_label.c26) {
                            var26_label = var_label.c26;
                        }
                        if (var_label.c27) {
                            var27_label = var_label.c27;
                        }
                        if (var_label.c28) {
                            var28_label = var_label.c28;
                        }
                        if (var_label.c29) {
                            var29_label = var_label.c29;
                        }
                        if (var_label.c30) {
                            var30_label = var_label.c30;
                        }
                        if (var_label.c31) {
                            var31_label = var_label.c31;
                        }

                    }

                    varUpdate();

                    lastupdate = json.lastupdate;
                    updateStatus();

                    $("#var-0-value").html(json.var0[json.var0.length - 1]);
                    $("#var-1-value").html(json.var1[json.var1.length - 1]);
                    $("#var-2-value").html(json.var2[json.var2.length - 1]);
                    $("#var-3-value").html(json.var3[json.var3.length - 1]);
                    $("#var-4-value").html(json.var4[json.var4.length - 1]);
                    $("#var-5-value").html(json.var5[json.var5.length - 1]);
                    $("#var-6-value").html(json.var6[json.var6.length - 1]);
                    $("#var-7-value").html(json.var7[json.var7.length - 1]);
                    $("#var-8-value").html(json.var8[json.var8.length - 1]);
                    $("#var-9-value").html(json.var9[json.var9.length - 1]);
                    $("#var-10-value").html(json.var10[json.var10.length - 1]);
                    $("#var-11-value").html(json.var11[json.var11.length - 1]);
                    $("#var-12-value").html(json.var12[json.var12.length - 1]);
                    $("#var-13-value").html(json.var13[json.var13.length - 1]);
                    $("#var-14-value").html(json.var14[json.var14.length - 1]);
                    $("#var-15-value").html(json.var15[json.var15.length - 1]);
                    $("#var-16-value").html(json.var16[json.var16.length - 1]);
                    $("#var-17-value").html(json.var17[json.var17.length - 1]);
                    $("#var-18-value").html(json.var18[json.var18.length - 1]);
                    $("#var-19-value").html(json.var19[json.var19.length - 1]);
                    $("#var-20-value").html(json.var20[json.var20.length - 1]);
                    $("#var-21-value").html(json.var21[json.var21.length - 1]);
                    $("#var-22-value").html(json.var22[json.var22.length - 1]);
                    $("#var-23-value").html(json.var23[json.var23.length - 1]);
                    $("#var-24-value").html(json.var24[json.var24.length - 1]);
                    $("#var-25-value").html(json.var25[json.var25.length - 1]);
                    $("#var-26-value").html(json.var26[json.var26.length - 1]);
                    $("#var-27-value").html(json.var27[json.var27.length - 1]);
                    $("#var-28-value").html(json.var28[json.var28.length - 1]);
                    $("#var-29-value").html(json.var29[json.var29.length - 1]);
                    $("#var-30-value").html(json.var30[json.var30.length - 1]);
                    $("#var-31-value").html(json.var31[json.var31.length - 1]);
                    $("#time").html(json.time[json.time.length - 1]);

                    if (var0.every(checkNull)) {
                        $("#var-0-value").parent().parent().remove();
                        $("#Chart0").parent().parent().remove();
                        $("#Chart_history_0").parent().parent().remove();
                        $(".var_0_class").remove();
                        // Chart0.options.scales['y'].display = false;
                        // Chart0.options.plugins.legend.display = false;
                        // Chart0.data.datasets[0].hidden = true;
                    }
                    if (var1.every(checkNull)) {
                        $("#var-1-value").parent().parent().remove();
                        $("#Chart1").parent().parent().remove();
                        $("#Chart_history_1").parent().parent().remove();
                        $(".var_1_class").remove();
                        // Chart1.options.scales['y'].display = false;
                        // Chart1.options.plugins.legend.display = false;
                        // Chart1.data.datasets[0].hidden = true;
                    }
                    if (var2.every(checkNull)) {
                        $("#var-2-value").parent().parent().remove();
                        $("#Chart2").parent().parent().remove();
                        $("#Chart_history_2").parent().parent().remove();
                        $(".var_2_class").remove();
                        // Chart2.options.scales['y'].display = false;
                        // Chart2.options.plugins.legend.display = false;
                        // Chart2.data.datasets[0].hidden = true;
                    }
                    if (var3.every(checkNull)) {
                        $("#var-3-value").parent().parent().remove();
                        $("#Chart3").parent().parent().remove();
                        $("#Chart_history_3").parent().parent().remove();
                        $(".var_3_class").remove();
                        // Chart3.options.scales['y'].display = false;
                        // Chart3.options.plugins.legend.display = false;
                        // Chart3.data.datasets[0].hidden = true;
                    }
                    if (var4.every(checkNull)) {
                        $("#var-4-value").parent().parent().remove();
                        $("#Chart4").parent().parent().remove();
                        $("#Chart_history_4").parent().parent().remove();
                        $(".var_4_class").remove();
                        // Chart4.options.scales['y'].display = false;
                        // Chart4.options.plugins.legend.display = false;
                        // Chart4.data.datasets[0].hidden = true;
                    }
                    if (var5.every(checkNull)) {
                        $("#var-5-value").parent().parent().remove();
                        $("#Chart5").parent().parent().remove();
                        $("#Chart_history_5").parent().parent().remove();
                        $(".var_5_class").remove();
                        // Chart5.options.scales['y'].display = false;
                        // Chart5.options.plugins.legend.display = false;
                        // Chart5.data.datasets[0].hidden = true;
                    }
                    if (var6.every(checkNull)) {
                        $("#var-6-value").parent().parent().remove();
                        $("#Chart6").parent().parent().remove();
                        $("#Chart_history_6").parent().parent().remove();
                        $(".var_6_class").remove();
                    }
                    if (var7.every(checkNull)) {
                        $("#var-7-value").parent().parent().remove();
                        $("#Chart7").parent().parent().remove();
                        $("#Chart_history_7").parent().parent().remove();
                        $(".var_7_class").remove();
                        // Chart7.options.scales['y'].display = false;
                        // Chart7.options.plugins.legend.display = false;
                        // Chart7.data.datasets[0].hidden = true;
                    }
                    if (var8.every(checkNull)) {
                        $("#var-8-value").parent().parent().remove();
                        $("#Chart8").parent().parent().remove();
                        $("#Chart_history_8").parent().parent().remove();
                        $(".var_8_class").remove();
                        // Chart8.options.scales['y'].display = false;
                        // Chart8.options.plugins.legend.display = false;
                        // Chart8.data.datasets[0].hidden = true;
                    }
                    if (var9.every(checkNull)) {
                        $("#var-9-value").parent().parent().remove();
                        $("#Chart9").parent().parent().remove();
                        $("#Chart_history_9").parent().parent().remove();
                        $(".var_9_class").remove();
                        // Chart9.options.scales['y'].display = false;
                        // Chart9.options.plugins.legend.display = false;
                        // Chart9.data.datasets[0].hidden = true;
                    }
                    if (var10.every(checkNull)) {
                        $("#var-10-value").parent().parent().remove();
                        $("#Chart10").parent().parent().remove();
                        $("#Chart_history_10").parent().parent().remove();
                        $(".var_10_class").remove();
                    }
                    if (var11.every(checkNull)) {
                        $("#var-11-value").parent().parent().remove();
                        $("#Chart11").parent().parent().remove();
                        $("#Chart_history_11").parent().parent().remove();
                        $(".var_11_class").remove();
                    }
                    if (var12.every(checkNull)) {
                        $("#var-12-value").parent().parent().remove();
                        $("#Chart12").parent().parent().remove();
                        $("#Chart_history_12").parent().parent().remove();
                        $(".var_12_class").remove();
                    }
                    if (var13.every(checkNull)) {
                        $("#var-13-value").parent().parent().remove();
                        $("#Chart13").parent().parent().remove();
                        $("#Chart_history_13").parent().parent().remove();
                        $(".var_13_class").remove();
                    }
                    if (var14.every(checkNull)) {
                        $("#var-14-value").parent().parent().remove();
                        $("#Chart14").parent().parent().remove();
                        $("#Chart_history_14").parent().parent().remove();
                        $(".var_14_class").remove();
                    }
                    if (var15.every(checkNull)) {
                        $("#var-15-value").parent().parent().remove();
                        $("#Chart15").parent().parent().remove();
                        $("#Chart_history_15").parent().parent().remove();
                        $(".var_15_class").remove();
                    }
                    if (var16.every(checkNull)) {
                        $("#var-16-value").parent().parent().remove();
                        $("#Chart16").parent().parent().remove();
                        $("#Chart_history_16").parent().parent().remove();
                        $(".var_16_class").remove();
                    }
                    if (var17.every(checkNull)) {
                        $("#var-17-value").parent().parent().remove();
                        $("#Chart17").parent().parent().remove();
                        $("#Chart_history_17").parent().parent().remove();
                        $(".var_17_class").remove();
                    }
                    if (var18.every(checkNull)) {
                        $("#var-18-value").parent().parent().remove();
                        $("#Chart18").parent().parent().remove();
                        $("#Chart_history_18").parent().parent().remove();
                        $(".var_18_class").remove();
                    }
                    if (var19.every(checkNull)) {
                        $("#var-19-value").parent().parent().remove();
                        $("#Chart19").parent().parent().remove();
                        $("#Chart_history_19").parent().parent().remove();
                        $(".var_19_class").remove();
                    }
                    if (var20.every(checkNull)) {
                        $("#var-20-value").parent().parent().remove();
                        $("#Chart20").parent().parent().remove();
                        $("#Chart_history_20").parent().parent().remove();
                        $(".var_20_class").remove();
                    }
                    if (var21.every(checkNull)) {
                        $("#var-21-value").parent().parent().remove();
                        $("#Chart21").parent().parent().remove();
                        $("#Chart_history_21").parent().parent().remove();
                        $(".var_21_class").remove();
                    }
                    if (var22.every(checkNull)) {
                        $("#var-22-value").parent().parent().remove();
                        $("#Chart22").parent().parent().remove();
                        $("#Chart_history_22").parent().parent().remove();
                        $(".var_22_class").remove();
                    }
                    if (var23.every(checkNull)) {
                        $("#var-23-value").parent().parent().remove();
                        $("#Chart23").parent().parent().remove();
                        $("#Chart_history_23").parent().parent().remove();
                        $(".var_23_class").remove();
                    }
                    if (var24.every(checkNull)) {
                        $("#var-24-value").parent().parent().remove();
                        $("#Chart24").parent().parent().remove();
                        $("#Chart_history_24").parent().parent().remove();
                        $(".var_24_class").remove();
                    }
                    if (var25.every(checkNull)) {
                        $("#var-25-value").parent().parent().remove();
                        $("#Chart25").parent().parent().remove();
                        $("#Chart_history_25").parent().parent().remove();
                        $(".var_25_class").remove();
                    }
                    if (var26.every(checkNull)) {
                        $("#var-26-value").parent().parent().remove();
                        $("#Chart26").parent().parent().remove();
                        $("#Chart_history_26").parent().parent().remove();
                        $(".var_26_class").remove();
                    }
                    if (var27.every(checkNull)) {
                        $("#var-27-value").parent().parent().remove();
                        $("#Chart27").parent().parent().remove();
                        $("#Chart_history_27").parent().parent().remove();
                        $(".var_27_class").remove();
                    }
                    if (var28.every(checkNull)) {
                        $("#var-28-value").parent().parent().remove();
                        $("#Chart28").parent().parent().remove();
                        $("#Chart_history_28").parent().parent().remove();
                        $(".var_28_class").remove();
                    }
                    if (var29.every(checkNull)) {
                        $("#var-29-value").parent().parent().remove();
                        $("#Chart29").parent().parent().remove();
                        $("#Chart_history_29").parent().parent().remove();
                        $(".var_29_class").remove();
                    }
                    if (var30.every(checkNull)) {
                        $("#var-30-value").parent().parent().remove();
                        $("#Chart30").parent().parent().remove();
                        $("#Chart_history_30").parent().parent().remove();
                        $(".var_30_class").remove();
                    }
                    if (var31.every(checkNull)) {
                        $("#var-31-value").parent().parent().remove();
                        $("#Chart31").parent().parent().remove();
                        $("#Chart_history_31").parent().parent().remove();
                        $(".var_31_class").remove();
                    }

                    Chart0.data.datasets[0].data = var0;
                    Chart0.data.labels = label;
                    Chart0.update();

                    Chart1.data.datasets[0].data = var1;
                    Chart1.data.labels = label;
                    Chart1.update();

                    Chart2.data.datasets[0].data = var2;
                    Chart2.data.labels = label;
                    Chart2.update();

                    Chart3.data.datasets[0].data = var3;
                    Chart3.data.labels = label;
                    Chart3.update();

                    Chart4.data.datasets[0].data = var4;
                    Chart4.data.labels = label;
                    Chart4.update();

                    Chart5.data.datasets[0].data = var5;
                    Chart5.data.labels = label;
                    Chart5.update();

                    Chart6.data.datasets[0].data = var6;
                    Chart6.data.labels = label;
                    Chart6.update();

                    Chart7.data.datasets[0].data = var7;
                    Chart7.data.labels = label;
                    Chart7.update();

                    Chart8.data.datasets[0].data = var8;
                    Chart8.data.labels = label;
                    Chart8.update();

                    Chart9.data.datasets[0].data = var9;
                    Chart9.data.labels = label;
                    Chart9.update();

                    Chart10.data.datasets[0].data = var10;
                    Chart10.data.labels = label;
                    Chart10.update();

                    Chart11.data.datasets[0].data = var11;
                    Chart11.data.labels = label;
                    Chart11.update();

                    Chart12.data.datasets[0].data = var12;
                    Chart12.data.labels = label;
                    Chart12.update();

                    Chart13.data.datasets[0].data = var13;
                    Chart13.data.labels = label;
                    Chart13.update();

                    Chart14.data.datasets[0].data = var14;
                    Chart14.data.labels = label;
                    Chart14.update();

                    Chart15.data.datasets[0].data = var15;
                    Chart15.data.labels = label;
                    Chart15.update();

                    Chart16.data.datasets[0].data = var16;
                    Chart16.data.labels = label;
                    Chart16.update();

                    Chart17.data.datasets[0].data = var17;
                    Chart17.data.labels = label;
                    Chart17.update();

                    Chart18.data.datasets[0].data = var18;
                    Chart18.data.labels = label;
                    Chart18.update();

                    Chart19.data.datasets[0].data = var19;
                    Chart19.data.labels = label;
                    Chart19.update();

                    Chart20.data.datasets[0].data = var20;
                    Chart20.data.labels = label;
                    Chart20.update();

                    Chart21.data.datasets[0].data = var21;
                    Chart21.data.labels = label;
                    Chart21.update();

                    Chart22.data.datasets[0].data = var22;
                    Chart22.data.labels = label;
                    Chart22.update();

                    Chart23.data.datasets[0].data = var23;
                    Chart23.data.labels = label;
                    Chart23.update();

                    Chart24.data.datasets[0].data = var24;
                    Chart24.data.labels = label;
                    Chart24.update();

                    Chart25.data.datasets[0].data = var25;
                    Chart25.data.labels = label;
                    Chart25.update();

                    Chart26.data.datasets[0].data = var26;
                    Chart26.data.labels = label;
                    Chart26.update();

                    Chart27.data.datasets[0].data = var27;
                    Chart27.data.labels = label;
                    Chart27.update();

                    Chart28.data.datasets[0].data = var28;
                    Chart28.data.labels = label;
                    Chart28.update();

                    Chart29.data.datasets[0].data = var29;
                    Chart29.data.labels = label;
                    Chart29.update();

                    Chart30.data.datasets[0].data = var30;
                    Chart30.data.labels = label;
                    Chart30.update();

                    Chart31.data.datasets[0].data = var31;
                    Chart31.data.labels = label;
                    Chart31.update();

                    $(".overlay").fadeOut(100);
                    setInterval(updateLastData, 5000); // 1000 = 1 second
                    setInterval(updateStatus, 5000); // 1000 = 1 second

                    getColor();
                }
                catch (err) {
                    console.log(err.message);
                    overlayNodata();
                }
            },
            error: function () {
                overlayNodata();
            }
        })
    };

    function updateLastData() {
        $.ajax({
            url: "ajax/07value32.php",
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

                if (label[label.length - 1] != fulltime) {

                    if (label.length > 300) {
                        label.shift();
                        var0.shift();
                        var1.shift();
                        var2.shift();
                        var3.shift();
                        var4.shift();
                        var5.shift();
                        var6.shift();
                        var7.shift();
                        var8.shift();
                        var9.shift();
                        var10.shift();
                        var11.shift();
                        var12.shift();
                        var13.shift();
                        var14.shift();
                        var15.shift();
                        var16.shift();
                        var17.shift();
                        var18.shift();
                        var19.shift();
                        var20.shift();
                        var21.shift();
                        var22.shift();
                        var23.shift();
                        var24.shift();
                        var25.shift();
                        var26.shift();
                        var27.shift();
                        var28.shift();
                        var29.shift();
                        var30.shift();
                        var31.shift();
                    }

                    var0.push(json.var0[0]);
                    var1.push(json.var1[0]);
                    var2.push(json.var2[0]);
                    var3.push(json.var3[0]);
                    var4.push(json.var4[0]);
                    var5.push(json.var5[0]);
                    var6.push(json.var6[0]);
                    var7.push(json.var7[0]);
                    var8.push(json.var8[0]);
                    var9.push(json.var9[0]);
                    var10.push(json.var10[0]);
                    var11.push(json.var11[0]);
                    var12.push(json.var12[0]);
                    var13.push(json.var13[0]);
                    var14.push(json.var14[0]);
                    var15.push(json.var15[0]);
                    var16.push(json.var16[0]);
                    var17.push(json.var17[0]);
                    var18.push(json.var18[0]);
                    var19.push(json.var19[0]);
                    var20.push(json.var20[0]);
                    var21.push(json.var21[0]);
                    var22.push(json.var22[0]);
                    var23.push(json.var23[0]);
                    var24.push(json.var24[0]);
                    var25.push(json.var25[0]);
                    var26.push(json.var26[0]);
                    var27.push(json.var27[0]);
                    var28.push(json.var28[0]);
                    var29.push(json.var29[0]);
                    var30.push(json.var30[0]);
                    var31.push(json.var31[0]);
                    label.push(json.time[0]);

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
                    $("#var-10-value").html(json.var10[0]);
                    $("#var-11-value").html(json.var11[0]);
                    $("#var-12-value").html(json.var12[0]);
                    $("#var-13-value").html(json.var13[0]);
                    $("#var-14-value").html(json.var14[0]);
                    $("#var-15-value").html(json.var15[0]);
                    $("#var-16-value").html(json.var16[0]);
                    $("#var-17-value").html(json.var17[0]);
                    $("#var-18-value").html(json.var18[0]);
                    $("#var-19-value").html(json.var19[0]);
                    $("#var-20-value").html(json.var20[0]);
                    $("#var-21-value").html(json.var21[0]);
                    $("#var-22-value").html(json.var22[0]);
                    $("#var-23-value").html(json.var23[0]);
                    $("#var-24-value").html(json.var24[0]);
                    $("#var-25-value").html(json.var25[0]);
                    $("#var-26-value").html(json.var26[0]);
                    $("#var-27-value").html(json.var27[0]);
                    $("#var-28-value").html(json.var28[0]);
                    $("#var-29-value").html(json.var29[0]);
                    $("#var-30-value").html(json.var30[0]);
                    $("#var-31-value").html(json.var31[0]);
                    $("#time").html(json.time[0]);

                    Chart0.update();
                    Chart1.update();
                    Chart2.update();
                    Chart3.update();
                    Chart4.update();
                    Chart5.update();
                    Chart6.update();
                    Chart7.update();
                    Chart8.update();
                    Chart9.update();
                    Chart10.update();
                    Chart11.update();
                    Chart12.update();
                    Chart13.update();
                    Chart14.update();
                    Chart15.update();
                    Chart16.update();
                    Chart17.update();
                    Chart18.update();
                    Chart19.update();
                    Chart20.update();
                    Chart21.update();
                    Chart22.update();
                    Chart23.update();
                    Chart24.update();
                    Chart25.update();
                    Chart26.update();
                    Chart27.update();
                    Chart28.update();
                    Chart29.update();
                    Chart30.update();
                    Chart31.update();
                }
                lastupdate = json.lastupdate;

                colorHandle();
            }
        })
    };

    function updateStatus() {
        // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
        let now = moment().format('YYYY-MM-DD HH:mm:ss');
        let lastupdatemoment = moment(lastupdate, 'YYYY-MM-DD HH:mm:ss');
        let secdiff = moment(now, 'YYYY-MM-DD HH:mm:ss').diff(lastupdatemoment, 'seconds');

        // console.log(secdiff);

        if (isNaN(secdiff) || secdiff >= 30) {
            $("#device_status").html("offline");
            $("#device_status").removeClass('badge-success').addClass('badge-secondary');
            online_state = 0;
        }
        else {
            $("#device_status").html("online");
            $("#device_status").removeClass('badge-secondary').addClass('badge-success');
            online_state = 1;
        }

    }

    // for tab select
    $("#overview_option").click(function () {

        $("#value").show();
        $("#io").show();
        $("#chart").show();
        $("#Chartday").show();
        $(".overview-page").show();
        $("#uplot").hide();
        $("#google_table").hide();
        $(".setting-page").hide();
        $("#Charthistory").hide();
        $("#Chart1").show();
        $("#range_display").hide();
        $(".history_view_class").hide();
        $(".history_option_class").hide();
        $('#chart_name').text('ค่าล่าสุด');
        $(".month-view-page").hide();
        $(".day-view-page").hide();

        if (label.length) $(".overlay").hide();
        else overlayNodata();

        // Chart0.data.datasets[0].data = var0;
        // Chart0.data.datasets[1].data = var1;
        // Chart0.data.labels = label;
        // Chart0.update();

    });

    // for tab select
    $("#history_option, #day_view").click(function () {

        $("#value").hide();
        $("#io").hide();
        $(".overview-page").hide();
        $("#chart").show();
        $("#Chartday").hide();
        $("#uplot").hide();
        $("#google_table").hide();
        $(".setting-page").hide();
        $("#Charthistory").show();
        $("#Chart1").hide();
        $("#range_display").show();
        $(".history_option_class").show();
        $(".history_view_class").hide();
        $(".month-view-page").hide();
        $(".day-view-page").show();

        $("#day_view").addClass("active");
        $("#mouth_view,#history_view").removeClass("active");

        $('#chart_name').text('ค่าวันนี้');
        Chart_history_0.resetZoom();
        Chart_history_1.resetZoom();
        Chart_history_2.resetZoom();
        Chart_history_3.resetZoom();
        Chart_history_4.resetZoom();
        Chart_history_5.resetZoom();
        Chart_history_6.resetZoom();
        Chart_history_7.resetZoom();
        Chart_history_8.resetZoom();
        Chart_history_9.resetZoom();
        Chart_history_10.resetZoom();
        Chart_history_11.resetZoom();
        Chart_history_12.resetZoom();
        Chart_history_13.resetZoom();
        Chart_history_14.resetZoom();
        Chart_history_15.resetZoom();
        Chart_history_16.resetZoom();
        Chart_history_17.resetZoom();
        Chart_history_18.resetZoom();
        Chart_history_19.resetZoom();
        Chart_history_20.resetZoom();
        Chart_history_21.resetZoom();
        Chart_history_22.resetZoom();
        Chart_history_23.resetZoom();
        Chart_history_24.resetZoom();
        Chart_history_25.resetZoom();
        Chart_history_26.resetZoom();
        Chart_history_27.resetZoom();
        Chart_history_28.resetZoom();
        Chart_history_29.resetZoom();
        Chart_history_30.resetZoom();
        Chart_history_31.resetZoom();

        Chart_history_0.options.scales['x'].title.text = "เวลา";
        Chart_history_1.options.scales['x'].title.text = "เวลา";
        Chart_history_2.options.scales['x'].title.text = "เวลา";
        Chart_history_3.options.scales['x'].title.text = "เวลา";
        Chart_history_4.options.scales['x'].title.text = "เวลา";
        Chart_history_5.options.scales['x'].title.text = "เวลา";
        Chart_history_6.options.scales['x'].title.text = "เวลา";
        Chart_history_7.options.scales['x'].title.text = "เวลา";
        Chart_history_8.options.scales['x'].title.text = "เวลา";
        Chart_history_9.options.scales['x'].title.text = "เวลา";
        Chart_history_10.options.scales['x'].title.text = "เวลา";
        Chart_history_11.options.scales['x'].title.text = "เวลา";
        Chart_history_12.options.scales['x'].title.text = "เวลา";
        Chart_history_13.options.scales['x'].title.text = "เวลา";
        Chart_history_14.options.scales['x'].title.text = "เวลา";
        Chart_history_15.options.scales['x'].title.text = "เวลา";
        Chart_history_16.options.scales['x'].title.text = "เวลา";
        Chart_history_17.options.scales['x'].title.text = "เวลา";
        Chart_history_18.options.scales['x'].title.text = "เวลา";
        Chart_history_19.options.scales['x'].title.text = "เวลา";
        Chart_history_20.options.scales['x'].title.text = "เวลา";
        Chart_history_21.options.scales['x'].title.text = "เวลา";
        Chart_history_22.options.scales['x'].title.text = "เวลา";
        Chart_history_23.options.scales['x'].title.text = "เวลา";
        Chart_history_24.options.scales['x'].title.text = "เวลา";
        Chart_history_25.options.scales['x'].title.text = "เวลา";
        Chart_history_26.options.scales['x'].title.text = "เวลา";
        Chart_history_27.options.scales['x'].title.text = "เวลา";
        Chart_history_28.options.scales['x'].title.text = "เวลา";
        Chart_history_29.options.scales['x'].title.text = "เวลา";
        Chart_history_30.options.scales['x'].title.text = "เวลา";
        Chart_history_31.options.scales['x'].title.text = "เวลา";

        if (label_day.length == 0) { // if empty array let get new

            $(".overlay").show();

            $.post('ajax/07value32.php', {
                id: esp_id,
                skey: sk,
                data: "min",
                range: {
                    start: moment().startOf('days').format('YYYY-MM-DD HH:mm:ss'),
                    end: moment().format('YYYY-MM-DD HH:mm:ss')
                }
            })
                .done(function (response) {
                    // console.log(response);
                    if (response == "nodata") {
                        overlayNodata();
                        return;
                    }

                    $(".overlay").fadeOut(200);
                    if (response == "") return;

                    var json = JSON.parse(response);

                    var0_today = json.var0;
                    var0_today.reverse();
                    var1_today = json.var1;
                    var1_today.reverse();
                    var2_today = json.var2;
                    var2_today.reverse();
                    var3_today = json.var3;
                    var3_today.reverse();
                    var4_today = json.var4;
                    var4_today.reverse();
                    var5_today = json.var5;
                    var5_today.reverse();
                    var6_today = json.var6;
                    var6_today.reverse();
                    var7_today = json.var7;
                    var7_today.reverse();
                    var8_today = json.var8;
                    var8_today.reverse();
                    var9_today = json.var9;
                    var9_today.reverse();
                    var10_today = json.var10;
                    var10_today.reverse();
                    var11_today = json.var11;
                    var11_today.reverse();
                    var12_today = json.var12;
                    var12_today.reverse();
                    var13_today = json.var13;
                    var13_today.reverse();
                    var14_today = json.var14;
                    var14_today.reverse();
                    var15_today = json.var15;
                    var15_today.reverse();
                    var16_today = json.var16;
                    var16_today.reverse();
                    var17_today = json.var17;
                    var17_today.reverse();
                    var18_today = json.var18;
                    var18_today.reverse();
                    var19_today = json.var19;
                    var19_today.reverse();
                    var20_today = json.var20;
                    var20_today.reverse();
                    var21_today = json.var21;
                    var21_today.reverse();
                    var22_today = json.var22;
                    var22_today.reverse();
                    var23_today = json.var23;
                    var23_today.reverse();
                    var24_today = json.var24;
                    var24_today.reverse();
                    var25_today = json.var25;
                    var25_today.reverse();
                    var26_today = json.var26;
                    var26_today.reverse();
                    var27_today = json.var27;
                    var27_today.reverse();
                    var28_today = json.var28;
                    var28_today.reverse();
                    var29_today = json.var29;
                    var29_today.reverse();
                    var30_today = json.var30;
                    var30_today.reverse();
                    var31_today = json.var31;
                    var31_today.reverse();

                    let fulltime = json.time;
                    fulltime.reverse();
                    label_day = [];
                    for (var count = 0; count < fulltime.length; count++) {
                        let timesplit = String(fulltime[count]).split(" ");
                        label_day.push(timesplit[1]);
                    }

                    Chart_history_0.type = 'line';
                    Chart_history_0.data.datasets[0].data = var0_today;
                    Chart_history_0.data.datasets[0].type = 'line';
                    Chart_history_0.options.plugins.datalabels.display = false;
                    Chart_history_0.options.plugins.title.text = var0_label;
                    Chart_history_1.type = 'line';
                    Chart_history_1.data.datasets[0].data = var1_today;
                    Chart_history_1.data.datasets[0].type = 'line';
                    Chart_history_1.options.plugins.datalabels.display = false;
                    Chart_history_1.options.plugins.title.text = var1_label;
                    Chart_history_2.type = 'line';
                    Chart_history_2.data.datasets[0].data = var2_today;
                    Chart_history_2.data.datasets[0].type = 'line';
                    Chart_history_2.options.plugins.datalabels.display = false;
                    Chart_history_2.options.plugins.title.text = var2_label;
                    Chart_history_3.type = 'line';
                    Chart_history_3.data.datasets[0].data = var3_today;
                    Chart_history_3.data.datasets[0].type = 'line';
                    Chart_history_3.options.plugins.datalabels.display = false;
                    Chart_history_3.options.plugins.title.text = var3_label;
                    Chart_history_4.type = 'line';
                    Chart_history_4.data.datasets[0].data = var4_today;
                    Chart_history_4.data.datasets[0].type = 'line';
                    Chart_history_4.options.plugins.datalabels.display = false;
                    Chart_history_4.options.plugins.title.text = var4_label;
                    Chart_history_5.type = 'line';
                    Chart_history_5.data.datasets[0].data = var5_today;
                    Chart_history_5.data.datasets[0].type = 'line';
                    Chart_history_5.options.plugins.datalabels.display = false;
                    Chart_history_5.options.plugins.title.text = var5_label;
                    Chart_history_6.type = 'line';
                    Chart_history_6.data.datasets[0].data = var6_today;
                    Chart_history_6.data.datasets[0].type = 'line';
                    Chart_history_6.options.plugins.datalabels.display = false;
                    Chart_history_6.options.plugins.title.text = var6_label;
                    Chart_history_7.type = 'line';
                    Chart_history_7.data.datasets[0].data = var7_today;
                    Chart_history_7.data.datasets[0].type = 'line';
                    Chart_history_7.options.plugins.datalabels.display = false;
                    Chart_history_7.options.plugins.title.text = var7_label;
                    Chart_history_8.type = 'line';
                    Chart_history_8.data.datasets[0].data = var8_today;
                    Chart_history_8.data.datasets[0].type = 'line';
                    Chart_history_8.options.plugins.datalabels.display = false;
                    Chart_history_8.options.plugins.title.text = var8_label;
                    Chart_history_9.type = 'line';
                    Chart_history_9.data.datasets[0].data = var9_today;
                    Chart_history_9.data.datasets[0].type = 'line';
                    Chart_history_9.options.plugins.datalabels.display = false;
                    Chart_history_9.options.plugins.title.text = var9_label;
                    Chart_history_10.type = 'line';
                    Chart_history_10.data.datasets[0].data = var10_today;
                    Chart_history_10.data.datasets[0].type = 'line';
                    Chart_history_10.options.plugins.datalabels.display = false;
                    Chart_history_10.options.plugins.title.text = var10_label;
                    Chart_history_11.type = 'line';
                    Chart_history_11.data.datasets[0].data = var11_today;
                    Chart_history_11.data.datasets[0].type = 'line';
                    Chart_history_11.options.plugins.datalabels.display = false;
                    Chart_history_11.options.plugins.title.text = var11_label;
                    Chart_history_12.type = 'line';
                    Chart_history_12.data.datasets[0].data = var12_today;
                    Chart_history_12.data.datasets[0].type = 'line';
                    Chart_history_12.options.plugins.datalabels.display = false;
                    Chart_history_12.options.plugins.title.text = var12_label;
                    Chart_history_13.type = 'line';
                    Chart_history_13.data.datasets[0].data = var13_today;
                    Chart_history_13.data.datasets[0].type = 'line';
                    Chart_history_13.options.plugins.datalabels.display = false;
                    Chart_history_13.options.plugins.title.text = var13_label;
                    Chart_history_14.type = 'line';
                    Chart_history_14.data.datasets[0].data = var14_today;
                    Chart_history_14.data.datasets[0].type = 'line';
                    Chart_history_14.options.plugins.datalabels.display = false;
                    Chart_history_14.options.plugins.title.text = var14_label;
                    Chart_history_15.type = 'line';
                    Chart_history_15.data.datasets[0].data = var15_today;
                    Chart_history_15.data.datasets[0].type = 'line';
                    Chart_history_15.options.plugins.datalabels.display = false;
                    Chart_history_15.options.plugins.title.text = var15_label;
                    Chart_history_16.type = 'line';
                    Chart_history_16.data.datasets[0].data = var16_today;
                    Chart_history_16.data.datasets[0].type = 'line';
                    Chart_history_16.options.plugins.datalabels.display = false;
                    Chart_history_16.options.plugins.title.text = var16_label;
                    Chart_history_17.type = 'line';
                    Chart_history_17.data.datasets[0].data = var17_today;
                    Chart_history_17.data.datasets[0].type = 'line';
                    Chart_history_17.options.plugins.datalabels.display = false;
                    Chart_history_17.options.plugins.title.text = var17_label;
                    Chart_history_18.type = 'line';
                    Chart_history_18.data.datasets[0].data = var18_today;
                    Chart_history_18.data.datasets[0].type = 'line';
                    Chart_history_18.options.plugins.datalabels.display = false;
                    Chart_history_18.options.plugins.title.text = var18_label;
                    Chart_history_19.type = 'line';
                    Chart_history_19.data.datasets[0].data = var19_today;
                    Chart_history_19.data.datasets[0].type = 'line';
                    Chart_history_19.options.plugins.datalabels.display = false;
                    Chart_history_19.options.plugins.title.text = var19_label;
                    Chart_history_20.type = 'line';
                    Chart_history_20.data.datasets[0].data = var20_today;
                    Chart_history_20.data.datasets[0].type = 'line';
                    Chart_history_20.options.plugins.datalabels.display = false;
                    Chart_history_20.options.plugins.title.text = var20_label;
                    Chart_history_21.type = 'line';
                    Chart_history_21.data.datasets[0].data = var21_today;
                    Chart_history_21.data.datasets[0].type = 'line';
                    Chart_history_21.options.plugins.datalabels.display = false;
                    Chart_history_21.options.plugins.title.text = var21_label;
                    Chart_history_22.type = 'line';
                    Chart_history_22.data.datasets[0].data = var22_today;
                    Chart_history_22.data.datasets[0].type = 'line';
                    Chart_history_22.options.plugins.datalabels.display = false;
                    Chart_history_22.options.plugins.title.text = var22_label;
                    Chart_history_23.type = 'line';
                    Chart_history_23.data.datasets[0].data = var23_today;
                    Chart_history_23.data.datasets[0].type = 'line';
                    Chart_history_23.options.plugins.datalabels.display = false;
                    Chart_history_23.options.plugins.title.text = var23_label;
                    Chart_history_24.type = 'line';
                    Chart_history_24.data.datasets[0].data = var24_today;
                    Chart_history_24.data.datasets[0].type = 'line';
                    Chart_history_24.options.plugins.datalabels.display = false;
                    Chart_history_24.options.plugins.title.text = var24_label;
                    Chart_history_25.type = 'line';
                    Chart_history_25.data.datasets[0].data = var25_today;
                    Chart_history_25.data.datasets[0].type = 'line';
                    Chart_history_25.options.plugins.datalabels.display = false;
                    Chart_history_25.options.plugins.title.text = var25_label;
                    Chart_history_26.type = 'line';
                    Chart_history_26.data.datasets[0].data = var26_today;
                    Chart_history_26.data.datasets[0].type = 'line';
                    Chart_history_26.options.plugins.datalabels.display = false;
                    Chart_history_26.options.plugins.title.text = var26_label;
                    Chart_history_27.type = 'line';
                    Chart_history_27.data.datasets[0].data = var27_today;
                    Chart_history_27.data.datasets[0].type = 'line';
                    Chart_history_27.options.plugins.datalabels.display = false;
                    Chart_history_27.options.plugins.title.text = var27_label;
                    Chart_history_28.type = 'line';
                    Chart_history_28.data.datasets[0].data = var28_today;
                    Chart_history_28.data.datasets[0].type = 'line';
                    Chart_history_28.options.plugins.datalabels.display = false;
                    Chart_history_28.options.plugins.title.text = var28_label;
                    Chart_history_29.type = 'line';
                    Chart_history_29.data.datasets[0].data = var29_today;
                    Chart_history_29.data.datasets[0].type = 'line';
                    Chart_history_29.options.plugins.datalabels.display = false;
                    Chart_history_29.options.plugins.title.text = var29_label;
                    Chart_history_30.type = 'line';
                    Chart_history_30.data.datasets[0].data = var30_today;
                    Chart_history_30.data.datasets[0].type = 'line';
                    Chart_history_30.options.plugins.datalabels.display = false;
                    Chart_history_30.options.plugins.title.text = var30_label;
                    Chart_history_31.type = 'line';
                    Chart_history_31.data.datasets[0].data = var31_today;
                    Chart_history_31.data.datasets[0].type = 'line';
                    Chart_history_31.options.plugins.datalabels.display = false;
                    Chart_history_31.options.plugins.title.text = var31_label;

                    Chart_history_0.data.labels = label_day;
                    Chart_history_1.data.labels = label_day;
                    Chart_history_2.data.labels = label_day;
                    Chart_history_3.data.labels = label_day;
                    Chart_history_4.data.labels = label_day;
                    Chart_history_5.data.labels = label_day;
                    Chart_history_6.data.labels = label_day;
                    Chart_history_7.data.labels = label_day;
                    Chart_history_8.data.labels = label_day;
                    Chart_history_9.data.labels = label_day;
                    Chart_history_10.data.labels = label_day;
                    Chart_history_11.data.labels = label_day;
                    Chart_history_12.data.labels = label_day;
                    Chart_history_13.data.labels = label_day;
                    Chart_history_14.data.labels = label_day;
                    Chart_history_15.data.labels = label_day;
                    Chart_history_16.data.labels = label_day;
                    Chart_history_17.data.labels = label_day;
                    Chart_history_18.data.labels = label_day;
                    Chart_history_19.data.labels = label_day;
                    Chart_history_20.data.labels = label_day;
                    Chart_history_21.data.labels = label_day;
                    Chart_history_22.data.labels = label_day;
                    Chart_history_23.data.labels = label_day;
                    Chart_history_24.data.labels = label_day;
                    Chart_history_25.data.labels = label_day;
                    Chart_history_26.data.labels = label_day;
                    Chart_history_27.data.labels = label_day;
                    Chart_history_28.data.labels = label_day;
                    Chart_history_29.data.labels = label_day;
                    Chart_history_30.data.labels = label_day;
                    Chart_history_31.data.labels = label_day;

                    Chart_history_0.update();
                    Chart_history_1.update();
                    Chart_history_2.update();
                    Chart_history_3.update();
                    Chart_history_4.update();
                    Chart_history_5.update();
                    Chart_history_6.update();
                    Chart_history_7.update();
                    Chart_history_8.update();
                    Chart_history_9.update();
                    Chart_history_10.update();
                    Chart_history_11.update();
                    Chart_history_12.update();
                    Chart_history_13.update();
                    Chart_history_14.update();
                    Chart_history_15.update();
                    Chart_history_16.update();
                    Chart_history_17.update();
                    Chart_history_18.update();
                    Chart_history_19.update();
                    Chart_history_20.update();
                    Chart_history_21.update();
                    Chart_history_22.update();
                    Chart_history_23.update();
                    Chart_history_24.update();
                    Chart_history_25.update();
                    Chart_history_26.update();
                    Chart_history_27.update();
                    Chart_history_28.update();
                    Chart_history_29.update();
                    Chart_history_30.update();
                    Chart_history_31.update();

                })
                .fail(function () {
                    // alert("An error occurred");
                    $(".overlay").fadeOut(200);
                    $('.toast').removeClass('bg-success bg-warning').addClass('bg-danger');
                    // $('.toast').addClass('bg-warning');
                    $('#toast-body').text("โหลดข้อมูลไม่สำเร็จ โปรดลองใหม่อีกครั้ง");
                    $('.toast').toast('show');
                });
        } else {

            Chart_history_0.type = 'line';
            Chart_history_0.data.datasets[0].data = var0_today;
            Chart_history_0.data.datasets[0].type = 'line';
            Chart_history_0.options.plugins.datalabels.display = false;
            Chart_history_1.type = 'line';
            Chart_history_1.data.datasets[0].data = var1_today;
            Chart_history_1.data.datasets[0].type = 'line';
            Chart_history_1.options.plugins.datalabels.display = false;
            Chart_history_2.type = 'line';
            Chart_history_2.data.datasets[0].data = var2_today;
            Chart_history_2.data.datasets[0].type = 'line';
            Chart_history_2.options.plugins.datalabels.display = false;
            Chart_history_3.type = 'line';
            Chart_history_3.data.datasets[0].data = var3_today;
            Chart_history_3.data.datasets[0].type = 'line';
            Chart_history_3.options.plugins.datalabels.display = false;
            Chart_history_4.type = 'line';
            Chart_history_4.data.datasets[0].data = var4_today;
            Chart_history_4.data.datasets[0].type = 'line';
            Chart_history_4.options.plugins.datalabels.display = false;
            Chart_history_5.type = 'line';
            Chart_history_5.data.datasets[0].data = var5_today;
            Chart_history_5.data.datasets[0].type = 'line';
            Chart_history_5.options.plugins.datalabels.display = false;
            Chart_history_6.type = 'line';
            Chart_history_6.data.datasets[0].data = var6_today;
            Chart_history_6.data.datasets[0].type = 'line';
            Chart_history_6.options.plugins.datalabels.display = false;
            Chart_history_7.type = 'line';
            Chart_history_7.data.datasets[0].data = var7_today;
            Chart_history_7.data.datasets[0].type = 'line';
            Chart_history_7.options.plugins.datalabels.display = false;
            Chart_history_8.type = 'line';
            Chart_history_8.data.datasets[0].data = var8_today;
            Chart_history_8.data.datasets[0].type = 'line';
            Chart_history_8.options.plugins.datalabels.display = false;
            Chart_history_9.type = 'line';
            Chart_history_9.data.datasets[0].data = var9_today;
            Chart_history_9.data.datasets[0].type = 'line';
            Chart_history_9.options.plugins.datalabels.display = false;

            Chart_history_0.data.labels = label_day;
            Chart_history_1.data.labels = label_day;
            Chart_history_2.data.labels = label_day;
            Chart_history_3.data.labels = label_day;
            Chart_history_4.data.labels = label_day;
            Chart_history_5.data.labels = label_day;
            Chart_history_6.data.labels = label_day;
            Chart_history_7.data.labels = label_day;
            Chart_history_8.data.labels = label_day;
            Chart_history_9.data.labels = label_day;

            Chart_history_0.update();
            Chart_history_1.update();
            Chart_history_2.update();
            Chart_history_3.update();
            Chart_history_4.update();
            Chart_history_5.update();
            Chart_history_6.update();
            Chart_history_7.update();
            Chart_history_8.update();
            Chart_history_9.update();

        }
    });

    // for tab select
    $("#mouth_view").click(function () {

        $("#chart").show();
        $(".overview-page").hide();
        $("#uplot").hide();
        $("#google_table").hide();
        $(".setting-page").hide();
        $("#Charthistory").show();
        $("#Chart1").hide();
        $("#Chartday").hide();
        $(".history_option_class").show();
        $(".history_view_class").hide();
        $(".month-view-page").show();
        $(".day-view-page").hide();

        Chart_history_0.resetZoom();
        Chart_history_1.resetZoom();
        Chart_history_2.resetZoom();
        Chart_history_3.resetZoom();
        Chart_history_4.resetZoom();
        Chart_history_5.resetZoom();
        Chart_history_6.resetZoom();
        Chart_history_7.resetZoom();
        Chart_history_8.resetZoom();
        Chart_history_9.resetZoom();
        Chart_history_10.resetZoom();
        Chart_history_11.resetZoom();
        Chart_history_12.resetZoom();
        Chart_history_13.resetZoom();
        Chart_history_14.resetZoom();
        Chart_history_15.resetZoom();
        Chart_history_16.resetZoom();
        Chart_history_17.resetZoom();
        Chart_history_18.resetZoom();
        Chart_history_19.resetZoom();
        Chart_history_20.resetZoom();
        Chart_history_21.resetZoom();
        Chart_history_22.resetZoom();
        Chart_history_23.resetZoom();
        Chart_history_24.resetZoom();
        Chart_history_25.resetZoom();
        Chart_history_26.resetZoom();
        Chart_history_27.resetZoom();
        Chart_history_28.resetZoom();
        Chart_history_29.resetZoom();
        Chart_history_30.resetZoom();
        Chart_history_31.resetZoom();

        Chart_history_0.options.scales['x'].title.text = "วันที่";
        Chart_history_1.options.scales['x'].title.text = "วันที่";
        Chart_history_2.options.scales['x'].title.text = "วันที่";
        Chart_history_3.options.scales['x'].title.text = "วันที่";
        Chart_history_4.options.scales['x'].title.text = "วันที่";
        Chart_history_5.options.scales['x'].title.text = "วันที่";
        Chart_history_6.options.scales['x'].title.text = "วันที่";
        Chart_history_7.options.scales['x'].title.text = "วันที่";
        Chart_history_8.options.scales['x'].title.text = "วันที่";
        Chart_history_9.options.scales['x'].title.text = "วันที่";
        Chart_history_10.options.scales['x'].title.text = "วันที่";
        Chart_history_11.options.scales['x'].title.text = "วันที่";
        Chart_history_12.options.scales['x'].title.text = "วันที่";
        Chart_history_13.options.scales['x'].title.text = "วันที่";
        Chart_history_14.options.scales['x'].title.text = "วันที่";
        Chart_history_15.options.scales['x'].title.text = "วันที่";
        Chart_history_16.options.scales['x'].title.text = "วันที่";
        Chart_history_17.options.scales['x'].title.text = "วันที่";
        Chart_history_18.options.scales['x'].title.text = "วันที่";
        Chart_history_19.options.scales['x'].title.text = "วันที่";
        Chart_history_20.options.scales['x'].title.text = "วันที่";
        Chart_history_21.options.scales['x'].title.text = "วันที่";
        Chart_history_22.options.scales['x'].title.text = "วันที่";
        Chart_history_23.options.scales['x'].title.text = "วันที่";
        Chart_history_24.options.scales['x'].title.text = "วันที่";
        Chart_history_25.options.scales['x'].title.text = "วันที่";
        Chart_history_26.options.scales['x'].title.text = "วันที่";
        Chart_history_27.options.scales['x'].title.text = "วันที่";
        Chart_history_28.options.scales['x'].title.text = "วันที่";
        Chart_history_29.options.scales['x'].title.text = "วันที่";
        Chart_history_30.options.scales['x'].title.text = "วันที่";
        Chart_history_31.options.scales['x'].title.text = "วันที่";

        $('#chart_name').text('ค่าเฉลี่ยในแต่ละวัน');

        if (label_mouth.length == 0) { // if empty array let get new

            $(".overlay").show();

            $.post('ajax/07value32.php', {
                id: esp_id,
                skey: sk,
                data: "day",
                range: {
                    start: moment().subtract(2, 'month').startOf('month').format('YYYY-MM-DD'),
                    end: moment().format('YYYY-MM-DD')
                }
            })
                .done(function (response) {
                    // console.log(response);
                    if (response == "nodata") {
                        $(".overlay").hide();
                        return;
                    }

                    $(".overlay").fadeOut(100);

                    if (response == "") return;

                    var json = JSON.parse(response);

                    var0_thismouth = json.var0;
                    var0_thismouth.reverse();
                    var1_thismouth = json.var1;
                    var1_thismouth.reverse();
                    var2_thismouth = json.var2;
                    var2_thismouth.reverse();
                    var3_thismouth = json.var3;
                    var3_thismouth.reverse();
                    var4_thismouth = json.var4;
                    var4_thismouth.reverse();
                    var5_thismouth = json.var5;
                    var5_thismouth.reverse();
                    var6_thismouth = json.var6;
                    var6_thismouth.reverse();
                    var7_thismouth = json.var7;
                    var7_thismouth.reverse();
                    var8_thismouth = json.var8;
                    var8_thismouth.reverse();
                    var9_thismouth = json.var9;
                    var9_thismouth.reverse();
                    var10_thismouth = json.var10;
                    var10_thismouth.reverse();
                    var11_thismouth = json.var11;
                    var11_thismouth.reverse();
                    var12_thismouth = json.var12;
                    var12_thismouth.reverse();
                    var13_thismouth = json.var13;
                    var13_thismouth.reverse();
                    var14_thismouth = json.var14;
                    var14_thismouth.reverse();
                    var15_thismouth = json.var15;
                    var15_thismouth.reverse();
                    var16_thismouth = json.var16;
                    var16_thismouth.reverse();
                    var17_thismouth = json.var17;
                    var17_thismouth.reverse();
                    var18_thismouth = json.var18;
                    var18_thismouth.reverse();
                    var19_thismouth = json.var19;
                    var19_thismouth.reverse();
                    var20_thismouth = json.var20;
                    var20_thismouth.reverse();
                    var21_thismouth = json.var21;
                    var21_thismouth.reverse();
                    var22_thismouth = json.var22;
                    var22_thismouth.reverse();
                    var23_thismouth = json.var23;
                    var23_thismouth.reverse();
                    var24_thismouth = json.var24;
                    var24_thismouth.reverse();
                    var25_thismouth = json.var25;
                    var25_thismouth.reverse();
                    var26_thismouth = json.var26;
                    var26_thismouth.reverse();
                    var27_thismouth = json.var27;
                    var27_thismouth.reverse();
                    var28_thismouth = json.var28;
                    var28_thismouth.reverse();
                    var29_thismouth = json.var29;
                    var29_thismouth.reverse();
                    var30_thismouth = json.var30;
                    var30_thismouth.reverse();
                    var31_thismouth = json.var31;
                    var31_thismouth.reverse();

                    fulldate = json.time;
                    fulldate.reverse();
                    label_mouth = [];
                    for (var count = 0; count < fulldate.length; count++) {
                        let timesplit = String(fulldate[count]).split("-");
                        label_mouth.push(timesplit[2]);
                    }

                    Chart_history_0.data.datasets[0].type = 'bar';
                    Chart_history_0.data.datasets[0].data = var0_thismouth;
                    Chart_history_0.data.labels = label_mouth;
                    Chart_history_0.options.plugins.datalabels.display = true;

                    Chart_history_1.data.datasets[0].type = 'bar';
                    Chart_history_1.data.datasets[0].data = var1_thismouth;
                    Chart_history_1.data.labels = label_mouth;
                    Chart_history_1.options.plugins.datalabels.display = true;

                    Chart_history_2.data.datasets[0].type = 'bar';
                    Chart_history_2.data.datasets[0].data = var2_thismouth;
                    Chart_history_2.data.labels = label_mouth;
                    Chart_history_2.options.plugins.datalabels.display = true;
                    Chart_history_3.data.datasets[0].type = 'bar';
                    Chart_history_3.data.datasets[0].data = var3_thismouth;
                    Chart_history_3.data.labels = label_mouth;
                    Chart_history_3.options.plugins.datalabels.display = true;
                    Chart_history_4.data.datasets[0].type = 'bar';
                    Chart_history_4.data.datasets[0].data = var4_thismouth;
                    Chart_history_4.data.labels = label_mouth;
                    Chart_history_4.options.plugins.datalabels.display = true;
                    Chart_history_5.data.datasets[0].type = 'bar';
                    Chart_history_5.data.datasets[0].data = var5_thismouth;
                    Chart_history_5.data.labels = label_mouth;
                    Chart_history_5.options.plugins.datalabels.display = true;
                    Chart_history_6.data.datasets[0].type = 'bar';
                    Chart_history_6.data.datasets[0].data = var6_thismouth;
                    Chart_history_6.data.labels = label_mouth;
                    Chart_history_6.options.plugins.datalabels.display = true;
                    Chart_history_7.data.datasets[0].type = 'bar';
                    Chart_history_7.data.datasets[0].data = var7_thismouth;
                    Chart_history_7.data.labels = label_mouth;
                    Chart_history_7.options.plugins.datalabels.display = true;
                    Chart_history_8.data.datasets[0].type = 'bar';
                    Chart_history_8.data.datasets[0].data = var8_thismouth;
                    Chart_history_8.data.labels = label_mouth;
                    Chart_history_8.options.plugins.datalabels.display = true;
                    Chart_history_9.data.datasets[0].type = 'bar';
                    Chart_history_9.data.datasets[0].data = var9_thismouth;
                    Chart_history_9.data.labels = label_mouth;
                    Chart_history_9.options.plugins.datalabels.display = true;
                    Chart_history_10.data.datasets[0].type = 'bar';
                    Chart_history_10.data.datasets[0].data = var10_thismouth;
                    Chart_history_10.data.labels = label_mouth;
                    Chart_history_10.options.plugins.datalabels.display = true;

                    Chart_history_11.data.datasets[0].type = 'bar';
                    Chart_history_11.data.datasets[0].data = var11_thismouth;
                    Chart_history_11.data.labels = label_mouth;
                    Chart_history_11.options.plugins.datalabels.display = true;

                    Chart_history_12.data.datasets[0].type = 'bar';
                    Chart_history_12.data.datasets[0].data = var12_thismouth;
                    Chart_history_12.data.labels = label_mouth;
                    Chart_history_12.options.plugins.datalabels.display = true;

                    Chart_history_13.data.datasets[0].type = 'bar';
                    Chart_history_13.data.datasets[0].data = var13_thismouth;
                    Chart_history_13.data.labels = label_mouth;
                    Chart_history_13.options.plugins.datalabels.display = true;

                    Chart_history_14.data.datasets[0].type = 'bar';
                    Chart_history_14.data.datasets[0].data = var14_thismouth;
                    Chart_history_14.data.labels = label_mouth;
                    Chart_history_14.options.plugins.datalabels.display = true;

                    Chart_history_15.data.datasets[0].type = 'bar';
                    Chart_history_15.data.datasets[0].data = var15_thismouth;
                    Chart_history_15.data.labels = label_mouth;
                    Chart_history_15.options.plugins.datalabels.display = true;

                    Chart_history_16.data.datasets[0].type = 'bar';
                    Chart_history_16.data.datasets[0].data = var16_thismouth;
                    Chart_history_16.data.labels = label_mouth;
                    Chart_history_16.options.plugins.datalabels.display = true;

                    Chart_history_17.data.datasets[0].type = 'bar';
                    Chart_history_17.data.datasets[0].data = var17_thismouth;
                    Chart_history_17.data.labels = label_mouth;
                    Chart_history_17.options.plugins.datalabels.display = true;

                    Chart_history_18.data.datasets[0].type = 'bar';
                    Chart_history_18.data.datasets[0].data = var18_thismouth;
                    Chart_history_18.data.labels = label_mouth;
                    Chart_history_18.options.plugins.datalabels.display = true;

                    Chart_history_19.data.datasets[0].type = 'bar';
                    Chart_history_19.data.datasets[0].data = var19_thismouth;
                    Chart_history_19.data.labels = label_mouth;
                    Chart_history_19.options.plugins.datalabels.display = true;

                    Chart_history_20.data.datasets[0].type = 'bar';
                    Chart_history_20.data.datasets[0].data = var20_thismouth;
                    Chart_history_20.data.labels = label_mouth;
                    Chart_history_20.options.plugins.datalabels.display = true;

                    Chart_history_21.data.datasets[0].type = 'bar';
                    Chart_history_21.data.datasets[0].data = var21_thismouth;
                    Chart_history_21.data.labels = label_mouth;
                    Chart_history_21.options.plugins.datalabels.display = true;

                    Chart_history_22.data.datasets[0].type = 'bar';
                    Chart_history_22.data.datasets[0].data = var22_thismouth;
                    Chart_history_22.data.labels = label_mouth;
                    Chart_history_22.options.plugins.datalabels.display = true;

                    Chart_history_23.data.datasets[0].type = 'bar';
                    Chart_history_23.data.datasets[0].data = var23_thismouth;
                    Chart_history_23.data.labels = label_mouth;
                    Chart_history_23.options.plugins.datalabels.display = true;

                    Chart_history_24.data.datasets[0].type = 'bar';
                    Chart_history_24.data.datasets[0].data = var24_thismouth;
                    Chart_history_24.data.labels = label_mouth;
                    Chart_history_24.options.plugins.datalabels.display = true;

                    Chart_history_25.data.datasets[0].type = 'bar';
                    Chart_history_25.data.datasets[0].data = var25_thismouth;
                    Chart_history_25.data.labels = label_mouth;
                    Chart_history_25.options.plugins.datalabels.display = true;

                    Chart_history_26.data.datasets[0].type = 'bar';
                    Chart_history_26.data.datasets[0].data = var26_thismouth;
                    Chart_history_26.data.labels = label_mouth;
                    Chart_history_26.options.plugins.datalabels.display = true;

                    Chart_history_27.data.datasets[0].type = 'bar';
                    Chart_history_27.data.datasets[0].data = var27_thismouth;
                    Chart_history_27.data.labels = label_mouth;
                    Chart_history_27.options.plugins.datalabels.display = true;

                    Chart_history_28.data.datasets[0].type = 'bar';
                    Chart_history_28.data.datasets[0].data = var28_thismouth;
                    Chart_history_28.data.labels = label_mouth;
                    Chart_history_28.options.plugins.datalabels.display = true;

                    Chart_history_29.data.datasets[0].type = 'bar';
                    Chart_history_29.data.datasets[0].data = var29_thismouth;
                    Chart_history_29.data.labels = label_mouth;
                    Chart_history_29.options.plugins.datalabels.display = true;

                    Chart_history_30.data.datasets[0].type = 'bar';
                    Chart_history_30.data.datasets[0].data = var30_thismouth;
                    Chart_history_30.data.labels = label_mouth;
                    Chart_history_30.options.plugins.datalabels.display = true;

                    Chart_history_31.data.datasets[0].type = 'bar';
                    Chart_history_31.data.datasets[0].data = var31_thismouth;
                    Chart_history_31.data.labels = label_mouth;
                    Chart_history_31.options.plugins.datalabels.display = true;

                    Chart_history_0.update();
                    Chart_history_1.update();
                    Chart_history_2.update();
                    Chart_history_3.update();
                    Chart_history_4.update();
                    Chart_history_5.update();
                    Chart_history_6.update();
                    Chart_history_7.update();
                    Chart_history_8.update();
                    Chart_history_9.update();
                    Chart_history_10.update();
                    Chart_history_11.update();
                    Chart_history_12.update();
                    Chart_history_13.update();
                    Chart_history_14.update();
                    Chart_history_15.update();
                    Chart_history_16.update();
                    Chart_history_17.update();
                    Chart_history_18.update();
                    Chart_history_19.update();
                    Chart_history_20.update();
                    Chart_history_21.update();
                    Chart_history_22.update();
                    Chart_history_23.update();
                    Chart_history_24.update();
                    Chart_history_25.update();
                    Chart_history_26.update();
                    Chart_history_27.update();
                    Chart_history_28.update();
                    Chart_history_29.update();
                    Chart_history_30.update();
                    Chart_history_31.update();

                })
                .fail(function () {

                    $(".overlay").fadeOut(200);
                    $('.toast').removeClass('bg-success bg-warning').addClass('bg-danger');
                    $('#toast-body').text("โหลดข้อมูลไม่สำเร็จ โปรดลองใหม่อีกครั้ง");
                    $('.toast').toast('show');

                });
        } else {

            Chart_history_0.data.datasets[0].type = 'bar';
            Chart_history_0.data.datasets[0].data = var0_thismouth;
            Chart_history_0.data.labels = label_mouth;
            Chart_history_0.options.plugins.datalabels.display = true;

            Chart_history_1.data.datasets[0].type = 'bar';
            Chart_history_1.data.datasets[0].data = var1_thismouth;
            Chart_history_1.data.labels = label_mouth;
            Chart_history_1.options.plugins.datalabels.display = true;

            Chart_history_2.data.datasets[0].type = 'bar';
            Chart_history_2.data.datasets[0].data = var2_thismouth;
            Chart_history_2.data.labels = label_mouth;
            Chart_history_2.options.plugins.datalabels.display = true;

            Chart_history_3.data.datasets[0].type = 'bar';
            Chart_history_3.data.datasets[0].data = var3_thismouth;
            Chart_history_3.data.labels = label_mouth;
            Chart_history_3.options.plugins.datalabels.display = true;

            Chart_history_4.data.datasets[0].type = 'bar';
            Chart_history_4.data.datasets[0].data = var4_thismouth;
            Chart_history_4.data.labels = label_mouth;
            Chart_history_4.options.plugins.datalabels.display = true;

            Chart_history_5.data.datasets[0].type = 'bar';
            Chart_history_5.data.datasets[0].data = var5_thismouth;
            Chart_history_5.data.labels = label_mouth;
            Chart_history_5.options.plugins.datalabels.display = true;

            Chart_history_6.data.datasets[0].type = 'bar';
            Chart_history_6.data.datasets[0].data = var6_thismouth;
            Chart_history_6.data.labels = label_mouth;
            Chart_history_6.options.plugins.datalabels.display = true;

            Chart_history_7.data.datasets[0].type = 'bar';
            Chart_history_7.data.datasets[0].data = var7_thismouth;
            Chart_history_7.data.labels = label_mouth;
            Chart_history_7.options.plugins.datalabels.display = true;

            Chart_history_8.data.datasets[0].type = 'bar';
            Chart_history_8.data.datasets[0].data = var8_thismouth;
            Chart_history_8.data.labels = label_mouth;
            Chart_history_8.options.plugins.datalabels.display = true;
            Chart_history_9.data.datasets[0].type = 'bar';
            Chart_history_9.data.datasets[0].data = var9_thismouth;
            Chart_history_9.data.labels = label_mouth;
            Chart_history_9.options.plugins.datalabels.display = true;
            Chart_history_10.data.datasets[0].type = 'bar';
            Chart_history_10.data.datasets[0].data = var0_thismouth;
            Chart_history_10.data.labels = label_mouth;
            Chart_history_10.options.plugins.datalabels.display = true;

            Chart_history_11.data.datasets[0].type = 'bar';
            Chart_history_11.data.datasets[0].data = var1_thismouth;
            Chart_history_11.data.labels = label_mouth;
            Chart_history_11.options.plugins.datalabels.display = true;

            Chart_history_12.data.datasets[0].type = 'bar';
            Chart_history_12.data.datasets[0].data = var2_thismouth;
            Chart_history_12.data.labels = label_mouth;
            Chart_history_12.options.plugins.datalabels.display = true;

            Chart_history_13.data.datasets[0].type = 'bar';
            Chart_history_13.data.datasets[0].data = var3_thismouth;
            Chart_history_13.data.labels = label_mouth;
            Chart_history_13.options.plugins.datalabels.display = true;

            Chart_history_14.data.datasets[0].type = 'bar';
            Chart_history_14.data.datasets[0].data = var4_thismouth;
            Chart_history_14.data.labels = label_mouth;
            Chart_history_14.options.plugins.datalabels.display = true;

            Chart_history_15.data.datasets[0].type = 'bar';
            Chart_history_15.data.datasets[0].data = var5_thismouth;
            Chart_history_15.data.labels = label_mouth;
            Chart_history_15.options.plugins.datalabels.display = true;

            Chart_history_16.data.datasets[0].type = 'bar';
            Chart_history_16.data.datasets[0].data = var6_thismouth;
            Chart_history_16.data.labels = label_mouth;
            Chart_history_16.options.plugins.datalabels.display = true;

            Chart_history_17.data.datasets[0].type = 'bar';
            Chart_history_17.data.datasets[0].data = var7_thismouth;
            Chart_history_17.data.labels = label_mouth;
            Chart_history_17.options.plugins.datalabels.display = true;

            Chart_history_18.data.datasets[0].type = 'bar';
            Chart_history_18.data.datasets[0].data = var8_thismouth;
            Chart_history_18.data.labels = label_mouth;
            Chart_history_18.options.plugins.datalabels.display = true;

            Chart_history_19.data.datasets[0].type = 'bar';
            Chart_history_19.data.datasets[0].data = var9_thismouth;
            Chart_history_19.data.labels = label_mouth;
            Chart_history_19.options.plugins.datalabels.display = true;

            Chart_history_20.data.datasets[0].type = 'bar';
            Chart_history_20.data.datasets[0].data = var0_thismouth;
            Chart_history_20.data.labels = label_mouth;
            Chart_history_20.options.plugins.datalabels.display = true;

            Chart_history_21.data.datasets[0].type = 'bar';
            Chart_history_21.data.datasets[0].data = var1_thismouth;
            Chart_history_21.data.labels = label_mouth;
            Chart_history_21.options.plugins.datalabels.display = true;

            Chart_history_22.data.datasets[0].type = 'bar';
            Chart_history_22.data.datasets[0].data = var2_thismouth;
            Chart_history_22.data.labels = label_mouth;
            Chart_history_22.options.plugins.datalabels.display = true;

            Chart_history_23.data.datasets[0].type = 'bar';
            Chart_history_23.data.datasets[0].data = var3_thismouth;
            Chart_history_23.data.labels = label_mouth;
            Chart_history_23.options.plugins.datalabels.display = true;

            Chart_history_24.data.datasets[0].type = 'bar';
            Chart_history_24.data.datasets[0].data = var4_thismouth;
            Chart_history_24.data.labels = label_mouth;
            Chart_history_24.options.plugins.datalabels.display = true;

            Chart_history_25.data.datasets[0].type = 'bar';
            Chart_history_25.data.datasets[0].data = var5_thismouth;
            Chart_history_25.data.labels = label_mouth;
            Chart_history_25.options.plugins.datalabels.display = true;

            Chart_history_26.data.datasets[0].type = 'bar';
            Chart_history_26.data.datasets[0].data = var6_thismouth;
            Chart_history_26.data.labels = label_mouth;
            Chart_history_26.options.plugins.datalabels.display = true;

            Chart_history_27.data.datasets[0].type = 'bar';
            Chart_history_27.data.datasets[0].data = var7_thismouth;
            Chart_history_27.data.labels = label_mouth;
            Chart_history_27.options.plugins.datalabels.display = true;

            Chart_history_28.data.datasets[0].type = 'bar';
            Chart_history_28.data.datasets[0].data = var8_thismouth;
            Chart_history_28.data.labels = label_mouth;
            Chart_history_28.options.plugins.datalabels.display = true;

            Chart_history_29.data.datasets[0].type = 'bar';
            Chart_history_29.data.datasets[0].data = var9_thismouth;
            Chart_history_29.data.labels = label_mouth;
            Chart_history_29.options.plugins.datalabels.display = true;

            Chart_history_30.data.datasets[0].type = 'bar';
            Chart_history_30.data.datasets[0].data = var8_thismouth;
            Chart_history_30.data.labels = label_mouth;
            Chart_history_30.options.plugins.datalabels.display = true;

            Chart_history_31.data.datasets[0].type = 'bar';
            Chart_history_31.data.datasets[0].data = var9_thismouth;
            Chart_history_31.data.labels = label_mouth;
            Chart_history_31.options.plugins.datalabels.display = true;

            Chart_history_0.update();
            Chart_history_1.update();
            Chart_history_2.update();
            Chart_history_3.update();
            Chart_history_4.update();
            Chart_history_5.update();
            Chart_history_6.update();
            Chart_history_7.update();
            Chart_history_8.update();
            Chart_history_9.update();
            Chart_history_10.update();
            Chart_history_11.update();
            Chart_history_12.update();
            Chart_history_13.update();
            Chart_history_14.update();
            Chart_history_15.update();
            Chart_history_16.update();
            Chart_history_17.update();
            Chart_history_18.update();
            Chart_history_19.update();
            Chart_history_20.update();
            Chart_history_21.update();
            Chart_history_22.update();
            Chart_history_23.update();
            Chart_history_24.update();
            Chart_history_25.update();
            Chart_history_26.update();
            Chart_history_27.update();
            Chart_history_28.update();
            Chart_history_29.update();
            Chart_history_30.update();
            Chart_history_31.update();
        }

        $("#month_csvdownload").click(function () {
            var data = [["time", var0_label, var1_label, var2_label, var3_label, var4_label, var5_label, var6_label, var7_label, var8_label, var9_label, var10_label, var11_label, var12_label, var13_label, var14_label, var15_label, var16_label, var17_label, var18_label, var19_label, var20_label, var21_label, var22_label, var23_label, var24_label, var25_label, var26_label, var27_label, var28_label, var29_label, var30_label, var31_label]];

            // console.log(label_history.length);return;

            for (var count = 0; count < fulldate.length; count++) {
                data.push([fulldate[count], var0_thismouth[count], var1_thismouth[count], var2_thismouth[count], var3_thismouth[count], var4_thismouth[count], var5_thismouth[count], var6_thismouth[count], var7_thismouth[count], var8_thismouth[count], var9_thismouth[count], var10_thismouth[count], var11_thismouth[count], var12_thismouth[count], var13_thismouth[count], var14_thismouth[count], var15_thismouth[count], var16_thismouth[count], var17_thismouth[count], var18_thismouth[count], var19_thismouth[count], var20_thismouth[count], var21_thismouth[count], var22_thismouth[count], var23_thismouth[count], var24_thismouth[count], var25_thismouth[count], var26_thismouth[count], var27_thismouth[count], var28_thismouth[count], var29_thismouth[count], var30_thismouth[count], var31_thismouth[count]]);
            }

            let csvContent = "data:text/csv;charset=utf-8," +
                data.map(e => e.join(",")).join("\n");

            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", fulldate[0] + "_to_" + fulldate[fulldate.length - 1] + "_data.csv");
            document.body.appendChild(link);
            link.click();
        });

        $("#month-line").click(function () {
            Chart_history_0.type = 'line';
            Chart_history_0.data.datasets[0].type = 'line';
            Chart_history_1.type = 'line';
            Chart_history_1.data.datasets[0].type = 'line';
            Chart_history_2.type = 'line';
            Chart_history_2.data.datasets[0].type = 'line';
            Chart_history_3.type = 'line';
            Chart_history_3.data.datasets[0].type = 'line';
            Chart_history_4.type = 'line';
            Chart_history_4.data.datasets[0].type = 'line';
            Chart_history_5.type = 'line';
            Chart_history_5.data.datasets[0].type = 'line';
            Chart_history_6.type = 'line';
            Chart_history_6.data.datasets[0].type = 'line';
            Chart_history_7.type = 'line';
            Chart_history_7.data.datasets[0].type = 'line';
            Chart_history_8.type = 'line';
            Chart_history_8.data.datasets[0].type = 'line';
            Chart_history_9.type = 'line';
            Chart_history_9.data.datasets[0].type = 'line';
            Chart_history_10.type = 'line';
            Chart_history_10.data.datasets[0].type = 'line';
            Chart_history_11.type = 'line';
            Chart_history_11.data.datasets[0].type = 'line';
            Chart_history_12.type = 'line';
            Chart_history_12.data.datasets[0].type = 'line';
            Chart_history_13.type = 'line';
            Chart_history_13.data.datasets[0].type = 'line';
            Chart_history_14.type = 'line';
            Chart_history_14.data.datasets[0].type = 'line';
            Chart_history_15.type = 'line';
            Chart_history_15.data.datasets[0].type = 'line';
            Chart_history_16.type = 'line';
            Chart_history_16.data.datasets[0].type = 'line';
            Chart_history_17.type = 'line';
            Chart_history_17.data.datasets[0].type = 'line';
            Chart_history_18.type = 'line';
            Chart_history_18.data.datasets[0].type = 'line';
            Chart_history_19.type = 'line';
            Chart_history_19.data.datasets[0].type = 'line';
            Chart_history_20.type = 'line';
            Chart_history_20.data.datasets[0].type = 'line';
            Chart_history_21.type = 'line';
            Chart_history_21.data.datasets[0].type = 'line';
            Chart_history_22.type = 'line';
            Chart_history_22.data.datasets[0].type = 'line';
            Chart_history_23.type = 'line';
            Chart_history_23.data.datasets[0].type = 'line';
            Chart_history_24.type = 'line';
            Chart_history_24.data.datasets[0].type = 'line';
            Chart_history_25.type = 'line';
            Chart_history_25.data.datasets[0].type = 'line';
            Chart_history_26.type = 'line';
            Chart_history_26.data.datasets[0].type = 'line';
            Chart_history_27.type = 'line';
            Chart_history_27.data.datasets[0].type = 'line';
            Chart_history_28.type = 'line';
            Chart_history_28.data.datasets[0].type = 'line';
            Chart_history_29.type = 'line';
            Chart_history_29.data.datasets[0].type = 'line';
            Chart_history_30.type = 'line';
            Chart_history_30.data.datasets[0].type = 'line';
            Chart_history_31.type = 'line';
            Chart_history_31.data.datasets[0].type = 'line';

            Chart_history_0.update();
            Chart_history_1.update();
            Chart_history_2.update();
            Chart_history_3.update();
            Chart_history_4.update();
            Chart_history_5.update();
            Chart_history_6.update();
            Chart_history_7.update();
            Chart_history_8.update();
            Chart_history_9.update();
            Chart_history_10.update();
            Chart_history_11.update();
            Chart_history_12.update();
            Chart_history_13.update();
            Chart_history_14.update();
            Chart_history_15.update();
            Chart_history_16.update();
            Chart_history_17.update();
            Chart_history_18.update();
            Chart_history_19.update();
            Chart_history_20.update();
            Chart_history_21.update();
            Chart_history_22.update();
            Chart_history_23.update();
            Chart_history_24.update();
            Chart_history_25.update();
            Chart_history_26.update();
            Chart_history_27.update();
            Chart_history_28.update();
            Chart_history_29.update();
            Chart_history_30.update();
            Chart_history_31.update();
        });

        $("#month-bar").click(function () {
            Chart_history_0.type = 'bar';
            Chart_history_0.data.datasets[0].type = 'bar';
            Chart_history_1.type = 'bar';
            Chart_history_1.data.datasets[0].type = 'bar';
            Chart_history_2.type = 'bar';
            Chart_history_2.data.datasets[0].type = 'bar';
            Chart_history_3.type = 'bar';
            Chart_history_3.data.datasets[0].type = 'bar';
            Chart_history_4.type = 'bar';
            Chart_history_4.data.datasets[0].type = 'bar';
            Chart_history_5.type = 'bar';
            Chart_history_5.data.datasets[0].type = 'bar';
            Chart_history_6.type = 'bar';
            Chart_history_6.data.datasets[0].type = 'bar';
            Chart_history_7.type = 'bar';
            Chart_history_7.data.datasets[0].type = 'bar';
            Chart_history_8.type = 'bar';
            Chart_history_8.data.datasets[0].type = 'bar';
            Chart_history_9.type = 'bar';
            Chart_history_9.data.datasets[0].type = 'bar';
            Chart_history_10.type = 'bar';
            Chart_history_10.data.datasets[0].type = 'bar';
            Chart_history_11.type = 'bar';
            Chart_history_11.data.datasets[0].type = 'bar';
            Chart_history_12.type = 'bar';
            Chart_history_12.data.datasets[0].type = 'bar';
            Chart_history_13.type = 'bar';
            Chart_history_13.data.datasets[0].type = 'bar';
            Chart_history_14.type = 'bar';
            Chart_history_14.data.datasets[0].type = 'bar';
            Chart_history_15.type = 'bar';
            Chart_history_15.data.datasets[0].type = 'bar';
            Chart_history_16.type = 'bar';
            Chart_history_16.data.datasets[0].type = 'bar';
            Chart_history_17.type = 'bar';
            Chart_history_17.data.datasets[0].type = 'bar';
            Chart_history_18.type = 'bar';
            Chart_history_18.data.datasets[0].type = 'bar';
            Chart_history_19.type = 'bar';
            Chart_history_19.data.datasets[0].type = 'bar';
            Chart_history_20.type = 'bar';
            Chart_history_20.data.datasets[0].type = 'bar';
            Chart_history_21.type = 'bar';
            Chart_history_21.data.datasets[0].type = 'bar';
            Chart_history_22.type = 'bar';
            Chart_history_22.data.datasets[0].type = 'bar';
            Chart_history_23.type = 'bar';
            Chart_history_23.data.datasets[0].type = 'bar';
            Chart_history_24.type = 'bar';
            Chart_history_24.data.datasets[0].type = 'bar';
            Chart_history_25.type = 'bar';
            Chart_history_25.data.datasets[0].type = 'bar';
            Chart_history_26.type = 'bar';
            Chart_history_26.data.datasets[0].type = 'bar';
            Chart_history_27.type = 'bar';
            Chart_history_27.data.datasets[0].type = 'bar';
            Chart_history_28.type = 'bar';
            Chart_history_28.data.datasets[0].type = 'bar';
            Chart_history_29.type = 'bar';
            Chart_history_29.data.datasets[0].type = 'bar';
            Chart_history_30.type = 'bar';
            Chart_history_30.data.datasets[0].type = 'bar';
            Chart_history_31.type = 'bar';
            Chart_history_31.data.datasets[0].type = 'bar';

            Chart_history_0.update();
            Chart_history_1.update();
            Chart_history_2.update();
            Chart_history_3.update();
            Chart_history_4.update();
            Chart_history_5.update();
            Chart_history_6.update();
            Chart_history_7.update();
            Chart_history_8.update();
            Chart_history_9.update();
            Chart_history_10.update();
            Chart_history_11.update();
            Chart_history_12.update();
            Chart_history_13.update();
            Chart_history_14.update();
            Chart_history_15.update();
            Chart_history_16.update();
            Chart_history_17.update();
            Chart_history_18.update();
            Chart_history_19.update();
            Chart_history_20.update();
            Chart_history_21.update();
            Chart_history_22.update();
            Chart_history_23.update();
            Chart_history_24.update();
            Chart_history_25.update();
            Chart_history_26.update();
            Chart_history_27.update();
            Chart_history_28.update();
            Chart_history_29.update();
            Chart_history_30.update();
            Chart_history_31.update();
        });

    });

    // for tab select
    $("#history_view").click(function () {

        $("#chart").show();
        $(".overview-page").hide();
        $(".setting-page").hide();
        $("#uplot").show();
        $("#google_table").show();
        $("#Chart1").hide();
        $("#Chartday").hide();
        $("#Charthistory").hide();
        $("#uplot").show();
        $(".history_option_class").show();
        $(".history_view_class").show();
        $(".month-view-page").hide();
        $(".day-view-page").hide();


        $('#chart_name').text('ข้อมูลย้อนหลัง');

        if (typeof uplot === 'undefined') cbTimerange(moment().startOf('days'), moment());

    });

    $('#linedata-save').click(function () {

        // console.log($('#dailynotify').prop('checked') ? 1 : 0);

        $.post('ajax/setting.php', {
            id: esp_id,
            skey: sk,
            p_id: 7,
            linetoken: $('#linetoken').val(),
            dailynotify: $('#dailynotify').prop('checked') ? 1 : 0,
            offlinenotify: $('#offlinenotify').prop('checked') ? 1 : 0,
            online_state: online_state
        })
            .done(function (response) {
                // console.log(response);
                if (response) {
                    $('.toast').removeClass('bg-warning').removeClass('bg-danger').addClass('bg-success');
                    // $('.toast').addClass('bg-success');
                    $('#toast-body').text("บันทึกข้อมูลเรียบร้อยแล้ว");
                    $('.toast').toast('show');
                }
            })
            .fail(function () {
                $('.toast').removeClass('bg-success').removeClass('bg-danger').addClass('bg-warning');
                // $('.toast').addClass('bg-warning');
                $('#toast-body').text("บันทึกข้อมูลไม่สำเร็จ โปรดลองใหม่อีกครั้ง");
                $('.toast').toast('show');
            });

    });

    $('#getLineToken label a').click(function () {
        document.addEventListener("visibilitychange", getlinedata);
    });

    function getlinedata() {
        if (!document.hidden) {

            $(".overlay").show();

            $.post('ajax/setting.php', {
                id: esp_id,
                skey: sk,
                p_id: 7
            })
                .done(function (response) {
                    // console.log(response);
                    $(".overlay").fadeOut(100);
                    if (response == "") return;

                    setting = JSON.parse(response);

                    // console.log(setting.daily_notify);

                    $("#linetoken").val(setting.line_token);
                    $("#dailynotify").prop("checked", setting.daily_notify == '1' ? true : false);
                    $('#offlinenotify').prop('checked', setting.offline_notify == '1' ? true : false);
                    $('#onlinenotify').prop('checked', setting.online_notify == '1' ? true : false);

                    document.removeEventListener("visibilitychange", getlinedata);
                })
                .fail(function () {
                    $(".overlay").fadeOut(100);
                    $('.toast').removeClass('bg-success bg-warning').addClass('bg-danger');
                    // $('.toast').addClass('bg-warning');
                    $('#toast-body').text("โหลดข้อมูลไม่สำเร็จ โปรดลองใหม่อีกครั้ง");
                    $('.toast').toast('show');
                });
        }
    }

    function wheelZoomPlugin(opts) {
        let factor = opts.factor || 0.75;

        let xMin, xMax, yMin, yMax, xRange, yRange;

        function clamp(nRange, nMin, nMax, fRange, fMin, fMax) {
            if (nRange > fRange) {
                nMin = fMin;
                nMax = fMax;
            }
            else if (nMin < fMin) {
                nMin = fMin;
                nMax = fMin + nRange;
            }
            else if (nMax > fMax) {
                nMax = fMax;
                nMin = fMax - nRange;
            }

            return [nMin, nMax];
        }

        return {
            hooks: {
                ready: u => {
                    xMin = u.scales.x.min;
                    xMax = u.scales.x.max;
                    yMin = u.scales.y.min;
                    yMax = u.scales.y.max;

                    xRange = xMax - xMin;
                    yRange = yMax - yMin;

                    let over = u.over;
                    let rect = over.getBoundingClientRect();

                    // wheel drag pan
                    over.addEventListener("mousedown", e => {
                        if (e.button == 1) {
                            //	plot.style.cursor = "move";
                            e.preventDefault();

                            let left0 = e.clientX;
                            //	let top0 = e.clientY;

                            let scXMin0 = u.scales.x.min;
                            let scXMax0 = u.scales.x.max;

                            let xUnitsPerPx = u.posToVal(1, 'x') - u.posToVal(0, 'x');

                            function onmove(e) {
                                e.preventDefault();

                                let left1 = e.clientX;
                                //	let top1 = e.clientY;

                                let dx = xUnitsPerPx * (left1 - left0);

                                u.setScale('x', {
                                    min: scXMin0 - dx,
                                    max: scXMax0 - dx,
                                });
                            }

                            function onup(e) {
                                document.removeEventListener("mousemove", onmove);
                                document.removeEventListener("mouseup", onup);
                            }

                            document.addEventListener("mousemove", onmove);
                            document.addEventListener("mouseup", onup);
                        }
                    });

                    // wheel scroll zoom
                    over.addEventListener("wheel", e => {
                        e.preventDefault();

                        let { left, top } = u.cursor;

                        let leftPct = left / rect.width;
                        let btmPct = 1 - top / rect.height;
                        let xVal = u.posToVal(left, "x");
                        let yVal = u.posToVal(top, "y");
                        let oxRange = u.scales.x.max - u.scales.x.min;
                        let oyRange = u.scales.y.max - u.scales.y.min;

                        let nxRange = e.deltaY < 0 ? oxRange * factor : oxRange / factor;
                        let nxMin = xVal - leftPct * nxRange;
                        let nxMax = nxMin + nxRange;
                        [nxMin, nxMax] = clamp(nxRange, nxMin, nxMax, xRange, xMin, xMax);

                        let nyRange = e.deltaY < 0 ? oyRange * factor : oyRange / factor;
                        let nyMin = yVal - btmPct * nyRange;
                        let nyMax = nyMin + nyRange;
                        [nyMin, nyMax] = clamp(nyRange, nyMin, nyMax, yRange, yMin, yMax);

                        u.batch(() => {
                            u.setScale("x", {
                                min: nxMin,
                                max: nxMax,
                            });

                            u.setScale("y", {
                                min: nyMin,
                                max: nyMax,
                            });
                        });
                    });
                }
            }
        };
    }

    function uplotupdate() {

        function getSize(elementId) {
            return {
                width: document.getElementById(elementId).offsetWidth,
                height: document.getElementById(elementId).offsetHeight - 100,
            }
        }

        let data = [label_timestamp, var0_history, var1_history, var2_history, var3_history, var4_history, var5_history, var6_history, var7_history, var8_history, var9_history];

        if (typeof uplot === 'undefined') {
            const optsAreaChart = {
                ...getSize('areaChart'),
                plugins: [
                    wheelZoomPlugin({ factor: 0.75 })
                ],
                series: [
                    {},
                    {
                        // initial toggled state (optional)
                        show: true,

                        spanGaps: true,

                        // in-legend display
                        label: var0_label,
                        // scale: "t",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(255, 0, 0, 1)",
                        width: 2,
                        fill: "rgba(255, 0, 0, 0.1)"
                    },
                    {
                        // initial toggled state (optional)
                        show: false,

                        spanGaps: true,

                        // in-legend display
                        label: var1_label,
                        // scale: "h",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(0, 0, 255, 1)",
                        width: 2,
                        fill: "rgba(0, 0, 255, 0.1)"
                    },
                    {
                        // initial toggled state (optional)
                        show: false,

                        spanGaps: true,

                        // in-legend display
                        label: var2_label,
                        // scale: "h",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(0, 255,0,  1)",
                        width: 2,
                        fill: "rgba(0, 255,0,  0.1)"
                    },
                    {
                        // initial toggled state (optional)
                        show: false,

                        spanGaps: true,

                        // in-legend display
                        label: var3_label,
                        // scale: "h",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(128, 0, 255, 1)",
                        width: 2,
                        fill: "rgba(128, 0, 255, 0.1)"
                    },
                    {
                        // initial toggled state (optional)
                        show: false,

                        spanGaps: true,

                        // in-legend display
                        label: var4_label,
                        // scale: "h",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(0, 128, 255, 1)",
                        width: 2,
                        fill: "rgba(0, 128, 255, 0.1)"
                    },
                    {
                        // initial toggled state (optional)
                        show: false,

                        spanGaps: true,

                        // in-legend display
                        label: var5_label,
                        // scale: "h",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(128, 128, 255, 1)",
                        width: 2,
                        fill: "rgba(128, 128, 255, 0.1)"
                    },
                    {
                        // initial toggled state (optional)
                        show: false,

                        spanGaps: true,

                        // in-legend display
                        label: var6_label,
                        // scale: "h",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(128, 0, 128, 1)",
                        width: 2,
                        fill: "rgba(128, 0, 128, 0.1)"
                    },
                    {
                        // initial toggled state (optional)
                        show: false,

                        spanGaps: true,

                        // in-legend display
                        label: var7_label,
                        // scale: "h",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(0, 128, 128, 1)",
                        width: 2,
                        fill: "rgba(0, 128, 128, 0.1)"
                    },
                    {
                        // initial toggled state (optional)
                        show: false,

                        spanGaps: true,

                        // in-legend display
                        label: var8_label,
                        // scale: "h",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(128, 128, 0, 1)",
                        width: 2,
                        fill: "rgba(128, 128, 0, 0.1)"
                    },
                    {
                        // initial toggled state (optional)
                        show: false,

                        spanGaps: true,

                        // in-legend display
                        label: var9_label,
                        // scale: "h",
                        value: (self, rawValue) => rawValue.toFixed(1),

                        stroke: "rgba(64, 128, 32, 1)",
                        width: 2,
                        fill: "rgba(64, 128, 32, 0.1)"
                    },
                ],
                axes: [
                    {
                        // space: 50,
                        // size: 30,
                        label: "เวลา",
                        labelSize: 20,
                        stroke: "white",
                    },
                    {
                        label: "values",
                        stroke: "rgb(255, 255, 255)",
                    }
                ],
            };

            uplot = new uPlot(optsAreaChart, data, document.getElementById('areaChart'));

            window.addEventListener("resize", e => {
                uplot.setSize(getSize('areaChart'));
            });
        }
        else {
            uplot.setData(data);
        }
    }

    function tablechart() {

        // prepare data for table chart
        var google_data = [];
        for (var count = label_timestamp.length - 1; count >= 0; count--) {
            let dateFormat = new Date(label_timestamp[count] * 1000);
            let thisdate = dateFormat.getFullYear() + "-" + ("0" + (dateFormat.getMonth() + 1)).substr(-2) + "-" + ("0" + dateFormat.getDate()).substr(-2) + " " + ("0" + dateFormat.getHours()).substr(-2) + ":" + ("0" + dateFormat.getMinutes()).substr(-2) + ":" + ("0" + dateFormat.getSeconds()).substr(-2);
            google_data.push([var0_history[count], var1_history[count], var2_history[count], var3_history[count], var4_history[count], var5_history[count], var6_history[count], var7_history[count], var8_history[count], var9_history[count], thisdate]);
        }

        google.charts.load('current', { 'packages': ['table'] });
        google.charts.setOnLoadCallback(drawTable);

        function drawTable() {
            var data = new google.visualization.DataTable();
            data.addColumn('number', var0_label);
            data.addColumn('number', var1_label);
            data.addColumn('number', var2_label);
            data.addColumn('number', var3_label);
            data.addColumn('number', var4_label);
            data.addColumn('number', var5_label);
            data.addColumn('number', var6_label);
            data.addColumn('number', var7_label);
            data.addColumn('number', var8_label);
            data.addColumn('number', var9_label);
            data.addColumn('string', 'time');
            data.addRows(google_data);

            var options = {
                showRowNumber: true,
                allowHtml: true,
                width: '100%', height: '100%',
                page: 'enable', pageSize: 50,
                cssClassNames: {
                    headerRow: 'table-secondary bg-dark',
                    headerCell: 'table-secondary bg-dark',
                    tableCell: 'table-secondary bg-dark'
                }
            };

            var table = new google.visualization.Table(document.getElementById('table_div'));

            table.draw(data, options);
        }
    }

    function cbTimerange(start, end) {

        // alert("hello from cbTimerange");
        $('.daterange span').html(start.format('YYYY-MM-DD HH:mm') + ' - ' + end.format('YYYY-MM-DD HH:mm'));

        let minutesdiff = end.diff(start, 'minutes');
        let minutesfromnow = moment().diff(start, 'minutes');
        var datarange;
        if (minutesdiff <= 60 * 24 * 2 && minutesfromnow <= 60 * 24 * 2) {
            datarange = "sec";
            $("#history-rawdata").hide();
            $("#history-minute").show();
            $("#history-hourly").show();
            if (minutesdiff > 60 * 24) {
                $("#history-daily").show();
            }
            else {
                $("#history-daily").hide();
            }
        }
        else if (minutesdiff <= 60 * 24 * 7 && minutesfromnow <= 60 * 24 * 7) {
            datarange = "min";
            $("#history-rawdata").hide();
            $("#history-minute").hide();
            $("#history-hourly").show();
            $("#history-daily").show();
        }
        else if (minutesdiff <= 60 * 24 * 31 * 3 && minutesfromnow <= 60 * 24 * 31 * 3) {
            datarange = "hr";
            $("#history-rawdata").hide();
            $("#history-minute").hide();
            $("#history-hourly").hide();
            $("#history-daily").show();
        }
        else {
            datarange = "day";
            $("#history-rawdata").hide();
            $("#history-minute").hide();
            $("#history-hourly").hide();
            $("#history-daily").hide();
        }

        $(".overlay").show(100);

        $.ajax({
            url: "ajax/07value32.php",
            type: "post",
            data: {
                id: esp_id,
                skey: sk,
                data: datarange,
                range: {
                    start: start.format('YYYY-MM-DD HH:mm'),
                    end: end.format('YYYY-MM-DD HH:mm')
                }
            },
            success: function (data) {
                // console.log(data);
                if (data == "nodata") {
                    $(".overlay").hide();
                    return;
                }

                var json = JSON.parse(data);

                // reverse for uplot
                json.var0.reverse();
                json.var1.reverse();
                json.var2.reverse();
                json.var3.reverse();
                json.var4.reverse();
                json.var5.reverse();
                json.var6.reverse();
                json.var7.reverse();
                json.var8.reverse();
                json.var9.reverse();
                json.time.reverse();

                var0_history = [];
                for (var count = 0; count < json.var0.length; count++) {
                    var0_history.push(parseFloat(json.var0[count]));
                }
                var1_history = [];
                for (var count = 0; count < json.var1.length; count++) {
                    var1_history.push(parseFloat(json.var1[count]));
                }
                var2_history = [];
                for (var count = 0; count < json.var2.length; count++) {
                    var2_history.push(parseFloat(json.var2[count]));
                }
                var3_history = [];
                for (var count = 0; count < json.var3.length; count++) {
                    var3_history.push(parseFloat(json.var3[count]));
                }
                var4_history = [];
                for (var count = 0; count < json.var4.length; count++) {
                    var4_history.push(parseFloat(json.var4[count]));
                }
                var5_history = [];
                for (var count = 0; count < json.var5.length; count++) {
                    var5_history.push(parseFloat(json.var5[count]));
                }
                var6_history = [];
                for (var count = 0; count < json.var6.length; count++) {
                    var6_history.push(parseFloat(json.var6[count]));
                }
                var7_history = [];
                for (var count = 0; count < json.var7.length; count++) {
                    var7_history.push(parseFloat(json.var7[count]));
                }
                var8_history = [];
                for (var count = 0; count < json.var8.length; count++) {
                    var8_history.push(parseFloat(json.var8[count]));
                }
                var9_history = [];
                for (var count = 0; count < json.var9.length; count++) {
                    var9_history.push(parseFloat(json.var9[count]));
                }

                // for save as csv
                label_history = json.time;

                // convert string to time stamp for uplot
                label_timestamp = [];
                for (var count = 0; count < json.time.length; count++) {
                    label_timestamp.push(Date.parse(json.time[count]) / 1000);
                }

                // console.log(power_history);
                // console.log(label_timestamp);

                $(".overlay").fadeOut(100);

                if (label_history.length != 0) {

                    raw_var0_history = var0_history;
                    raw_var1_history = var1_history;
                    raw_var2_history = var2_history;
                    raw_var3_history = var3_history;
                    raw_var4_history = var4_history;
                    raw_var5_history = var5_history;
                    raw_var6_history = var6_history;
                    raw_var7_history = var7_history;
                    raw_var8_history = var8_history;
                    raw_var9_history = var9_history;
                    raw_label_history = label_history;
                    raw_label_timestamp = label_timestamp;

                    uplotupdate();
                    tablechart();
                }

            },
            error: function () {
                // alert("An error occurred");
                $(".overlay").fadeOut(200);
                $('.toast').removeClass('bg-success bg-warning').addClass('bg-danger');
                // $('.toast').addClass('bg-warning');
                $('#toast-body').text("โหลดข้อมูลไม่สำเร็จ โปรดลองใหม่อีกครั้ง");
                $('.toast').toast('show');
            }
        })

    }

    $('.daterange').daterangepicker({
        "timePicker": true,
        "timePicker24Hour": true,
        ranges: {
            Today: [moment().startOf('days'), moment()],
            Yesterday: [moment().subtract(1, 'days').startOf('days'), moment().subtract(1, 'days').endOf('days')],
            'Last 2 Days': [moment().subtract(1, 'days').startOf('days'), moment()],
            'Last 7 Days': [moment().subtract(6, 'days').startOf('days'), moment()],
            'Last 15 Days': [moment().subtract(14, 'days').startOf('days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days').startOf('days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            'Last 3 Month': [moment().subtract(2, 'month').startOf('month'), moment()],
            'This Years': [moment().startOf('year'), moment()]
        },
        startDate: moment().subtract(1, 'hour'),
        endDate: moment()
    }, cbTimerange);


    $("#csvdownload").click(function () {
        var data = [
            ["time", var0_label, var1_label, var2_label, var3_label, var4_label, var5_label, var6_label, var7_label, var8_label, var9_label, var10_label, var11_label, var12_label, var13_label, var14_label, var15_label, var16_label, var17_label, var18_label, var19_label, var20_label, var21_label, var22_label, var23_label, var24_label, var25_label, var26_label, var27_label, var28_label, var29_label, var30_label, var31_label]
        ];

        // console.log(label_history.length);return;

        for (var count = 0; count < label_history.length; count++) {
            data.push([label_history[count], var0_history[count], var1_history[count], var2_history[count], var3_history[count], var4_history[count], var5_history[count], var6_history[count], var7_history[count], var8_history[count], var9_history[count], var10_history[count], var11_history[count], var12_history[count], var13_history[count], var14_history[count], var15_history[count], var16_history[count], var17_history[count], var18_history[count], var19_history[count], var20_history[count], var21_history[count], var22_history[count], var23_history[count], var24_history[count], var25_history[count], var26_history[count], var27_history[count], var28_history[count], var29_history[count], var30_history[count], var31_history[count]]);
        }

        let csvContent = "data:text/csv;charset=utf-8," +
            data.map(e => e.join(",")).join("\n");

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", label_history[0] + "_to_" + label_history[label_history.length - 1] + "_data.csv");
        document.body.appendChild(link);
        link.click();
    });


    $("#edit-var-form").submit(function (e) {

        e.preventDefault();

        var form = $(this);
        var actionUrl = form.attr('action');

        //add disabled
        form.attr('disabled', 'disabled');

        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(), // serializes the form's elements.
            success: function (data) {
                // $('#var-name-1').val();
                console.log(data);
                // console.log($('#var-name-1').val());

                if (data) {
                    var0_label = $('#var-name-0').val();
                    var1_label = $('#var-name-1').val();
                    var2_label = $('#var-name-2').val();
                    var3_label = $('#var-name-3').val();
                    var4_label = $('#var-name-4').val();
                    var5_label = $('#var-name-5').val();
                    var6_label = $('#var-name-6').val();
                    var7_label = $('#var-name-7').val();
                    var8_label = $('#var-name-8').val();
                    var9_label = $('#var-name-9').val();
                    var10_label = $('#var-name-10').val();
                    var11_label = $('#var-name-11').val();
                    var12_label = $('#var-name-12').val();
                    var13_label = $('#var-name-13').val();
                    var14_label = $('#var-name-14').val();
                    var15_label = $('#var-name-15').val();
                    var16_label = $('#var-name-16').val();
                    var17_label = $('#var-name-17').val();
                    var18_label = $('#var-name-18').val();
                    var19_label = $('#var-name-19').val();
                    var20_label = $('#var-name-20').val();
                    var21_label = $('#var-name-21').val();
                    var22_label = $('#var-name-22').val();
                    var23_label = $('#var-name-23').val();
                    var24_label = $('#var-name-24').val();
                    var25_label = $('#var-name-25').val();
                    var26_label = $('#var-name-26').val();
                    var27_label = $('#var-name-27').val();
                    var28_label = $('#var-name-28').val();
                    var29_label = $('#var-name-29').val();
                    var30_label = $('#var-name-30').val();
                    var31_label = $('#var-name-31').val();
                    varUpdate();

                    //remove it
                    form.removeAttr("disabled");

                    $('#editvarname').modal('hide');
                }
            }
        });

    });

    $("#edit-color-form").submit(function (e) {

        e.preventDefault();

        var form = $(this);
        var actionUrl = form.attr('action');

        //add disabled
        form.attr('disabled', 'disabled');

        // console.log(form.serialize());

        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(), // serializes the form's elements.
            success: function (data) {
                // $('#var-name-1').val();
                // console.log(data);
                // console.log($('#var-name-1').val());
                color_table.ajax.reload(null, false);

                //remove it
                form.removeAttr("disabled");
                getColor();
                // $('#editvarcolor').modal('hide');
            }
        });
    });

    function getColor() {

        $.ajax({
            url: 'ajax/07value32.php?action=getcolor',
            type: "post",
            data: {
                id: esp_id,
                skey: sk
            },
            success: function (data) {
                let json = JSON.parse(data);
                console.log(json);
                colorObject = json;
                // colorHandle();
            }
        })
    }

    function setColor() {
        $("#var-color-0").text(var0_label);
        $("#var-color-1").text(var1_label);
        $("#var-color-2").text(var2_label);
        $("#var-color-3").text(var3_label);
        $("#var-color-4").text(var4_label);
        $("#var-color-5").text(var5_label);
        $("#var-color-6").text(var6_label);
        $("#var-color-7").text(var7_label);
        $("#var-color-8").text(var8_label);
        $("#var-color-9").text(var9_label);
        $("#var-color-10").text(var10_label);
        $("#var-color11").text(var11_label);
        $("#var-color-12").text(var12_label);
        $("#var-color-13").text(var13_label);
        $("#var-color-14").text(var14_label);
        $("#var-color-15").text(var15_label);
        $("#var-color-16").text(var16_label);
        $("#var-color-17").text(var17_label);
        $("#var-color-18").text(var18_label);
        $("#var-color-19").text(var19_label);
        $("#var-color-20").text(var20_label);
        $("#var-color-21").text(var21_label);
        $("#var-color-22").text(var22_label);
        $("#var-color-23").text(var23_label);
        $("#var-color-24").text(var24_label);
        $("#var-color-25").text(var25_label);
        $("#var-color-26").text(var26_label);
        $("#var-color-27").text(var27_label);
        $("#var-color-28").text(var28_label);
        $("#var-color-29").text(var29_label);
        $("#var-color-30").text(var30_label);
        $("#var-color-31").text(var31_label);
    }

    var color_table = $('#color_table').DataTable({
        "ajax": "ajax/07value32.php?action=getcolor&id=" + esp_id + "&skey=" + sk,
        dom: 'tp',
        ordering: false,
        responsive: true,
        columnDefs: [{
            "render": function (data, type, row) {
                let renderdata = '';
                if (data == 0) {
                    renderdata += var0_label;
                } else if (data == 1) {
                    renderdata += var1_label;
                } else if (data == 2) {
                    renderdata += var2_label;
                } else if (data == 3) {
                    renderdata += var3_label;
                } else if (data == 4) {
                    renderdata += var4_label;
                } else if (data == 5) {
                    renderdata += var5_label;
                } else if (data == 6) {
                    renderdata += var6_label;
                } else if (data == 7) {
                    renderdata += var7_label;
                } else if (data == 8) {
                    renderdata += var8_label;
                } else if (data == 9) {
                    renderdata += var9_label;
                } else if (data == 10) {
                    renderdata += var10_label;
                } else if (data == 11) {
                    renderdata += var11_label;
                } else if (data == 12) {
                    renderdata += var12_label;
                } else if (data == 12) {
                    renderdata += var12_label;
                } else if (data == 13) {
                    renderdata += var13_label;
                } else if (data == 14) {
                    renderdata += var14_label;
                } else if (data == 15) {
                    renderdata += var15_label;
                } else if (data == 16) {
                    renderdata += var16_label;
                } else if (data == 17) {
                    renderdata += var17_label;
                } else if (data == 18) {
                    renderdata += var18_label;
                } else if (data == 19) {
                    renderdata += var19_label;
                } else if (data == 20) {
                    renderdata += var20_label;
                } else if (data == 21) {
                    renderdata += var21_label;
                } else if (data == 22) {
                    renderdata += var22_label;
                } else if (data == 23) {
                    renderdata += var23_label;
                } else if (data == 24) {
                    renderdata += var24_label;
                } else if (data == 25) {
                    renderdata += var25_label;
                } else if (data == 26) {
                    renderdata += var26_label;
                } else if (data == 27) {
                    renderdata += var27_label;
                } else if (data == 28) {
                    renderdata += var28_label;
                } else if (data == 29) {
                    renderdata += var29_label;
                } else if (data == 30) {
                    renderdata += var30_label;
                } else if (data == 31) {
                    renderdata += var31_label;
                }


                return renderdata;
            },
            "targets": 0
        },
        {
            "render": function (data, type, row) {
                renderdata = '';
                if (row[1] == 'H') renderdata += 'มากกว่า ';
                else renderdata += 'น้อยกว่า ';

                renderdata += row[2]
                return renderdata;
            },
            "targets": 1
        },
        {
            "render": function (data, type, row) {
                renderdata = '<p style="color:' + row[3] + '">' + row[3] + '</p>';
                return renderdata;
            },
            "targets": 2
        },
        {
            "render": function (data, type, row) {
                renderdata = '<a href="ajax/07value32.php?action=del&id=' + esp_id + '&skey=' + sk + '&delparam=' + row[0] + '&delvalue=' + row[2] + '" class="btn btn-outline-danger btn-sm delete"><i class="fa-solid fa-trash-can"></i></a>';
                return renderdata;
            },
            "targets": -1
        }]
    });

    color_table.on('draw', function () {
        setColor();
    });

    // del color
    $('#color_table tbody').on('click', 'a.delete', function (e) {

        e.preventDefault();

        $.ajax({
            url: $(this).attr('href'),
            success: function (data) {
                // alert(data); // show response from the php script.
                // console.log(data);
                if (data == 1) {
                    color_table.ajax.reload(null, false);
                }
            }
        });

    });

    function colorHandle() {
        let prevParam = -1;
        for (var i = 0; i < colorObject.data.length; i++) {

            if (colorObject.data[i][0] == 0) {

                if (var0[var0.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-0-value").css('color', colorObject.data[i][3])
                }
                else if (var0[var0.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-0-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-0-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 1) {

                if (var1[var1.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-1-value").css('color', colorObject.data[i][3])
                }
                else if (var1[var1.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-1-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-1-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 2) {
                if (var2[var2.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-2-value").css('color', colorObject.data[i][3])
                }
                else if (var2[var2.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-2-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-2-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 3) {
                if (var3[var3.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-3-value").css('color', colorObject.data[i][3])
                }
                else if (var3[var3.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-3-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-3-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 4) {
                if (var4[var4.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-4-value").css('color', colorObject.data[i][3])
                }
                else if (var4[var4.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-4-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-4-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 5) {
                if (var5[var5.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-5-value").css('color', colorObject.data[i][3])
                }
                else if (var5[var5.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-5-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-5-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 6) {
                if (var6[var6.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-6-value").css('color', colorObject.data[i][3])
                }
                else if (var6[var6.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-6-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-6-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 7) {
                if (var7[var7.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-7-value").css('color', colorObject.data[i][3])
                }
                else if (var7[var7.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-7-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-7-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 8) {

                if (var8[var8.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-8-value").css('color', colorObject.data[i][3])
                }
                else if (var8[var8.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-8-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-8-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 9) {
                if (var9[var9.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-9-value").css('color', colorObject.data[i][3])
                }
                else if (var9[var9.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-9-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-9-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 10) {
                if (var10[var1.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-10-value").css('color', colorObject.data[i][3])
                }
                else if (var10[var10.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-10-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-10-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 11) {
                if (var11[var11.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-11-value").css('color', colorObject.data[i][3])
                }
                else if (var11[var11.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-11-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-11-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 12) {
                if (var12[var12.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-12-value").css('color', colorObject.data[i][3])
                }
                else if (var12[var12.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-12-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-12-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 13) {
                if (var13[var13.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-13-value").css('color', colorObject.data[i][3])
                }
                else if (var13[var13.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-13-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-13-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 14) {
                if (var14[var14.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-14-value").css('color', colorObject.data[i][3])
                }
                else if (var14[var14.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-14-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-14-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 15) {
                if (var15[var15.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-15-value").css('color', colorObject.data[i][3])
                }
                else if (var15[var15.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-15-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-15-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 16) {
                if (var16[var16.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-16-value").css('color', colorObject.data[i][3])
                }
                else if (var16[var16.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-16-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-16-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 17) {
                if (var17[var17.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-17-value").css('color', colorObject.data[i][3])
                }
                else if (var17[var17.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-17-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-17-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 18) {
                if (var18[var18.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-18-value").css('color', colorObject.data[i][3])
                }
                else if (var18[var18.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-18-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-18-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 19) {

                if (var19[var19.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-19-value").css('color', colorObject.data[i][3])
                }
                else if (var19[var19.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-19-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-19-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 20) {
                if (var20[var20.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-20-value").css('color', colorObject.data[i][3])
                }
                else if (var20[var20.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-20-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-20-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 21) {

                if (var21[var21.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-21-value").css('color', colorObject.data[i][3])
                }
                else if (var21[var21.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-21-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-21-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 22) {
                if (var22[var22.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-22-value").css('color', colorObject.data[i][3])
                }
                else if (var22[var22.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-22-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-22-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 23) {
                if (var23[var23.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-23-value").css('color', colorObject.data[i][3])
                }
                else if (var23[var23.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-23-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-23-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 24) {
                if (var24[var24.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-24-value").css('color', colorObject.data[i][3])
                }
                else if (var24[var24.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-24-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-24-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 25) {
                if (var25[var25.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-25-value").css('color', colorObject.data[i][3])
                }
                else if (var25[var25.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-25-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-25-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 26) {
                if (var26[var26.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-26-value").css('color', colorObject.data[i][3])
                }
                else if (var26[var26.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-26-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-26-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 27) {
                if (var27[var27.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-27-value").css('color', colorObject.data[i][3])
                }
                else if (var27[var27.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-27-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-27-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 28) {
                if (var28[var28.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-28-value").css('color', colorObject.data[i][3])
                }
                else if (var28[var28.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-28-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-28-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 29) {
                if (var29[var29.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-29-value").css('color', colorObject.data[i][3])
                }
                else if (var29[var29.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-29-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-29-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 30) {
                if (var30[var30.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-30-value").css('color', colorObject.data[i][3])
                }
                else if (var30[var30.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-30-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-30-value").css('color', 'white')
                }
            } else if (colorObject.data[i][0] == 31) {
                if (var31[var31.length - 1] >= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'H') {
                    $("#var-31-value").css('color', colorObject.data[i][3])
                }
                else if (var31[var31.length - 1] <= parseFloat(colorObject.data[i][2]) && colorObject.data[i][1] == 'L') {
                    $("#var-31-value").css('color', colorObject.data[i][3])
                    prevParam = colorObject.data[i][0]
                } else if (prevParam != colorObject.data[i][0]) {
                    $("#var-31-value").css('color', 'white')
                }
            }
        }
    }

});