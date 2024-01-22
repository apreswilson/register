import './list.css';

function List() {
  return (
    <div className="list">
      <div className="head-bar">
        <p>Items</p>
      </div>
      <div className="items-display">
        <table className="display-table">
          <tr className="table-head-row">
            <th>Item</th>
            <th>Price</th>
            <th>Tax</th>
            <th>Quantity</th>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
          </tr>
          <tr className="body-row">
            <td className="name">Apple</td>
            <td className="cost">$1.50</td>
            <td className="tax">N/A</td>
            <td className="quantity">
              <input type="number" className="quantity" name="quantity" placeholder="1" min="0" max="100" />
            </td>
            <td className="remove">X</td>
          </tr>
          <tr className="body-row">
            <td className="name">Apple</td>
            <td className="cost">$1.50</td>
            <td className="tax">N/A</td>
            <td className="quantity">
              <input type="number" className="quantity" name="quantity" placeholder="1" min="0" max="100" />
            </td>
            <td className="remove">X</td>
          </tr>
          <tr className="body-row">
            <td className="name">Apple</td>
            <td className="cost">$1.50</td>
            <td className="tax">N/A</td>
            <td className="quantity">
              <input type="number" className="quantity" name="quantity" placeholder="1" min="0" max="100" />
            </td>
            <td className="remove">X</td>
          </tr>
          <tr className="body-row">
            <td className="name">Apple</td>
            <td className="cost">$1.50</td>
            <td className="tax">N/A</td>
            <td className="quantity">
              <input type="number" className="quantity" name="quantity" placeholder="1" min="0" max="100" />
            </td>
            <td className="remove">X</td>
          </tr>
          <tr className="body-row">
            <td className="name">Apple</td>
            <td className="cost">$1.50</td>
            <td className="tax">N/A</td>
            <td className="quantity">
              <input type="number" className="quantity" name="quantity" placeholder="1" min="0" max="100" />
            </td>
            <td className="remove">X</td>
          </tr>
          <tr className="body-row">
            <td className="name">Apple</td>
            <td className="cost">$1.50</td>
            <td className="tax">N/A</td>
            <td className="quantity">
              <input type="number" className="quantity" name="quantity" placeholder="1" min="0" max="100" />
            </td>
            <td className="remove">X</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default List;