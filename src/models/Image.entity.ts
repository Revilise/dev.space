import {Entity, PrimaryGeneratedColumn, JoinTable, Column, OneToMany, Relation} from "typeorm";
import {UserEntity} from './User.entity';

@Entity("Images")
export class ImageEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 256,
        type: "varchar"
    })
    filename: string

    @Column({
        type: "bytea"
    })
    data: Buffer

    @OneToMany(() => UserEntity, (user) => user.images)
    @JoinTable()
    user: Relation<UserEntity>
}