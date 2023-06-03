export default interface IController<Type> {
    GetOne(params: object | null) : Promise<object | null>
    GetAll(params: object) : Promise<object>
    Update(id: number, object: Type) : Promise<boolean>
    Delete(params: object) : Promise<boolean>
    Insert(object: Type) : Promise<object>
}