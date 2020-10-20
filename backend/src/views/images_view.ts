import Image from '../models/Image';

const render = (images: Image) => ({
    id: images.id,
    url: `http://192.168.0.40:3333/uploads/${images.path}`,
});

const renderMany = (images: Image[]) => images.map(image => render(image));

export default {
    render,
    renderMany,
};
