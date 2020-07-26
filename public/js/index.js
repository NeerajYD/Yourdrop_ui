// DATA STORE

const areaEnum = [
    {
        id: 1,
        name: 'Madangir'
    },
    {
        id: 2,
        name: 'Kalkaji'
    },
    {
        id: 3,
        name: 'Malviya Nagar'
    },
    {
        id: 4,
        name: 'Hauz Khas'
    },
    {
        id: 5,
        name: 'Lajpat Nagar IV'
    },
    {
        id: 6,
        name: 'Khanpur'
    },
    {
        id: 7,
        name: 'Sheikh Sarai'
    },
    {
        id: 8,
        name: 'Aya Nagar'
    },
    {
        id: 9,
        name: 'Panchsheel'
    },
    {
        id: 10,
        name: 'Vasant Kunj'
    },
    {
        id: 11,
        name: 'Saket'
    },
];

const filter = [{
    name: 'All',
    id: 1
}, {
    name: 'Featured',
    id: 2
}, {
    name: 'Best Rate',
    id: 3
}, {
    name: 'Most View',
    id: 4
}, {
    name: 'Popular',
    id: 5
}];

const store = [
    {
        name: 'Apna Bazaar',
        geometry: { lat: 28.523106, lng: 77.234930 },
        filter: [1, 2, 3, 5],
        area: 1,
        address: 'Madangir Market, New Delhi',
        storeImg: 'images/apna-bazaar-img.jpg',
        storeItems: '#apna-bazaar-item',
        storeOpen: true
    },
    {
        name: 'Sweet Corner',
        geometry: { lat: 28.523106, lng: 77.234930 },
        filter: [1, 2, 3, 5],
        area: 1,
        address: 'Hanuman Mandir, Pushp Vihar, Sec-4, Shop No.8, New Delhi',
        storeImg: 'images/sweet-corner-img.jpg',
        storeItems: '#sweet-corner-item',
        storeOpen: true
    },
    {
        name: 'Best Fresh',
        geometry: { lat: 28.523106, lng: 77.234930 },
        filter: [1, 2, 3, 5],
        area: 11,
        address: 'Main Ignou Road, Neb Sarai, Saket, New Delhi',
        storeImg: 'images/best-fresh-img.jpg',
        storeItems: '#best-fresh-item',
        storeOpen: true
    },
    {
        name: 'The Cake Delight',
        geometry: { lat: 28.513097, lng: 77.229516 },
        filter: [1, 3, 5],
        area: 8,
        address: 'Shop No.32, Behind SKV School, Aya Nagar, New Delhi',
        storeImg: 'images/cakedelight.jpg',
        storeItems: '#cakedelight-item',
        storeOpen: true
    },
    {
        name: 'Fresh Green Vegetables & Fruits Shop',
        geometry: { lat: 24.737245, lng: 76.397596 },
        filter: [1, 2, 3],
        area: 9,
        address: 'Shop No.1, S-Block, DDA Mkt, Panchsheel Park, New Delhi',
        storeImg: 'images/freshgreen-img.jpg',
        storeItems: '#freshgreen-item',
        storeOpen: true
    },
    {
        name: 'Saurav Store',
        geometry: { lat: 28.523106, lng: 77.234930 },
        filter: [1, 2, 3, 5],
        area: 6,
        address: 'Shop No.9, DHC School Road, Khanpur, New Delhi',
        storeImg: 'images/saurav-store-img.jpg',
        storeItems: '#sauravstore-item',
        storeOpen: true
    },
    {
        name: 'Delhi State Fruit and Vegetable',
        geometry: { lat: 28.523106, lng: 77.234930 },
        filter: [1, 2, 3, 5],
        area: 7,
        address: 'Unit-19B, Sheikh Sarai, Ph-II, New Delhi',
        storeImg: 'images/delhi-state.jpg',
        storeItems: '#delhistate-item',
        storeOpen: true
    },
    {
        name: 'Dinesh Ice Cream',
        geometry: { lat: 28.523106, lng: 77.234930 },
        filter: [1, 2, 3, 5],
        area: 7,
        address: 'Sheikh Sarai, Ph-II, Gate No.2, Pocket K, New Delhi',
        storeImg: 'images/dinesh-icecream.png',
        storeItems: '#dinesh-icecream-item',
        storeOpen: true
    },
    {
        name: 'Shere Punjab',
        geometry: { lat: 28.521520, lng: 77.222370 },
        filter: [1, 2, 4, 5],
        area: 7,
        address: 'L-Pocket Super Bazar, Sheikh Sarai, Ph-II, New Delhi',
        storeImg: 'images/sherepunjab-img.jpg',
        storeItems: '#sherepunjab-item',
        storeOpen: true
    },
    {
        name: 'Rama Panshop',
        geometry: { lat: 28.540077, lng: 77.212758 },
        filter: [1, 2, 5],
        area: 3,
        address: 'Shop No.8-9, Malviya Nagar Gol Chakkar New Delhi',
        storeImg: 'images/Ramapaan.jpg',
        storeItems: '#ramapaan-item',
        storeOpen: true
    },
    {
        name: 'ChocoSmith Gourmet Bakery',
        geometry: { lat: 28.504571, lng: 77.243594 },
        filter: [1, 3, 5],
        area: 7,
        address: '13-15 LSC, Sheikh Sarai, Ph-II, New Delhi',
        storeImg: 'images/chocosmith-img.jpg',
        storeItems: '#chocosmith-item',
        storeOpen: true
    },
    {
        name: 'Gagan Di Kitchen',
        geometry: { lat: 28.513677, lng: 77.235223 },
        filter: [1, 2, 3],
        area: 3,
        address: 'House 3/1, Savitri Nagar, Malviya Nagar, New Delhi',
        storeImg: 'images/gagan-img.jpg',
        storeItems: '#gagandikitchen-item',
        storeOpen: true
    },
    {
        name: 'R K Hot and Spices',
        geometry: { lat: 28.499202, lng: 77.226751 },
        filter: [1, 4, 5],
        area: 10,
        address: 'Shop No.7/9, Kishangarh, Vasant Kunj, New Delhi',
        storeImg: 'images/rkhotandspice-img.jpg',
        storeItems: '#rkhotandspicy-item',
        storeOpen: true
    },
    {
        name: 'Alaknanda Store',
        geometry: { lat: 28.525510, lng: 77.254060 },
        filter: [1, 4, 5],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store3.png',
        storeOpen: true
    },
    {
        name: 'Mange Ram Prem Chand Kirana Store',
        geometry: { lat: 28.535352, lng: 77.258182 },
        filter: [1, 3, 4],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store4.png',
        storeOpen: true
    },
    {
        name: 'Singhal Super Store',
        geometry: { lat: 28.535876, lng: 77.258220 },
        filter: [1, 2, 3, 5],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Bhusan General Store',
        geometry: { lat: 28.536498, lng: 77.261535 },
        filter: [1, 3, 4, 5],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Dhingra Department Store',
        geometry: { lat: 28.543178, lng: 77.248876 },
        filter: [1, 2, 3, 5],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Kuldeep Dairy & Department Store',
        geometry: { lat: 28.528483, lng: 77.255053 },
        filter: [1, 3, 4, 5],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Aggarwal Store',
        geometry: { lat: 28.536455, lng: 77.264235 },
        filter: [1, 2, 3, 5],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Kashmir Dry Fruits',
        geometry: { lat: 28.527645, lng: 77.254599 },
        filter: [1, 3, 4, 5],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Guru Nanak Store',
        geometry: { lat: 28.540647, lng: 77.257252 },
        filter: [1, 2, 3, 5],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Kailash Kirana Store',
        geometry: { lat: 28.534236, lng: 77.265376 },
        filter: [1, 3, 4, 5],
        area: 2,
        address: 'Kalkaji',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Verma & Co.',
        geometry: { lat: 28.536540, lng: 77.212004 },
        filter: [1, 2, 4, 5],
        area: 3,
        address: 'Malviya Nagar',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Kwality Store',
        geometry: { lat: 28.531676, lng: 77.208465 },
        filter: [1, 2, 3, 4],
        area: 3,
        address: 'Malviya Nagar',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Rajmandir Hypermarket Malviya Nagar',
        geometry: { lat: 28.539821, lng: 77.212899 },
        filter: [1, 2, 3, 4],
        area: 3,
        address: 'Malviya Nagar',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Durga Store',
        geometry: { lat: 28.532743, lng: 77.216307 },
        filter: [1, 3, 4, 5],
        area: 3,
        address: 'Malviya Nagar',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'M/s. Dakhna Store',
        geometry: { lat: 28.536955, lng: 77.212549 },
        filter: [1, 4, 5],
        area: 3,
        address: 'Malviya Nagar',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'City Store super market',
        geometry: { lat: 28.540077, lng: 77.212821 },
        filter: [1, 2, 5],
        area: 3,
        address: 'Malviya Nagar',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'Annapurna Store',
        geometry: { lat: 28.533520, lng: 77.210121 },
        filter: [1, 3, 4],
        area: 3,
        address: 'Malviya Nagar',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: 'More Supermarket',
        geometry: { lat: 28.535895, lng: 77.216602 },
        filter: [1, 2, 3, 4],
        area: 3,
        address: 'Malviya Nagar',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: '24SEVEN',
        geometry: { lat: 28.537672, lng: 77.212308 },
        filter: [1, 2, 3, 4, 5],
        area: 3,
        address: 'Malviya Nagar',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Shri Morning Palace",
        geometry: { lat: 28.551946, lng: 77.207164 },
        filter: [1, 2, 3, 5],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Gourmet Store",
        geometry: { lat: 28.552440, lng: 77.207340 },
        filter: [1, 2, 3, 5],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "AaramShop C/o Batra General Store",
        geometry: { lat: 28.550517, lng: 77.206761 },
        filter: [1, 3, 5],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Aaramshop C/o Jindal General and Provision Store",
        geometry: { lat: 28.558985, lng: 77.196642 },
        filter: [1, 2, 5],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "LALIT STORE",
        geometry: { lat: 28.553642, lng: 77.194340 },
        filter: [1, 2, 4, 5],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Whole Foods Health Shoppe & Cafe",
        geometry: { lat: 28.552285, lng: 77.207115 },
        filter: [1, 2, 3, 5],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Heads Up For Tails Pet Store",
        geometry: { lat: 28.552334, lng: 77.207665 },
        filter: [1, 5],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Nirankari General Store",
        geometry: { lat: 28.551432, lng: 77.206723 },
        filter: [1, 2, 3, 5],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Batra General Store",
        geometry: { lat: 28.550697, lng: 77.206593 },
        filter: [1, 3, 5],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Navdanya Natural Products Private Limited",
        geometry: { lat: 28.551059, lng: 77.207806 },
        filter: [1, 2],
        area: 4,
        address: 'Hauz Khas',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Standard Namkeen Corner",
        geometry: { lat: 28.562919, lng: 77.244867 },
        filter: [1, 2, 4, 5],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "General Store And Dry Fruits",
        geometry: { lat: 28.562518, lng: 77.244398 },
        filter: [1, 2, 4, 5],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Raju Confectionary Namkeen & Pastry Shop",
        geometry: { lat: 28.564038, lng: 77.242714 },
        filter: [1, 4, 5],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Juneja Sweets",
        geometry: { lat: 28.562587, lng: 77.244315 },
        filter: [1, 3, 4, 5],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Juneja Confectionery",
        geometry: { lat: 28.562587, lng: 77.244315 },
        filter: [1, 2, 4, 5],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Gopala Sweets and Confectionery",
        geometry: { lat: 28.562587, lng: 77.244315 },
        filter: [1, 3, 4, 5],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Maharani Multi utlity Stores",
        geometry: { lat: 28.564533, lng: 77.247237 },
        filter: [1, 2, 4],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "YESS - Your Everyday Super Store",
        geometry: { lat: 28.565563, lng: 77.241655 },
        filter: [1, 2],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "Manohar Store",
        geometry: { lat: 28.564878, lng: 77.247590 },
        filter: [1, 4, 5],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },
    {
        name: "S K G STORE",
        geometry: { lat: 28.650598, lng: 77.136831 },
        filter: [1, 2, 4, 5],
        area: 5,
        address: 'Lajpat Nagar IV',
        storeImg: 'images/store-img.jpg',
        storeOpen: true
    },

];





// LOGIC STARTS HERE
window.onload = function() {
sortFilter('all');
var currentLat;
var currentLng;

document.getElementById('search').addEventListener('click', event => {
    let textValue = document.getElementById('text-value').value;
    let area = document.getElementById('area').value;
    findStore(textValue, area);
    document.getElementById('resultRow').style.display = 'block';
});

function findStore(textValue, area) {
    const container = 'resultContainer';
    const resultContainer = document.getElementById(container);
    resultContainer.innerHTML = null;
    const value = textValue && textValue.trim().toLowerCase();
    store.forEach(shop => {

        if (area && textValue) {
            if (shop.area === area) {
                if (shop.indexOf(value) >= 0) {
                    addCard(shop, container);
                }
            }
        } else if (area) {
            if (shop.area === parseInt(area)) {
                addCard(shop, container);
            }
        } else {
            if (value) {
                if (shop.name.toLowerCase().indexOf(value) >= 0) {
                    addCard(shop, container);
                }
            }
        }
    });

    if (resultContainer.innerHTML.length === 0) {
        // Empty Results Container
        resultContainer.innerHTML = resultContainer.innerHTML + `<p class="container">No Results Found</p>`;
    }
};

function getdistance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}

function addCard(shop, containerName) {
    const container = document.getElementById(containerName);
    let isDistance='';
    if (currentLat && currentLng) {
        let distance = getdistance(currentLat, currentLng, shop.geometry.lat, shop.geometry.lng, 'K');
        isDistance = `<li class="inventory">Approx ${distance.toFixed(2)}Km away</li>`
    }
    let card = `
        <div class="col-md-6 col-xs-6 storeinfo">
            <div class="items-box">
                
                    <img src=${shop.storeImg} alt="Store" class="img-responsive" />
                    <ul class="information">
                        <strong>${shop.name}</strong>
                        <li class="store-address"><i class="fa fa-map-marker" aria-hidden="true"></i> ${shop.address}</li>
                        ${isDistance}
                        <li class="${shop.storeOpen ? 'store-open' : 'store-close'}"><a target="_blank" href="https://wa.me/919711140012?text=I%20would%20like%20to%20get%20something%20delivered"><span>${shop.storeOpen ? 'Order Now' : 'CLOSED'}</a></span></li>
                        <li class="item-list"><span class="span-btn" data-toggle="modal" data-target="${shop.storeItems}">Item List</span></li>
                    </ul>
            </div>
        </div>
    `;

    container.innerHTML = container.innerHTML + card;
};

function sortFilter(value) {
    contianer = 'filterCardContainer';
    filterContainer = document.getElementById(contianer);
    filterContainer.innerHTML = null;
    document.querySelectorAll('.nav-link').forEach(x => x.classList.remove('active'));

    filter.forEach(f => {
        if (f.name.toLowerCase() === value) {
            document.querySelectorAll('.nav-link').forEach(z => {
                if (z.innerText.toLowerCase() === value) {
                    z.classList.add('active');
                }
            });
            store.forEach(s => {
                if (s.filter.indexOf(f.id) > -1) {
                    addCard(s, contianer);
                }
            })
        }
    });
}

function detectMob() {
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }
    return isMobile
}


function getHeight(imgWidth, imgHeight, givenWidth, isPercent) {
    let winWidth;
    if (givenWidth) {
        winWidth = givenWidth;
    } else {
        winWidth = window.innerWidth;
    }
    if (isPercent) {
        winWidth = window.innerWidth * (isPercent / 100)
    }
    const bannerHeight = (winWidth * imgHeight) / imgWidth;
    return bannerHeight
}
$(document).ready(() => {

    navigator.geolocation.getCurrentPosition(position => {
        currentLat = position.coords.latitude;
        currentLng = position.coords.longitude;
    })
    const bannerHeight = getHeight(1920, 701) + 'px';
    !detectMob() && $('.hero-banner').css('height', bannerHeight);

    areaEnum.forEach(area => {
        $('#area').append(`<option value=${area.id}>${area.name}</option>`)
    })

    $(document).scroll(() => {
        const classref = $('.header-shadow')
        const isMobile = detectMob()
        if (!isMobile && window.scrollY > 50) {
            if (!classref.hasClass('headerAnimation')) {
                classref.addClass('headerAnimation')
            }
        } else {
            if (classref.hasClass('headerAnimation')) {
                $('.header-shadow').removeClass('headerAnimation')
            }
        }
        if(isMobile){
            classref.addClass('headerAnimation')
        }
    })
})
};