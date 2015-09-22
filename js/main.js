var events = [
    Event('2015-09-21', 'ApéroJS / AG LyonJS'),

    Event('2015-04-28', [
        Talk('WebGL', 'Benjamin Guignabert', Link('https://twitter.com/euphoben', '@euphoben')),
        Talk('Treeline.io - Ta grand mère fait des APIs', 'Calig0ne', Link('https://twitter.com/Calig0ne', '@Calig0ne'))
    ]),

    Event('2015-03-24', [
        Talk('Live coding React / Flux Isomorphique', 'Nicolas Cuillery', Link('https://twitter.com/ncuillery', '@ncuillery'))
    ]),

    Event('2015-02-23', [
        Talk('LumX', 'thagou', Link("https://twitter.com/thagou", "thagou"))
    ])
];

var DateToString = (function() {
    var Days = [ "Dimanche" , "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ];
    var Months = [ "janvier" , "février", "mars", "avril", "mai", "juin","juillet", "aout","septembre", "octobre", "novembre", "décembre" ];
    return function(d) {
        if (!(d instanceof Date))
            d = new Date(d);
        return Days[d.getDay()] + ' ' +
               d.getDate() + ' ' +
               Months[d.getMonth()] + ' ' +
               (1900 + d.getYear());
    }
})();

function Event(date, topic)
{
    if (!(this instanceof Event))
        return new Event(date, topic);

    this.date = +Date.parse(date);

    if (typeof topic === 'string') {
        this.title = topic;
        this.talks = null;
    } else {
        this.title = null;
        this.talks = topic;
    }
}

Event.prototype.render = function() {
    var content;

    if (this.title) {
        content = this.title;
    } else {
        content = this.talks.map(function (t) { return t.render(); }).join('<br>');
    }

    return '<li><h3>$date</h3>$content</li>'
        .replace('$date', DateToString(this.date))
        .replace('$content', content);
}

function Talk(title, by, links) {
    if (!(this instanceof Talk))
        return new Talk(title, by, links);

    this.title = title;
    this.by = by;

    if (!(links instanceof Array))
        links = [links];
    this.links = links;
}

Talk.prototype.render = function() {
    var links = '';
    if (this.links) {
        links = '(' + this.links.map(function(l) { return l.render(); }).join(', ') + ')';
    }
    return '$title par $by $links'
        .replace('$title', this.title)
        .replace('$by', this.by)
        .replace('$links', links);
}

function Link(url, title) {
    if (!(this instanceof Link))
        return new Link(url, title);

    this.url = url;
    this.title = title || url;
}

Link.prototype.render = function() {
    return '<a href="$url">$title</a>'
        .replace("$url", this.url)
        .replace("$title", this.title);
}

;(function(){
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

    // Auto-update list of events
    var previous = '<h2>Les sessions précédentes</h2>';
    previous += events.map(function(e) { return e.render(); }).join('\n');
    $('#previous').html(previous);
})();
