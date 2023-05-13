export interface IController<Type> {
    getById(id: number) : Type[]
    getAll() : Type[]
    Delete(id: number) : Type
    Update(id: number, object: Type) : Type
    Insert(object: Type) : Type
}