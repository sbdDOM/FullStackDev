//Json

let companies = 
    `[
        {
            "name": "Big Corpo",
            "numberOfEmployees": 10000,
            "ceo": "Mary",
            "rating": 3.5

        },
        {
            "name": "Small Corpo",
            "numberOfEmployees": 10,
            "ceo": null,
            "rating": 2.0

        }

    ]`
    console.log(JSON.parse(companies));