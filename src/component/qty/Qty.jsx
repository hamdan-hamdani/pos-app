// css
import style from "./Qty.module.css";

// component
import Input from "../input/Input";

const Qty = () => {
  return (
    <div className={style.containerCustom}>
      <div className={`${style.minus}`}>-</div>
      <div className={`${style.qtyInput}`}>
        <Input placeholder="1" className="inputQty" />
      </div>
      <div className={`${style.plus}`}>+</div>
    </div>
  );
};

export default Qty;
