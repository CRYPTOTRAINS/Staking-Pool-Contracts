import './Presale.css';
import backgroundImage from '../../../assets/images/fondoNFTPresale.png';

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
      <section className='presale-main'>
        <article className="presale-img"></article>
      </section>
    </main>
  );
};
