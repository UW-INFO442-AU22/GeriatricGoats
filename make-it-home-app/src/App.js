import logo from './logo.svg'; // feel free to change 
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'; // this is world-wide css, would overwrite bootstrap 
import { Route, Routes } from 'react-router-dom'
// pages being imported
import {Home} from './home';
import {CommutingResources } from './commuting';
import { OtherResources } from './other-resources';



export function App() {
    return(
<Routes>
<Route path="/" element={<Home />} />
<Route path="commuting-resources" element={<CommutingResources />} />
<Route path="other-resources" element={<OtherResources />} />
</Routes>
    )

}

export default App;
