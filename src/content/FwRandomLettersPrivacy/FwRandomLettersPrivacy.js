import "./FwRandomLettersPrivacy.scss";

const FwRandomLettersPrivacy = (props) => {
  return (
    <div className="FwRandomLettersPrivacy__container">
      <div className="FwRandomLettersPrivacy__content">
        <h2>Datenschutz: Random Letters App</h2>
        <p>
          Die App "Random Letters" erfasst oder verarbeitet keine Nutzerdaten.
          Die App stellt keine Verbindungen zu externen Servern her, also
          bleiben alle Daten und Einstellungen der App auf Ihrem Endgerät.
          Bei Fragen zum Datenschutz der App wenden Sie sich an: flo@flowei.tech.
        </p>
      </div>
    </div>
  );
};

export default FwRandomLettersPrivacy;
