// function drawCloud() {

//   anychart.onDocumentReady(function() {
//     anychart.data.loadJsonFile(`${year}`, function(yeardata) {
//       var data =[]
//       yeardata.forEach(d =>{
//         var datadict={};
//         datadict['x'] = d.Country;
//         datadict['value'] = d.HappinessScore;
//         datadict['category'] = d.Region;
//         data.push(datadict);
//       });


//       var dataSet = anychart.data.set(data);
//       var colors = anychart.scales.ordinalColor().colors(['#26959f', '#f18126','#e6e600', '#3b8ad8',
//         '#e24b26', '#cc33ff', '#60727b','#999966' ]);

//       var chart = anychart.tagCloud();

//       chart.title('World Happiness ${year}`')
//         .data(dataSet)
//         .colorScale(colors)
//         .angles([-90, 0, 90])
//         .fontFamily('Barlow Condensed , sans-serif')
//         .tooltip().format("Happiness Score:\n{%value}\nRegion:\n{%category}")

//         // .fontSize(30);

//       var title = chart.title();
//       title.text(`World Happiness ${year}`);
//       title.fontSize(40);
//       title.fontFamily("Barlow Condensed , sans-serif");


//       var colorRange = chart.colorRange();
//       colorRange
//         .enabled(true)
//         .colorLineSize(15)
//         .length(1000);

//       chart.container('cloud');
//       chart.draw();

//       var normalFillFunction = chart.normal().fill();
//       var hoveredFillFunction = chart.hovered().fill();

//       chart.listen('pointsHover', function(e) {
//         if (e.actualTarget === colorRange) {
//           if (e.points.length) {
//             chart.normal({
//               fill: 'black 0.1'
//             });
//             chart.hovered({
//               fill: chart.colorScale().valueToColor(e.point.get('category'))
//             });
//           } else {
//             chart.normal({
//               fill: normalFillFunction
//             });
//             chart.hovered({
//               fill: hoveredFillFunction
//             });
//           }
//         }
//       });
//     });
//   });
// }


function drawCloud(whr_ladder_data) {
  const leastHappyCountry = whr_ladder_data
    .sort((a, b) => a.HappinessScore - b.HappinessScore)
    .slice(0, 10);

  const mostHappyCountry = whr_ladder_data
    .sort((a, b) => {
      a.HappinessScore + b.HappinessScore;
      if (a.HappinessScore > b.HappinessScore) {
        return -1;
      } else {
        return 1;
      }
    })
    .slice(0, 10);
  
    console.log(leastHappyCountry);
    console.log(mostHappyCountry);

  const leastData = [
    {
      x: leastHappyCountry.map((data) => data.HappinessScore),
      y: leastHappyCountry.map((data) => data.Country),
      type: 'bar',
      orientation: 'h',
      // text: leastHappyCountry.map((data) => data.HappinessScore,2),
      // textposition: 'auto',
      marker: {
        color: 'rgb(158,202,225)',
        opacity: 0.6,
        line: {
          color: 'rgb(255,255,255)',
          width: 1.0,
        },
      },
    },
  ];

  const mostData = [
    {
      x: mostHappyCountry.map((data) => data.HappinessScore),
      y: mostHappyCountry.map((data) => data.Country),
      type: 'bar',
      orientation: 'h',
      // text: mostHappyCountry.map((data) => data.HappinessScore,2),
      // textposition: 'auto',
      marker: {
        color: 'rgb(222,45,38,0.8)',
        opacity: 0.6,
        line: {
          color: 'rgb(222,45,38,0.8)',
          width: 1.0,
        },
      },
    },
  ];

  const layout1 = {
    margin: {
      t: 40,
      l: 150,
    },
    // width: 600,
    // height: 500,
    title: {
      text: '10 Least Happy Countries',
    },
    yaxis: {
      autorange: 'reversed',
    },
  };

  const layout2 = {
    margin: {
      t: 40,
      l: 150,
    },
    // width: 600,
    // height: 500,
    title: {
      text: '10 Most Happy Countries',
    },
    yaxis: {
      autorange: 'reversed',
    },
  };

  Plotly.newPlot('cloud-least', leastData, layout1, { responsive: true });
  Plotly.newPlot('cloud-most', mostData, layout2, { responsive: true });

  
}