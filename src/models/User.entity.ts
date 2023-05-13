import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {ImageEntity} from './Image.entity';
import {ProjectEntity} from './Project.entity';
import {InviteRequest} from "@/models/InviteRequest.Entity";
import {ProjectMembershipEntity} from "@/models/ProjectMembership.entity";

@Entity("Users")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 64
    })
    firstname: string

    @Column({
        length: 64
    })
    secondname: string

    @Column({
        length: 64
    })
    lastname: string

    @Column({
        length: 64
    })
    nickname: string

    @Column({
        length: 64
    })
    email: string

    @Column({
        length: 256
    })
    password: string

    @ManyToOne(() => ImageEntity, (image) => image.user)
    images: ImageEntity[]

    @ManyToOne(() => ProjectEntity, (project) => project.admin)
    projects: ProjectEntity[]

    @ManyToOne(() => InviteRequest, (inviteRequest) => inviteRequest.user)
    inviteRequests: InviteRequest[]

    @ManyToOne(() => ProjectMembershipEntity, (projectMembership) => projectMembership.user)
    membership: ProjectMembershipEntity[]
}