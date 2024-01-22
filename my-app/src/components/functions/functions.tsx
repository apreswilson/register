import './functions.css';

function Functions() {
  return (
    <div className="functions">
      <div className="header-bar">
        <p>Functions</p>
      </div>
      <div className="buttons-container">
        <div className="button" id="coupon">
          <p>Coupon</p>
        </div>
        <div className="button" id="cancel">
          <p>Cancel</p>
        </div>
        <div className="button" id="void">
          <p>Void</p>
        </div>
        <div className="button" id="manager">
          <p>Manager</p>
        </div>
        <div className="button" id="no-sale">
          <p>No sale</p>
        </div>
        <div className="button" id="cash">
          <p>Cash</p>
        </div>
      </div>
    </div>
  )
}

export default Functions;