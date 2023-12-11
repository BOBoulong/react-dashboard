function Customer() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>អតិថិជន</h3>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Akram</td>
              <td>21</td>
              <td>Male</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jason</td>
              <td>22</td>
              <td>Male</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Dave</td>
              <td>20</td>
              <td>Female</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Tom</td>
              <td>20</td>
              <td>Male</td>
            </tr>
            <tr>
              <th>5</th>
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

export default Customer;
