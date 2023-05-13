export interface IController<Type> {
    getById(id: number) : Promise<Type[]>
    getAll() : Promise<Type[]>
    Delete(id: number) : Promise<Type>
    Update(id: number, object: Type) : Promise<Type>
    Insert(object: Type) : Promise<Type>
}