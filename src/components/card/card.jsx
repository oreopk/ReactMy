import style from './style.module.css';
import colors from '../../colors.module.css';
const Card = ({ itemname, status, icon, color }) => {
  return (
    <div className={style.cardItem}>
      <span className={style.itemName}>{itemname}</span>
      <span className={style.itemStatus + ' ' + colors[color]}>{status}</span>
      {/* Replace with actual image */}
      <img src={icon} alt="" />
    </div>
  );
};

export default Card;
