import { Fragment, useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import "./App.css";
import BarcaPlayes from "./BarcaPlayes";
import ButtonClick from "./ButtonClick";
import Header from "./Header";

function App() {
  const [showData, setShowData] = useState(false);

  let content = "Click Here to see some deets";

  const showDataHandler = () => {
    setShowData((showData) => !showData);
  };

  return (
    <Fragment>
      <Header />
      <ButtonClick onClickToGetData={showDataHandler} contentToShow={content} />
      {showData && <BarcaPlayes />}
    </Fragment>
  );
}

export default App;
