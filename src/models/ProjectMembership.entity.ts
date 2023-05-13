import {Entity, PrimaryGeneratedColumn, OneToMany, Relation} from "typeorm";
import {ProjectEntity} from '@/models/Project.entity';
import {UserEntity} from '@/models/User.entity';

@Entity("ProjectMembershipEntity")
export class ProjectMembershipEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => ProjectEntity, (project) => project.membership)
    project: Relation<ProjectEntity>

    @OneToMany(() => UserEntity, (user) => user.membership)
    user: Relation<UserEntity>
}