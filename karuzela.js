function init() {
    var data = [
        { image: "https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?auto=compress&cs=tinysrgb&h=350", title: "Audi", description: "Samochod marki Audi" },
        { image: "https://images.pexels.com/photos/790176/pexels-photo-790176.jpeg?auto=compress&cs=tinysrgb&h=350", title: "Opel", description: "Samochod marki Opel" },
        { image: "https://images.pexels.com/photos/205740/pexels-photo-205740.jpeg?auto=compress&cs=tinysrgb&h=350", title: "Mercedes", description: "Samochod marki Mercedes" },
        { image: "https://images.pexels.com/photos/131811/pexels-photo-131811.jpeg?auto=compress&cs=tinysrgb&h=350", title: "Volkswagen", description: "Samochod marki Volkswagen" },
        { image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&h=350", title: "Toyota", description: "Samochod marki Toyota" }
    ];

    for (var i in data) {
        var slajdTemplate = document.getElementById("slajd").innerHTML;
        Mustache.parse(slajdTemplate);
        var el = data[i];
        var slajdData = { title: el.title, image: el.image, description: el.description };
        var gen = Mustache.render(slajdTemplate, slajdData);
        var container = document.getElementById('container');
        container.insertAdjacentHTML('beforeend', gen);
    }

    $('.kar').flickity({
        wrapAround: true,
        contain: true,
        imagesLoaded: true
    });
}