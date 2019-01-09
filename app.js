d3.select("#new-note")
    .on('click', function() {
      d3.event.preventDefault();
      if(d3.select('input').property('value').length == 0) {
        alert("Input is empty!");
      }
      else {
        d3.select("#notes")
          .append('p')
            .classed('note', true)
            .text(d3.select('input').property('value'));
        d3.select('input').property('value', '');
        d3.select(".prev-note").remove();
      }
    });

d3.select("#rand-add")
    .on('click', function() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var rb = r + Math.floor(r * 0.1);
      var gb = g + Math.floor(g * 0.1);
      var bb = b + Math.floor(b * 0.1);
      var text = 'rgb(1, 1, 1)';
      if((r+g+b) < 380) text = 'rgb(250, 250, 250)';
      
      d3.event.preventDefault();
      if(d3.select('input').property('value').length == 0) {
        alert("Input is empty!");
      }
      else {
        d3.select("#notes")
          .append('p')
            .classed('note', true)
            .style('color', text)
            .style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')')
            .style('border-color', 'rgb(' + rb + ',' + gb + ',' + bb + ')')
            .style('font-size', Math.floor(Math.random() * 40 + 10) + 'px')
            .text(d3.select('input').property('value'));
        d3.select('input').property('value', '');
        d3.select(".prev-note").remove();
      }
    });

d3.select("#clear-notes")
    .on('click', function() {
      d3.event.preventDefault();
      d3.selectAll(".note").remove();
      d3.select(".prev-note").remove();
    });

d3.select("input")
    .on('keydown', function() {
    	if(d3.select(".prev-note").empty()) {
			d3.select("#notes")
	        .append('p')
	          .classed('prev-note', true);
          	d3.select("#notes").sort();
      }
    });

d3.select("input")
	.on('keyup', function() {
		d3.select(".prev-note")
			.text(d3.select('input').property('value'));
    if(d3.select('input').property('value').length == 0) {
      d3.select(".prev-note").remove();
    }
	});
