export class User {
    constructor() {
        const temp: User = this;
        Object.defineProperty(temp, "id", {
            enumerable: false
        })
    }

    id: number = null
    firstname: string = null
    secondname: string = null
    lastname: string = null
    nickname: string = null
    email: string = null
    password: string = null
    imageid: number = 1

    static Parse(object: any): User {
        const user = new User();

        for (let prop in user) {
            user[prop] = object[prop];
        }

        return user;
    }

    toObject():object {
        return JSON.parse(JSON.stringify(this));
    }
}