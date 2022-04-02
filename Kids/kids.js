
var shopByCatFoot = [
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-1-Desktop-Kids-07March2022.jpg",
        name: "Boys T-Shirts & Polos"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-2-Desktop-Kids-07March2022.jpg",
        name: "Girls Tops"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-3-Desktop-Kids-07March2022.jpg",
        name: "Jeans"
    }, {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-4-Desktop-Kids-07March2022.jpg",
        name: "Dresses"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-5-Desktop-Kids-07March2022.jpg",
        name: "Shorts & Skirts"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-6-Desktop-Kids-07March2022.jpg",
        name: "Shirts"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-7-Desktop-Kids-07March2022.jpg",
        name: "Character Shop"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-8-Desktop-Kids-07March2022.jpg",
        name: "Ethnicwear"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-9-Desktop-Kids-07March2022.jpg",
        name: "Combo Packs"
    }, {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-10-Desktop-Kids-07March2022.jpg",
        name: "Track Pants"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-11-Desktop-Kids-07March2022.jpg",
        name: "Infantwear"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-12-Desktop-Kids-07March2022.jpg",
        name: "Innerwear"
    }
]

shopByCatFoot.map(function (ele) {
    var box = document.createElement("div");

    var image = document.createElement("img");
    image.src = ele.img;
    image.setAttribute = ("class", "catimg")

    var name1 = document.createElement("h5");
    name1.innerText = ele.name;
    console.log(ele.name)


    box.append(image, name1)

    document.querySelector("#Footcategory").append(box)
})