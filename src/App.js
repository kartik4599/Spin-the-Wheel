import { useState } from "react";
import FinalPage from "./Components/FinalPage";
import FirstPage from "./Components/FIrstPage";
import SecondPage from "./Components/SecondPage";

function App() {
  const [IsShow, setIsShow] = useState(false);
  const [finalshow, setfinalshow] = useState(false);
  const [data, setdata] = useState(0);
  const show = () => {
    setIsShow(true);
  };

  const get = (num) => {
    setdata(num);
    setfinalshow(true);
  };

  const again = () => {
    setIsShow(false);
    setfinalshow(false);
  };

  return (
    <div className=" bg-slate-800  min-h-screen pb-6 md:py-9 bg-fixed flex false w-full ">
      {!IsShow && <FirstPage show={show} />}
      {IsShow && !finalshow && <SecondPage get={get} />}
      {finalshow && <FinalPage data={data} again={again} />}
    </div>
  );
}

export default App;
