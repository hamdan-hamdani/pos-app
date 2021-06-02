import "./Card.css";
import Button from "../button/Button";
import { useHistory } from "react-router";
const Card = ({ className = "", img, data, push }) => {
  const history = useHistory();

  const handlePush = (linkPush) => {
    history.push(linkPush);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className={"box-img " + className}>
                  <img src={img} alt="" />
                </div>
                <div className={className === "" ? "description" : "description-left"}>
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                  <div className="box-button" onClick={() => handlePush(push)}>
                    <Button textButton="Lihat Selengkapnya" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
