ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.936620, 30.321100],
      zoom: 16,
      controls:[]
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark([59.936250, 30.320874], {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-marker.svg',
      iconImageSize: [36, 35],
      iconImageOffset: [-7, -20]
    });
  myMap.geoObjects
    .add(myPlacemark);
});
