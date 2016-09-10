var toggle_visibility = function (id) {
  selector = "#tweet_text" + id;
  console.log($(selector), $(selector).attr('style'));
  var now = $(selector).attr('style')
  console.log(now);
  if(now == "" )
  $(selector).hide();
  else
  $(selector).show();
}
$(function () {
  $.ajax({
    type: "GET",
    url: "/hall",
    contentType: "application/json; charset=utf-8",
    crossDomain: true,
    success: function (data) {
      $(".result").html(data);
      console.log(data);
      var r = new Array(),
        j = -1;
      for (var key = 0, size = data.length; key < size; key++) {
        if(!data[key]["profile_pic"])
        data[key]["profile_pic"] = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQECAgMCAgICAgQDAwIDBQQFBQUEBAQFBgcGBQUHBgQEBgkGBwgICAgIBQYJCgkICgcICAj/2wBDAQEBAQICAgQCAgQIBQQFCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAj/wAARCAFhAiYDAREAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBgkDBAUCCv/EAEsQAAIBAwIEAwUEBQYKCwAAAAABAgMEEQUGBxIhMQhBURMUImFxFTKBkRYjQlJyM0NiobHwGCQ3gpKTs8HS8Rc0NlNWdHWDlKLh/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAUGAgMEAQf/xAA2EQEAAgECBAMGBAYCAwEAAAAAAQIDBBEFEiExBkFREzJhcZGxIoGh0RUjM0LB4VLwFBY0Q//aAAwDAQACEQMRAD8A/TAfWFPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByUqNWvUjSoUqlaq+0YRbb/BHkzEdZIhJ+2uDHEXc86fum3bvT7aSbVe9jKjT6Z6dVnyfl/aiO1HFsGPvbefg6sejyW7Qn3bXhQhC49ru7cqrW8ZJqjYQ5XUWH3nNdOuO0X0z1WcqE1HiadtsVfq7sfCuv45SrS8OXCinRhSnod7Wmo8rqSvq3NJ4fxPEks9U+ix8K6d8xs8f1O/f9IdUcOxej6oeHThNRm5VNAu7qOMctS+rJL5/DJMW49qp/u/SHscPxejnreHnhHUpyhDa9S3k+04X9w2vzqNf1GMcd1UT736R+xPD8Xp92E614Vtl3inPRNZ1zRazT5VNxr04vPT4Woyfp970/Hrw+JM0e/ET+jTfhdJ92dkAbu8O3EHbMJ3NjbUd02KfR2ClKql/SpNc3+jzE5pePYMnS08s/H93Bl4fkr1jqgqtRrW9arb3FKpQrwk4ThOLjKEk8NNPqmn5EzExMbw4ZjZxnoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOSjRrXFalb29KpXrzkoQhCLlKcm8JJLq235HkzERvJEbrVbO8LWt6lb0b3eGr0tBhOKkrWhH2taPXtNv4YvGe3N3XzRWtX4kpWdsUb/HySmHhlp63nZOukeHLhbpbjKvpd/rVRLGbu6k/LGWocqfn5ef0xDZePam3advlDupw7FHlul7SNv6FoFCNtomjaZpFBLHLb0I089s5wuucLq+5F5c97zveZl10x1r0rGz1zUzAAAAAAARzvvhXs7iFQk9b06NLVFDkpX1D4K9L0y+00v3ZJpZeMN5O/RcSy4J/BPT08nPn0tMnvR1UM4l8Gdz8OalS9rQjqu2nPlpX1H9jLajGrHvCXRdeseqSk30V04fxbHqI2jpb0/ZBanR2x9e8IgJVyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF7PD/wbWh29rvrdFrKOu1E5WNtNNO0ptY55p/zkk3hfsxa83iNM45xbnmcOOfw+fx/0nNBo+X8du61hWkoAAAAAAAAAAADjrUaNxRq29xSp17epFwnCcVKM4tYaafRpryPYmYneHkxupHxe8O89Lp3W5dgUK1zYpyqXGmp80qEUs81JvrJdH8PVrKxnyt/C+O80xjz9/X90Nq+H7fix/RUctCJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuHwG4KxvKlnvvdlr7KhTlGen2Uk17SccYrVM+Weqj5vOcJYdV41xfbfDin5z/hL6HRb/juuqVFMgAAAAAAAAAAAAAAFPuOnAqFzC+3tsq0krzPtb7T6UOlVdXKrTS/a7Zgl16tdViVq4NxnbbDmnp5T/hEa7Q7/jopQW5DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPXArhtLfW45alf23s9uWUf1slnFWthJRT8pdefPk0voQnGeIexx8tfel3aHTc9t57Q2OQhCnCFOnCNOnFKMYpYUV6JFDmd1ifR4AAAAAAAAAAAAAAAACkniF4OxsJXW/9r20vdZz5tStKUOlBtda8Uu0W18S8m89m8W/gXFeb+Rknr5T/hC8Q0e38yv5qhFpRIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9QhOpONOnGU5yaUYpZbfokJnYbVOFuznsXZOjaFWUVfqHt7tLGFXkk5JNN5w+mc9ceSwl814lq/bZpvHby+S0aXDyUiqQjhdAAAAAAAAAAAAAAAAAAcdajRuKNW3uKVOvb1IuE4TipRnFrDTT6NNeR7EzE7w8mN2tfjZwrq8OteV1p1OUtqXs5Ss5czk7drDdGTfXpn4W224ru2pH0DhHEvb02t70d/3V3W6X2dt47ShMl3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsz4a+Hv6RbjnvHUaedJ0qovYRlDMa901lYeMfq04z9U3D5le8Qa/2eP2Ve9vt/v8AdJcO0/NbnntC/wCUhPAAAAAAAAAAAAAAAAAAAAYpvbaGmb523qW29VXLRrxzTqqOZW9VdY1I/NP81ldmzp0eqthyRkr5NWbDF6zWWqvcWgantbW9S2/rFD3fUrWo6dSPk/NSi/OLTUk/NNH0rBnrkpF6dpVfJjmtprPd4xtYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9PRdH1DcGrafomlW8rrUbqrGjRgvOTfdvyS7t9kk2+xrzZa0rN7doZUpNp5Y7tr+ztrWGy9taVtvTnz0LanyyqOKi6031lNpebbb/qPmer1Ns2SclvNacOKKVisMmOdtAAAAAAAAAAAAAAAAAAAAAVb8S3Dmeu6NR3tpFtGep6dCSvVGPxVrXvzf8AtvL/AIZSefhSLH4f1/Jf2N56T2+f+0ZxLT81eeO8KFl1QQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALleFzYcJyvuIGoW8ZOLlaac5L7rxipUX4Pkz85FU8R63tgr85/wAJjhmD/wDSVzipJgAAAAAAAAAAAAAAAAAAAAAA461GjcUatvcUqde3qRcJwnFSjOLWGmn0aa8j2JmJ3h5MbtWfFfY1XYG9NU0aNKpHSZy94sJvOJ0JdUstttxeYNvq3HPmj6RwzWRnwxfz8/mrGqwezvMeSNzvc4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9nbuhX25tc0rQNOhz3t3WjRh6Ry+sn8kst/JGrPmjHSb27Qzx0m1orHm2y7d0Kx2zoWlaBp0OSztKMaMPWWO8n828t/NnzLPmnJeb27ytWOkVrFY8ntGlmAAPFu9ybdsKzt77X9Fs7hd4VbqnCS647N57p/kba6fJMbxWfownJWO8vmy3PtrUp06enbh0PUKk0pRjQu6c3JPGGkm891+Z7fT5K+9WY/IrlrPaXuGlmAAAAAAAAAAAAAAAAAFe/EbsmO5dkVddtKHtNW0nNynHGZW/8AOpv0SXP/AJr9Sd4BrPZ5uSe1vv5I/iOHmpzR3hrrL2r4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuL4V9mKrV1nfd5Si1TbsbLOcqWE6ksfRwin85ehVPEmr6Rhj5z/hL8Lw97yumVJMgHS1LULXSdOv9VvZ+ysrajO4rS/dhGLlJ/kmZ46Ta0VjvLG1oiN5UM1TcvGnjZe3T2vZa1Y7VdSUKdKhUVChGPTKq1nyqpLGG4tvDfRLJdMWn0mjj+ZMTb6z+UeSDvkzZp/D2eF/g2cU/Y+1+zdK5+bl9n77Dmxj73pjy75+Ru/8AYNNv3n6Nf8OysO3Bwf4kbZpVbnVdq36tIJylWoONeCjnGW6bePxwzrwcV0+Sdq26/RqyaTJXrMO3tDjRxC2Zy0rDW6mpaesf4rf5r0kl2Ucvmgur6RayY6rhGDL1tG0+sdHuHWZKdpXB4feIfaW8KtDTNYpy2vrk2oQhWmpUK8m8JQqdMN9Okku+E2VXXcCy4vxU/FX9Uvp+IUv0npKwRBu8AAAMf3Jurbu0NPlqm5NWtNJss8qlUbcqkvSEFmU354im8ZZv0+myZbcuON5a8mWtI3tOyqO7vFZPnnbbI0CKp4x71qPdv+jSg/xTcvrH1s2l8Neea35R+6Ly8U8qR9VfdZ4scSty1pRvd2a1ipJJUbWfsIPr0ShTxn+tvp3JvDwzT446Vj8+v3R99Vkt3l82c+LcKbrafPiNCk0qrnRdylhyT5sr1k08+uD28aXtbl/Qj2vlv+rMNI408X9m1KVPVLvUb62hKClR1WhKTkur5XOSU8tPOc56I5MvCNLl92Np+DdTWZqd/wBV0eFvFLSOJmkVbm2pfZ+s2+FeWblzezznEoy6c0Hh9e6fR+TdS4lw2+nvtPWJ7SmNLqoyxvHdKJHOoAAAOOtRo3FGrb3FKnXt6kXCcJxUozi1hpp9GmvI9iZid4eTG7VBxE2pPZO89d223KdGhVzQk19+lJKUH9eWST+aZ9M0Gp9thrk9VW1GLkvNWFHW0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOxZ2lzqF3a2FlQqXV5XqRo0aUFmVScnhRS8220jG94rE2ntD2ImZ2htq2Ztm22dtfRNtWkuelaUVBy/fm25Tl+MpSf4nzHV6icuSck+a1YccUrFY8mTHO2gHS1HTrHV7C80vUraneafcU5Ua1KfacGsNGePJNbRas7TDG1YmNpctpZ2mn2tCysLW2srOlFQpUaMFCFOK7KMV0S+SPL3m072neXsRERtDsGL0AhfiXwR2txBhWv6cI6FubGY3lCCxWfpWh+3/F0kunXCwS/D+MZMH4e9fT9nHqdFXJ17SorvbhTvbYM5z1zSpVNNTxG+tm6lvLsussJw6vCU1FvyTLlo+JYc/uT19PNB5tLfH70dFnfDNxG1bXIahsfWrmtqE7O396sq1RuU4UVKMZU3LzSc48ueqTa7JJV3xDoK02zUjbfpPzSfDdRNvwW8ltSsJUA8rXtU+xND1nWvdql57naVrr2MHiVXkg5cqfq8YNuHHz3im+287MMluWs29GrPWNY3lxS3NUua1PUde1ivKTo2tvCdSNCGc8lKHXlhH/9bbyz6PixYdNj2jpEef7qxe98tt+8pv2J4Ydw6rUp3m+Ln9HNN6/4tQnGpdVPTqswguvd8z6YcV3IfW+IsdemGOaf0duDhlp636QuDtbh/s7ZdCnS25oFhYVUmnX5OevPPfmqyzJ+fTOF5JFW1Ouy5p3yW3+30S+LT0p7sMxORude7s7TULWvZX9rbXtnVi4VaNaCnCpF91KL6NfJmVLzWd6ztLyYiY2lEug8HtG2hv2G8NqVPsqwrW9aheWDzKD5nFp0nn4VzRTcXlemMJEnm4rfLg9ll6z5S5MekrTJz06JiIp2AAAAApz4rdqwdvt3eVtQjGpGcrC6kl1kmnKm39OWos/NItfhrU9bYp+cf5RHFMXSLwpaW1DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALEeGvaH6Qb7+3LiObDSKfvDTjlTrTzGmn6Y+OefWC9SC8Qarkw8kd7fbzSHDcPNk5vRsQKIsAAAAAAAAB8zhCpCdOpCNSnJOMoyWVJejR7E7DwdK2ntjQry81DRdv6PpN7cJRrVLe3jTdRd8PCXn1+b6m7Lqcl4it7TMQ10xVrO9Y2ZAaGwAAdKx03TtMpujpthZafSf7NClGmvPySXq/wAzO+S1utp3Y1rEdndMGQAAAAAAAAAARzxc2/Pc3Dndel0aUa117q7ijFrLc6bVRKPzfJj8fQ7+F5/Z6itp7b/dz6vHzY5hqtPpKrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjHhu2x9hcOqGp1qfJe6pWldyyuqpL4IL6Yi5L+MofH9Rz5+WO1eiw8OxcuPf1WAIN3gAAAA+ZzhThOpUnGnTinKUpPCivVs9iNxFmu8beGG3607a83XZXVyu8LSMrjz6pyppxTXo2n0JHDwjUZI3ivT49HLfW4q9Jl5Fp4h+E1zPknuOvaPKS9rZVkpZ+ai0vxwbr8C1Uf27/nDCOIYp80qaPuDQtw0HcaFrOmaxRSTlK2rxqcmc45uVvHZ9H6P0IzLgvjna8TDqpkrbrWd3sGpmAAAADFtf3vtDa75Nwbj0jSq2OZUqteKqNYzlQXxP8vT1OnBo8uT3KzLVkzUr707I+q+IXhLSryofpNUqJd5wsq7jnmxjPJ1x3yumO2X0O6OBaqY35f1hzzxDF6s/29vnZ+68rb249K1Sqs5pU6qVVJebpvEkvnjBw59Hlxf1KzDox56X92WVnM2gAAAAAAPmcIVITp1IRqU5JxlGSypL0aPYnYahNy6TPQtxa7os4SpytLytb4a8ozaXm/JLzZ9R0+Xnx1v6wqWWnLaa+jxDcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3dNsLrVdRsNLsqftb25rQt6Mf3pykoxX5tGGS8VrNp7Q9rWZnaG37TdPtdJ06w0qyh7KytqMLejH92EYqMV+SR8tyXm1ptPeVtrWIjaHdMGQAAAANcHHDeHEHVty6vpG4Kep6LoNG4lSt7JKUKFSCfwzk+1Vvl5lJ5x1xgv3B9Lgrji2PabT5+f+ld1ubJNpi3SEDE04QDINsw3NPV7aW0YaxLWotSpuxUvaR+JLPw9llxXXp1Ro1E4+Sfa7bfFsxc2/wCDu2obJq7mrbU0KrvGlQo7mdBe9xp4xzdcNpdFJrDkl0Um0umD5vrIxxltGL3fJZ8M25I5+7KDmbQABXfxB6/xG0bRtOpbJttRo6bV9p9oXtnTc61FYSjFNZdOLzJuaSeVFKS6qU9wPBp73mc09fKJ/wC9UfxDJkrEcnZrzrVq1xWq3FxVqV685Oc5zk5SnJvLbb6tt+ZeYiIjaFfmd3Gej6hOdOcalOUoTi04yTw0/VMTG4vh4cd5cQtxUr+x3NS1HVdu06Lna6pcxfM6imk6XtH/ACveTzluPLhvqkqXx/SYMe04+lvOP8/BOcOzZLdLdY9VpitpQAAAAAABq+442SsOK28qEVFKVxCt0bf8pShPz/jPovB782mpP/e6s62u2WyKCTcoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJq8P2hfbnFDQpThUnb2Ual9U5f2eRYi2/TnlD+zzIjjmbk01vj0dmgpzZY+DZcfPlkAAAAAA611Z2l9Rlb3trbXlu+8KsFOL6Y7Pp2bMq3ms7xOzyYie7D7nhjw6vJzqV9kbWlOTTlKNlTi2+vXKS9Xn16Z7I668Rzx2vP1aZ02Of7YcFpwp4b2NShVt9k7dVSnjkc7aM2seb5s5fzfXPU9vxPUWjaby8jS447VhmtlYWOm0Fa6dZWlhbJuSp0aahFN93hJI473tad7Tu31rEdIdsxegAAAAxbVdj7N12dSrrG1dv6jXm+aVWraU5VG+nXnxnyXmdOLWZae5aY/NqvgpbvDEv+g/hT/wCDdP8A9ZV/4jp/jGp/5y1f+Fi/4sl07h5sTSZqrp2ztt2tZPKqKzpuafTtJrK7JmjJrs1/evP1bK6fHHaIZicjcAAAAAAAAa2fEZa+78WNdq8tRe3o21X4l0eKMYdPl8H55L/wG2+miPTf7q5xGP5soNJlxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAul4TtASt917oqczlKdOwpd8LC55/J/ep/TD9SpeJs3WuP80zwrH0my4xVEuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUE8VVhKhvrRtQjT5aVxpkIuXX4pwqVM/LtKHb/ndvDWTfDNfSUDxSv44n4KxFiRoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANnnAzQHt/hhtilU5XXuqTv5tY6+1fPH/6OC/D8D53xnPz6m0+nT6LLocfLihLhFusAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp34tNM5rTZesRWOSpcW0368yhKPn/Qn5ef0LV4Yydb0+UojitelZUrLchgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9fb+kV9f13R9EtoynXu7qlbxSeOspJZz5d858jVnyxSk3nyhnjpzWisebb3bW1Cztre0taUaNtShGnThHtCKWEl9Ej5ba0zO8rZEbRtDmPHoAAAAAAAAAAAAAAAAAAAAAAAAAAAABBXiN0h6pwt1SvGMZVLK4oXay1+9yNrPyqS9P9zmeA5eXUxHrvDh4jTfFPwa3C/q6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE8+HHb8Nb4mWN1WpSq2+n0Kl6+nw86xCGfpKakvnH6kLx/PyaeYjz6O7h2Pmyb+jY+UFYgAAAAAIu4r771nh3oFHcGnbep69ZKoqVy5VnT925mlGbwnmLeY+XWUfoSXDNFTPf2drbT93Lqs84680Ruj3hl4hKG/dzw23qGh0dBnWhUlbTVz7T2slhqm8xjh8qm8+fovPu4jwOcGP2lZ39WjTcQ9pblmNlkyvpEAAAAAAAAAAAAAAAAAAAAB4O6dIjuDbW4NDkv+uWVa2Twm4uUGk1nplNpr6G/TZeTJW/pMNeWnNWa+rUPOE6c5U6kZQnFtSi1hp+jR9Rid1TfIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeXwo7e920Hcm56jzO6uYWlNZ7Qpx5m/xdTH+b8+tO8S5971xx5dfqm+F49qzZbMrCVAAAAAA87V9Kstd0rUdG1Kl7ewuqM7etDOG4STTw/J9ej8jZiyzS0Xr3hjekWiay1Z7k0PXeF2+a1i51LfUbC5jXtK67VYZ5oVE13TWM/PKfZn0fT5qanDv5T3VjJS2K+3nDZdsTd9jvnauk7kspU4uvTSr0oyz7vWXSdN+fR5xnusPs0fPtbpZw5Zxz5fZY8GaL1i0MvOVuAKY8euN1aFzLZuyNUrW06M073ULWvKE41E/wCRpzi10X7TT69vJlt4LweNva5o79on7ofXa3ryUlA2n8aeKemRhG23pq1RR7e8cld9sdXUjLP4+fXuTV+Eaa3ekfb7OCutyx2s5NU43cU9X51cbx1G2g84VrGFvyrr0TppPz75z29DzHwfTV7U+vV7bW5Z81pPDjxOuNzabd7S3BqF3f7gtXO4o17iq5zuKDaynKTcpSjKT/zXFeRXOP8ADox2jLjjas/dJ8O1M2jkt3WfK4kwABSDxA8Y7m61H9DdoarXt7S2nm+urao4urVX83GcX1jHz/pL5Fw4HwqIr7XLHWeyF1+smZ5KS93w77d3fr1f9O9zbi3Jc6PTnUVjRq31WUbqq/hnUlFvEorqvnJdfumnjuoxUj2OOsb+fSOjPh+O9v5lpnZcIqqXAAAAAAAANVfFjQP0a4i7s0uFBW9v73KvRiuypVP1kUvklJL5Yx5H0nhmf2mCtvh9lX1ePlyTCOzvc4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2pcI9vz2zw52ppdalGjde6q4rRSw1Oo3Ual81z4/D0Pm3FM/tNRa0dt/stGkx8uOISMcDoAAAAAAAVo8SfD5bh21Hd+n0Iy1fS4N1uWLcq1rnMl0/cbc+vZc5YfD+u9nk9lbtb7/77I3iOn5q88d4Uk25vPdW0alaptvXtR0j2n8pClU+Co/Jyg8xbWXhtdC36jSYsv9Su6Fx5rU92dkt6f4mOKFmmri40TVniKzcWaWMPq/1bh37P69MEXfw9pp7bx+f7uuvEssd+rh3H4j+I24dMr6WpaNodKrFwqVLGjOFSUX3SlOcuX6rD+Zlp+AYMdubrPzeZOI5LRt2QITThTzwZ4M3nEK8hrGsQrWWz6M8TmvhleyXenTfp+9Ly7Lr2heLcWjBHJTref0d2j0c5J3nslnxF8JbeGn0t8bX0+1s6VpShQvrW3oqC9kvhjVjGPT4VyxaS6RSfaLIzgPE55vY5J337S6+IaSNuevkp9pGrajoOp2Os6Rd1LHUraoqtGrDGYSXyfRryaeU1lPKZacuKt6zS0bxKIpeazvHdcfa/is0+VrbW+8NvXtK8WI1LixcZQn/S9nJpx8uib838iqanw1beZxW6fFL4uKRt+OEjw8SXCucISlqep05NJuMrKeY/J4TX5HBPh/U+kfV0/wARxeqG+JviWWr6ZcaFsO2vbCncU3TuL+4io1YxfeNGKb5W10531WXhJ4kS3DvD/Jbnz9dvL93HqeJbxy40GcLeHd9xJ3NS0ejOpaaZSj7a9uYxz7GlnGFnpzyfRL6vDUWTPEtfGnx889/Jw6XTzktt5NoenadY6RYWel6bbU7PT7enGjRpQ7QglhI+c5Mk2tNrTvMrNWsRG0O6YMgAAAAAAACiPir0D3TdGgbipUFCle2joVJr9qrTl3fo+WcF8+X5MufhrPvjtjnyn7oPimPa0W9VVSyosAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyzYmgPdG8ttaD8Kp3N5ThUbx0pp5m8Po/hUunmcutzezxWv6Q24MfNeKtth8xWsAAAAAAAA+ZwhUhOnUhGpTknGUZLKkvRo9idhGl9wa4Xahze8bK0annmz7CMqPfvj2bjj5enlgkKcW1Ne15c1tHin+1i9z4cOFNd1XS0a/s1JYSp3tV8nTuuZv69cnRXj+pjvO/wCUNU8Oxejxa3hc4b1ViF3um3eMZhdU35rr1pv0a/F/LG6PEeoj0+n+2E8Mx/F82nhb4cW1zQr1r3deoUoSUpUK1zTUKq/dk4U4yx9Gn8xfxHqJjaIiPy/2RwzHE+aw1jY2emWdtp+n21GysaMFTpUqceWNOK7JIgr3m0za07zKQrWIjaHPWo0bijVt7ilTr29SLhOE4qUZxaw00+jTXkeRMxO8ExupvuXwp3Fxqd5dbY3LZW9hVqOcLe6oyToJ5fKpxzzJdMdF0+mXa9P4liKxGSvX4IjJwvrvWWDVPCzxGhOMY6htKrFuKco3NXCznL600+mFn6rGeuO2PEmn9J+kfu0fwvJ8HU/wYuJnrt3/AOW/+Ey/9i0/x+jz+GZPg+oeGDiXKcIyqbbpxbScpXUsR+bxBsT4i0/x+h/DMnwXQ4ccP9J4dbcttF0+Ma15JKd5dOKU7qr5t+kVlqMfJerbbqOv11s+Sb27eUeiZ0+njHXlhnxxN4AAAAAAAAArz4mNvw1bhzPVY0pTutNuqddSistU5P2cl9Pii3/CvLJO+Hs/LqOXytCP4lj3x7+jXaXtXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzfha2/DUd76nrtalKdPTrN+zljpCtVfKuv8Cqor3iTPy4YpHnP2/wCwkuGY97zb0X9KQngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeRuDSKGv6FrOh3MYzoXdrVt5ZeMc0Ws58sZznyNuDLNLxePKWGSnNWaz5tQlzb17O4r2lzSlRuaU5U6kJd4STw0/o0fUq2iY3hU5jadpcJ68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbEPDLoH2Vw7+1KtBU7jUbupXUn3lSj+rivksxm1/FnzKJ4hz82fljyhYOG49se/qsQQSQAAAAAAAAAAAAA461P21GrR9pUpc0XHmg8Sjld0/JnsTtO7yYa3eI2u8WNjbo1Dbmpb53XKnDM7atG8qU/ebeUvhmuVrr8OH6NSWe+b9oMGlzY4yVpHx6eau6jJlpblm0o+lxE4gScJS31vGUovmi3qdf4XhrK+L0bX4nf/AOBg/wCEfSGj/wAjJ/yn6rz8BtB4gWekXWvb71/Xr13kYu0sr24nVlQh3c58+XGT6YjlYWc9X0pvGs2CbxTDWI27zCb0OPJEc157rAEG7wAAAAAAAAAAAAAADWXx72/PQOJ+4UqUaVteuOoUWljnVRfE/wDWKp+R9D4Jn59NX4dP+/krevx8uWfihslXGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzW1vXvLihaW1KVa5qzjTpwj3nJvCS+rZ5a0RG8vYjedobe9v6RQ0DQtG0O2jGFC0taVvHDznlilnPnnGc+Z8tz5Zvebz5ytmOnLWKx5PXNTMAAAAAAAAAAAAABR/xZX1nPWto6bC2orUKdrVr1K3TnlTlNKMfonTqPr6vHnm4eGKTyXtv03QvFbRzRCvXDp2i39syN/b21zZT1O2p1YVknBxlUjFuSfTCznr6E7r4n2F+XvtKP0+3tI39W2U+ZLUAAAAAAAAAAAAAAAAKjeK/b8KukbY3PTpS9tQrzsqsku8Jx5o830cJY/ifyLR4Zz7Xtjnz6oniuPpFlIC4IUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACaOAG3luDifoTq041LWxU9QqJ56ci+Bro+1SVN9cfngieOZ+TTW27z0/wC/k7NBj5ssfBswPnqyAAAAAAAAAAAAAAAGs3j/AKp9qcVdy8s+ejb+ytYdc45aceZd3+05/wDPJ9C4Hj5dNX49Vb19t8so72h/2t2v/wCo23+1id+q/pW+UufD78fNt2Ply2AAAAAAAAAAAAAAAADA+J22P0w2JuXQYU/a3VS2dS3SXV1ofHBL0zKKX0bO3h2o9lmrfy/w0anFz0mrVGfS1WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvL4VNse66Hr+7K9PFW7rK0oNrqqdNZk18nKWPrTKd4l1G964o8uv1TfC8W1Zv6rZlYSoAAAAAAAAAAAAAABqv4v0alDidvaFWPLJ39SaWc9JfEn+TR9I4VO+np8lX1cfzbOvwq0iWucRtm6clmLv6daaw+sKb9pJdOv3YPr5GXEsvJp72+H36PNLTmyRDawfNVpAAAAAAAAAAAAAAAAADVfxc27Ha/EXdGmUqfsbV3LuKEemI06nxpLHkubC8+h9I4Xn9pgrae/7Kvq8fLkmEbkg5wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+oQnUnGnTjKc5NKMUstv0SEzsNtOw9tw2hs7bu3IxjGpa2sY1eXs6r+Ko19Zyk/xPmOt1HtctsnrK14MfJSKstOVtAAAAAAAAAAAAAAANb3iP0v7O4p6pcKHJC8t7e6iksJ/B7NtdPWm/Xrkv3AMnNpoj03hXeI12yz8Wa+FPbyvNy7h3JVpwlTsrWNvScs5VSq31j0x0jTkn16c66PPTk8S59sdccec/Zu4Xj3tNvRewpicAAAAAAAAAAAAAAAAACmPiu2vUdXbm86KlOmoPTrjo/gw5Tpv0WeaonnHl38rb4Z1MbWxT8/3Q/FcXa/5KalrQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATFwK2pLdXEbRI1Ic1hYy+0LhuLaaptOMe2Os+RYeOmfo4rjOp9lp527z0dehxc+SPg2bHzxZQAAAAAAAAAAAAAAABULxT7PuL6ltjdWnWda6uIzem11Tg5SkpPmpdF1+86i+s4rz62nw3qoibYrT8f3RPFMMztaPkmzg5supsXYWk6Tdw9nqtbN5exxhxrTS+F9+sYqEG/NxyRHFdX7bPNo7R0h2aPDyY4ie6USNdQAAAAAAAAAAAAAAAAAR3xY2zHdvD7c2kxpU6t2reVxbc0U2q1P44qLbXK3y8uc9FJ5ysp9/DNR7LPW3l+7n1WPnxzDVWfSVXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYH4ZNnfYezbnct1RqU7/VailDnWOW3g2oYT6rmbnLPmuT6lH8Q6vny+zjtX7p7huHlpzT5rKlfSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAareLO157Q3/ALj0pUpUrOVeVza5/wC5qPmik223jLjlvL5T6TwzU+1wVt59p+cKvq8XJkmEcne5wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADL9ibRvt87q0nbdkqkVXqJ16sY593orrOo/Los4T7vC7tHLrdVGHFOSfL7tuDDN7RWG16wsbTTLGy02woxtrG3pQoUaabap04pRjFZ69Ekj5ne82tNrd5WqtYiNodsxegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTvxX7Y9pbba3hQp5lTlLTriXnyvM6f4Jqr/pItXhnUdbYp+f7/wCERxXF0i6lZbkMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZvsXiDuPh3qdXVNvVLLnqxUK9OvRU4VoLryt9JJZ6/C1nCOPW6HHnry5G7BqLY53qs3t/wAWNvL2VLdO1K1PovaVtPrKWXy+VKeMdf6fRPzx1r2fwzPfFb6/v/pJ4+Kx/dCZtF48cLdbdOnDc1HTK8mlyXtOVHGVnrOS5PVZ5v8AdmJzcF1NP7d/l1dlNdit5pT0/UtO1a1he6Vf2WpWUvu1rerGpCX0lFtMjb47Vna0bS6a2iY3h3TBkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6V9qWnaZTVbUr+y0+k/2q9WNNeXm2vVfmZ0x2t0rG7G1ojur3xf4j8LNc2XuHbE92adeahXouVsraM68fbQkpQ+OCcYrmik3n7rfcnOF6DU0zVycu0R38ujg1eoxWpNd2vgvKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2LW8u7GtG4srq4s667TpTcJLrnuuvdIxtSLRtMbvYmY7JC0njFxO0WEKdjvPWJU4rljG4lG4SXXpiqpev9nojhy8K09/epH2+zoprMte0p/wBh8aeNO5pqnZbS0jcVrBZnX9hOjnGE/jUuVv5KLw5ehCa3hGkx97TEu/BrM1u0breaTW1avaU6msWFpp93j4oUa7qrOX58qx5Pz7/Iq2WKxP4J3hLUmdur0zWyAAAAAAAAAAAAAAAAAAAAAAAAAB4+t69pm3rKeoatWrW9pFNylChUq4x1fSEW/n+D9Dbhw2yTy17sL5IrG8oZ1DxK8LrJtW17rGrpJvNvZyjnp2/Wcn0/AlqeH9TPeIj8/wBnHbiWKO3VgGo+LTTIQa0nZt/cza73N3Gmovr5RjLPl5rz7Hdj8MW/uv8Ao0W4rHlCONX8Ue/71uOl2Wg6LS64caUqs+/m5PHbp931+WO/F4cwR70zLmvxPJPbojXVuMXE7WoTp3289YjTkuWUbeUbdNdOmKSj6f2+rJDFwrT092kff7ue+sy27yj26vLu+rSuL26uLyu+86s3OT657vr3bO6tIrG0Rs55mZ7uuZPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJf2lwU3lu5zr0LeOk6Ulzu6vYunHkwmn5rs02s5Sz8sxWq4vixdJ6z6Q68Wivf4Qtjsnw4bM27Sp3G4Kf6Uar15/bL9QljGI0/68tt5/rrWs4/myTtj/AAx+qVw8OpX3usrAWtpa2VOVK0oU7em5ObjFYTb7/wB/oiDtebTvLviIjs7Bi9AAAAAAAAAAAAAAAAAAAAAAAAAAAARNvDgpsLeUa9W70z7O1KeX71atQqc2Ek5dGpJJJJPpj8MSml4vnxdInePSXJm0WO/eOqqm7PDTuvSYq523X/SO1lhwh7P2dVdG+sX2fRd8Y5sZ6Fk0viDHbpk6Si8vDbR1r1V4v9Ov9KuZ2WpWdzY3Ue9OrBxePXr5fMnaZK2jes7wj7VmJ2l0jN4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkpUatepGlQpVK1V9owi23+CPJmI6yRCe9k+HjeO56dDUdYX6M6LKPtHKtTlK4lH0jR75a6rOPx7ELrOO4sc8tPxT+n1d+Hh97dZ6Qt7s3gtsnZfs61jp1HUdSi4tXV5BVKi+HlljyWU5LphLK6PDzVtXxfNm6TO0ekJbDo6U7R1S4RbrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxncWzdsbtpxo7j0i31anHHKqjl8LWcNYaw/ifX0bR0YNXkxf052asmGt/ejdVTe3hdlzXF3sTUuaa+P3G7ylhvooVuzfR9Jfmsosuj8R+WaPzj9kXm4Z545VZ3DtTXtrXUrTXNPqWVVScU200/xX0ff0foyyYNTTJG9J3RmTFas7WY8b2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByUqNWvUjSoUqlaq+0YRbb/AAR5MxHWSIWB2P4dN47mSvNajHbemODlB1v5WpLPRKPksdebt2x36Qes49ix9KdZSGDh97dbdIXK2fwo2ZsaM6mg6ZTepOLiru6XtaiWeZLPTomk+mH0XXoiqariebN789PSEvh0tKe7HVJJHukAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPK1fQ9I1+1dlrOn22o2r706scpr0fqu3T5L0NuLNek70naWF6RaNrKz738MOjai7y/2fey0i7k4unaVOtCMUuqT+9l+WXj19SwaPxFeu1csbx6+aOzcMrPWnRUbdewN17LrOlr+kXNrBdHVUXKnnPbnxh/VdH+DLRptdizRvSUTl096e9DDTraQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmHh1wW3Vv+pQu40vsnb8st3lVdJ48oLu23hZ7dc9cYIrX8XxYOne3o69Po7ZOvaF4th8Hto7CSq2Nt7/qKkpK6rrM00mk++E+r7YXy8yn63iuXP0npCbwaSmPslUjHUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdLUNOsdVtallqFtTu7WX3oS7P8Av1X0bM8eS1Z3r3Y2rExtKrO/vDXpGo+8XWyqlPR9QXWnZ1Jfq6y+HLUm20lnHZfj3lZNF4gtXaM3WPVGZ+HRPWnSVPNybU3BtG9+z9w6Zc6dXeeTnXw1F06xfZ9GnjusrOC1afU0yxzUndEZMVqTtaGOm9rAAAAAAAAAAAAAAAAAAAAAAAAAAA5KNKpXq0qFKPPVnJQis4y28I8mdo3kiF0uEPh+tKNC13Bvm1lXv3OMqdjlx90a6/rk8dWsfD1+8n07lS4pxyZmaYZ6evr8kzpNBHvXW8t7ehaUKdtbU40aEFiMV5f39Sr2tMzvKWiNukOYxegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw7d2ydI3potfRNYpxrUGsUZvmcqP3euXLrL4X8Xz+uevS6y2G/PRpy4YvXllrX4hcPdX4f6u7K9XvOnVPjtLuHWFeHk0+2cF/0OurnrvHfzhXNRp5xztPZgB3NAAAAAAAAAAAAAAAAAAAAAAAAAALl+HrhJbVKVrvjctCnOrPmlp9rUjnmglHFb6fE12fl27Op8d4nO84cf5/smOH6SPfsuaVNMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGDcQdiaXxA0Cvo2oxjGslKVtVaz7CpjpJf3+XVNp9uh1tsF+erRqMEZK7S1b6/ol/tzWdS0LU6MqF9a1ZUqkXjuuz6NrqsPo33Po2DNXJSL17SrOSk1tNZeQbWAAAAAAAAAAAAAAAAAAAAAAAAzLh9oH6T7x0HRHR9vSr11Gon0UY/vN+i6fXth5wcmuz+zxWv6N2nx814q2s2On2mnWtpaWtCnSpUKfsqeIpOMemey88Js+a3yTaZmfNaK1iI2h3TBkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKUeKTZ1vb3Ok7wsrWNKdZe73UoySUmnlScfV8yWV6dS3eHNXMxOKZ+SG4nhjeLwp8WpEAAAAAAAAAAAAAAAAAAAAAAACZeAn+UzQvq/7URPG/8A55dmg/qw2Znz1ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgjxIf5KtW/wDM23+0RNcA/wDpj5S4eI/0pa3i/K6AAAAAAAAAAH//2Q=="
        r[++j] = '<div class="col-xs-6 col-sm-2 placeholder"> <img src="' + data[key]["profile_pic"] + '" width="160" height="160" class="img-responsive" alt="Generic placeholder thumbnail">';
        r[++j] = '<h4>' + data[key]["data_screen_name"] + '</h4>';
        r[++j] = '<h3>#' + parseInt(key + 1) + '</h3>';
        r[++j] = '<h5>H-Score: ' + parseInt(Math.round(parseInt(data[key]["neg"]) * 10000 / parseInt(data[key]["all_total"])) / 100) + '</h5>';
        r[++j] = '<p class="text-muted">Total negative Tweet: ' + data[key]["neg"] + '</p>';
        r[++j] = '<p class="text-muted">Total positive Tweet: ' + data[key]["pos"] + '</p>';
        r[++j] = '<button class="btn btn-danger" id="show_tweet' + key + '" onclick="toggle_visibility(' + key + ')">View Latest Tweet</button>';
        r[++j] = '<p class="text-muted" id="tweet_text' + key + '" style="display :none" >' + data[key]["last_tweet"] + '</p></div>';
      }
      $('#main-body').append(r.join(''));
    }
  });
})