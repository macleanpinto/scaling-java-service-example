var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1595071",
        "ok": "1594526",
        "ko": "545"
    },
    "minResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "59820",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "837",
        "ok": "817",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1225",
        "ok": "553",
        "ko": "1"
    },
    "percentiles1": {
        "total": "773",
        "ok": "767",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "1211",
        "ok": "1211",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "1577",
        "ok": "1573",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "1635",
        "ok": "1634",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 805251,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 362675,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 426600,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "count": 545,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4531.452",
        "ok": "4529.903",
        "ko": "1.548"
    }
},
contents: {
"req_listhotels200-789dc": {
        type: "REQUEST",
        name: "listHotels200",
path: "listHotels200",
pathFormatted: "req_listhotels200-789dc",
stats: {
    "name": "listHotels200",
    "numberOfRequests": {
        "total": "800269",
        "ok": "800006",
        "ko": "263"
    },
    "minResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "59586",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "835",
        "ok": "815",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1211",
        "ok": "561",
        "ko": "1"
    },
    "percentiles1": {
        "total": "762",
        "ok": "762",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "1209",
        "ok": "1209",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "1574",
        "ok": "1573",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "1635",
        "ok": "1634",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 405426,
    "percentage": 51
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 181332,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 213248,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "count": 263,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2273.491",
        "ok": "2272.744",
        "ko": "0.747"
    }
}
    },"req_gethotel200-625cb": {
        type: "REQUEST",
        name: "getHotel200",
path: "getHotel200",
pathFormatted: "req_gethotel200-625cb",
stats: {
    "name": "getHotel200",
    "numberOfRequests": {
        "total": "794802",
        "ok": "794520",
        "ko": "282"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59820",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "840",
        "ok": "819",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "1240",
        "ok": "544",
        "ko": "1"
    },
    "percentiles1": {
        "total": "779",
        "ok": "781",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "1212",
        "ok": "1212",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "1578",
        "ok": "1576",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "1635",
        "ok": "1634",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 399825,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 181343,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 213352,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "count": 282,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2257.96",
        "ok": "2257.159",
        "ko": "0.801"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
