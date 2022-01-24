import './StakeItem.css';
import Button from '../../common/Button/Button';

const StakeItem = (prop) => {
  const { image, name, apr, min, max, lockdays, handleOnClick } = prop;

  
  return (
    <main className="stake">
      <img src={image} alt="banco" />
      <section className="item-container">
        <article className="item">
          Name: <span className="name">{name}</span>
        </article>
        <article className="item">
          APR: <span className="apr">{apr}</span>
        </article>
        <article className="item">
          Min: <span className="min">{min}</span>
        </article>
        <article className="item">
          Max: <span className="min">{max}</span>
        </article>
        <article className="item">
          Lock Days: <span className="lockdays">{lockdays}</span>
        </article>
        {/* <article className="item">
          Status: <span className="status">{status}</span>
        </article> */}
      </section>
      <Button handleOnClick={handleOnClick} />
    </main>
  );
};

export default StakeItem;
