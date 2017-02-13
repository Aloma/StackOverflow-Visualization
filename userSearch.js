var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};
var loadJS2 = function(url, implementationCode, location,id){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode(id);
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};
function piechart(uid)
{
var width = 720,
    height = 370,
    radius = Math.min(width, height) / 2;
d3.select("#showme1").append("text").html("<br><br><h1>Distribution of top 10 tags on which User has posted Answers</h1>").style("font-size","16px");

  var color = d3.scale.ordinal().range(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854", "#7D3C98", "#B03A2E", "#196F3D","#117864","#f1c40f","#e82b6a"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 80);


var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.frequency; });


var svg = d3.select("#showme1").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
   
 .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


d3.csv("tags_frequency.csv", type, function(error, data) 
{
  if (error) throw error;

  
data=data.filter(function(d){return d.userid==uid;})
var g = svg.selectAll(".arc")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");
function shiw(){
       return d3.select(this).select("text").style("visibility","visible");};
 function shiw2(){
       return d3.select(this).select("text").style("visibility","hidden");}; 
g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.tag); })
     // g.append("text")
      //.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      //.attr("dy", "0.5em").attr("dx","-2em")
 //.text(function(d) { return d.data.tag; });
// .style("visibility","hidden");
   // g.on("mouseover",shiw);
     // g.on("mouseout",shiw2);

  g.append("text")
      .attr("transform", function(d) { //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        d.outerRadius = radius - 10 + 60; // Set Outer Coordinate
        d.innerRadius = radius - 10 +  500; // Set Inner Coordinate
        return "translate(" + arc.centroid(d) + ")";
      })
      .attr("text-anchor", "middle") //center the text on it's origin
      //.style("fill", "Purple")
      .style("font", "bold 12px Arial")
      .text(function(d) { return d.data.tag; });

  




});


function type(d) {
  d.frequency = +d.frequency;
  d.userid = +d.userid;
  return d;
}


};
function bar(uid)
{
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 700 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;
d3.select("#showme").append("text").html("<br><br><br><br><h1>No. of answers posted by User over recent time</h1>").style("font-size","16px");
// set the ranges

 var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#showme").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("activity.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {	

    d.count = d.count;
  });

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
};
data=data.filter(function (d){return d.uid==uid;})
var p=[];
 data.forEach(function(d) {	

   p.push(parseInt(d.count));
  });
  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.label; }));
  y.domain([0, getMaxOfArray(p)]);
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("dx","-20em")
      .style("text-anchor", "end")
      .text("Answers Posted");

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.label); })
      .attr("width",x.rangeBand()).attr("fill","steelblue")
      .attr("y", function(d) { return y(d.count); })
      .attr("height", function(d) { return height - y(d.count); });
svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x)); 
});
};
var user_bubbles = (function(selectedTags){

d3.select('#main').selectAll('svg').remove();
var container = d3.select('#main');
var width = 960,
    height = 600,
    radius = 10;
var svg = container.append("svg")
    .attr("width", "960")
    .attr("height", "600");
//var color = d3.scaleOrdinal(d3.schemeCategory10);
  var color = d3.scale.ordinal().range(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854", "#7D3C98", "#B03A2E", "#196F3D"]);
d3.json("users_prof.json", function(error,graph) {
  if (error) throw error;
function onclicks()
{
  d3.select("#main").selectAll("svg").remove();
d3.selectAll('circle').style("fill-opacity",0.3);
t = d3.select(this).node().__data__;
d3.select(this).style("fill-opacity",1);
d3.select('#showme').selectAll('svg').remove();
d3.select('#showme').selectAll('text').remove();
d3.select('#showme1').selectAll('svg').remove();
d3.select('#showme1').selectAll('text').remove();
d3.select('#info').selectAll('text').remove();
d3.csv("users.csv", function(error, data) 
{
		if (error) throw error;
	data=data.filter(function(d){return d.uid==t.uid});
 	 data.forEach(
		function(d) 
		{	
	d3.select('#info').append('text').html("<p><strong>Name: </strong>"+d.name+"<br><strong> Age: </strong>"+d.age+"<br> Location: "+d.location+"<br><br><strong> Reputation: </strong>"+d.rep+"<br><strong> Up votes: </strong>"+d.up+"<br><strong> Down votes: </strong>"+d.down+"<br><strong> Last Seen </strong>"+d.ldate+"<br><strong> Website: </strong>"+d.web+"<br><br> <strong> Personal Summary:</strong>"+d.aa+"</p>").style("font-size","16px");

 	}
	);
		
           
}
);
loadJS2("http://d3js.org/d3.v3.min.js", bar, document.getElementById('showme'),t.uid);
loadJS2("http://d3js.org/d3.v3.min.js", piechart, document.getElementById('showme1'),t.uid);
}
var force = d3.layout.force()
    .gravity(.005)
    .distance(300)
    .charge(-50)
    .size([width, height]);
var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("g")
      .attr("class", "node")
      .call(force.drag);
    node.append("circle")
    .style("stroke",function(d){return color(d.group);})
    .style("stroke-width","3.5px")
      .attr("r", function(d){return d.reputation/1000+60;})
      .attr("fill",function(d){return color(d.group);}).style("fill-opacity","0.8");
    
	node.on("click",onclicks);

node.append("title").text(function(d) { return 'Reputation: '+d.reputation; }).attr("dx", 10)
node.append("text").attr("dx", 12)
      .attr("dy", ".25em")
      .text(function(d) { return d.name ;}).attr("font-family", "courier new italic");
  force.on("tick", function() {
    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
   
 force
      .nodes(graph.nodes)
      .start();
 
});

});
