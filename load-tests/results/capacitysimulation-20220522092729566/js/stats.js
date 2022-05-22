var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2859266",
        "ok": "2828547",
        "ko": "30719"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60108",
        "ok": "17119",
        "ko": "60108"
    },
    "meanResponseTime": {
        "total": "439",
        "ok": "328",
        "ko": "10741"
    },
    "standardDeviation": {
        "total": "1939",
        "ok": "494",
        "ko": "14846"
    },
    "percentiles1": {
        "total": "163",
        "ok": "159",
        "ko": "5092"
    },
    "percentiles2": {
        "total": "493",
        "ok": "479",
        "ko": "11249"
    },
    "percentiles3": {
        "total": "1095",
        "ok": "1044",
        "ko": "59518"
    },
    "percentiles4": {
        "total": "3047",
        "ok": "1936",
        "ko": "60004"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2513445,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 239711,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 75391,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 30719,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7564.196",
        "ok": "7482.929",
        "ko": "81.267"
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
        "total": "1295620",
        "ok": "1279587",
        "ko": "16033"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60108",
        "ok": "16526",
        "ko": "60108"
    },
    "meanResponseTime": {
        "total": "480",
        "ok": "340",
        "ko": "11619"
    },
    "standardDeviation": {
        "total": "2225",
        "ok": "505",
        "ko": "15945"
    },
    "percentiles1": {
        "total": "174",
        "ok": "170",
        "ko": "5241"
    },
    "percentiles2": {
        "total": "517",
        "ok": "501",
        "ko": "12085"
    },
    "percentiles3": {
        "total": "1125",
        "ok": "1058",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "3289",
        "ok": "1977",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1128985,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 115176,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 35426,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 16033,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3427.566",
        "ok": "3385.151",
        "ko": "42.415"
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
        "total": "1563646",
        "ok": "1548960",
        "ko": "14686"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60096",
        "ok": "17119",
        "ko": "60096"
    },
    "meanResponseTime": {
        "total": "406",
        "ok": "317",
        "ko": "9782"
    },
    "standardDeviation": {
        "total": "1665",
        "ok": "484",
        "ko": "13481"
    },
    "percentiles1": {
        "total": "152",
        "ok": "149",
        "ko": "4964"
    },
    "percentiles2": {
        "total": "473",
        "ok": "459",
        "ko": "10330"
    },
    "percentiles3": {
        "total": "1079",
        "ok": "1028",
        "ko": "49383"
    },
    "percentiles4": {
        "total": "2784",
        "ok": "1835",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1384460,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 124535,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 39965,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 14686,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4136.63",
        "ok": "4097.778",
        "ko": "38.852"
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
