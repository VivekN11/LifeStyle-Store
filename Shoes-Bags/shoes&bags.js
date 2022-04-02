
var shopByCatFoot = [
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-1-Desktop-Shoes-09Feb2022.jpg",
        name: "Ballerinas"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-2-Desktop-Shoes-09Feb2022.jpg",
        name: "Flats"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-3-Desktop-Shoes-09Feb2022.jpg",
        name: "Women Sneakers"
    }, {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-4-Desktop-Shoes-09Feb2022.jpg",
        name: "Heels"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-5-Desktop-Shoes-10Feb2022.jpg",
        name: "Flip Flops"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-6-Desktop-Shoes-09Feb2022.jpg",
        name: "Sport Shoes"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-7-Desktop-Shoes-09Feb2022.jpg",
        name: "Mens Slip Ons"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-8-Desktop-Shoes-09Feb2022.jpg",
        name: "Mens Flip Flop"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-9-Desktop-Shoes-09Feb2022.jpg",
        name: "Floaters & Sandals"
    }, {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-10-Desktop-Shoes-09Feb2022.jpg",
        name: "Semi Formal Shoes"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-11-Desktop-Shoes-09Feb2022.jpg",
        name: "Boys Shoes"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-A-12-Desktop-Shoes-09Feb2022.jpg",
        name: "Girls Shoes"
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

var shopByCatBag = [
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-LS-Shoes-09Feb2022.jpg",
        name: "Handbags"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Desktop-LS-Shoes-09Feb2022.jpg",
        name: "Sling Bags"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Desktop-LS-Shoes-09Feb2022.jpg",
        name: "Cluthes"
    }, {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Desktop-LS-Shoes-09Feb2022.jpg",
        name: "Bagpacks"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Desktop-LS-Shoes-09Feb2022.jpg",
        name: "Pouch & Vanity Case"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Desktop-LS-Shoes-09Feb2022.jpg",
        name: "Totes"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-7-Desktop-Shoes-09Feb2022.jpg",
        name: "Ladies belt"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-8-Desktop-Shoes-09Feb2022.jpg",
        name: "Men's belt"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-9-Desktop-Shoes-09Feb2022.jpg",
        name: "Ladies wallet"
    }, {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-10-Desktop-Shoes-09Feb2022.jpg",
        name: "Men's wallet"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-11-Desktop-Shoes-09Feb2022.jpg",
        name: "Socks"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-12-Desktop-Shoes-09Feb2022.jpg",
        name: "Mask"
    }
]

shopByCatBag.map(function (ele) {
    var box = document.createElement("div");

    var image = document.createElement("img");
    image.src = ele.img;
    image.setAttribute = ("class", "catimg")

    var name1 = document.createElement("h5");
    name1.innerText = ele.name;
    console.log(ele.name)


    box.append(image, name1)

    document.querySelector("#Bagcategory").append(box)
})