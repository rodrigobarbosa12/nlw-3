import Orphanage from '../models/Orphanage';
import imagesView from './images_view';

const render = (orphanage: Orphanage) => ({
    id: orphanage.id,
    name: orphanage.name,
    latitude: orphanage.latitude,
    longitude: orphanage.longitude,
    about: orphanage.about,
    instructions: orphanage.instructions,
    opening_hours: orphanage.opening_hours,
    open_on_weekends: orphanage.open_on_weekends,
    images: imagesView.renderMany(orphanage.images)
});

const renderMany = (orphanages: Orphanage[]) => orphanages.map(orphanage => render(orphanage));

export default {
    render,
    renderMany,
};
