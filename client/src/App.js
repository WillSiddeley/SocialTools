// Components
import UploadImage from './components/UploadImage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            Preview
          </div>
          <div className="col">
            <div className="row">
              Templates or Upload
              <UploadImage />
            </div>
            <div className="row">
              Text Type
            </div>
            <div className="row">
              Text 1 <br /> Text 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
