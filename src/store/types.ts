// Define the API response structure

/*

{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "9003716456",
    "website": "hildegard.org",
}
*/


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    addres: Address;
    phone: number;
    website: string;
  }

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}


export type { User };