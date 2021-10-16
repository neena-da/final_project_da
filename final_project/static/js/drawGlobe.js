function drawGlobe(data) {
	let countries = data.map( d => d.Country);
	let happinessRank = data.map( d => d.HappinessRank);
	let happinessScore = data.map( d =>`Happiness Score:${d.HappinessScore}`); 


	var data = [{
	    type: 'choropleth',
	    locationmode: 'country names',
	    locations: countries,
	    z: happinessRank,
	    text: happinessScore,
	    autocolorscale: false,
	    reversescale: true,
	    colorscale: [
		    // [0, 'rgb(0, 0, 139)'],
		    // [1, 'rgb(144, 238, 144)']
			[0, 'rgb(150, 128, 194)'],
		    [1, 'rgb(227, 18, 105)']
	    ],
	    marker: {
		    line: {
			    color: 'rgb(180,180,180)',
			    width: 1
		    }
	    },
	    colorbar:{
	    	x:'0.8',
		    ticks:"inside",
		    tickwidth:'2',
		    ticklen:"7",
		    tickcolor:"#00008B",
		    tickfont:{
		    	family:"'Barlow Condensed' , 'sans-serif'",
		    	size:'18',
		    	color:"#00008B",
		    },
		    title:"<b>Happiness Rank</b>",
		    titlefont:{
		    	family:"'Barlow Condensed' , 'sans-serif'",
		    	size:'20',
		    	color:"#00008B",
		    },
		    titleside:"right",
		    outlinewidth:"1",
		    outlinecolor:'#00008B',
	    }
    
    }];

    var layout = {
    	title:`<b>${year}</b>`,
    	titlefont:{
    		family:"'Barlow Condensed' , 'sans-serif'",
	    	size:'20',
	    	color:"#fff",
    	},
	    geo: {
		    showocean: true,
		    // oceancolor: 'rgba(74,128,245, 0.5)',
			oceancolor: 'rgb(46, 236, 242)',
		    showlakes: true,
		    // lakecolor: 'rgba(74,128,245, 0.5)',
		    // showland: true,
		    landcolor: 'rgb(115, 73, 10)',
		    mapframe: false,
    
	    projection: {
		    type: 'Mercator'
	    },
	    bgcolor:"rgba(0,0,0,0)",
	    },
	    paper_bgcolor: 'rgba(0,0,0,0)',
    
    };

    Plotly.newPlot('globe', data, layout, {showLink: false},{responsive: true});

}