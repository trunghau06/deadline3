const data = [
    { 
        order: 1,
        code: 'MO231',
        name: 'Pomeranian Trắng',
        gender: true,
        age: 2,
        price: '6.900.000' 
    },
    { 
        order: 2,
        code: 'MO602',
        name: 'Poodle Tiny Vàng',
        gender: false, age: 2,
        price: '3.900.000' 
    },
    { 
        order: 3,
        code: 'MO102',
        name: 'Poodle Tiny Sepia',
        gender: true,
        age: 3,
        price: '4.000.000' 
    },
    { order: 4,
        code: 'MO512',
        name: 'Alaskan Malamute',
        gender: false,
        age: 5,
        price: '8.900.000' 
    },
    { order: 5,
        code: 'MO331',
        name: 'Pembroke Corgi',
        gender: true,
        age: 3,
        price: '6.900.000' 
    },
    { 
        order: 6,
        code: 'MO502',
        name: 'Pembroke Corgi',
        gender: false,
        age: 2,
        price: '6.500.000' 
    }
];

const listContainer = document.querySelector('.list'); 
const itemsHTML = data.map(item => {
    let genderShow = item.gender ? 'Đực' : 'Cái'; 
    return `
        <li class="list__item">
            <img src="dog${item.order}.jpg" alt="${item.name}" class="item__img">
            <div class="item__content">
                <div class="item__content__name">
                    <h5>${item.code} - ${item.name}</h5>
                </div>
                <div class="item__content__gender">
                    Giống: ${genderShow}
                </div>
                <div class="item__content__age">
                    Tuổi: ${item.age} tháng
                </div>
                <div class="item__content__price">
                    <b>${item.price} VND</b>
                </div>
            </div>
        </li>
    `;
});

listContainer.innerHTML = itemsHTML.join('');
const data2 = [
    {
        order: 1,
        title: "Pomeranian là gì? Cách nhận biết chó Pomeranian",
        info: "Pomeranian hay còn gọi là chó Pomeranian (chó Pom) luôn nằm trong top những thú cưng dễ thương nhất. Không chỉ vậy, giống chó xiế.."
    },
    {
        order: 2,
        title: "Chế độ ăn cho chó bạn cần biết",
        info: "Việc chia khẩu phần ăn cho chó thoạt nghe có vẻ đơn giản nhưng có một số quy tắc bạn nên biết để chó cưng dễ dàng hấp thụ các chất.."
    },
    {
        order: 3,
        title: "Tại sao chó cắn phá đồ đạc và cách phòng ngừa hiệu quả",
        info: "Chó cắn là hiện tượng phổ biến trong quá trình phát triển. Tuy nhiên, không ai muốn thấy đồ đạc, vật dụng quang trọng của mình bị chó cắn."
    }
];

const item2 = data2.map((item) => {
    return `
        <div class="list2__item">
            <div class="list2__item__imgInner">
                <!-- Thay đổi đường dẫn ảnh thành cho1.png, cho2.png, cho3.png... -->
                <img src="cho${item.order}.png" alt="">
            </div>
            <div class="list2__item__content">
                <div class="list2__item__content__news">
                    <h3>Kiến thức thú cưng</h3>
                </div>
                <div class="list2__item__content__title">
                    <h5>${item.title}</h5>
                </div>
                <div class="list2__item__content__paragraph">
                    <p>${item.info}</p>
                </div>
            </div>
        </div>
    `;
});


console.log(item2);


document.querySelector('.list2').innerHTML += item2.join('');
