import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

/** Associa a Entity com a tabela Orphanages */
@Entity('orphanages')
export default class Orphanages {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    /** Relacionamento um para muitos */
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update'] // Cadastra ou atualiza as imagens relacionadas
    })
    @JoinColumn({ name: 'orphanage_id'})
    images: Image[];
};
