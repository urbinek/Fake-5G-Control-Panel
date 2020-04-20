$(document).ready(function(){
  var count = 10;
  var data = {
	  labels : ["1","2","3","4","5", "6", "7", "8", "9", "10"],
		datasets : [
		  {
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : [0, 68, 78, 79, 69, 75, 78, 87, 93, 89, 70, 118, 67, 68, 67, 102, 120, 83, 71, 104, 98, 89, 65, 112, 112, 92, 86, 104, 117, 92, 83, 119, 100, 77, 67, 97, 68, 87, 96, 106, 65, 96, 118, 69, 98, 105, 104, 90, 107, 93, 90, 94, 110, 107, 67, 98, 85, 116, 82, 119, 77, 69, 91, 96, 70, 109, 67, 95, 95, 116, 65, 109, 86, 115, 117, 108, 84, 95, 92, 108, 84, 99, 97, 81, 69, 87, 78, 93, 102, 120, 65, 116, 99, 105, 66, 116, 76, 71, 83, 103, 102, 76, 103, 116, 113, 87, 77, 78, 90, 103, 116, 69, 110, 104, 75, 94, 90, 86, 82, 91, 111, 82, 118, 75, 77, 100, 119, 116, 113, 88, 89, 119, 82, 84, 117, 83, 113, 113, 67, 86, 70, 104, 111, 86, 111, 72, 112, 117, 83, 82, 100, 83, 79, 73, 88, 101, 75, 101, 101, 90, 99, 114, 90, 106, 112, 91, 73, 89, 67, 94, 88, 112, 93, 66, 67, 85, 65, 91, 68, 84, 72, 80, 68, 97, 70, 83, 99, 71, 98, 102, 82, 66, 88, 67, 112, 109, 104, 118, 119, 82, 87, 91, 71, 97, 119, 113, 96, 97, 70, 102, 106, 98, 117, 113, 95, 78, 74, 82, 103, 66, 88, 107, 100, 104, 85, 69, 82, 104, 85, 113, 65, 94, 72, 75, 119, 70, 67, 101, 88, 119, 89, 114, 95, 111, 89, 113, 81, 104, 118, 87, 69, 114, 69, 102, 94, 74, 70, 85, 100, 76, 74, 91, 115, 105, 107, 65, 80, 92, 78, 96, 112, 108, 92, 72, 112, 82, 68, 104, 69, 113, 85, 90, 72, 66, 90, 69, 119, 106, 102, 106, 80, 95, 101, 114, 81, 115, 66, 90, 91, 95, 78, 81, 82, 118, 86, 73, 80, 111, 116, 117, 101, 96, 115, 109, 114, 107, 105, 82, 75, 99, 116, 114, 77, 93, 91, 93, 77, 117, 68, 104, 79, 105, 114, 86, 116, 109, 108, 108, 103, 118, 88, 66, 71, 94, 98, 106, 81, 65, 72, 118, 93, 114, 113, 79, 78, 68, 65, 120, 103, 83, 118, 117, 82, 119, 98, 106, 113, 74, 114, 72, 83, 99, 96, 89, 87, 110, 111, 109, 116, 114, 99, 70, 106, 69, 94, 70, 70, 114, 105, 115, 117, 93, 68, 69, 92, 77, 108, 97, 68, 118, 89, 99, 94, 97, 96, 110, 94, 90, 112, 90, 81, 92, 81, 90, 96, 100, 69, 76, 71, 95, 119, 97, 111, 108, 99, 115, 95, 113, 90, 69, 92, 82, 118, 82, 117, 67, 112, 109, 81, 118, 94, 114, 105, 107, 120, 67, 92, 114, 90, 116, 73, 74, 109, 67, 77, 110, 72, 67, 85, 83, 78, 82, 102, 102, 94, 78, 115, 66, 117, 93, 82, 110, 94, 68, 69, 84, 70, 70, 98, 105, 88, 94, 98, 101, 94, 81, 73, 117, 99, 67, 86, 117, 80, 114, 91, 105, 92, 86, 93, 86, 95, 120, 106, 72, 118, 83, 102, 117, 77, 104, 116, 95, 107, 117, 72, 76, 100, 83, 102, 86, 81, 71, 71, 95, 76, 67, 84, 116, 105, 112, 88, 101, 93, 79, 76, 68, 114, 114, 107, 76, 92, 94, 112, 95, 118, 96, 105, 73, 78, 116, 109, 112, 112, 97, 98, 76, 92, 73, 100, 72, 102, 96, 101, 95, 85, 70, 114, 105, 78, 98, 102, 88, 66, 79, 73, 117, 82, 88, 120, 96, 97, 75, 112, 109, 117, 83, 89, 98, 77, 99, 105, 82, 65, 93, 67, 99, 88, 107, 81, 94, 72, 79, 93, 76, 79, 87, 81, 79, 102, 68, 117, 86, 66, 112, 87, 88, 81, 94, 78, 89, 109, 65, 83, 99, 120, 108, 116, 113, 119, 83, 67, 83, 102, 76, 77, 111, 78, 82, 112, 84, 99, 77, 113, 120, 89, 116, 100, 71, 86, 103, 115, 92, 120, 101, 81, 104, 112, 72, 112, 97, 66, 112, 100, 92, 95, 100, 106, 78, 93, 97, 117, 72, 68, 75, 106, 105, 92, 81, 77, 105, 118, 76, 95, 68, 104, 74, 116, 118, 119, 112, 82, 74, 106, 116, 77, 84, 67, 120, 79, 85, 103, 120, 102, 98, 114, 90, 118, 114, 74, 108, 79, 70, 78, 78, 110, 89, 108, 66, 109, 112, 88, 85, 98, 117, 90, 111, 69, 114, 108, 69, 66, 90, 109, 116, 81, 115, 113, 74, 108, 110, 105, 73, 100, 112, 71, 76, 89, 103, 105, 98, 88, 115, 110, 96, 120, 109, 108, 120, 95, 119, 77, 113, 92, 76, 71, 90, 74, 76, 90, 114, 104, 113, 78, 113, 80, 66, 95, 89, 92, 68, 99, 84, 90, 100, 118, 66, 118, 114, 119, 86, 75, 77, 94, 85, 76, 115, 99, 101, 73, 66, 103, 92, 72, 74, 110, 66, 72, 88, 82, 65, 80, 93, 96, 98, 92, 85, 68, 73, 86, 110, 69, 114, 91, 117, 104, 118, 107, 114, 70, 106, 92, 101, 90, 115, 97, 98, 71, 73, 80, 114, 110, 83, 88, 68, 119, 101, 109, 68, 65, 97, 101, 120, 83, 85, 114, 117, 87, 99, 116, 107, 111, 114, 80, 97, 94, 106, 74, 96, 100, 99, 65, 113, 92, 65, 82, 112, 119, 71, 80, 118, 76, 93, 100, 88, 117, 103, 85, 101, 99, 100, 83, 68, 86, 102, 79, 79, 114, 67, 70, 69, 112, 118, 118, 104, 87, 91, 91, 117, 83, 119, 103, 115, 99, 72, 68, 92, 108, 117, 85, 119, 95, 69, 97, 102, 80, 101, 100, 84, 105, 107, 72, 108, 111, 120, 68, 118, 79, 73, 119, 118, 115, 91, 77, 94, 78, 74, 105, 73, 89, 65, 112, 73, 106, 77, 67, 118, 118, 106, 109, 108, 90, 68, 93, 73, 79, 66, 76, 108, 84, 91, 118, 114, 69, 107, 113, 101, 85, 115, 74, 85, 93, 75, 89, 114, 116, 68, 71, 92, 100, 103, 109, 105, 82, 70, 108, 72, 89, 81, 104, 100, 66]
			},
			{
				fillColor : "rgba(255,0,0,0.5)",
				strokeColor : "rgba(255,0,0,1)",
				pointColor : "rgba(255,0,0,1)",
				pointStrokeColor : "#fff",
				data : [0, 90, 119, 74, 108, 78, 85, 114, 106, 89, 77, 114, 83, 109, 71, 69, 98, 108, 88, 99, 74, 91, 116, 104, 115, 74, 87, 87, 113, 93, 82, 113, 81, 118, 96, 83, 90, 103, 100, 65, 81, 111, 80, 78, 116, 91, 74, 105, 89, 68, 107, 110, 97, 108, 96, 119, 75, 86, 111, 88, 79, 85, 96, 87, 70, 119, 98, 95, 75, 109, 97, 87, 68, 98, 104, 81, 91, 78, 84, 81, 66, 98, 88, 90, 93, 77, 88, 108, 115, 100, 80, 90, 76, 94, 111, 72, 90, 82, 108, 79, 79, 82, 90, 76, 76, 97, 107, 88, 105, 113, 77, 98, 88, 89, 104, 83, 89, 83, 87, 73, 104, 97, 109, 71, 99, 105, 67, 106, 73, 87, 65, 106, 105, 72, 87, 108, 95, 107, 81, 85, 117, 109, 68, 78, 86, 75, 111, 77, 99, 111, 85, 83, 69, 111, 86, 116, 108, 106, 69, 115, 110, 93, 105, 103, 118, 86, 95, 70, 99, 85, 68, 92, 115, 103, 70, 68, 71, 113, 93, 94, 70, 97, 108, 79, 95, 69, 118, 69, 119, 82, 119, 91, 109, 106, 86, 65, 85, 86, 104, 75, 108, 71, 101, 98, 91, 108, 113, 97, 96, 102, 118, 89, 71, 96, 117, 67, 77, 101, 103, 103, 117, 98, 75, 110, 77, 108, 112, 118, 109, 111, 91, 79, 120, 65, 97, 98, 77, 96, 103, 114, 90, 115, 87, 70, 65, 115, 86, 88, 106, 67, 72, 103, 85, 90, 112, 96, 68, 80, 73, 105, 73, 82, 92, 73, 76, 104, 81, 98, 117, 86, 93, 104, 102, 71, 103, 106, 80, 77, 118, 102, 99, 83, 88, 120, 65, 113, 105, 97, 70, 118, 114, 106, 113, 69, 69, 67, 87, 78, 99, 99, 70, 89, 109, 79, 66, 100, 104, 108, 112, 96, 87, 85, 105, 95, 85, 99, 101, 113, 113, 77, 108, 67, 86, 81, 70, 90, 83, 88, 90, 83, 104, 70, 68, 111, 108, 89, 85, 70, 73, 117, 98, 70, 91, 98, 111, 84, 118, 84, 76, 119, 68, 75, 89, 66, 68, 115, 79, 113, 102, 88, 88, 73, 107, 115, 84, 89, 70, 75, 85, 79, 101, 97, 93, 99, 105, 117, 102, 93, 74, 72, 82, 69, 91, 97, 101, 65, 117, 65, 104, 99, 95, 116, 77, 94, 84, 70, 106, 87, 85, 98, 116, 104, 113, 65, 78, 117, 119, 72, 70, 106, 112, 77, 97, 75, 84, 101, 69, 83, 112, 108, 104, 85, 78, 78, 83, 99, 74, 89, 106, 110, 114, 65, 91, 80, 90, 65, 110, 112, 113, 115, 70, 101, 100, 98, 93, 116, 82, 65, 102, 90, 74, 101, 112, 111, 81, 94, 84, 67, 89, 98, 117, 110, 75, 82, 75, 77, 93, 94, 115, 74, 92, 102, 91, 112, 82, 100, 105, 112, 115, 81, 76, 73, 100, 107, 78, 118, 65, 74, 88, 119, 82, 102, 79, 117, 94, 73, 76, 118, 112, 92, 79, 79, 83, 105, 102, 66, 92, 96, 91, 81, 120, 107, 73, 120, 94, 68, 73, 117, 88, 113, 83, 120, 99, 118, 96, 120, 67, 105, 90, 81, 89, 87, 87, 74, 101, 95, 105, 108, 91, 120, 65, 68, 82, 69, 85, 66, 98, 114, 71, 109, 80, 96, 80, 71, 108, 106, 104, 100, 76, 78, 110, 76, 91, 119, 83, 68, 68, 117, 72, 71, 88, 100, 76, 114, 120, 73, 81, 82, 114, 83, 119, 98, 120, 90, 117, 114, 65, 109, 95, 87, 79, 86, 116, 68, 68, 94, 90, 71, 90, 78, 119, 94, 80, 106, 98, 96, 106, 109, 87, 70, 74, 105, 79, 83, 86, 114, 117, 89, 113, 70, 80, 101, 112, 107, 85, 73, 76, 77, 118, 112, 109, 67, 89, 110, 87, 68, 73, 66, 117, 70, 117, 90, 96, 91, 105, 73, 87, 101, 101, 70, 101, 115, 106, 118, 72, 68, 105, 71, 86, 116, 74, 84, 94, 114, 103, 77, 73, 115, 119, 102, 98, 96, 77, 88, 89, 94, 95, 73, 84, 76, 101, 96, 82, 101, 100, 78, 95, 99, 88, 91, 111, 100, 71, 113, 86, 76, 100, 67, 71, 66, 108, 90, 116, 66, 119, 93, 114, 96, 90, 74, 107, 108, 104, 92, 82, 114, 120, 94, 101, 115, 89, 69, 71, 87, 109, 67, 103, 116, 99, 99, 118, 109, 74, 88, 71, 101, 87, 90, 83, 77, 97, 111, 92, 117, 106, 86, 77, 72, 95, 109, 89, 119, 116, 77, 112, 93, 84, 83, 112, 119, 90, 99, 68, 81, 81, 114, 96, 103, 94, 99, 94, 92, 84, 101, 105, 98, 106, 72, 109, 66, 89, 90, 102, 77, 98, 96, 96, 105, 120, 93, 82, 115, 96, 74, 75, 96, 105, 75, 89, 75, 89, 91, 77, 70, 110, 85, 118, 83, 116, 105, 75, 73, 108, 94, 99, 113, 96, 76, 84, 81, 92, 111, 75, 81, 77, 98, 106, 93, 82, 108, 67, 103, 95, 71, 80, 102, 98, 119, 102, 70, 92, 71, 85, 101, 67, 82, 71, 65, 92, 96, 108, 116, 92, 108, 95, 73, 85, 105, 119, 72, 114, 81, 79, 71, 70, 101, 92, 108, 72, 73, 102, 96, 116, 80, 98, 95, 68, 91, 106, 112, 98, 94, 92, 90, 109, 96, 111, 82, 71, 95, 70, 110, 108, 99, 77, 107, 98, 70, 76, 76, 83, 89, 110, 65, 116, 112, 92, 97, 67, 111, 73, 70, 112, 115, 110, 85, 100, 116, 113, 100, 99, 79, 89, 106, 73, 115, 70, 75, 77, 100, 100, 113, 76, 104, 73, 107, 107, 115, 73, 120, 105, 116, 98, 99, 107, 74, 84, 105, 89, 114, 112, 119, 73, 69, 100, 73, 85, 109, 69, 89, 117, 114, 78, 109, 116, 71, 112, 72, 92, 77, 78, 83, 105, 77, 113, 67, 87, 74, 115, 82, 83, 116, 72, 70, 108, 78, 103, 92, 92, 68, 99, 106, 108, 80, 74, 90, 68, 85, 96, 113, 98]
			}
		]
  }
  // this is ugly, don't judge me
  var updateData = function(oldData){
    var labels = oldData["labels"];
    var dataSetA = oldData["datasets"][0]["data"];
    var dataSetB = oldData["datasets"][1]["data"];
    
    labels.shift();
    count++;
    labels.push(count.toString());
    var newDataA = dataSetA[0];
    var newDataB = dataSetB[5];
    dataSetA.push(newDataA);
    dataSetB.push(newDataB);
    dataSetA.shift();
    dataSetB.shift();    
	};
      
  var optionsAnimation = {
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : 100,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 10,
    //Number - The scale starting value
    scaleStartValue : 0
  }
  
  // Not sure why the scaleOverride isn't working...
  var optionsNoAnimation = {
    animation : false,
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : true,
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : 100,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 10,
    //Number - The scale starting value
    scaleStartValue : 0
  }
  
  //Get the context of the canvas element we want to select
  var ctx = document.getElementById("myChart").getContext("2d");
  var optionsNoAnimation = {animation : false}
  var myNewChart = new Chart(ctx);
  myNewChart.Line(data, optionsAnimation);	
  
  setInterval(function(){
    updateData(data);
    myNewChart.Line(data, optionsNoAnimation)
    ;}, 2000
  );
});


// ChartJS
var Chart = function(s) {
  function v(a, c, b) {
    a = A((a - c.graphMin) / (c.steps * c.stepValue), 1, 0);
    return b * c.steps * a
  }

  function x(a, c, b, e) {
    function h() {
      g += f;
      var k = a.animation ? A(d(g), null, 0) : 1;
      e.clearRect(0, 0, q, u);
      a.scaleOverlay ? (b(k), c()) : (c(), b(k));
      if (1 >= g) D(h);
      else if ("function" == typeof a.onAnimationComplete) a.onAnimationComplete()
    }
    var f = a.animation ? 1 / A(a.animationSteps, Number.MAX_VALUE, 1) : 1,
      d = B[a.animationEasing],
      g = a.animation ? 0 : 1;
    "function" !== typeof c && (c = function() {});
    D(h)
  }

  function C(a, c, b, e, h, f) {
    var d;
    a = Math.floor(Math.log(e - h) / Math.LN10);
    h = Math.floor(h / (1 * Math.pow(10, a))) * Math.pow(10, a);
    e = Math.ceil(e / (1 * Math.pow(10, a))) * Math.pow(10, a) - h;
    a = Math.pow(10, a);
    for (d = Math.round(e / a); d < b || d > c;) a = d < b ? a / 2 : 2 * a, d = Math.round(e / a);
    c = [];
    z(f, c, d, h, a);
    return {
      steps: d,
      stepValue: a,
      graphMin: h,
      labels: c
    }
  }

  function z(a, c, b, e, h) {
    if (a)
      for (var f = 1; f < b + 1; f++) c.push(E(a, {
        value: (e + h * f).toFixed(0 != h % 1 ? h.toString().split(".")[1].length : 0)
      }))
  }

  function A(a, c, b) {
    return !isNaN(parseFloat(c)) && isFinite(c) && a > c ? c : !isNaN(parseFloat(b)) &&
      isFinite(b) && a < b ? b : a
  }

  function y(a, c) {
    var b = {},
      e;
    for (e in a) b[e] = a[e];
    for (e in c) b[e] = c[e];
    return b
  }

  function E(a, c) {
    var b = !/\W/.test(a) ? F[a] = F[a] || E(document.getElementById(a).innerHTML) : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
    return c ?
      b(c) : b
  }
  var r = this,
    B = {
      linear: function(a) {
        return a
      },
      easeInQuad: function(a) {
        return a * a
      },
      easeOutQuad: function(a) {
        return -1 * a * (a - 2)
      },
      easeInOutQuad: function(a) {
        return 1 > (a /= 0.5) ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
      },
      easeInCubic: function(a) {
        return a * a * a
      },
      easeOutCubic: function(a) {
        return 1 * ((a = a / 1 - 1) * a * a + 1)
      },
      easeInOutCubic: function(a) {
        return 1 > (a /= 0.5) ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
      },
      easeInQuart: function(a) {
        return a * a * a * a
      },
      easeOutQuart: function(a) {
        return -1 * ((a = a / 1 - 1) * a * a * a - 1)
      },
      easeInOutQuart: function(a) {
        return 1 > (a /= 0.5) ?
          0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
      },
      easeInQuint: function(a) {
        return 1 * (a /= 1) * a * a * a * a
      },
      easeOutQuint: function(a) {
        return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
      },
      easeInOutQuint: function(a) {
        return 1 > (a /= 0.5) ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2)
      },
      easeInSine: function(a) {
        return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
      },
      easeOutSine: function(a) {
        return 1 * Math.sin(a / 1 * (Math.PI / 2))
      },
      easeInOutSine: function(a) {
        return -0.5 * (Math.cos(Math.PI * a / 1) - 1)
      },
      easeInExpo: function(a) {
        return 0 == a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
      },
      easeOutExpo: function(a) {
        return 1 ==
          a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1)
      },
      easeInOutExpo: function(a) {
        return 0 == a ? 0 : 1 == a ? 1 : 1 > (a /= 0.5) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * --a) + 2)
      },
      easeInCirc: function(a) {
        return 1 <= a ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
      },
      easeOutCirc: function(a) {
        return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
      },
      easeInOutCirc: function(a) {
        return 1 > (a /= 0.5) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
      },
      easeInElastic: function(a) {
        var c = 1.70158,
          b = 0,
          e = 1;
        if (0 == a) return 0;
        if (1 == (a /= 1)) return 1;
        b || (b = 0.3);
        e < Math.abs(1) ? (e = 1, c = b / 4) : c = b / (2 *
          Math.PI) * Math.asin(1 / e);
        return -(e * Math.pow(2, 10 * (a -= 1)) * Math.sin((1 * a - c) * 2 * Math.PI / b))
      },
      easeOutElastic: function(a) {
        var c = 1.70158,
          b = 0,
          e = 1;
        if (0 == a) return 0;
        if (1 == (a /= 1)) return 1;
        b || (b = 0.3);
        e < Math.abs(1) ? (e = 1, c = b / 4) : c = b / (2 * Math.PI) * Math.asin(1 / e);
        return e * Math.pow(2, -10 * a) * Math.sin((1 * a - c) * 2 * Math.PI / b) + 1
      },
      easeInOutElastic: function(a) {
        var c = 1.70158,
          b = 0,
          e = 1;
        if (0 == a) return 0;
        if (2 == (a /= 0.5)) return 1;
        b || (b = 1 * 0.3 * 1.5);
        e < Math.abs(1) ? (e = 1, c = b / 4) : c = b / (2 * Math.PI) * Math.asin(1 / e);
        return 1 > a ? -0.5 * e * Math.pow(2, 10 *
          (a -= 1)) * Math.sin((1 * a - c) * 2 * Math.PI / b) : 0.5 * e * Math.pow(2, -10 * (a -= 1)) * Math.sin((1 * a - c) * 2 * Math.PI / b) + 1
      },
      easeInBack: function(a) {
        return 1 * (a /= 1) * a * (2.70158 * a - 1.70158)
      },
      easeOutBack: function(a) {
        return 1 * ((a = a / 1 - 1) * a * (2.70158 * a + 1.70158) + 1)
      },
      easeInOutBack: function(a) {
        var c = 1.70158;
        return 1 > (a /= 0.5) ? 0.5 * a * a * (((c *= 1.525) + 1) * a - c) : 0.5 * ((a -= 2) * a * (((c *= 1.525) + 1) * a + c) + 2)
      },
      easeInBounce: function(a) {
        return 1 - B.easeOutBounce(1 - a)
      },
      easeOutBounce: function(a) {
        return (a /= 1) < 1 / 2.75 ? 1 * 7.5625 * a * a : a < 2 / 2.75 ? 1 * (7.5625 * (a -= 1.5 / 2.75) *
          a + 0.75) : a < 2.5 / 2.75 ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
      },
      easeInOutBounce: function(a) {
        return 0.5 > a ? 0.5 * B.easeInBounce(2 * a) : 0.5 * B.easeOutBounce(2 * a - 1) + 0.5
      }
    },
    q = s.canvas.width,
    u = s.canvas.height;
  window.devicePixelRatio && (s.canvas.style.width = q + "px", s.canvas.style.height = u + "px", s.canvas.height = u * window.devicePixelRatio, s.canvas.width = q * window.devicePixelRatio, s.scale(window.devicePixelRatio, window.devicePixelRatio));
  this.PolarArea = function(a, c) {
    r.PolarArea.defaults = {
      scaleOverlay: !0,
      scaleOverride: !1,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleShowLine: !0,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: !0,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowLabelBackdrop: !0,
      scaleBackdropColor: "rgba(255,255,255,0.75)",
      scaleBackdropPaddingY: 2,
      scaleBackdropPaddingX: 2,
      segmentShowStroke: !0,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      animation: !0,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: !0,
      animateScale: !1,
      onAnimationComplete: null
    };
    var b = c ? y(r.PolarArea.defaults, c) : r.PolarArea.defaults;
    return new G(a, b, s)
  };
  this.Radar = function(a, c) {
    r.Radar.defaults = {
      scaleOverlay: !1,
      scaleOverride: !1,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleShowLine: !0,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: !1,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowLabelBackdrop: !0,
      scaleBackdropColor: "rgba(255,255,255,0.75)",
      scaleBackdropPaddingY: 2,
      scaleBackdropPaddingX: 2,
      angleShowLineOut: !0,
      angleLineColor: "rgba(0,0,0,.1)",
      angleLineWidth: 1,
      pointLabelFontFamily: "'Arial'",
      pointLabelFontStyle: "normal",
      pointLabelFontSize: 12,
      pointLabelFontColor: "#666",
      pointDot: !0,
      pointDotRadius: 3,
      pointDotStrokeWidth: 1,
      datasetStroke: !0,
      datasetStrokeWidth: 2,
      datasetFill: !0,
      animation: !0,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      onAnimationComplete: null
    };
    var b = c ? y(r.Radar.defaults, c) : r.Radar.defaults;
    return new H(a, b, s)
  };
  this.Pie = function(a,
    c) {
    r.Pie.defaults = {
      segmentShowStroke: !0,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      animation: !0,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: !0,
      animateScale: !1,
      onAnimationComplete: null
    };
    var b = c ? y(r.Pie.defaults, c) : r.Pie.defaults;
    return new I(a, b, s)
  };
  this.Doughnut = function(a, c) {
    r.Doughnut.defaults = {
      segmentShowStroke: !0,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      percentageInnerCutout: 50,
      animation: !0,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: !0,
      animateScale: !1,
      onAnimationComplete: null
    };
    var b = c ? y(r.Doughnut.defaults, c) : r.Doughnut.defaults;
    return new J(a, b, s)
  };
  this.Line = function(a, c) {
    r.Line.defaults = {
      scaleOverlay: !1,
      scaleOverride: !1,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: !0,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowGridLines: !0,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      bezierCurve: !0,
      pointDot: !0,
      pointDotRadius: 4,
      pointDotStrokeWidth: 2,
      datasetStroke: !0,
      datasetStrokeWidth: 2,
      datasetFill: !0,
      animation: !0,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      onAnimationComplete: null
    };
    var b = c ? y(r.Line.defaults, c) : r.Line.defaults;
    return new K(a, b, s)
  };
  this.Bar = function(a, c) {
    r.Bar.defaults = {
      scaleOverlay: !1,
      scaleOverride: !1,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: !0,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowGridLines: !0,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      barShowStroke: !0,
      barStrokeWidth: 2,
      barValueSpacing: 5,
      barDatasetSpacing: 1,
      animation: !0,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      onAnimationComplete: null
    };
    var b = c ? y(r.Bar.defaults, c) : r.Bar.defaults;
    return new L(a, b, s)
  };
  var G = function(a, c, b) {
      var e, h, f, d, g, k, j, l, m;
      g = Math.min.apply(Math, [q, u]) / 2;
      g -= Math.max.apply(Math, [0.5 * c.scaleFontSize, 0.5 * c.scaleLineWidth]);
      d = 2 * c.scaleFontSize;
      c.scaleShowLabelBackdrop && (d += 2 * c.scaleBackdropPaddingY, g -= 1.5 * c.scaleBackdropPaddingY);
      l = g;
      d = d ? d : 5;
      e = Number.MIN_VALUE;
      h = Number.MAX_VALUE;
      for (f = 0; f < a.length; f++) a[f].value > e && (e = a[f].value), a[f].value < h && (h = a[f].value);
      f = Math.floor(l / (0.66 * d));
      d = Math.floor(0.5 * (l / d));
      m = c.scaleShowLabels ? c.scaleLabel : null;
      c.scaleOverride ? (j = {
        steps: c.scaleSteps,
        stepValue: c.scaleStepWidth,
        graphMin: c.scaleStartValue,
        labels: []
      }, z(m, j.labels, j.steps, c.scaleStartValue, c.scaleStepWidth)) : j = C(l, f, d, e, h,
        m);
      k = g / j.steps;
      x(c, function() {
        for (var a = 0; a < j.steps; a++)
          if (c.scaleShowLine && (b.beginPath(), b.arc(q / 2, u / 2, k * (a + 1), 0, 2 * Math.PI, !0), b.strokeStyle = c.scaleLineColor, b.lineWidth = c.scaleLineWidth, b.stroke()), c.scaleShowLabels) {
            b.textAlign = "center";
            b.font = c.scaleFontStyle + " " + c.scaleFontSize + "px " + c.scaleFontFamily;
            var e = j.labels[a];
            if (c.scaleShowLabelBackdrop) {
              var d = b.measureText(e).width;
              b.fillStyle = c.scaleBackdropColor;
              b.beginPath();
              b.rect(Math.round(q / 2 - d / 2 - c.scaleBackdropPaddingX), Math.round(u / 2 - k * (a +
                1) - 0.5 * c.scaleFontSize - c.scaleBackdropPaddingY), Math.round(d + 2 * c.scaleBackdropPaddingX), Math.round(c.scaleFontSize + 2 * c.scaleBackdropPaddingY));
              b.fill()
            }
            b.textBaseline = "middle";
            b.fillStyle = c.scaleFontColor;
            b.fillText(e, q / 2, u / 2 - k * (a + 1))
          }
      }, function(e) {
        var d = -Math.PI / 2,
          g = 2 * Math.PI / a.length,
          f = 1,
          h = 1;
        c.animation && (c.animateScale && (f = e), c.animateRotate && (h = e));
        for (e = 0; e < a.length; e++) b.beginPath(), b.arc(q / 2, u / 2, f * v(a[e].value, j, k), d, d + h * g, !1), b.lineTo(q / 2, u / 2), b.closePath(), b.fillStyle = a[e].color, b.fill(),
          c.segmentShowStroke && (b.strokeStyle = c.segmentStrokeColor, b.lineWidth = c.segmentStrokeWidth, b.stroke()), d += h * g
      }, b)
    },
    H = function(a, c, b) {
      var e, h, f, d, g, k, j, l, m;
      a.labels || (a.labels = []);
      g = Math.min.apply(Math, [q, u]) / 2;
      d = 2 * c.scaleFontSize;
      for (e = l = 0; e < a.labels.length; e++) b.font = c.pointLabelFontStyle + " " + c.pointLabelFontSize + "px " + c.pointLabelFontFamily, h = b.measureText(a.labels[e]).width, h > l && (l = h);
      g -= Math.max.apply(Math, [l, 1.5 * (c.pointLabelFontSize / 2)]);
      g -= c.pointLabelFontSize;
      l = g = A(g, null, 0);
      d = d ? d : 5;
      e = Number.MIN_VALUE;
      h = Number.MAX_VALUE;
      for (f = 0; f < a.datasets.length; f++)
        for (m = 0; m < a.datasets[f].data.length; m++) a.datasets[f].data[m] > e && (e = a.datasets[f].data[m]), a.datasets[f].data[m] < h && (h = a.datasets[f].data[m]);
      f = Math.floor(l / (0.66 * d));
      d = Math.floor(0.5 * (l / d));
      m = c.scaleShowLabels ? c.scaleLabel : null;
      c.scaleOverride ? (j = {
        steps: c.scaleSteps,
        stepValue: c.scaleStepWidth,
        graphMin: c.scaleStartValue,
        labels: []
      }, z(m, j.labels, j.steps, c.scaleStartValue, c.scaleStepWidth)) : j = C(l, f, d, e, h, m);
      k = g / j.steps;
      x(c, function() {
        var e = 2 * Math.PI /
          a.datasets[0].data.length;
        b.save();
        b.translate(q / 2, u / 2);
        if (c.angleShowLineOut) {
          b.strokeStyle = c.angleLineColor;
          b.lineWidth = c.angleLineWidth;
          for (var d = 0; d < a.datasets[0].data.length; d++) b.rotate(e), b.beginPath(), b.moveTo(0, 0), b.lineTo(0, -g), b.stroke()
        }
        for (d = 0; d < j.steps; d++) {
          b.beginPath();
          if (c.scaleShowLine) {
            b.strokeStyle = c.scaleLineColor;
            b.lineWidth = c.scaleLineWidth;
            b.moveTo(0, -k * (d + 1));
            for (var f = 0; f < a.datasets[0].data.length; f++) b.rotate(e), b.lineTo(0, -k * (d + 1));
            b.closePath();
            b.stroke()
          }
          c.scaleShowLabels &&
            (b.textAlign = "center", b.font = c.scaleFontStyle + " " + c.scaleFontSize + "px " + c.scaleFontFamily, b.textBaseline = "middle", c.scaleShowLabelBackdrop && (f = b.measureText(j.labels[d]).width, b.fillStyle = c.scaleBackdropColor, b.beginPath(), b.rect(Math.round(-f / 2 - c.scaleBackdropPaddingX), Math.round(-k * (d + 1) - 0.5 * c.scaleFontSize - c.scaleBackdropPaddingY), Math.round(f + 2 * c.scaleBackdropPaddingX), Math.round(c.scaleFontSize + 2 * c.scaleBackdropPaddingY)), b.fill()), b.fillStyle = c.scaleFontColor, b.fillText(j.labels[d], 0, -k * (d +
              1)))
        }
        for (d = 0; d < a.labels.length; d++) {
          b.font = c.pointLabelFontStyle + " " + c.pointLabelFontSize + "px " + c.pointLabelFontFamily;
          b.fillStyle = c.pointLabelFontColor;
          var f = Math.sin(e * d) * (g + c.pointLabelFontSize),
            h = Math.cos(e * d) * (g + c.pointLabelFontSize);
          b.textAlign = e * d == Math.PI || 0 == e * d ? "center" : e * d > Math.PI ? "right" : "left";
          b.textBaseline = "middle";
          b.fillText(a.labels[d], f, -h)
        }
        b.restore()
      }, function(d) {
        var e = 2 * Math.PI / a.datasets[0].data.length;
        b.save();
        b.translate(q / 2, u / 2);
        for (var g = 0; g < a.datasets.length; g++) {
          b.beginPath();
          b.moveTo(0, d * -1 * v(a.datasets[g].data[0], j, k));
          for (var f = 1; f < a.datasets[g].data.length; f++) b.rotate(e), b.lineTo(0, d * -1 * v(a.datasets[g].data[f], j, k));
          b.closePath();
          b.fillStyle = a.datasets[g].fillColor;
          b.strokeStyle = a.datasets[g].strokeColor;
          b.lineWidth = c.datasetStrokeWidth;
          b.fill();
          b.stroke();
          if (c.pointDot) {
            b.fillStyle = a.datasets[g].pointColor;
            b.strokeStyle = a.datasets[g].pointStrokeColor;
            b.lineWidth = c.pointDotStrokeWidth;
            for (f = 0; f < a.datasets[g].data.length; f++) b.rotate(e), b.beginPath(), b.arc(0, d * -1 *
              v(a.datasets[g].data[f], j, k), c.pointDotRadius, 2 * Math.PI, !1), b.fill(), b.stroke()
          }
          b.rotate(e)
        }
        b.restore()
      }, b)
    },
    I = function(a, c, b) {
      for (var e = 0, h = Math.min.apply(Math, [u / 2, q / 2]) - 5, f = 0; f < a.length; f++) e += a[f].value;
      x(c, null, function(d) {
        var g = -Math.PI / 2,
          f = 1,
          j = 1;
        c.animation && (c.animateScale && (f = d), c.animateRotate && (j = d));
        for (d = 0; d < a.length; d++) {
          var l = j * a[d].value / e * 2 * Math.PI;
          b.beginPath();
          b.arc(q / 2, u / 2, f * h, g, g + l);
          b.lineTo(q / 2, u / 2);
          b.closePath();
          b.fillStyle = a[d].color;
          b.fill();
          c.segmentShowStroke && (b.lineWidth =
            c.segmentStrokeWidth, b.strokeStyle = c.segmentStrokeColor, b.stroke());
          g += l
        }
      }, b)
    },
    J = function(a, c, b) {
      for (var e = 0, h = Math.min.apply(Math, [u / 2, q / 2]) - 5, f = h * (c.percentageInnerCutout / 100), d = 0; d < a.length; d++) e += a[d].value;
      x(c, null, function(d) {
        var k = -Math.PI / 2,
          j = 1,
          l = 1;
        c.animation && (c.animateScale && (j = d), c.animateRotate && (l = d));
        for (d = 0; d < a.length; d++) {
          var m = l * a[d].value / e * 2 * Math.PI;
          b.beginPath();
          b.arc(q / 2, u / 2, j * h, k, k + m, !1);
          b.arc(q / 2, u / 2, j * f, k + m, k, !0);
          b.closePath();
          b.fillStyle = a[d].color;
          b.fill();
          c.segmentShowStroke &&
            (b.lineWidth = c.segmentStrokeWidth, b.strokeStyle = c.segmentStrokeColor, b.stroke());
          k += m
        }
      }, b)
    },
    K = function(a, c, b) {
      var e, h, f, d, g, k, j, l, m, t, r, n, p, s = 0;
      g = u;
      b.font = c.scaleFontStyle + " " + c.scaleFontSize + "px " + c.scaleFontFamily;
      t = 1;
      for (d = 0; d < a.labels.length; d++) e = b.measureText(a.labels[d]).width, t = e > t ? e : t;
      q / a.labels.length < t ? (s = 45, q / a.labels.length < Math.cos(s) * t ? (s = 90, g -= t) : g -= Math.sin(s) * t) : g -= c.scaleFontSize;
      d = c.scaleFontSize;
      g = g - 5 - d;
      e = Number.MIN_VALUE;
      h = Number.MAX_VALUE;
      for (f = 0; f < a.datasets.length; f++)
        for (l =
          0; l < a.datasets[f].data.length; l++) a.datasets[f].data[l] > e && (e = a.datasets[f].data[l]), a.datasets[f].data[l] < h && (h = a.datasets[f].data[l]);
      f = Math.floor(g / (0.66 * d));
      d = Math.floor(0.5 * (g / d));
      l = c.scaleShowLabels ? c.scaleLabel : "";
      c.scaleOverride ? (j = {
        steps: c.scaleSteps,
        stepValue: c.scaleStepWidth,
        graphMin: c.scaleStartValue,
        labels: []
      }, z(l, j.labels, j.steps, c.scaleStartValue, c.scaleStepWidth)) : j = C(g, f, d, e, h, l);
      k = Math.floor(g / j.steps);
      d = 1;
      if (c.scaleShowLabels) {
        b.font = c.scaleFontStyle + " " + c.scaleFontSize + "px " + c.scaleFontFamily;
        for (e = 0; e < j.labels.length; e++) h = b.measureText(j.labels[e]).width, d = h > d ? h : d;
        d += 10
      }
      r = q - d - t;
      m = Math.floor(r / (a.labels.length - 1));
      n = q - t / 2 - r;
      p = g + c.scaleFontSize / 2;
      x(c, function() {
        b.lineWidth = c.scaleLineWidth;
        b.strokeStyle = c.scaleLineColor;
        b.beginPath();
        b.moveTo(q - t / 2 + 5, p);
        b.lineTo(q - t / 2 - r - 5, p);
        b.stroke();
        0 < s ? (b.save(), b.textAlign = "right") : b.textAlign = "center";
        b.fillStyle = c.scaleFontColor;
        for (var d = 0; d < a.labels.length; d++) b.save(), 0 < s ? (b.translate(n + d * m, p + c.scaleFontSize), b.rotate(-(s * (Math.PI / 180))), b.fillText(a.labels[d],
          0, 0), b.restore()) : b.fillText(a.labels[d], n + d * m, p + c.scaleFontSize + 3), b.beginPath(), b.moveTo(n + d * m, p + 3), c.scaleShowGridLines && 0 < d ? (b.lineWidth = c.scaleGridLineWidth, b.strokeStyle = c.scaleGridLineColor, b.lineTo(n + d * m, 5)) : b.lineTo(n + d * m, p + 3), b.stroke();
        b.lineWidth = c.scaleLineWidth;
        b.strokeStyle = c.scaleLineColor;
        b.beginPath();
        b.moveTo(n, p + 5);
        b.lineTo(n, 5);
        b.stroke();
        b.textAlign = "right";
        b.textBaseline = "middle";
        for (d = 0; d < j.steps; d++) b.beginPath(), b.moveTo(n - 3, p - (d + 1) * k), c.scaleShowGridLines ? (b.lineWidth = c.scaleGridLineWidth,
          b.strokeStyle = c.scaleGridLineColor, b.lineTo(n + r + 5, p - (d + 1) * k)) : b.lineTo(n - 0.5, p - (d + 1) * k), b.stroke(), c.scaleShowLabels && b.fillText(j.labels[d], n - 8, p - (d + 1) * k)
      }, function(d) {
        function e(b, c) {
          return p - d * v(a.datasets[b].data[c], j, k)
        }
        for (var f = 0; f < a.datasets.length; f++) {
          b.strokeStyle = a.datasets[f].strokeColor;
          b.lineWidth = c.datasetStrokeWidth;
          b.beginPath();
          b.moveTo(n, p - d * v(a.datasets[f].data[0], j, k));
          for (var g = 1; g < a.datasets[f].data.length; g++) c.bezierCurve ? b.bezierCurveTo(n + m * (g - 0.5), e(f, g - 1), n + m * (g - 0.5),
            e(f, g), n + m * g, e(f, g)) : b.lineTo(n + m * g, e(f, g));
          b.stroke();
          c.datasetFill ? (b.lineTo(n + m * (a.datasets[f].data.length - 1), p), b.lineTo(n, p), b.closePath(), b.fillStyle = a.datasets[f].fillColor, b.fill()) : b.closePath();
          if (c.pointDot) {
            b.fillStyle = a.datasets[f].pointColor;
            b.strokeStyle = a.datasets[f].pointStrokeColor;
            b.lineWidth = c.pointDotStrokeWidth;
            for (g = 0; g < a.datasets[f].data.length; g++) b.beginPath(), b.arc(n + m * g, p - d * v(a.datasets[f].data[g], j, k), c.pointDotRadius, 0, 2 * Math.PI, !0), b.fill(), b.stroke()
          }
        }
      }, b)
    },
    L = function(a,
      c, b) {
      var e, h, f, d, g, k, j, l, m, t, r, n, p, s, w = 0;
      g = u;
      b.font = c.scaleFontStyle + " " + c.scaleFontSize + "px " + c.scaleFontFamily;
      t = 1;
      for (d = 0; d < a.labels.length; d++) e = b.measureText(a.labels[d]).width, t = e > t ? e : t;
      q / a.labels.length < t ? (w = 45, q / a.labels.length < Math.cos(w) * t ? (w = 90, g -= t) : g -= Math.sin(w) * t) : g -= c.scaleFontSize;
      d = c.scaleFontSize;
      g = g - 5 - d;
      e = Number.MIN_VALUE;
      h = Number.MAX_VALUE;
      for (f = 0; f < a.datasets.length; f++)
        for (l = 0; l < a.datasets[f].data.length; l++) a.datasets[f].data[l] > e && (e = a.datasets[f].data[l]), a.datasets[f].data[l] <
          h && (h = a.datasets[f].data[l]);
      f = Math.floor(g / (0.66 * d));
      d = Math.floor(0.5 * (g / d));
      l = c.scaleShowLabels ? c.scaleLabel : "";
      c.scaleOverride ? (j = {
        steps: c.scaleSteps,
        stepValue: c.scaleStepWidth,
        graphMin: c.scaleStartValue,
        labels: []
      }, z(l, j.labels, j.steps, c.scaleStartValue, c.scaleStepWidth)) : j = C(g, f, d, e, h, l);
      k = Math.floor(g / j.steps);
      d = 1;
      if (c.scaleShowLabels) {
        b.font = c.scaleFontStyle + " " + c.scaleFontSize + "px " + c.scaleFontFamily;
        for (e = 0; e < j.labels.length; e++) h = b.measureText(j.labels[e]).width, d = h > d ? h : d;
        d += 10
      }
      r = q - d - t;
      m =
        Math.floor(r / a.labels.length);
      s = (m - 2 * c.scaleGridLineWidth - 2 * c.barValueSpacing - (c.barDatasetSpacing * a.datasets.length - 1) - (c.barStrokeWidth / 2 * a.datasets.length - 1)) / a.datasets.length;
      n = q - t / 2 - r;
      p = g + c.scaleFontSize / 2;
      x(c, function() {
        b.lineWidth = c.scaleLineWidth;
        b.strokeStyle = c.scaleLineColor;
        b.beginPath();
        b.moveTo(q - t / 2 + 5, p);
        b.lineTo(q - t / 2 - r - 5, p);
        b.stroke();
        0 < w ? (b.save(), b.textAlign = "right") : b.textAlign = "center";
        b.fillStyle = c.scaleFontColor;
        for (var d = 0; d < a.labels.length; d++) b.save(), 0 < w ? (b.translate(n +
          d * m, p + c.scaleFontSize), b.rotate(-(w * (Math.PI / 180))), b.fillText(a.labels[d], 0, 0), b.restore()) : b.fillText(a.labels[d], n + d * m + m / 2, p + c.scaleFontSize + 3), b.beginPath(), b.moveTo(n + (d + 1) * m, p + 3), b.lineWidth = c.scaleGridLineWidth, b.strokeStyle = c.scaleGridLineColor, b.lineTo(n + (d + 1) * m, 5), b.stroke();
        b.lineWidth = c.scaleLineWidth;
        b.strokeStyle = c.scaleLineColor;
        b.beginPath();
        b.moveTo(n, p + 5);
        b.lineTo(n, 5);
        b.stroke();
        b.textAlign = "right";
        b.textBaseline = "middle";
        for (d = 0; d < j.steps; d++) b.beginPath(), b.moveTo(n - 3, p - (d + 1) *
          k), c.scaleShowGridLines ? (b.lineWidth = c.scaleGridLineWidth, b.strokeStyle = c.scaleGridLineColor, b.lineTo(n + r + 5, p - (d + 1) * k)) : b.lineTo(n - 0.5, p - (d + 1) * k), b.stroke(), c.scaleShowLabels && b.fillText(j.labels[d], n - 8, p - (d + 1) * k)
      }, function(d) {
        b.lineWidth = c.barStrokeWidth;
        for (var e = 0; e < a.datasets.length; e++) {
          b.fillStyle = a.datasets[e].fillColor;
          b.strokeStyle = a.datasets[e].strokeColor;
          for (var f = 0; f < a.datasets[e].data.length; f++) {
            var g = n + c.barValueSpacing + m * f + s * e + c.barDatasetSpacing * e + c.barStrokeWidth * e;
            b.beginPath();
            b.moveTo(g, p);
            b.lineTo(g, p - d * v(a.datasets[e].data[f], j, k) + c.barStrokeWidth / 2);
            b.lineTo(g + s, p - d * v(a.datasets[e].data[f], j, k) + c.barStrokeWidth / 2);
            b.lineTo(g + s, p);
            c.barShowStroke && b.stroke();
            b.closePath();
            b.fill()
          }
        }
      }, b)
    },
    D = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
      window.setTimeout(a, 1E3 / 60)
    },
    F = {}
};