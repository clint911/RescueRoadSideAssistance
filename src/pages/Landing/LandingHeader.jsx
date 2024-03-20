import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LandingHeader() {
  return (
    <>
<div>
  <h2> Find Your Mcehanic With MechanicLocator</h2>
  <p className="landingh"> Discover 1,480,086 mechanics near you !!</p>
</div>

<div className="bars">
<div className="barname">
<label for="location"  >Location</label>
<input type="text" className="bar" placeholder="Where is your location"></input>
</div>
<div className="barname">
<label for="location" >Service Date</label>
<input type="text" className="bar" placeholder="Select date"></input>
</div>
<div className="barname">
<label for="service-type">Service Type</label>
<input type="text" className="bar" placeholder="Choose Service"></input>
</div>
<div className="barname">
<label for="location" >Contact</label>
<input type="text" className="bar" placeholder="contact details"></input>
</div>
</div>

<div className='image-div'>
  <h5> Top mechanic Location</h5>
  <div className='images'>
    <img src='' alt='The is New York'></img>
    <img src='' alt='The is Los Angeles'></img>
    <img src='' alt='The is Seattle'></img>
    <img src='' alt='The is Chicago'></img>
    <img src='' alt='The is Miami'></img>
    <img src='' alt='The is Huston'></img>
  </div>
</div>

<div>
  <h5>
    Highly Recommended
  </h5>
</div>
    </>
  )
}
