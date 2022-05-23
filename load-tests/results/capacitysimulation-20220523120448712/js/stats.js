var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4399280",
        "ok": "4398738",
        "ko": "542"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "59834",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "303",
        "ok": "295",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "713",
        "ok": "263",
        "ko": "1"
    },
    "percentiles1": {
        "total": "280",
        "ok": "281",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "436",
        "ok": "436",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "595",
        "ok": "594",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "729",
        "ok": "728",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4395054,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3577,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 107,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 542,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12533.561",
        "ok": "12532.017",
        "ko": "1.544"
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
        "total": "2198076",
        "ok": "2197798",
        "ko": "278"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "59834",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "303",
        "ok": "295",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "720",
        "ok": "260",
        "ko": "1"
    },
    "percentiles1": {
        "total": "281",
        "ok": "280",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "437",
        "ok": "437",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "595",
        "ok": "595",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "729",
        "ok": "728",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2195976,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1771,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 51,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 278,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6262.325",
        "ok": "6261.533",
        "ko": "0.792"
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
        "total": "2201204",
        "ok": "2200940",
        "ko": "264"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "20",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "59549",
        "ko": "60005"
    },
    "meanResponseTime": {
        "total": "302",
        "ok": "295",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "705",
        "ok": "265",
        "ko": "1"
    },
    "percentiles1": {
        "total": "280",
        "ok": "280",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "436",
        "ok": "435",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "595",
        "ok": "594",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "729",
        "ok": "728",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2199078,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1806,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 56,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 264,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6271.236",
        "ok": "6270.484",
        "ko": "0.752"
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
