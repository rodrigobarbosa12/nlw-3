import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import api from '../utils/api';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import { Orphanage } from './type';
import '../styles/pages/orphanages-map.css';

const darkLight = (Number(moment().format('H')) >= 18) ? 'dark' : 'light';

const OrphanagesMap = () => {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.listOrphanage().then((response) => setOrphanages(response.data));
    }, [orphanages]);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no map</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>Santo André</span>
                </footer>
            </aside>

            <Map
                center={[-23.6291151,-46.5080541]}
                zoom={15}
                style={{width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${darkLight}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                {orphanages.map(orphanage =>
                    <Marker
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}
                    >
                        <Popup
                            className="map-popup"
                            closeButton={false}
                            minWidth={240}
                            maxWidth={240}
                        >
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#FFF" />
                            </Link>
                        </Popup>
                    </Marker>
                )}
            </Map>
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
};

export default OrphanagesMap;
