var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3458393",
        "ok": "3457852",
        "ko": "541"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "59881",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "385",
        "ok": "376",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "813",
        "ok": "324",
        "ko": "1"
    },
    "percentiles1": {
        "total": "355",
        "ok": "355",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "575",
        "ok": "574",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "785",
        "ok": "784",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "921",
        "ok": "919",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3315945,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 141800,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 107,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 541,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9852.972",
        "ok": "9851.43",
        "ko": "1.541"
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
        "total": "1725361",
        "ok": "1725093",
        "ko": "268"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "59473",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "386",
        "ok": "377",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "811",
        "ok": "325",
        "ko": "1"
    },
    "percentiles1": {
        "total": "357",
        "ok": "357",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "575",
        "ok": "575",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "785",
        "ok": "785",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "921",
        "ok": "919",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1654033,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 71008,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 52,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 268,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4915.558",
        "ok": "4914.795",
        "ko": "0.764"
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
        "total": "1733032",
        "ok": "1732759",
        "ko": "273"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "59881",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "384",
        "ok": "375",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "815",
        "ok": "323",
        "ko": "1"
    },
    "percentiles1": {
        "total": "354",
        "ok": "354",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "574",
        "ok": "574",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "784",
        "ok": "784",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "920",
        "ok": "919",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1661912,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 70792,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 55,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 273,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4937.413",
        "ok": "4936.635",
        "ko": "0.778"
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
