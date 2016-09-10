$(function ()
{
  $.ajax(
  {
    type: "GET",
    url: "http://localhost:3012/hall",
    contentType: "application/json; charset=utf-8",
    crossDomain: true,
    success: function (data)
    {
      $(".result").html(data);
      console.log(data);
      var r = new Array(),
        j = -1;

      
            <div class="col-xs-6 col-sm-2 placeholder"> <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="160" height="160" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>@data_screen_name</h4>
              <h3>#1</h3>
              <h5>H-Score: 3.3</h5>
              <p class="text-muted">Human H Meter: 90.2%</p>
              <p class="text-muted">Machine H Meter: 90.2%</p> <a class="btn btn-danger" href="https://twitter.com/pakalupapito/status/774555783379968001" role="button">View Latest Tweet</a> </div>        
      for (var key = 0, size = data.length; key < size; key++)
      {
        r[++j] = '<div class="col-xs-6 col-sm-2 placeholder"> <img src="'+ data[key]["profile_pic"]
        +'" width="160" height="160" class="img-responsive" alt="Generic placeholder thumbnail">';        
        r[++j] = '<h4>'+data[key]["data_screen_name"] +'</h4>';
        r[++j] = parseInt(data[key]["neg"])/parseInt(data[key]["all_total"]);
        r[++j] = '</td><td class="col-lg-1 well well-lg">';
        r[++j] = ;
        r[++j] = '</td><td class="col-lg-1 well well-lg">';
        r[++j] = data[key]["neg"]
        r[++j] = '</td><td class="col-lg-1 well well-lg">';
        r[++j] = data[key]["pos"]
        r[++j] = '</td><td class="col-lg-1 well well-lg">';
        r[++j] = data[key]["last_tweet"]
        r[++j] = '</td></tr>';
      }/*{
        r[++j] = '<tr><td class="col-lg-1 well well-lg">';
        r[++j] = key + 1;
        r[++j] = '</td><td class="col-lg-1 well well-lg">';
        r[++j] = parseInt(data[key]["neg"])/parseInt(data[key]["all_total"]);
        r[++j] = '</td><td class="col-lg-1 well well-lg">';
        r[++j] = data[key]["data_screen_name"];
        r[++j] = '</td><td class="col-lg-1 well well-lg">';
        r[++j] = data[key]["neg"]
        r[++j] = '</td><td class="col-lg-1 well well-lg">';
        r[++j] = data[key]["pos"]
        r[++j] = '</td><td class="col-lg-1 well well-lg">';
        r[++j] = data[key]["last_tweet"]
        r[++j] = '</td></tr>';
      }*/
      $('#hall_table').append(r.join(''));
    }
  });
})