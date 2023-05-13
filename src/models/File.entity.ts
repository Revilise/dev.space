import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {ProjectFileEntity} from "@/models/ProjectFile.entity";

@Entity("Files")
export class FileEntity {
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

    @ManyToOne(() => ProjectFileEntity, (projectFile) => projectFile.file)
    projectFiles: ProjectFileEntity[]
}