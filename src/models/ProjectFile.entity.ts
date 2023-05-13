import {Entity, PrimaryGeneratedColumn, OneToMany, Relation} from "typeorm";
import {ProjectEntity} from "@/models/Project.entity";
import {FileEntity} from '@/models/File.entity';
import {StatusEntity} from '@/models/Status.entity';

@Entity("ProjectFiles")
export class ProjectFileEntity {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => ProjectEntity, (project) => project.projectFiles)
    project: Relation<ProjectEntity>

    @OneToMany(() => FileEntity, (file) => file.projectFiles)
    file: Relation<FileEntity>

    @OneToMany(() => StatusEntity, (status) => status.projectFiles)
    status: Relation<StatusEntity>
}