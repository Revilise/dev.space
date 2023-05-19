export class Entity {
    constructor() {
        // const temp: Entity = this;
        //
        // Object.defineProperty(temp, "id", {
        //     enumerable: false
        // })
    }

    id: number = null;

    static Parse(object: any, pattern ): any {
        const temp = pattern.Create();
        if (object)
        for (let prop in temp) {
            temp[prop] = object[prop];
        }

        return temp;
    }

    static Create = (props) => { throw Error("error of implemention") };

    toObject():object {
        return JSON.parse(JSON.stringify(this));
    }
}