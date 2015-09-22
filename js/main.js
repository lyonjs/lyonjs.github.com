(function(){
  new Konami(cornify_add);
})();

;(function() {
    var Days = [ "Dimanche" , "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ];
    var Months = [ "janvier" , "février", "mars", "avril", "mai", "juin","juillet", "aout","septembre", "octobre", "novembre", "décembre" ];
    // Auto-update website according to Meetup data.
    var url = "https://api.meetup.com/2/events?group_urlname=LyonJS&page=1&sig_id=145819132&sig=5611252fcbd2a6255354102b4d26041a9e5a6f41&_=1426671317683&callback=?";
    $.ajax({
        dataType:"json",
        url: url,
        success: function(data, status, req) {
            if (data && data.results && data.results.length) {
                var event = data.results[0];
                var d = new Date(event.time);
                var dateString = Days[d.getDay()] + ' ' + d.getDate() + ' ' + Months[d.getMonth()] + ' ' + (1900 + d.getYear()) + ' à ' + d.getHours() + ':' + d.getMinutes();
                $("#event .date").html(dateString);
                $("#next .title").html(event.name);
                $("#next .link").attr('href' , event.event_url);
                $("#next .description").html(event.description);
                $("#where .name").html( "Le lieu : " + event.venue.name);

                $(".notloaded").removeClass('notloaded');
                var mapurl = "http://maps.google.fr/maps?f=q&source=s_q&hl=fr&ie=UTF8&z=14&output=embed";
                mapurl += "&q="+ event.venue.address_1 +','+event.venue.city;
                $("#where .map").attr("src", mapurl);
            }
        }
    });
})();
