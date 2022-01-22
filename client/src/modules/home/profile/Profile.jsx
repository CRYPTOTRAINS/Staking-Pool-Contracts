import './Profile.css';
// import coin from '../../../assets/images/coin.png';
// import profile from '../../../assets/images/profile.png';

const Profile = () => {
  return (
    <main className="profile">
      <div className="coin-img">
        <div className="coins">0</div>
      </div>
      <div className="account-img">
        <div className="accounts">Account</div>
      </div>
      {/* <>
        <img src={coin} alt="coins" />
        <div className="coins">0</div>
      </>
      <>
        <img src={profile} alt="profile" />
        <div className="account">George</div>
      </> */}
    </main>
  );
};

export default Profile;
