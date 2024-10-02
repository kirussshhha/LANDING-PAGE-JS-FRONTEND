ymaps.ready(init);

function init(){
    let map = new ymaps.Map('yamap', {
        center: [52.09118657200926,23.699272999999952],
        zoom: 15
    });

    let placemark = new ymaps.Placemark([52.09118657200926,23.699272999999952], {
        balloonContentHeader: 'Наш адрес',
        balloonContentBody: 'ул. Буденного 64, Брест'
    }, {
        preset: 'islands#redIcon',
    });

    map.geoObjects.add(placemark);
}
