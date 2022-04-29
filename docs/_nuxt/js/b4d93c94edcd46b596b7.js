(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{353:function(n,e,t){"use strict";t.r(e),e.default="# Rose Chart（Nightingale Chart）\n\nRose Chart, which was also called the nightingale chart, usually indicates categories by sector of the same radius but different radius.\n\nECharts can implement Rose Chart by defining [`series.roseType`](${optionPath}series-pie.roseType) of pie chart to `'area'`. All other configs are the same as a basic pie chart.\n\n```js live\noption = {\n  series: [\n    {\n      type: 'pie',\n      data: [\n        {\n          value: 100,\n          name: 'A'\n        },\n        {\n          value: 200,\n          name: 'B'\n        },\n        {\n          value: 300,\n          name: 'C'\n        },\n        {\n          value: 400,\n          name: 'D'\n        },\n        {\n          value: 500,\n          name: 'E'\n        }\n      ],\n      roseType: 'area'\n    }\n  ]\n};\n```\n"}}]);