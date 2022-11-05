
import { Characters } from "./components/Characters";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
 

  return (
    <div className="container">
      <Header />
      <Characters />
      <Footer/>
    </div>
  );
};
