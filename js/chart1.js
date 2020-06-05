var chart = null;
var indexLabels = [];
var lines = []
var points = []
var imgNode = null
window.onload = function () {
  for(var i=0;i<data.length;i++){
      if(data[i]['event'] == 0){ points.push({x: new Date(data[i]["date"]),y:data[i]['value']});}
      else{points.push({x: new Date(data[i]["date"]),y:data[i]['value'], markerType: "circle",markerColor: "#6D8ED1", markerSize: 16});lines.push(points[points.length-1]); }
  }

  chart = new CanvasJS.Chart("chartContainer",
  {
  animationEnabled: false,
  theme: "light2",
  title:{
    text: ""
  },
    axisY2:{
         valueFormatString:  "#,##0.##",
            prefix: "$",
            gridColor: "lightblue" ,
      gridThickness: 1 
            },
    axisX:{
        gridColor: "lightblue" ,
      gridThickness: 1 ,
    valueFormatString: "MMM-YY",
    stripLines:[
      {                
          color:"black",
          showOnTop:false,
          thickness:2,
          value:lines[0]['x'],
              },
       {                
          color:"black",
          showOnTop:false,
          thickness:2,
          value:lines[1]['x'],
              },
       {                
          color:"black",
          showOnTop:false,
          thickness:2,
          value:lines[2]['x'],
              }
          ]
    },
    data: [
    {
      axisYType: "secondary",
      type: "line",
      lineColor: "black",
      dataPoints: points
    }
    ]
  });

  chart.render();

    indexLabels = [];
    var texts = [
        {'p':"PharmAssets<br>Acquisition<br>", 's':"All Phase 3;<br>potentially curative<br>treatment for Hepatitis-C"},
        {'p':"Positive Phase 3<br>", 's':"Demonstrates unique, curative<br>efficacy in treating Hepatitis-C"},
        {'p':"SOVALDI &reg;	Approved<br>",'s':"First fully curative<br>treatment for Hepatitis-C"}
    ]
    for(var i=0;i<texts.length;i++){
        var pNode =document.createElement("p");
        pNode.setAttribute("class", "boldPTag");
        pNode.setAttribute("id", "p" + i.toString());
        pNode.innerHTML = texts[i]['p'];    
        var spanNode = document.createElement("span");  
        spanNode.setAttribute("class","spanTag")
        spanNode.innerHTML = texts[i]['s'];
        pNode.appendChild(spanNode);
        indexLabels.push(pNode)
        document.getElementById("chartContainer").appendChild(indexLabels[i]);    
    }

    imgNode = document.createElement("img");
    imgNode.setAttribute("id", "imgGraph1");
    imgNode.setAttribute("src", "images/graph1_img.png");
    imgNode.style.border='2px solid #E8272C';
    document.getElementById("chartContainer").appendChild(imgNode);    

    positionIndexLabels(chart);

    function positionIndexLabels(chart) {
    for (var i = 0; i < indexLabels.length; i++) {
      indexLabels[i].style.top = chart.axisY2[0].bounds["y1"] + 2 +  "px";
      if(i == 2){indexLabels[i].style.left = chart.axisX[0].stripLines[i].get("bounds").x2  + 12 + "px"; indexLabels[i].style.textAlign = "left";}
	    else{indexLabels[i].style.left = chart.axisX[0].stripLines[i].get("bounds").x1 - $("#p" + i.toString()).width() + 2  + "px";}
    }

    imgNode.setAttribute("width", parseInt(chart.axisX[0].bounds["width"]/4 + 20));
    imgNode.setAttribute("height", parseInt(chart.axisY2[0].bounds["height"]/4 + 20));
    imgNode.style.left = chart.axisX[0].stripLines[2].get("bounds").x2 + 20 + "px"
    imgNode.style.top =  chart.axisX[0].bounds["y1"] - imgNode.height - 20 + "px"
  }



  window.onresize = function(event) {
    positionIndexLabels(chart)
  }
}



