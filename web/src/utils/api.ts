import xhr from './xhr';

const listOrphanage = () => xhr.get('/orphanages');
const detailOrphanage = (id: string) => xhr.get(`/orphanages/${id}`);
const createOrphanages = (params: Object) => xhr.post('/orphanages', params);

export default {
    listOrphanage,
    detailOrphanage,
    createOrphanages
};