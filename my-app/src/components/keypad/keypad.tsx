import './keypad.css';

function Keypad() {
  return (
    <div className="keypad">
      <div className="numpad">
        <div className="number">
          <p id="one">1</p>
        </div>
        <div className="number">
          <p id="two">2</p>
        </div>
        <div className="number">
          <p id="three">3</p>
        </div>
        <div className="number">
          <p id="four">4</p>
        </div>
        <div className="number">
          <p id="five">5</p>
        </div>
        <div className="number">
          <p id="six">6</p>
        </div>
        <div className="number">
          <p id="seven">7</p>
        </div>
        <div className="number">
          <p id="eight">8</p>
        </div>
        <div className="number">
          <p id="nine">9</p>
        </div>
        <div className="number">
          <p id="zero">0</p>
        </div>
        <div className="number">
          <p id="back-one">&lt;</p>
        </div>
        <div className="number">
          <p id="clear">C</p>
        </div>
      </div>
      <div className="order-details">
        <div className="top-bar">
          <p>Summary</p>
        </div>
        <div className="values">
          <p id="subtotal">Subtotal: $25.00</p>
          <p id="tax">Tax: $5.00</p>
          <p id="savings">Saved: $10.00</p>
          <p id="grandtotal">Total: $30.00</p>
          <p id="till">Till: $400.00</p>
        </div>
        <div className="payment">
          <p>Pay</p>
        </div>
      </div>
    </div>
  )
}

export default Keypad;