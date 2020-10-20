export interface Image {
    id: number,
    url: string,
}

export interface Orphanage {
    id: number,
    about: string,
    images: Image[],
    instructions: string,
    latitude: number,
    longitude: number,
    name: string,
    open_on_weekends: string,
    opening_hours: string,
};
