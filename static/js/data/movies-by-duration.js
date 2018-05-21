{
  "type": "bar",
  "data": {
    "labels": [
      "60 - 69 minutes",
      "70 - 79 minutes",
      "80 - 89 minutes",
      "90 - 99 minutes",
      "100 - 109 minutes",
      "110 - 119 minutes",
      "120 - 129 minutes",
      "130 - 139 minutes",
      "140 - 149 minutes",
      "150 - 159 minutes",
      "160 - 169 minutes",
      "170 - 179 minutes",
      "180 - 189 minutes",
      "190 - 199 minutes",
      "200 - 209 minutes"
    ],
    "datasets": [{
      "data": [1, 12, 220, 413, 398, 274, 190, 104, 53, 26, 15, 10, 4, 3, 1],
      "backgroundColor": "rgba(91, 93, 29, 0.5)",
      "label": "Number of",
      "yAxisID": "left-y-axis"
    }, {
      "data": [9, 7.75, 7.13, 7.15, 7.52, 7.72, 7.91, 8.16, 8.43, 8.62, 8.73, 8.5, 8.25, 8.33, 10],
      "backgroundColor": "transparent",
      "borderColor": "rgba(74, 242, 5, 0.5)",
      "label": "Average Rating",
      "type": "line",
      "yAxisID": "right-y-axis"
    }]
  },
  "options": {
    "maintainAspectRatio": false,
    "scales": {
      "yAxes": [{
        "id": "left-y-axis",
        "type": "linear",
        "position": "left"
      }, {
        "id": "right-y-axis",
        "type": "linear",
        "position": "right",
        "ticks": {
          "min": 1,
          "max": 10
        }
      }]
    }
  }
}