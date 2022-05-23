var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1978347",
        "ok": "1978163",
        "ko": "184"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "426",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "181",
        "ok": "176",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "577",
        "ok": "24",
        "ko": "1"
    },
    "percentiles1": {
        "total": "183",
        "ok": "183",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "189",
        "ok": "189",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "200",
        "ok": "200",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "216",
        "ok": "216",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1978163,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 184,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10930.094",
        "ok": "10929.077",
        "ko": "1.017"
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
        "total": "793381",
        "ok": "793313",
        "ko": "68"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "426",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "181",
        "ok": "176",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "554",
        "ok": "24",
        "ko": "0"
    },
    "percentiles1": {
        "total": "183",
        "ok": "183",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "189",
        "ok": "189",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "200",
        "ok": "200",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "216",
        "ok": "216",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 793313,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 68,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4383.32",
        "ok": "4382.945",
        "ko": "0.376"
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
        "total": "1184966",
        "ok": "1184850",
        "ko": "116"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "418",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "182",
        "ok": "176",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "592",
        "ok": "24",
        "ko": "1"
    },
    "percentiles1": {
        "total": "183",
        "ok": "183",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "189",
        "ok": "189",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "200",
        "ok": "200",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "216",
        "ok": "215",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1184850,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 116,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6546.773",
        "ok": "6546.133",
        "ko": "0.641"
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
