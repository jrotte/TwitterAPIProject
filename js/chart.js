//Trying out google charts *Nick V*
var fordata = 3;
var againstdata = 1;
// Load the Visualization API and the piechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'What people are saying');
      data.addColumn('number', 'number for');
      data.addRows([
        ['for', fordata],
        ['against', againstdata]
      ]);

      // Set chart options
      var options = {'title':'People for this subject',
                     'width':600,
                     'height':600};

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('googleChart'));
      chart.draw(data, options);
    }
    drawChart();
