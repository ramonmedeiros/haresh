import './App.css';
import Guests from './guests';

const App = () => {


  const getGuestName = () => {
    if (window.location.pathname === "/") {
      return ""
    }


    for (let i = 0; i < Guests.length; i++) {
      if (window.location.pathname.includes(Guests[i].url)) {
        return `${Guests[i].person1} and ${Guests[i].person2}`
      }
    }

    return ""
  }

  return (
    <div className="card">

      <h1>Save the date</h1>
      <h2>{getGuestName()}</h2>

      <div className="subtitle">Wedding reception</div>
      <div className="date">07 | JUNE | 2025</div>

      <div className="arch-illustration"></div>

      <div className="couple">Sintuya & Haresh</div>
      <div className="footer">Official invitation to follow</div>
    </div>
  );
};

export default App;
