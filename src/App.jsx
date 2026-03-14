import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { TwoWheelerInsuranceQuoteForm } from "./components/TwoWheelerInsuranceQuoteForm";
import { DashBoard } from "./components/DashBoard";
import { SelectPlans } from "./pages/SelectPlans";
import { AuthProvider } from "./utils/Context";
import { FormWithValid } from "./components/Form";
import { MultyStepForm } from "./components/MultyStepForm";


function App() {
  return (
<AuthProvider>
<BrowserRouter>
<Routes>
  <Route path="/" element={<DashBoard/>} />
 <Route path="twowhelinsuquo" element={<TwoWheelerInsuranceQuoteForm/>} />
 <Route path="/selectplans" element={<SelectPlans/>} />
 <Route path="/form" element={<FormWithValid/>} />
 <Route path="/multystepform" element={<MultyStepForm/>} />

 </Routes>
 </BrowserRouter>
 </AuthProvider>
  );
}

export default App;