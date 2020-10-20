import xhr from './xhr';

const orphanages = () => xhr.get('/orphanages');
const orphanageDetails = (id: number) => xhr.get(`/orphanages/${id}`);
const createOrphanages = (params: Object) => xhr.post('/orphanages', params);

export default {
    orphanages,
    orphanageDetails,
    createOrphanages
}