import Container from '../../components/Container';
import Image from 'next/image';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Showcase from '../../components/Showcase';
import TrimPicker from '../../components/Trimpicker';


import { getVehicleBySlug, getAllVehicleSlugs } from '../../lib/api';
import {getDrivingLocations} from '../../lib/locations';
// WATERFALL
// 1. getStaticPaths
export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
    const paths = vehicles.map((vehicle) => {
        const { slug } = vehicle.node;
        return {
            params: {
                id: slug
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
// 2. getStaticProps
export async function getStaticProps({ params }) {
    const vehicleData = await getVehicleBySlug(params.id);
    const drivingLocations = getDrivingLocations();
    return {
        props : {
            vehicleData,
            drivingLocations
        }
    }
}
// 3. page component
const SingleVehiclePage = ({ vehicleData, drivingLocations }) => {
    const { title, slug, featuredImage, vehicleInformation} = vehicleData;
    const {headline}=vehicleInformation.showcase;
    const {trimLevels}=vehicleInformation;
    return <Layout>
        <Showcase
            subtitle={title}
            title={headline}
            featuredImage={featuredImage} 
        />

        <div id="main-content">
          <Container>
            <TrimPicker 
              trims={trimLevels} 
              locations={drivingLocations}
            />
          </Container>
        </div>

    </Layout>
}
export default SingleVehiclePage;