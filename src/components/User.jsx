function User() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>អ្នកប្រេីប្រាស់</h3>
      </div>
      <div className="product-container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Akram</td>
              <td>21</td>
              <td>Male</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jason</td>
              <td>22</td>
              <td>Male</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Dave</td>
              <td>20</td>
              <td>Female</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Tom</td>
              <td>20</td>
              <td>Male</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Stark</td>
              <td>20</td>
              <td>Male</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default User;
