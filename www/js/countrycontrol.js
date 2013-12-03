$(document).ready(function () {
  var countries = [
      {
          name: "Senegal", 
          code:"SEN",
          video_src: "http://www.youtube.com/watch?v=7TzdIyQ6_Tk"
      },
      {
          name: "South Africa", 
          code:"ZAF",
          video_src: "http://www.youtube.com/watch?v=4uTEahVX4Oc"
      },
      {
        name: "Benin", 
        code:"BEN",
        video_src: "http://www.youtube.com/watch?v=IsB-vxM2Vko"
      },
      {name: "Angola", code:"AGO"},
      // {name: "Burundi", code:"BDI"},
      // {name: "Burkina Faso", code:"BFA"},
      // {name: "Botswana", code:"BWA"},
      // {name: "Central African Republic", code:"CAF"},
      {name: "Côte d'Ivoire", code:"CIV"},
      // {name: "Cameroon", code:"CMR"},
      // {name: "Congo, the Democratic Republic of the", code:"COD"},
      // {name: "Congo", code:"COG"},
      // {name: "Djibouti", code:"DJI"},
      {name: "Algeria", code:"DZA"},
      // {name: "Egypt", code:"EGY"},
      {name: "Eritrea", code:"ERI"},
      // {name: "Western Sahara", code:"ESH"},
      // {name: "Ethiopia", code:"ETH"},
      {name: "Ghana", code:"GHA"},
      // {name: "Guinea", code:"GIN"},
      // {name: "Gambia", code:"GMB"},
      // {name: "Guinea-Bissau", code:"GNB"},
      // {name: "Equatorial Guinea", code:"GNQ"},
      // {name: "Kenya", code:"KEN"},
      // {name: "Liberia", code:"LBR"},
      // {name: "Libya", code:"LBY"},
      // {name: "Lesotho", code:"LSO"},
      // {name: "Morocco", code:"MAR"},
      // {name: "Madagascar", code:"MDG"},
      // {name: "Mali", code:"MLI"},
      // {name: "Mozambique", code:"MOZ"},
      // {name: "Mauritania", code:"MRT"},
      // {name: "Malawi", code:"MWI"},
      // {name: "Namibia", code:"NAM"},
      // {name: "Niger", code:"NER"},
      // {name: "Nigeria", code:"NGA"},
      // {name: "Rwanda", code:"RWA"},
      // {name: "Sudan", code:"SDN"},
      // {name: "Sierra Leone", code:"SLE"},
      // {name: "Somalia", code:"SOM"},
      // {name: "South Sudan", code:"SSD"},
      // {name: "Swaziland", code:"SWZ"},
      // {name: "Chad", code:"TCD"},
      // {name: "Togo", code:"TGO"},
      // {name: "Tunisia", code:"TUN"},
      // {name: "Uganda", code:"UGA"},
      // {name: "Zambia", code:"ZMB"},
      // {name: "Zimbabwe", code:"ZWE"}
  ];
  var pop;

  for (var i = 0; i < countries.length; i++) {
    var country = countries[i];

    // add img to remoteControl
    $('<img/>', {
        id: country.code,
        src: "img/countries/"+country.code +".png",
        class: "country",
        'data-video_src': country.video_src
    }).appendTo('#remoteControl');

    // set click function if video_src is provided
    if (country.video_src != undefined) {
      $("#"+country.code).click(function() {
        // remove previous youtubedivs
        if (pop) { pop.destroy()};
        $("youtubediv").empty();

        // Create a popcorn instance by calling the Youtube player plugin
        pop = Popcorn.youtube(
         '#youtubediv',
         $(this).attr('data-video_src'));
        // play the video right away
        pop.on('ended', function() {
          window.location.href = 'map.html';
        });
        pop.play();
      });
    };
  };
});