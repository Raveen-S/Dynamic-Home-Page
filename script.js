let playLoop = 15;

let pagebar = document.querySelector('.pagebar');
let pageCount = document.querySelector('.page-count');

let leftSection = document.querySelector('.left-text-section');
let leftItems = Array.from(document.querySelectorAll('.left-item'));

let header = document.querySelector('header');
let vig = document.querySelector('.vignette');
let timebar = document.querySelector('.timebar');

let cards = Array.from(document.querySelectorAll('.card'));
let largingCard = document.querySelector('.larging-card');
let backWall = document.querySelector('.wall');

let cardWidth = getBoundry(cards[0]).width;
let cardHeight = getBoundry(cards[0]).height;
let cardLeft = getBoundry(cards[0]).left;
let cardTop = getBoundry(cards[0]).top;

let maxPages = cards.length;
let pageNumber = 1;
let textNumber = 0;
let pagebarPercentage = 100 / maxPages;

let mainIndex = 0;

let dataList = [
    {
        "country": "Sierra Nevada - United States",
        "name1": "YOSEMITE",
        "name2": "NATIONAL PARK",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ratione, libero eveniet et voluptatum vel labore"
    },
    {
        "country": "Sahara Desert - Morocco",
        "name1": "MARRAKECH",
        "name2": "MERZOUGA",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ratione, libero eveniet et voluptatum vel labore"
    },
    {
        "country": "Switzerland Alps",
        "name1": "SAINT",
        "name2": "ANTONIEN",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ratione, libero eveniet et voluptatum vel labore"
    },
    {
        "country": "Japan Alps",
        "name1": "NAGANO",
        "name2": "PREFECTURE",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ratione, libero eveniet et voluptatum vel labore"
    },
    {
        "country": "Tarifa - Spain",
        "name1": "LOS LANCES",
        "name2": "BEACH",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ratione, libero eveniet et voluptatum vel labore"
    },
    {
        "country": "Cappadocia - Turkey",
        "name1": "GOREME",
        "name2": "Valley",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ratione, libero eveniet et voluptatum vel labore"
    }
]

textUpdate()

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, ms);
    })
}

function getBoundry(element) {
    let elementBoundry = element.getBoundingClientRect();
    return (
        {
            left: elementBoundry.left,
            top: elementBoundry.top,
            width: elementBoundry.width,
            height: elementBoundry.height,
        }
    )
}


leftItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = `translateY(100%)`;
});

async function footerUpdate() {
    let footloop = 100;
    let loopRate = 1 / footloop;

    let angle = 22 / 14;
    let multiplier = 0;

    for (let i = 0; i <= footloop; i++) {
        let val = Math.sin(angle * multiplier);
        pagebar.style.backgroundImage = `linear-gradient(90deg, rgb(255, 217, 0) ${(pagebarPercentage * (pageNumber - 1)) + pagebarPercentage * val}%, rgba(0, 0, 255, 0) ${(pagebarPercentage * (pageNumber - 1)) + pagebarPercentage * val}%)`
        await delay(8)
        multiplier += 1 / footloop;
        loopRate += 1 / footloop;
    }
    loopRate = 1 / footloop;
    if (pageNumber < 10)
        pageCount.textContent = `0${pageNumber}`;
    else
        pageCount.textContent = `${pageNumber}`;
    pagebar.style.backgroundImage = `linear-gradient(90deg, rgb(255, 217, 0) ${pagebarPercentage * pageNumber}%, rgba(0, 0, 255, 0) ${pagebarPercentage * pageNumber}%)`
    pageNumber++;
    if (pageNumber > maxPages) pageNumber = 1;
}

footerUpdate()

async function textAppear() {
    await delay(1)
    let itr = 120;
    let an = 22 / 14
    let multi = 0;
    for (let i = 0; i < itr; i++) {
        let val = Math.sin(an * multi);
        multi += 1 / itr;

        leftItems.forEach(item => {
            item.style.opacity = val;
            item.style.transform = `translateY(${100 - 100 * val}%)`;
        });
        await delay(1)
    }

}


async function textUpdate() {
    leftItems[1].textContent = dataList[textNumber].country
    leftItems[2].textContent = dataList[textNumber].name1
    leftItems[3].textContent = dataList[textNumber].name2
    leftItems[4].textContent = dataList[textNumber].description
    textNumber++;
    if (textNumber == dataList.length) textNumber = 0;
}



backWall.style.backgroundImage = `url(./images/image5-min.jpg)`;

cardLeft = 400;
cardLeft = 4 * window.innerWidth / 7;
let cardGap = 40;


largingCard.style.left = `${cardLeft}px`;
largingCard.style.top = `${cardTop}px`;

let pos = [];
let imageIndex = 0;

cards.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = `translateX(100px)`;
    imageIndex++;
});


for (let index in cards) {
    let leftPos = cardLeft + index * (cardWidth + cardGap);
    if (index == 0) {
        pos[index] = (cardLeft);
        cards[index].style.left = `${cardLeft}px`;
    }
    else {
        pos[index] = (leftPos);
        cards[index].style.left = `${leftPos}px`;
    }
}




async function timebarRun() {

    await delay(3000);
    let timePercent = 0;
    let timeloop = 1100;
    let timeloop1 = timeloop * 6 / 7;
    let timeloop2 = timeloop * 1 / 7;
    for (let i = 0; i <= timeloop1; i++) {
        timebar.style.backgroundImage = `linear-gradient(90deg, rgb(255, 217, 0) ${timePercent}%, rgba(0, 0, 255, 0) ${timePercent}%)`
        await delay(1)
        timePercent += 100 / timeloop1;
    }
    timePercent = 0;
    timebar.style.backgroundImage = `linear-gradient(90deg, rgba(0, 0, 255, 0) ${timePercent}%, rgb(255, 217, 0) ${timePercent}%)`
    for (let i = 0; i <= timeloop2; i++) {
        timebar.style.backgroundImage = `linear-gradient(90deg, rgba(0, 0, 255, 0) ${timePercent}%, rgb(255, 217, 0) ${timePercent}%)`
        await delay(1)
        timePercent += 100 / timeloop2;
    }
    leftSection.style.zIndex = 8;
}

async function larging() {
    await delay(1500);
    cards[mainIndex].style.visibility = 'hidden';
    largingCard.style.boxShadow = ` 2px 5px 10px rgba(0, 0, 0, 0.658)`;
    // largingCard.style.backgroundColor = cards[mainIndex].style.backgroundColor;
    largingCard.style.backgroundImage = `url(./images/image${mainIndex}-min.jpg)`;
    await delay(500);
    footerUpdate();

    let loop = 150;
    let heightRate = (window.innerHeight - cardHeight) / loop;
    let widthRate = (window.innerWidth - cardWidth) / loop;
    let leftRate = getBoundry(cards[mainIndex]).left / loop;
    let topRate = getBoundry(cards[mainIndex]).top / loop;

    let tempWidthGap = (window.innerWidth - cardWidth);
    let tempHeightGap = (window.innerHeight - cardHeight);

    let lefty = largingCard.offsetLeft;
    let topy = largingCard.offsetTop;
    let widthy = cardWidth;
    let heighty = cardHeight;

    let tempLeft = lefty;
    let tempTop = topy;
    let tempWidth = widthy;
    let tempHeight = heighty;

    console.log('start Larging')

    dimWallPhoto()

    let angle = 22 / 14;
    let multiplier = 0;

    for (let i = 0; i <= loop; i++) {
        largingCard.style.left = `${tempLeft}px`
        largingCard.style.top = `${tempTop}px`
        largingCard.style.width = `${tempWidth}px`
        largingCard.style.height = `${tempHeight}px`

        let t = i / loop;
        let sqt = t * t;
        let out = sqt / (2 * (sqt - t) + 1);

        let val = Math.sin(angle * multiplier);
        multiplier += 1 / loop;

        tempLeft = lefty * (1 - out);
        tempTop = topy * (1 - out);
        tempWidth = widthy + tempWidthGap * out;
        tempHeight = heighty + tempHeightGap * out;

        // widthy = widthy + widthRate;
        // heighty = heighty + heightRate;
        await delay(5)
    }
    leftItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = `translateY(100%)`;
        item.style.filter = `brightness(${1}) blur(${0}px)`;
    });
    leftSection.style.zIndex = 11;
    textUpdate()
    textAppear()
    console.log('END Larging')
    largingCard.style.width = `${window.innerWidth}px`
    largingCard.style.height = `${window.innerHeight}px`
    // backWall.style.backgroundColor = largingCard.style.backgroundColor;
    backWall.style.backgroundImage = `url(./images/image${mainIndex}-min.jpg)`;
    backWall.style.filter = `brightness(1) blur(0px)`;
    largingCard.style.boxShadow = ` 2px 5px 0px rgba(0, 0, 0, 0)`;
}

async function dimWallPhoto() {
    let dimLoop = 100;
    let brightval = 1;
    let brightIndex = 0.5 / dimLoop;
    let blurVal = 0;
    let blurIndex = 1 / dimLoop;

    for (let i = 0; i < dimLoop; i++) {
        backWall.style.filter = `brightness(${brightval}) blur(${blurVal}px)`;
        leftItems.forEach(item => {
            item.style.filter = `brightness(${brightval}) blur(${blurVal}px)`;
        });
        brightval -= brightIndex;
        blurVal += blurIndex;
        await delay(1);
    }
}

async function cardTraveling() {
    await delay(2400);
    let cardLoop = 170;
    let cardTravel = pos[1] - pos[0];
    let tempCardTravel = pos[2] - pos[1];
    cardTravel = (cardTravel < 0) ? tempCardTravel : cardTravel;
    let cardTravelRate = cardTravel / cardLoop;

    console.log('Start Travelling')
    console.log('pos', pos)
    console.log('cardTravel', cardTravel)
    console.log('travelRate', cardTravelRate)

    let tempPoses = [...pos]
    for (let i = 0; i < cardLoop; i++) {

        let t = i / cardLoop;
        let sqt = t * t;
        let out = sqt / (2 * (sqt - t) + 1);

        for (const index in cards) {
            let leftVal = tempPoses[index] - cardTravel * out;
            cards[index].style.left = `${leftVal}px`
        }
        await delay(1)
    }
    console.log('END Travelling')

    let lastPos = pos[pos.length - 1];
    pos.unshift(lastPos);
    pos.pop();

    for (const index in cards) {
        cards[index].style.left = `${pos[index]}px`
    }

    await delay(2000)
    largingCard.style.left = `${getBoundry(cards[(mainIndex + 1 >= cards.length) ? 0 : mainIndex + 1]).left}px`
    largingCard.style.top = `${getBoundry(cards[(mainIndex + 1 >= cards.length) ? 0 : mainIndex + 1]).top}px`
    largingCard.style.width = `${getBoundry(cards[(mainIndex + 1 >= cards.length) ? 0 : mainIndex + 1]).width}px`
    largingCard.style.height = `${getBoundry(cards[(mainIndex + 1 >= cards.length) ? 0 : mainIndex + 1]).height}px`
    largingCard.style.backgroundColor = `rgb(255, 114, 48)`;
    console.log('back Under')

    cards[mainIndex].style.visibility = 'visible';
    mainIndex++;
    if (mainIndex >= cards.length) mainIndex = 0;
}

async function startHome() {
    cardsHome()
    headerHome()
    textAppear()
    header.style.opacity = 1;
    header.style.transform = `translateY(-100px)`;
    backWall.style.transform = `scale(2)`;
    vig.style.backdropFilter = 'blur(5px)';
    let iterations = 120;
    let angle = 22 / 14
    let multiplier = 0;
    for (let i = 0; i < iterations; i++) {
        let val = Math.sin(angle * multiplier);
        multiplier += 1 / iterations;
        backWall.style.transform = `scale(${2 - 1 * val})`
        vig.style.backdropFilter = `blur(${5 - 5 * val}px)`
        // scaleRate -= 1 / iterations;
        await delay(1)
    }
    backWall.style.transform = `scale(1)`
    vig.style.backdropFilter = `blur(0px)`


}

async function cardsHome() {
    // await delay(0)
    let itr = 120;
    let an = 22 / 14
    let multi = 0;
    for (let i = 0; i < itr; i++) {
        let val = Math.sin(an * multi);
        multi += 1 / itr;

        cards.forEach(element => {
            element.style.opacity = val;
            element.style.transform = `translateX(${100 - 100 * val}px)`;
        });
        await delay(1)
    }
}

async function headerHome() {
    await delay(500)
    let itr = 120;
    let an = 22 / 14
    let multi = 0;
    for (let i = 0; i < itr; i++) {
        let val = Math.sin(an * multi);
        multi += 1 / itr;

        header.style.opacity = val;
        header.style.transform = `translateY(${-100 + 100 * val}px)`;
        await delay(1)
    }
}

startHome()

async function play() {
    for (let i = 0; i < playLoop; i++) {
        timebarRun();
        larging();
        cardTraveling()

        await delay(6500)
        // playLoop++
        console.log("-----------Loop Ended----------")
    }

}

play();

window.addEventListener('resize', () => {
    window.location.reload();
})
