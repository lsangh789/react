import Main from "./pages/main";
import Gnb from "./pages/main/components/Gnb";

const Page = (props) => {
  const {children} = props;
  return (
    <div id="root">
      <Gnb />
      <div className="container" style={{width:"480px"}}>
        {children}
      </div>
    </div>
  );
}

export default Page;
