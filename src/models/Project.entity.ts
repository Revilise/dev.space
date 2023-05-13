import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, Relation} from "typeorm";
import {UserEntity} from './User.entity'
import {InviteRequest} from "@/models/InviteRequest.Entity";
import {ProjectMembershipEntity} from "@/models/ProjectMembership.entity";
import {ProjectFileEntity} from "@/models/ProjectFile.entity";

@Entity("Projects")
export class ProjectEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 512
    })
    name: string

    @Column({
        length: 512
    })
    description: string

    @Column({
        length: 512
    })
    goals: string

    @Column({
        length: 512
    })
    generalActivity: string

    @Column({
        length: 256
    })
    geography: string

    @Column({
        length: 512
    })
    expectedResults: string

    @Column({
        type: "text"
    })
    report: string

    @Column({
        type: "integer"
    })
    stepNumber: number

    @OneToMany(() => UserEntity, (user) => user.projects)
    admin: Relation<UserEntity>

    @ManyToOne(() => InviteRequest, (inviteRequest) => inviteRequest.project)
    inviteRequests: InviteRequest[]

    @ManyToOne(() => ProjectMembershipEntity, (projectMembership) => projectMembership.project)
    membership: ProjectMembershipEntity[]

    @ManyToOne(() => ProjectFileEntity, (projectFile) => projectFile.project)
    projectFiles: ProjectFileEntity[]
}