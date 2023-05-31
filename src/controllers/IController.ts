export interface IController<Type> {
    getById(id: number) : Promise<Type>
    getAll() : Promise<Type[]>
    delete(id: number, userid: number = null) : Promise<boolean>
    update(id: number, object: Type) : Promise<Type>
    insert(object: Type) : Promise<Type>
}