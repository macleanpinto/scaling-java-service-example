var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3030450",
        "ok": "3000973",
        "ko": "29477"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "125"
    },
    "maxResponseTime": {
        "total": "61176",
        "ok": "20563",
        "ko": "61176"
    },
    "meanResponseTime": {
        "total": "429",
        "ok": "332",
        "ko": "10282"
    },
    "standardDeviation": {
        "total": "1776",
        "ok": "437",
        "ko": "14379"
    },
    "percentiles1": {
        "total": "183",
        "ok": "179",
        "ko": "4423"
    },
    "percentiles2": {
        "total": "499",
        "ok": "489",
        "ko": "11431"
    },
    "percentiles3": {
        "total": "1174",
        "ok": "1104",
        "ko": "49803"
    },
    "percentiles4": {
        "total": "2122",
        "ok": "1692",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2684593,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 200652,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 115728,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 29477,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7790.36",
        "ok": "7714.584",
        "ko": "75.776"
    }
},
contents: {
"req_gethotel200-625cb": {
        type: "REQUEST",
        name: "getHotel200",
path: "getHotel200",
pathFormatted: "req_gethotel200-625cb",
stats: {
    "name": "getHotel200",
    "numberOfRequests": {
        "total": "1444183",
        "ok": "1428440",
        "ko": "15743"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "134"
    },
    "maxResponseTime": {
        "total": "61148",
        "ok": "20563",
        "ko": "61148"
    },
    "meanResponseTime": {
        "total": "446",
        "ok": "338",
        "ko": "10228"
    },
    "standardDeviation": {
        "total": "1868",
        "ok": "442",
        "ko": "14337"
    },
    "percentiles1": {
        "total": "190",
        "ok": "186",
        "ko": "4418"
    },
    "percentiles2": {
        "total": "509",
        "ok": "497",
        "ko": "11300"
    },
    "percentiles3": {
        "total": "1187",
        "ok": "1116",
        "ko": "49810"
    },
    "percentiles4": {
        "total": "2185",
        "ok": "1704",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1274327,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 98147,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 55966,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 15743,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3712.553",
        "ok": "3672.082",
        "ko": "40.47"
    }
}
    },"req_listhotels200-789dc": {
        type: "REQUEST",
        name: "listHotels200",
path: "listHotels200",
pathFormatted: "req_listhotels200-789dc",
stats: {
    "name": "listHotels200",
    "numberOfRequests": {
        "total": "1586267",
        "ok": "1572533",
        "ko": "13734"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "125"
    },
    "maxResponseTime": {
        "total": "61176",
        "ok": "20413",
        "ko": "61176"
    },
    "meanResponseTime": {
        "total": "413",
        "ok": "326",
        "ko": "10344"
    },
    "standardDeviation": {
        "total": "1688",
        "ok": "431",
        "ko": "14427"
    },
    "percentiles1": {
        "total": "176",
        "ok": "172",
        "ko": "4436"
    },
    "percentiles2": {
        "total": "490",
        "ok": "481",
        "ko": "11506"
    },
    "percentiles3": {
        "total": "1162",
        "ok": "1096",
        "ko": "49783"
    },
    "percentiles4": {
        "total": "2083",
        "ok": "1686",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1410266,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 102505,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 59762,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 13734,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4077.807",
        "ok": "4042.501",
        "ko": "35.306"
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
