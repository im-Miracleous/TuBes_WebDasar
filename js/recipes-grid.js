$(document).ready(function () {
    // Data resep makanan
    var recipes = [
        {
            img: "./assets/img/batagor.png",
            name: "Batagor",
            slug: "batagor",
        },

        {
            img: "./assets/img/lotek.png",
            name: "Lotek",
            slug: "lotek",
        },

        {
            img: "./assets/img/surabi.png",
            name: "Surabi",
            slug: "surabi",
        },

        {
            img: "./assets/img/cireng-isi.png",
            name: "Cireng Isi",
            slug: "cireng-isi",
        },

        {
            img: "./assets/img/kue-pancong.png",
            name: "Kue Pancong",
            slug: "kue-pancong",
        },

        {
            img: "./assets/img/es-doger.png",
            name: "Es Doger",
            slug: "es-doger",
        },

        {
            img: "./assets/img/lontong-sayur.png",
            name: "Lontong Sayur",
            slug: "lontong-sayur",
        },

        {
            img: "./assets/img/peuyeum.png",
            name: "Peuyeum",
            slug: "peuyeum",
        },

        {
            img: "./assets/img/mie-kocok.png",
            name: "Mie Kocok",
            slug: "mie-kocok",
        },

        {
            img: "./assets/img/cireng.png",
            name: "Cireng",
            slug: "cireng",
        },

        {
            img: "./assets/img/cilok-kacang.png",
            name: "Cilok Kacang",
            slug: "cilok-kacang",
        },

        {
            img: "./assets/img/tahu-gejrot.png",
            name: "Tahu Gejrot",
            slug: "tahu-gejrot",
        },
    ];

    // Kosongkan grid-container jika ada isi sebelumnya
    $(".grid-container").empty();
    // JS Looping untuk setiap resep ke dalam 'grid-container'
    $.each(recipes, function (i, recipe) {
        var card = `
        <div class="kotak pop-up">
            <img src="${recipe.img}" alt="${recipe.name}">
            <p>${recipe.name}</p>
            <button onclick="location.href='./recipe-pages/${recipe.slug}.html'">Lihat Selengkapnya</button>
        </div>`;
        $(".grid-container").append(card);
    });
});
