export interface IController<Type> {
    getById(id: number) : Promise<Type>
    getAll() : Promise<Type[]>
    delete(id: number) : Promise<boolean>
    update(id: number, object: Type) : Promise<Type>
    insert(object: Type) : Promise<Type>
}