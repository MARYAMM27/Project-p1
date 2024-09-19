const Screen1 = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Nutrition</h1>

      {/* Why Nutrition Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Why Nutrition?</h2>
        <p>
          Nutrition is essential for maintaining a healthy body and mind. The food you eat provides the energy and nutrients your body needs to function properly. Good nutrition supports your overall well-being, helps maintain a healthy weight, boosts the immune system, and reduces the risk of chronic diseases.
        </p>
      </section>

      {/* What is Nutrition Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2>What is Nutrition?</h2>
        <p>
          Nutrition is the study of how food affects the health and performance of the body. It involves understanding the components of food, such as vitamins, minerals, proteins, carbohydrates, and fats, and how they work together to keep the body healthy. Proper nutrition ensures that your body gets all the essential nutrients it needs for growth, repair, and energy.
        </p>
      </section>

      {/* How to Maintain Nutrition Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2>How to Maintain Good Nutrition?</h2>
        <p>
          To maintain good nutrition, focus on consuming a balanced diet that includes:
        </p>
        <ul>
          <li>Fruits and vegetables</li>
          <li>Whole grains</li>
          <li>Lean proteins (such as fish, chicken, and legumes)</li>
          <li>Healthy fats (like nuts, seeds, and olive oil)</li>
          <li>Plenty of water to stay hydrated</li>
        </ul>
        <p>
          Limiting processed foods, sugars, and unhealthy fats is also crucial to ensure you meet your nutritional needs while reducing the risk of diseases such as heart disease, diabetes, and obesity.
        </p>
      </section>

      {/* Exercises for a Healthy Lifestyle Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2>Exercises for a Healthy Lifestyle</h2>
        <p>
          Exercise, along with good nutrition, is vital for maintaining health. Here are some effective exercises to include in your daily routine:
        </p>
        <ul>
          <li><strong>Walking/Running:</strong> Great for cardiovascular health and burning calories.</li>
          <li><strong>Strength Training:</strong> Builds muscle and strengthens bones.</li>
          <li><strong>Yoga:</strong> Improves flexibility, balance, and reduces stress.</li>
          <li><strong>Swimming:</strong> A full-body workout that’s easy on the joints.</li>
          <li><strong>Stretching:</strong> Helps to prevent injury and keeps your muscles flexible.</li>
        </ul>
        <p>
          Aim to exercise for at least 30 minutes a day, combining cardio, strength training, and flexibility exercises for optimal health.
        </p>
      </section>
    </div>
  );
};

export default Screen1;
