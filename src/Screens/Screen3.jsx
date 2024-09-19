const Screen3 = () => (
  <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
    <h1>About Nutrition</h1>

    {/* Where Can We Get Protein From? Section */}
    <section style={{ marginBottom: '30px' }}>
      <h2>Where Can We Get Protein From?</h2>
      <p>
        Protein is essential for muscle repair, growth, and overall health.
        You can get protein from a variety of sources including:
      </p>
      <ul>
        <li>Lean meats like chicken, turkey, and beef</li>
        <li>Fish and seafood like salmon, tuna, and shrimp</li>
        <li>Plant-based sources like beans, lentils, tofu, and quinoa</li>
        <li>Dairy products such as yogurt, milk, and cheese</li>
        <li>Nuts and seeds like almonds, chia seeds, and peanuts</li>
        <li>Eggs, which are a complete source of protein</li>
      </ul>
    </section>

    {/* Where Can We Get Carbohydrates From? Section */}
    <section style={{ marginBottom: '30px' }}>
      <h2>Where Can We Get Carbohydrates From?</h2>
      <p>
        Carbohydrates are the body&#39;s primary source of energy.
        Here are some healthy sources of carbohydrates:
      </p>
      <ul>
        <li>Whole grains like brown rice, quinoa, oats, and whole wheat</li>
        <li>Fruits such as apples, bananas, and berries</li>
        <li>Vegetables like sweet potatoes, carrots, and broccoli</li>
        <li>Legumes such as beans, lentils, and peas</li>
        <li>Low-fat dairy products including milk and yogurt</li>
      </ul>
    </section>

    {/* Macro vs Micro Nutrients Section */}
    <section style={{ marginBottom: '30px' }}>
      <h2>What is the Difference Between Macro and Micro Nutrients?</h2>
      <p>
        Nutrients are classified into two main categories: macronutrients and micronutrients.
      </p>
      <p>
        <strong>Macronutrients</strong>
        {' '}
        are nutrients that your body needs in large amounts
        to provide energy and support bodily functions. The three macronutrients are:
      </p>
      <ul>
        <li>Proteins</li>
        <li>Carbohydrates</li>
        <li>Fats</li>
      </ul>
      <p>
        <strong>Micronutrients</strong>
        {' '}
        are nutrients that your body needs in smaller amounts,
        but they are still vital for overall health. These include:
      </p>
      <ul>
        <li>Vitamins (e.g., Vitamin C, Vitamin D, and Vitamin B12)</li>
        <li>Minerals (e.g., Calcium, Iron, and Magnesium)</li>
      </ul>
      <p>
        Both macronutrients and micronutrients are crucial for maintaining a healthy body,
        with macronutrients providing energy and micronutrients supporting various functions
        such as immunity, bone health, and energy production.
      </p>
    </section>
  </div>
);

export default Screen3;
