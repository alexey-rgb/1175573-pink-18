ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
      center: [59.93642, 30.3211],
      zoom: 16,
      controls: [],
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      [59.93625, 30.320874],
      {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/icon-map-marker.svg",
        iconImageSize: [36, 35],
        iconImageOffset: [-7, -22],
      }
    );
  myMap.geoObjects.add(myPlacemark);
});
var menu = document.querySelector(".page-header--flag");
var button = document.querySelector(".main-nav__toggle");
menu.classList.remove("page-header--no-js");
button.classList.remove("main-nav__toggle--close");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menu.classList.contains("page-header--close")) {
    menu.classList.remove("page-header--close");
    menu.classList.add("page-header");
    button.classList.add("main-nav__toggle--close");
    button.classList.remove("main-nav__toggle--open");
  } else {
    menu.classList.add("page-header--close");
    menu.classList.remove("page-header");
    button.classList.remove("main-nav__toggle--close");
    button.classList.add("main-nav__toggle--open");
  }
});

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define([], function () {
        return (a.svg4everybody = b());
      })
    : "object" == typeof exports
    ? (module.exports = b())
    : (a.svg4everybody = b());
})(this, function () {
  function a(a, b) {
    if (b) {
      var c = !a.getAttribute("viewBox") && b.getAttribute("viewBox"),
        d = document.createDocumentFragment(),
        e = b.cloneNode(!0);
      for (c && a.setAttribute("viewBox", c); e.childNodes.length; )
        d.appendChild(e.firstChild);
      a.appendChild(d);
    }
  }
  function b(b) {
    (b.onreadystatechange = function () {
      if (4 === b.readyState) {
        var c = document.createElement("x");
        (c.innerHTML = b.responseText),
          b.s.splice(0).map(function (b) {
            a(b[0], c.querySelector("#" + b[1].replace(/(\W)/g, "\\$1")));
          });
      }
    }),
      b.onreadystatechange();
  }
  function c(c) {
    function d() {
      for (var c; (c = e[0]); ) {
        var j = c.parentNode;
        if (j && /svg/i.test(j.nodeName)) {
          var k = c.getAttribute("xlink:href");
          if (f && (!g || g(k, j, c))) {
            var l = k.split("#"),
              m = l[0],
              n = l[1];
            if ((j.removeChild(c), m.length)) {
              var o = (i[m] = i[m] || new XMLHttpRequest());
              o.s || ((o.s = []), o.open("GET", m), o.send()),
                o.s.push([j, n]),
                b(o);
            } else a(j, document.getElementById(n));
          }
        }
      }
      h(d, 17);
    }
    c = c || {};
    var e = document.getElementsByTagName("use"),
      f =
        "shim" in c
          ? c.shim
          : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(
              navigator.userAgent
            ) ||
            (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537,
      g = c.validate,
      h = window.requestAnimationFrame || setTimeout,
      i = {};
    f && d();
  }
  return c;
});

svg4everybody();
