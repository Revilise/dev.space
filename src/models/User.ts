export class User {
    constructor() {

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

        Object.defineProperty(user, "id", {
            enumerable: false
        })

        for (let prop in user) {
            user[prop] = object[prop];
        }

        return user;
    }
}