import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, Relation} from "typeorm";
import {User} from './User'
import {InviteRequest} from "@/models/InviteRequest";
import {ProjectMembership} from "@/models/ProjectMembership";
import {ProjectFile} from "@/models/ProjectFile";

@Entity("Projects")
export class Project {
    id: number
    name: string
    description: string
    goals: string
    generalActivity: string
    geography: string
    expectedResults: string
    report: string
    stepNumber: number
    adminId: number
}