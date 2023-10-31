import Button from "../components/Buttons";
import CarColorPicker from '../components/CarColorPicker';
const Homepage = () => {
  return <div>
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

  </div>
}
export default Homepage;