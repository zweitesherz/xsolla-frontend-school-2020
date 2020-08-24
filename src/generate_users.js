const faker = require('Faker');
const fs = require('fs');
const path = require('path');

function generateUsers() {

    let users = []

    for (let id=1; id <= 14; id++) {

        let name = faker.Lorem.words(1).toString();
        let date = "11";
        let city = faker.Address.city();
        let genre = faker.Lorem.words(1).toString();
        let image = `${faker.Image.imageUrl()}?random=${Date.now()}`;

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