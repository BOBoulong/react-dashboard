function Product() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ផលិតផល</h3>
      </div>
      <div className="product-container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">លេខកូដ</th>
              <th scope="col">ឈ្មោះផលិតផល</th>
              <th scope="col">ចំនួន</th>
              <th scope="col">តម្លៃ</th>
              <th scope="col">លេខកូដប្រភេទផលិតផល</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>ស្រាបៀរកម្ពុជា</td>
              <td>1</td>
              <td>2500៛</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>បាកាស</td>
              <td>1</td>
              <td>3000៛</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>នំដំឡូងស្រួយ</td>
              <td>1</td>
              <td>2000៛</td>
              <td>4</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>តែបៃតង</td>
              <td>1</td>
              <td>3000៛</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>ស្រាបៀរABC</td>
              <td>1</td>
              <td>6000៛</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>ស្រាបៀរអង្គរ</td>
              <td>1</td>
              <td>3000៛</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>វេីស</td>
              <td>1</td>
              <td>3000៛</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>គ្រុឌ</td>
              <td>1</td>
              <td>3000៛</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Product;
