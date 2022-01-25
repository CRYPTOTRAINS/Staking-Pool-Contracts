import './Presale.css';
import backgroundImage from '../../../assets/images/fondoNFTPresale.png';
import approve from '../../../assets/images/approve.png';
import loading from '../../../assets/images/loading.png';

export const Presale = () => {
  return (
    <main>
      <img className="bg" src={backgroundImage} alt="background" />
      <h1 className="presale-header">NFT PRESALE</h1>
      <section className="time-cards">
        <article className="card days">
          <p className="number">00</p>
          <p className="reminder">DAYS</p>
        </article>
        <article className="card days">
          <p className="number">00</p>
          <p className="reminder">HOURS</p>
        </article>
        <article className="card days">
          <p className="number">00</p>
          <p className="reminder">MINUTES</p>
        </article>
        <article className="card days">
          <p className="number">00</p>
          <p className="reminder">SECONDS</p>
        </article>
      </section>
      <section className="presale-main">
        <article className="presale-img">
          <div className="presale-main-items">
            <p className="quantity">QUANTITY: 10000</p>
            <button className="approve">
              <img src={approve} alt="approve button" />
            </button>
            <p className="congrats">congrats your wallet is whitelisted</p>
            <div className="sales-progress">
              <p className="sales-progress-text">SALE PROGRESS</p>
              <img src={loading} alt="sales progress loading" />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};
