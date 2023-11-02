import Button from "../components/Buttons";
import CarColorPicker from '../components/CarColorPicker';
import Layout from "../components/Layouts";

const Homepage = () => {
  return <Layout>
    <CarColorPicker/>
    <h1>Homepage</h1>
    <Button 
      label="Register now"
      type='primary'
    />
    <Button 
      label="Download now" 
      type="secondary"
    />
    <Button label="Learn About" />

  </Layout>
}
export default Homepage;