import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {ProjectFileEntity} from "@/models/ProjectFile.entity";

@Entity("Statuses")
export class StatusEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 64
    })
    name: string

    @ManyToOne(() => ProjectFileEntity, (projectFile) => projectFile.status)
    projectFiles: ProjectFileEntity[]
}