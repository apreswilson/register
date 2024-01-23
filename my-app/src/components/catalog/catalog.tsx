// Updated Catalog.tsx
import './catalog.css';
import catalog from './full-catalog'

//When a user clicks on a section, all items that have that type
//will be appended to the item-container.

const itemClasses: { item: string, item_img: string, item_info: string, item_name: string, item_price: string } = {
  item: "item",
  item_img: "item-img",
  item_info: "item-info",
  item_name: "item-name",
  item_price: "item-price"
}


function Catalog() {
  return (
    <div className="catalog">
      <div className="topbar">
        <div className="section">
          <p>General</p>
        </div>
        <div className="section">
          <p>Produce</p>
        </div>
        <div className="section">
          <p>Meat</p>
        </div>
        <div className="section">
          <p>Pharmacy</p>
        </div>
      </div>
      <div className="item-container">
        <div className={itemClasses.item}>
          <img className={itemClasses.item_img} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrjbvx-b5078bbf-03ff-4625-b214-35c3f9fefc4c.png/v1/fill/w_894,h_894/red_apple_on_a_transparent_background__by_prussiaart_dcrjbvx-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY3JqYnZ4LWI1MDc4YmJmLTAzZmYtNDYyNS1iMjE0LTM1YzNmOWZlZmM0Yy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Y0-7z3OBNt3CbKeZrPiWJFD-4LhVF7I9iC2wADeZEAU" alt="A plain red apple"></img>
          <div className={itemClasses.item_info}>
            <p className={itemClasses.item_name}>Item: Apple</p>
            <p className={itemClasses.item_price}>Price: $1.50</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Catalog;