import './App.css';
import ContactInfo from './ContactInfo';
import EducInfo from './EducInfo';
import PersInfo from './PersInfo';
import ResHeader from './ResHeader';
import TechInfo from './TechInfo';
import WorkInfo from './WorkInfo';


function App() {
  return (
    <div className="App">
        <div className="card cardCustum">
    <div className="card-body">
    <ResHeader />
      <PersInfo />
      <TechInfo />
      <WorkInfo />
      <EducInfo />
      <ContactInfo />
      </div> 
  </div>
 
    </div>
  );
}

export default App;
