
function draw_map(country_list){
  google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

   function drawRegionsMap() {
     var data = google.visualization.arrayToDataTable(country_list);

     var options = {};

     var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

     chart.draw(data, options);
   }
  }