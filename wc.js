displayTags = (function(){

d3.select('#svg_domain').remove();

  var selectedTags = []
var domainName = d3.select(this).text();
var margin = {top: 40, right: 10, bottom: 40, left: 10},
    width = 960 - margin.left - margin.right-0,
    height = 500 - margin.top - margin.bottom;

d3.csv("Dummy1.csv", function(error, data) {


  var categories = d3.keys(d3.nest().key(function(d) { return d.domain; }).map(data));
  var color = d3.scale.ordinal().range(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854", "#7D3C98", "#B03A2E", "#196F3D"]);
  var fontSize = d3.scale.pow().exponent(5).domain([0,1]).range([30,60]);
  var fontsize = [20,40,60,80,100,110,120];
  var data1=data.filter(function(d){
        return d.domain == domainName;
      });
  var layout = d3.layout.cloud()
      .timeInterval(10)
      .size([width, height-100])
      .words(data1)
      .rotate(function(d) { return 0; })
      .font('Helvetica')
      .fontSize(function(d,i) { 
        if (d.size > 0 && d.size<=100) return fontsize[0];
        else if (d.size > 100 && d.size<=500) return fontsize[1];
        else if (d.size > 500 && d.size<=1000) return fontsize[2];
        else if (d.size > 1000 && d.size<=2000) return fontsize[3];
        else if (d.size > 2000 && d.size<=3000) return fontsize[4];
        else if (d.size > 3000 && d.size<=6000) return fontsize[5];
        else if (d.size > 6000 && d.size<=9000) return fontsize[6];
        else if (d.size > 9000 && d.size<=13000) return fontsize[7]; })
        .text(function(d) { return d.tags;})
      .spiral("archimedean")
      .on("end", draw)
      .start();
  //var svg = d3.select("#svg_domain").append("g");
  var svg=d3.select("#main").append("svg").attr("width",960).attr("height",660).append("g");
  var textboxTitle = svg.append("text")
      .attr("x", 0)
      .attr("y", 490)
      .text("Selected Tags")
      .attr("font-size", "30px")
      .attr("font-family", "Century Gothic");

var ser=  svg.append("text")
          .attr("x", 860)
          .attr("y", 537)
          .text("Search")
          .attr("text-decoration", "underline")
          .attr("text-anchor", "middle");
          ser.on("mouseover", function(){
            d3.select(this).attr("font-weight", "bold");
          })
          ser.on("mouseout", function(){
            d3.select(this).attr("font-weight", null);
          })
          ser.on("click", mainscript);

var ser=  svg.append("text")
          .attr("x", 860)
          .attr("y", 537)
          .text("Search")
          .attr("text-anchor", "middle")
          .on("mouseover", function(){
            d3.select(this).attr("font-weight", "bold");
          })
          .on("mouseout", function(){
            d3.select(this).attr("font-weight", null);
          })
          .on("click", mainscript);

  svg.append("text")
      .attr("x", 540)
      .attr("y", 410)
      .text(domainName)
      .attr("font-weight", "bold")
      .attr("font-size", "45px")
      .attr("fill","#212f3c")
      .attr("text-anchor","middle")
      //.attr("class", "text-shadow")
      .attr("font-family", "Century Gothic");

  var textbox = svg.append("rect")
                            .attr("x", 240)
                            .attr("y", 450)  
                            .attr("width", 680)
                            .attr("height", 50)
                            .attr("fill", "#e4e8e8")
                            .attr("id", "textbox");
  
 function mainscript()
  {d3.select('#main').selectAll('svg').remove();
  console.log(selectedTags);
  var r=0,o=0,gc=0;
var container = d3.select('#main');
var width = 960,
    height = 600,
    radius = 10;
var svg = container.append("svg")
    .attr("width", "960")
    .attr("height", "600");
//var color = d3.scaleOrdinal(d3.schemeCategory10);
 var color = d3.scale.ordinal().range(["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854", "#7D3C98", "#B03A2E", "#196F3D","#117864","#f1c40f","#e82b6a"]);

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
  d3.select('#info').append('text').html("<p><br><br><b>Name: </b>"+d.name+"<br><b> Age: </b>"+d.age+"<br><b> Location:</b> "+d.location+"<br><br><b> Reputation: </b>"+d.rep+"<br><b> Up votes: </b>"+d.up+"<br><b> Down votes: </b>"+d.down+"<br><b> Last Seen </b>"+d.ldate+"<br><b> Website: </b>"+d.web+"<br><br> <b> Personal Summary:</b>"+d.aa+"</p>").style("font-size","16px");

  }
  );
    
           
}
);
loadJS2("http://d3js.org/d3.v3.min.js", bar, document.getElementById('showme'),t.uid);
loadJS2("http://d3js.org/d3.v3.min.js", piechart, document.getElementById('showme1'),t.uid);
}
var force = d3.layout.force()
    .gravity(.25)
    .distance(250)
    .charge(-25)
    .size([width, height]);
var node = svg.selectAll(".node")
      .data(graph.nodes).enter().append("g")
      .attr("class", "node")
      .call(force.drag);
    node=node.filter(function(d){
      var i=0;
      var flag=1;
      for(i=0;i<selectedTags.length;i++)
        {
          if(d.tags.search(selectedTags[i])==-1)
          {
            flag=-1;
          }
          else{
            console.log(d.tags);
          }
        }
        if(flag==1)
        {
          if(r<10)
          {
          r=r+1;
          return d;}
        }
    
    })
    node.append("circle")
    .style("stroke",function(d){return color(d.group);})
    .style("stroke-width","3.5px")
      .attr("r", function(d){return d.reputation/1000+40;})
      .attr("fill",function(d){return color(d.group);}).style("fill-opacity","0.8");
    
  node.on("dblclick",onclicks);

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


  }



  var wordcloud = svg.append("g")
      .attr('class','wordcloud')
      .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

  var x0 = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1)
      .domain(categories);

  var xAxis = d3.svg.axis()
      .scale(x0)
      .orient("bottom");

  function draw(words) {
    wordcloud.selectAll("text")
        .data(words)
      .enter().append("text")
        .attr('class','word')
        .style("font-size", function(d) { return d.size  + "px"; }) 
        .style("font-family", function(d) { return d.font; })
        .style("fill", function() { 
          var color = ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854", "#7D3C98", "#B03A2E"];
          return color[Math.floor(Math.random()*6)+1]; 
        })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
        .text(function(d) { return d.text; })
        .transition()
            .each(function () {
                  d3.select(this).on("mouseover", function(){
                    d3.select(this).attr("font-weight","bold");
                  });

                  d3.select(this).on("mouseout", function(){
                    d3.select(this).attr("font-weight", "");
                  });

                  d3.select(this).on("click", function (d) {
                    if (selectedTags.length == 5)
                      return alert("Oops! Cannot add more tags.");
                    else
                    {
                      selectedTags.push(d.text);

                      d3.select("#textbox").remove();
                      svg.append("rect")
                            .attr("x", 240)
                            .attr("y", 450)  
                            .attr("width", 680)
                            .attr("height", 50)
                            .attr("fill", "#e4e8e8")
                            .attr("id", "textbox");
                      for (i=0; i<selectedTags.length; i++)
                      {
                        svg.append("text")
                              .text(selectedTags[i])
                              .attr("x", 245+i*136)
                              .attr("y", 480)
                              .attr("fill", "black  ")
                              .attr("font-family", "Helvetica").
                              attr("font-size", "15px");
                      }
                      return 1;
                    }

                  });
            });
  };

});


});