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
      for (var key = 0, size = data.length; key < size; key++)
      {
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
      }
      $('#hall_table').append(r.join(''));
    }
  });
})