import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Image from 'next/image';
import Layout from "../../components/Layout";
import Link from "next/link";

import { getAllVehicles } from "../../lib/api";

export async function getStaticProps (){
    const vehicles = await getAllVehicles();
    return{
        props: {
            vehicles
        }
    }

}

const VehiclePage = ({vehicles })=>{
    return <Layout>
        <h1>Vehicles</h1>
        <Container>
            <Grid 
            items={filtered}
            />
        </Container>
       
    </Layout>
}

export default VehiclePage
