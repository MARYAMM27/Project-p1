import { useNavigate } from "react-router-dom";
import auth from "./firebase";
import "../Styles/Dashboard.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Nutrition Dashboard</h1>

      <section className="nutrition-info">
        <h2>Importance of Nutrition</h2>
        <p>
          Nutrition plays a crucial role in maintaining health and well-being. A
          balanced diet provides the necessary vitamins, minerals, and nutrients
          that help your body function properly. Eating a variety of
          nutrient-rich foods ensures that you meet your daily energy and
          nutritional requirements.
        </p>
      </section>

      <section className="nutrition-table">
        <h2>Food Nutrients Table</h2>
        <table>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Calories (kcal)</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Carbohydrates (g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple</td>
              <td>52</td>
              <td>0.3</td>
              <td>0.2</td>
              <td>14</td>
            </tr>
            <tr>
              <td>Chicken Breast (100g)</td>
              <td>165</td>
              <td>31</td>
              <td>3.6</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Broccoli (100g)</td>
              <td>34</td>
              <td>2.8</td>
              <td>0.4</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Almonds (28g)</td>
              <td>161</td>
              <td>6</td>
              <td>14</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Salmon (100g)</td>
              <td>208</td>
              <td>20</td>
              <td>13</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Banana (118g)</td>
              <td>105</td>
              <td>1.3</td>
              <td>0.4</td>
              <td>27</td>
            </tr>
            <tr>
              <td>Spinach (100g)</td>
              <td>23</td>
              <td>2.9</td>
              <td>0.4</td>
              <td>3.6</td>
            </tr>
            <tr>
              <td>Egg (large)</td>
              <td>72</td>
              <td>6.3</td>
              <td>4.8</td>
              <td>0.6</td>
            </tr>
            <tr>
              <td>Oats (100g)</td>
              <td>389</td>
              <td>16.9</td>
              <td>6.9</td>
              <td>66.3</td>
            </tr>
            <tr>
              <td>Avocado (100g)</td>
              <td>160</td>
              <td>2</td>
              <td>15</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="logout-container">
        <div className="horizontal-line" />
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
