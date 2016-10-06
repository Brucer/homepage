function make(what, parent, opts) {
  var div = document.createElement(what);
  for(var i in opts) {
    var o = opts[i];
    if (typeof o == 'object') {
      for(var j in o) {
         if (typeof o[j] === "number") {
          div[i][j] = o[j]+'px';
        } else {
          div[i][j] = o[j];
        }
      }
    } else {
      div[i] = o;
    }
  }
  if (parent) {
    parent.appendChild(div);
  }
  return div;
}

function find(x) {
  return document.getElementById(x);
}

function OpenInNewTab(url )
{
}

function makeLink(parent, idx, name, url, img) {
  var size = 90;
  var cols = 5;
  var x = (idx % cols) | 0;
  var y = (idx / cols) | 0;
  var box = make('div', parent, {
  	style: {
  	  position: 'absolute',
  	  left: (size+4) * x,
  	  top: (size+4) * y,
  	  width: size,
  	  height: size,
  	  background: '#08a',
  	  color: '#fff',
  	  borderRadius: 5,
  	  textShadow: '1px 1px 1px #000',
  	  boxShadow: '3px 3px 3px #333',
  	  textAlign: 'center',
  	},
  	onclick: function(e) {
  	  if (e.which != 2) {
  	  	window.location = url;
  	  } else {
  	    window.open(url, '_blank').focus();
  	  }
  	}
  });
  var icon;
  if (img) {
  	icon = make('img', box, {
  		src: 'images/'+img,
  		width: 90,
  		height: 90,
  	});
  	box.style.background = '#fff';
  } else {
	icon = make('div', box, {
  	  style: {
  	    position: 'relative',
  	    verticalAlign: 'middle',
  	  },
  	  innerHTML: name
  	});
	icon.style.top = ''+((size - icon.clientHeight)/2)+'px';
  }
}

function main() {
  var root = find('root');
  var header = make('div', root, {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: 36,
      background: '#484',
      color: '#fff',
      fontSize: 25,
      fontFamily: 'Arial',
      outline: '#666 solid thin',
      zIndex: '99',
    },
    innerHTML: 'Couchputer'
  });
  var contents = make('div', root, {
    style: {
      position: 'absolute',
      top: 40
  	}
  });
  
  var links = [
    [ 'Zone Control', 'zonecontrol.png', 'http://192.168.1.13/keypad.html' ],
    [ 'Google', 'google.png', 'http://google.com' ],
  	[ 'Pandora', 'pandora.jpeg', 'http://pandora.com' ],
    [ 'LG 10 Day weather', 'weather.png', 'https://weather.com/weather/tenday/l/95030' ],
    [ 'LG wund', 'weatherunderground.png', 'https://www.wunderground.com/cgi-bin/findweather/getForecast?query=95030&wuSelect=WEATHER' ],
  	[ 'Amazon Videos', 'amazonvideo.png', 'http://www.amazon.com/Video-On-Demand/b/ref%3Dtopnav_storetab_atv%3Fie%3DUTF8%26node%3D16261631&usd=2&usg=AFQjCNEwSYD-gozRIhJUlLSv-TcQ9VrwkQ' ],
    [ 'NetFlix', 'netflix.png', 'http://netflix.com' ],
    [ 'HBONow', 'hbonow.png', 'https://www.hbonow.com/' ],
    [ 'YouTube', 'youtube.png', 'https://www.youtube.com/' ],
  	[ 'Hulu', 'hulu.png', 'http://hulu.com' ],
    [ 'Google news', 'googlenews.png', 'http://news.google.com' ],
    [ 'Reddit news', 'redditnews.png', 'https://www.reddit.com/r/news/' ],
  	[ 'gmail', 'gmail.png', 'http://mail.google.com' ],
  	[ 'reddit', 'reddit.png', 'http://reddit.com' ],
  	[ 'Hacker news', 'hackernews.png', 'http://news.ycombinator.com' ],
  	[ 'TechCrunch', 'techcrunch.png', 'http://techcrunch.com' ],
  	[ 'Facebook', 'facebook.jpeg', 'http://facebook.com' ],
  	[ 'the big picture', 'thebigpicture.png', 'http://www.ritholtz.com/blog' ],
    [ 'Marginal Revolution', 'marginalrevolution.gif', 'http://www.marginalrevolution.com' ],
    [ 'Quip shopping list', 'quip.png', 'https://quip.com/5pSBAAvFyGn9' ],
  ];
  for(var i=0;i<links.length;i++) {
  	var link = links[i];
  	makeLink(contents, i, link[0], link[2], link[1]);
  }
}


window.onload = function() {
  main();
}
