/* eslint-disable react/prop-types */
import "./CardsMain.css";
// eslint-disable-next-line react/prop-types
const CardsMain = ({ panda }) => {
  return (
    <>
      {panda.map((ele) => (
        <>
            <div className="mainCard">
              <div className="card ">
                <div className="headCard">
                  <img src={ele.imagePath} alt="alt" />
                </div>
                <div className="box">
                  <div className="bodyCard ">
                    <h4>{ele.projectTitle}</h4>
                    <p>
                      Lorem ipsum dolor sit, abet consectetur adipisicing edit.
                      Error enid null pisa dignissimos silique? Rerun, laudanum.
                    </p>
                  </div>
                  <div className="footer ">
                    <div className="linkIcon ">
                      <span className="icon-github"></span>
                      <span className="icon-link"></span>
                    </div>
                    <span className="more">
                      more
                      <span className="icon-arrow-right1"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </>
      ))}
    </>
  );
};

export default CardsMain;
