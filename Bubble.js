var svg_dom = d3.select("#svg_domain").append('g');

    svg_dom.append("svg:image")
    .attr("xlink:href", "images/web1.png")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 50+100)
    .attr("y",50);

    svg_dom.append("text")
      .attr("x", 100+100)
      .attr("y", 200)
      .text("Web Development")
      .attr("text-decoration", "underline")
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("font-family", "Century Gothic")
        .on('click', displayTags)
      .on("mouseover", function(d){
        d3.select(this).attr("fill", "blue")
      })
      .on("mouseout", function(d){
        d3.select(this).attr("fill", "black")
      });

    svg_dom.append("svg:image")
    .attr("xlink:href", "images/db1.png")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 300+200)
    .attr("y",50);

    svg_dom.append("text")
      .attr("x", 350+200)
      .attr("y", 200)
      .text("Database/Data Engineer")
      .attr("font-size", "20px")
      .attr("text-decoration", "underline")
      .attr("text-anchor", "middle")
      .attr("font-family", "Century Gothic")
      .on("click", displayTags)
      .on("mouseover", function(d){
        d3.select(this).attr("fill", "blue")
      })
      .on("mouseout", function(d){
        d3.select(this).attr("fill", "black")
      });

    svg_dom.append("svg:image")
    .attr("xlink:href", "images/gears1.png")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 50+100)
    .attr("y",300);

    svg_dom.append("text")
      .attr("x", 100+100)
      .attr("y", 450)
      .text("Backend Developer")
      .attr("font-size", "20px")
      .attr("text-decoration", "underline")
      .attr("text-anchor", "middle")
      .attr("font-family", "Century Gothic")
      .on("click", displayTags)
      .on("mouseover", function(d){
        d3.select(this).attr("fill", "blue")
      })
      .on("mouseout", function(d){
        d3.select(this).attr("fill", "black")
      });

    svg_dom.append("svg:image")
    .attr("xlink:href", "images/java1.png")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x", 300+200)
    .attr("y",300);

    svg_dom.append("text")
      .attr("x", 350+200)
      .attr("y", 450)
      .text("Java Developer")
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("text-decoration", "underline")
      .attr("font-family", "Century Gothic")
        .on('click', displayTags)
      .on("mouseover", function(d){
        d3.select(this).attr("fill", "blue")
      })
      .on("mouseout", function(d){
        d3.select(this).attr("fill", "black")
      });