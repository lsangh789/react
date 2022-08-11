import Report from "./Report";

const PeriodWrap = (props) => {

  const {value} = props;

  return (

    <section className="periodWrap">
      
      <div className="cntTitle">
        조회기간
      </div>
      <div className="inputItems">
        <label className="inputBox">
          <input type="button" value={value} />
        </label>
        <button type="button" className="inputBtn undefined">조회</button>
      </div>
    </section>

  );

};

export default PeriodWrap;