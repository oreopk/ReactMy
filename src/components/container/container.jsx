import style from './style.module.css';
import colors from '../../colors.module.css';
import Card from '../card/card';
const Container = ({ children, title, color, icon, cards }) => {
  return (
    <div className={style.container + ' ' + colors[color]}>
      <div className={style.header}>{title}</div>
      <div>
        {cards.map((card, index) => (
          <Card
            key={index}
            itemname={card.itemname}
            status={card.status}
            color={color}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
