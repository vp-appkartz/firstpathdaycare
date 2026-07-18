const Menu = () => {
  const weekColors = [
    'linear-gradient(135deg, #FF7B54 0%, #E65D39 100%)', // Orange/Red
    'linear-gradient(135deg, #43D8C9 0%, #1FB2A3 100%)', // Teal/Green
    'linear-gradient(135deg, #008ab0 0%, #005f7a 100%)', // Blue
    'linear-gradient(135deg, #FFD460 0%, #F39C12 100%)'  // Yellow/Gold
  ];
  const menuData = [
    {
      week: "Week 1",
      morning: [
        { day: "Mon", items: ["Shreddies + Fruits", "Milk"] },
        { day: "Tue", items: ["Butter/Jam with Bread", "Milk"] },
        { day: "Wed", items: ["Corn Flakes + Banana", "Milk"] },
        { day: "Thu", items: ["Warm Oatmeal", "Milk"] },
        { day: "Fri", items: ["Waffles", "Milk"] }
      ],
      afternoon: [
        { day: "Mon", items: ["Fruits with Cookies/Gold Fish", "Milk"] },
        { day: "Tue", items: ["Cheese with Crackers", "Seasonal Fruit", "Milk"] },
        { day: "Wed", items: ["Munchies", "Apple Sauce", "Milk"] },
        { day: "Thu", items: ["Rice Crispy Square", "Seasonal Fruit", "Milk"] },
        { day: "Fri", items: ["Granola Bar", "Apple", "Milk"] }
      ]
    },
    {
      week: "Week 2",
      morning: [
        { day: "Mon", items: ["Corn Pops + Fruits", "Milk"] },
        { day: "Tue", items: ["Warm Oatmeal", "Milk"] },
        { day: "Wed", items: ["Cheerios", "Milk"] },
        { day: "Thu", items: ["Strawberry Jam/Butter, Bread", "Milk"] },
        { day: "Fri", items: ["Shreddies + Banana", "Milk"] }
      ],
      afternoon: [
        { day: "Mon", items: ["Veggies + Dip", "Crackers", "Milk"] },
        { day: "Tue", items: ["Apple Sauce", "Pretzels", "Milk"] },
        { day: "Wed", items: ["Fruit Salad", "Milk", "Chocolate/Vanilla Pudding"] },
        { day: "Thu", items: ["Oranges", "Milk", "Oatmeal Cookies"] },
        { day: "Fri", items: ["Seasonal Fruit", "Milk"] }
      ]
    },
    {
      week: "Week 3",
      morning: [
        { day: "Mon", items: ["Corn Flakes + Fruits", "Milk"] },
        { day: "Tue", items: ["Whole Wheat Bagels with Jam/Butter", "Milk"] },
        { day: "Wed", items: ["Rice Crispy Cereal", "Milk"] },
        { day: "Thu", items: ["Warm Oatmeal", "Milk"] },
        { day: "Fri", items: ["Cheerios + Banana", "Milk"] }
      ],
      afternoon: [
        { day: "Mon", items: ["Mixed Fruit", "Milk"] },
        { day: "Tue", items: ["Apple Sauce", "Pretzels", "Milk"] },
        { day: "Wed", items: ["Cheese Strings", "Gold Fish", "Milk"] },
        { day: "Thu", items: ["Rice Cakes", "Milk"] },
        { day: "Fri", items: ["Munchies/Muffins", "Milk"] }
      ]
    },
    {
      week: "Week 4",
      morning: [
        { day: "Mon", items: ["Cereal and Fruit", "Milk"] },
        { day: "Tue", items: ["Bread with Butter and Jam", "Milk"] },
        { day: "Wed", items: ["Shreddies + Banana", "Milk"] },
        { day: "Thu", items: ["Warm Oatmeal", "Milk"] },
        { day: "Fri", items: ["Corn Flakes + Banana", "Milk"] }
      ],
      afternoon: [
        { day: "Mon", items: ["Vegetable Mix and Ranch", "Cookies", "Milk"] },
        { day: "Tue", items: ["Granola Bar", "Fruit", "Milk"] },
        { day: "Wed", items: ["Cheese Sticks with Crackers", "Cucumber", "Milk"] },
        { day: "Thu", items: ["Mixed Fruit", "Gold Fish Crackers", "Milk"] },
        { day: "Fri", items: ["Apple Sauce with Cookies", "Milk"] }
      ]
    }
  ];

  return (
    <div className="menu-page animate-up">
      <div className="page-header">
        <div className="container">
          <h1>Healthy Snacks for Every Day</h1>
          <p>
            Explore our thoughtfully planned weekly snack menu created to keep children happy, nourished, and energized throughout the day. Each morning and afternoon snack includes simple, balanced options that support healthy growth, active play, and positive eating habits.
            <br/><br/>
            <i>We always welcome menu selection ideas and suggestions from parents and guardians!</i>
          </p>
        </div>
      </div>
      
      <div className="container" style={{ padding: '0 20px 80px', maxWidth: '1200px', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div style={{ background: 'white', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', padding: '60px', border: '1px solid rgba(0,0,0,0.02)' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {menuData.map((weekData, idx) => (
              <div key={idx} style={{ background: 'var(--bg-main)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ background: weekColors[idx % 4], color: 'white', padding: '10px 20px' }}>
                  <h2 style={{ margin: 0, fontFamily: 'Showpop', letterSpacing: '1px', fontSize: '1.5rem' }}>{weekData.week}</h2>
                </div>
                
                <div style={{ padding: '20px', overflowX: 'auto' }}>
                  <div style={{ minWidth: '800px', display: 'grid', gridTemplateColumns: '140px repeat(5, 1fr)', gap: '12px' }}>
                    
                    {/* Header Row */}
                    <div style={{ padding: '10px' }}></div>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                      <div key={day} style={{ color: 'var(--primary-dark)', fontFamily: 'Showpop', fontSize: '1.1rem', textAlign: 'center', borderBottom: '2px solid rgba(0,0,0,0.05)', paddingBottom: '10px' }}>
                        {day}
                      </div>
                    ))}

                    {/* Morning Snacks Row */}
                    <div style={{ color: 'var(--secondary-color)', fontFamily: 'Showpop', fontSize: '1.1rem', display: 'flex', alignItems: 'center', borderRight: '2px solid rgba(0,0,0,0.05)', paddingRight: '10px' }}>
                      Morning Snacks
                    </div>
                    {weekData.morning.map((day, dIdx) => (
                      <div key={`m-${dIdx}`} style={{ background: 'white', padding: '12px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {day.items.map((item, i) => (
                          <span key={i} style={{ display: 'block', marginBottom: i === day.items.length - 1 ? 0 : '4px' }}>{item}</span>
                        ))}
                      </div>
                    ))}

                    {/* Afternoon Snacks Row */}
                    <div style={{ color: 'var(--secondary-color)', fontFamily: 'Showpop', fontSize: '1.1rem', display: 'flex', alignItems: 'center', borderRight: '2px solid rgba(0,0,0,0.05)', paddingRight: '10px', marginTop: '10px' }}>
                      Afternoon Snacks
                    </div>
                    {weekData.afternoon.map((day, dIdx) => (
                      <div key={`a-${dIdx}`} style={{ background: 'white', padding: '12px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', textAlign: 'center', fontSize: '0.95rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10px' }}>
                        {day.items.map((item, i) => (
                          <span key={i} style={{ display: 'block', marginBottom: i === day.items.length - 1 ? 0 : '4px' }}>{item}</span>
                        ))}
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px', padding: '40px', background: 'linear-gradient(135deg, rgba(255,123,84,0.05) 0%, rgba(67,216,201,0.1) 100%)', borderRadius: '20px', border: '1px solid rgba(67,216,201,0.2)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px', fontFamily: 'Showpop', fontSize: '1.8rem', letterSpacing: '0.5px' }}>Dietary Restrictions?</h3>
            <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', margin: 0, fontFamily: 'Outfit', lineHeight: '1.7' }}>
              Please let us know if your child has any allergies or specific dietary needs so we can accommodate them safely.
            </p>
          </div>

          <div style={{ marginTop: '80px', textAlign: 'left' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Showpop', fontSize: '2.5rem', color: 'var(--primary-dark)' }}>Frequently Asked Questions</h2>
              <p style={{ fontFamily: 'Outfit', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Answers to common questions about our nutrition program.</p>
            </div>
            
            <div className="faq-list">
              {[
                {
                  q: "Do you accommodate food allergies and dietary restrictions?",
                  a: "Yes! We take food allergies very seriously. Please let us know about your child's specific allergies or dietary requirements (vegetarian, halal, etc.) upon enrollment, and we will provide safe and nutritious alternatives."
                },
                {
                  q: "Are the meals prepared on-site?",
                  a: "All our snacks and meals are prepared fresh on-site every day, ensuring the highest standards of hygiene and nutrition for your little ones."
                },
                {
                  q: "What if my child is a picky eater?",
                  a: "Our diverse menu is designed to introduce children to new flavors in a positive environment. We encourage children to try new foods, but we always ensure there is something healthy and familiar they can enjoy."
                },
                {
                  q: "Is milk or water provided with snacks?",
                  a: "Yes, milk is provided with morning and afternoon snacks as part of a balanced diet. Fresh drinking water is always accessible to the children throughout the day."
                }
              ].map((faq, idx) => (
                <details key={idx} className="faq-item">
                  <summary>{faq.q}</summary>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu;
