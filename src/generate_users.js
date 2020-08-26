const faker = require('Faker');
const fs = require('fs');
const path = require('path');

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function generateUsers() {

    let users = []

    for (let id=1; id <= 14; id++) {

        let name = faker.Lorem.words(1).toString() + " "+ faker.Lorem.words(1).toString() + " " + faker.Lorem.words(1).toString();
        let date = "11";
        let city = faker.Address.city();
        let genre = faker.Lorem.words(1).toString();
        let image = `${faker.Image.abstractImage()}?random=${randomInteger(-10000000, 1000000000)}`;

        users.push({
            "id": id,
            "name": name,
            "date": date,
            "city": city,
            "genre": genre,
            "image": image
        });
    }

    return { "cards": users }
}

let dataObj = generateUsers();
fs.writeFileSync(path.join(__dirname, '../dist/cards.json'), JSON.stringify(dataObj, null, '\t'));




