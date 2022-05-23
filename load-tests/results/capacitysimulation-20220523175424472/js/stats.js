var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1967665",
        "ok": "1966492",
        "ko": "1173"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "124",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "35317",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "182",
        "ok": "176",
        "ko": "11816"
    },
    "standardDeviation": {
        "total": "587",
        "ok": "62",
        "ko": "20880"
    },
    "percentiles1": {
        "total": "168",
        "ok": "168",
        "ko": "4689"
    },
    "percentiles2": {
        "total": "185",
        "ok": "185",
        "ko": "5072"
    },
    "percentiles3": {
        "total": "229",
        "ok": "229",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "339",
        "ok": "338",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1963507,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1825,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1160,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1173,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10871.077",
        "ok": "10864.597",
        "ko": "6.481"
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
        "total": "784227",
        "ok": "783753",
        "ko": "474"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "124",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "2203",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "183",
        "ok": "176",
        "ko": "12776"
    },
    "standardDeviation": {
        "total": "619",
        "ok": "56",
        "ko": "21689"
    },
    "percentiles1": {
        "total": "168",
        "ok": "168",
        "ko": "4692"
    },
    "percentiles2": {
        "total": "185",
        "ok": "185",
        "ko": "5078"
    },
    "percentiles3": {
        "total": "229",
        "ok": "229",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "339",
        "ok": "337",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 782574,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 718,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 461,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 474,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4332.746",
        "ok": "4330.127",
        "ko": "2.619"
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
        "total": "1183438",
        "ok": "1182739",
        "ko": "699"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "124",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "35317",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "182",
        "ok": "176",
        "ko": "11164"
    },
    "standardDeviation": {
        "total": "565",
        "ok": "66",
        "ko": "20288"
    },
    "percentiles1": {
        "total": "168",
        "ok": "168",
        "ko": "2279"
    },
    "percentiles2": {
        "total": "185",
        "ok": "185",
        "ko": "5057"
    },
    "percentiles3": {
        "total": "229",
        "ok": "229",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "340",
        "ok": "338",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1180933,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1107,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 699,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 699,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6538.331",
        "ok": "6534.47",
        "ko": "3.862"
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
