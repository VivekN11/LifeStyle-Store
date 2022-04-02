
var shopByCatFoot = [
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Women-05Mar2022.jpg",
        name: "Tops & Tees"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-1-Desktop-Women-05Mar2022.jpg",
        name: "Kurtas"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-12-Desktop-Women-05Mar2022.jpg",
        name: "Dresses"
    }, {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-2-Desktop-Women-05Mar2022.jpg",
        name: "Ethnic Sets"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-3-Desktop-Women-05Mar2022.jpg",
        name: "BottomWear"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-4-Desktop-Women-05Mar2022.jpg",
        name: "Joggers"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-5-Desktop-Women-05Mar2022.jpg",
        name: "Sleepwear"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-6-Desktop-Women-05Mar2022.jpg",
        name: "Lingerie"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-7-Desktop-Women-05Mar2022.jpg",
        name: "Plus Size"
    }, {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-8-Desktop-Women-05Mar2022.jpg",
        name: "Watches"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-10-Desktop-Women-05Mar2022.jpg",
        name: "Footwear"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-11-Desktop-Women-05Mar2022.jpg",
        name: "Beauty"
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