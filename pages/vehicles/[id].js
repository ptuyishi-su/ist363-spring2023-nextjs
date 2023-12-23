import Image from 'next/image';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Showcase from '../../components/Showcase';
import { getVehicleBySlug, getAllVehicleSlugs } from '../../lib/api';

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
    return {
        props : {
            vehicleData
        }
    }
}
// 3. page component
const SingleVehiclePage = ({ vehicleData }) => {
    const { title, slug, featuredImage, vehicleInformation} = vehicleData;
    const {headline}=vehicleInformation.showcase;
    return <Layout>
        <Showcase
            subtitle={title}
            title={headline}
            featuredImage={featuredImage} 
        />

        <div id="main-content">
          <TrimPicker />
        </div>

    </Layout>
}
export default SingleVehiclePage;