import {Entity, PrimaryGeneratedColumn, OneToMany, Relation} from "typeorm";
import {ProjectEntity} from '@/models/Project.entity';
import {UserEntity} from '@/models/User.entity';

@Entity("InviteRequests")
export class InviteRequestEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => ProjectEntity, project => project.inviteRequests)
    project: Relation<ProjectEntity>

    @OneToMany(() => UserEntity, user => user.inviteRequests)
    user: Relation<UserEntity>
}