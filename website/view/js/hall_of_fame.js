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
      console.log("#################################");
      var r = new Array(),
        j = -1;
      data = [
        [1, 2, 3],
        [4, 5, 6]
      ];
      for (var key = 0, size = data.length; key < size; key++)
      {
        r[++j] = '<tr><td>';
        r[++j] = data[key][0];
        r[++j] = '</td><td class="whatever1">';
        r[++j] = data[key][1];
        r[++j] = '</td><td class="whatever2">';
        r[++j] = data[key][2];
        r[++j] = '</td></tr>';
      }
      $('#hall_table').html(r.join(''));
    }
  });
})