

(function() {
  var landmarksAPI = "items.json";
  $.getJSON( landmarksAPI, {
    format: "json"
  })
    .done(function(data) {
		
		console.log(data);
		
		var marks;
		
		for(i = 0; i < data.length; i++) {
		
			marks = data[i];
			
			id = i + 1; 
			
			var htmlMarks = 
			
			
			
			'<li data-timeline-node="{'+
			'eventId:'+id+''+
			','+ 
			'start:\''+marks.start+'\''+
			','+
			'end:\''+marks.end+'\''+ 
			','+
			'row:\''+marks.row+'\''+ 		
			','+
			'relation:{' +
			 	
				'before:'+marks.relation.before+''+ 		
				',' +
				'after:'+marks.relation.after+''+
				','+
				'curve:\''+marks.relation.curve+'\''+
				','+
				'lineDash:\''+marks.relation.linedash+'\''+		
				','+
				'linesize:\''+marks.relation.linesize+'\''+		
				','+
				'linecolor:\''+marks.relation.linecolor+'\''+
				'}'+
				','+
			'color:\''+marks.color+'\''+
			',' +
			'bgColor:\''+marks.bgColor+'\''+
			',' +
			'margin:\''+marks.margin+'\''+ 
			','+
			'content:\''+marks.content+'\''+
			','+
			'label:\''+marks.label+'\''+
			','+
			'image:\''+marks.image+'\''+
				','+
			'callback:\''+marks.callback+'\''+
				
			
			 '}">'+marks.label+'</li>'; 
		
			$(".timeline-events").append(htmlMarks);
					
		};
		
		
		
		
		
    });
})();