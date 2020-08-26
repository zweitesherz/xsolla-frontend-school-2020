import React from 'react';
// import styles from './styles.css';
import Plusik from './img/Plus.svg';
const faker = require('Faker');
// const fs = require('fs');
// const path = require('path');


function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}



function Plus({cards, addCard}) {

    function calcId(a) {
        return (Object.keys(a).length + 1)
    }

    function plusCard() {

            let name = faker.Lorem.words(1).toString() + " "+ faker.Lorem.words(1).toString() + " " + faker.Lorem.words(1).toString();
            let date = "11";
            let city = faker.Address.city();
            let genre = faker.Lorem.words(1).toString();
            let image = `${faker.Image.abstractImage()}?random=${randomInteger(-10000000, 1000000000)}`;

        const newData = cards.push({
                "id": calcId(cards),
                "name": name,
                "date": date,
                "city": city,
                "genre": genre,
                "image": image
            });



        addCard(cards);
        console.log(cards);



        // fs.writeFileSync(path.join(__dirname, '../dist/cards.json'), JSON.stringify(plusCard(), null, '\t'));

    }

    return (
        <div onClick={plusCard}>
          <img src={Plusik} alt={'img'}/>
        </div>

    )
}

export default Plus