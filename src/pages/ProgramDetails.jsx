import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star } from 'lucide-react';
import './Home.css'; // Reuse some styles

const programData = {
  'baby-care': {
    title: 'Baby Care',
    heroHeading: 'More Than Just a Nursery—A Place to Thrive.',
    age: '12 - 18 Months',
    image: '/media/DSC06038-opt.jpg',
    desc: 'At First Path Daycare in Calmar, our Baby Care program focuses on rapid development and critical bonding through a "Primary Caregiving" model. By pairing your infant with a dedicated educator, we build a secure, loving foundation. Our "shoes-off" infant room provides a clean, safe space for tummy time, crawling, and first steps. To ensure a stress-free transition, we also closely mirror your home routine for naps and feeding schedules.',
    cards: [
      { title: 'Sensory-Rich Play', desc: 'We use soft textures, musical instruments, and visual stimuli to spark neural connections and cognitive growth.' },
      { title: 'Physical Milestones', desc: 'Dedicated spaces for tummy time and equipment that encourages pulling up, reaching, and grasping.' },
      { title: 'Primary Caregivers', desc: 'Your baby will have a consistent face to look at, building the trust necessary for healthy social-emotional development.' },
      { title: 'Daily Digital Logs', desc: 'Receive real-time updates via our app regarding feedings, diaper changes, naps, and photos of your baby\'s daily activities.' }
    ],
    faqs: [
      { q: 'How do you handle breast milk or formula feedings?', a: 'We have dedicated storage for expressed breast milk and formula. Our staff are trained in the proper handling and warming techniques to ensure your baby is fed according to your specific instructions.' },
      { q: 'Will my baby follow a group schedule?', a: 'No. We believe infants should follow their own biological clock. We work with you to maintain the feeding and nap schedule you have already established at home.' },
      { q: 'What do I need to provide?', a: 'Parents are asked to provide diapers, wipes, any specific creams, changes of clothes, and bottles/food. We provide the love, the learning, and the safe environment!' },
      { q: 'How do you soothe a crying baby?', a: 'Our educators use gentle techniques including rocking, soft singing, and sensory distraction. Because of our primary care model, our teachers quickly learn your baby’s unique "cues" and what comforts them best.' }
    ]
  },
  'toddler-care': {
    title: 'Toddler Care',
    heroHeading: 'Supporting the "Age of Discovery".',
    age: '18 Months - 3 Years',
    image: '/media/DSC06042-opt.jpg',
    desc: 'The toddler years are a whirlwind of growth, and First Path Daycare provides an environment that says "Yes!" to exploration. Our Calmar facility balances structured routines with the freedom for 18-to-36-month-olds to choose their activities. We embrace their growing independence by teaching everyday self-help skills. As "co-explorers," our educators guide toddlers as they navigate big emotions, build their first friendships, and discover the power of their own voices.',
    cards: [
      { title: 'Language Explosion', desc: 'Through daily storytime, singing, and phonetic games, we help toddlers expand their vocabulary and express their needs clearly.' },
      { title: 'Social-Emotional Coaching', desc: 'We focus on "gentle guidance," helping toddlers learn the art of sharing, empathy, and identifying their big feelings.' },
      { title: 'Creative Arts & Sensory', desc: 'From finger painting to play-dough and water tables, we provide daily opportunities for "messy play" that builds fine motor skills.' },
      { title: 'Physical Literacy', desc: 'Our indoor and outdoor play areas allow toddlers to climb, jump, and run, developing the gross motor skills essential for their age.' }
    ],
    faqs: [
      { q: 'How do you handle "the terrible twos" or big tantrums?', a: 'We view "big feelings" as learning opportunities. Our staff uses positive redirection and "time-in" (sitting with the child) to help them calm down and find the words for their frustration. We never use "time-outs" or punishment.' },
      { q: 'Does my child need to be potty trained to enter the toddler program?', a: 'Not at all! We meet your child where they are. Whether they are in diapers, pull-ups, or starting to use the toilet, we provide full support and encouragement throughout the process.' },
      { q: 'What is a typical day like for a toddler?', a: 'Every day includes a mix of "Circle Time" (songs and stories), small group activities (art/science), plenty of outdoor play, a nutritious lunch, and a dedicated afternoon nap/quiet time.' },
      { q: 'How do you ensure safety for active toddlers?', a: 'Our furniture is child-sized and rounded, our toys are age-appropriate and frequently sanitized, and our educators maintain a constant "active supervision" stance to prevent accidents before they happen.' }
    ]
  },
  'pre-school': {
    title: 'Pre-School',
    heroHeading: 'Where Curiosity Meets Discovery',
    age: '3 - 4.5 Years',
    image: '/media/DSC06066-opt.jpg',
    desc: 'In our Pre-School program at First Path Daycare, we transition from simple to purposeful play. Our Calmar classroom acts as a "Third Teacher," offering open-ended materials that encourage children to research, ask questions, and solve problems. We also strongly focus on social-emotional growth, guiding children through collaborative play and negotiation. By building these essential soft skills, our preschoolers leave not just ready for school, but ready for the world.',
    cards: [
      { title: 'Early Literacy & Phonics', desc: 'We introduce letter sounds and recognition through storytelling, journaling, and interactive games—making reading an exciting adventure.' },
      { title: 'STEM Foundations', desc: 'Science, Technology, Engineering, and Math are integrated into daily play, from building complex structures to observing nature in our outdoor space.' },
      { title: 'Executive Functioning', desc: 'We help children develop focus, memory, and self-control through multi-step activities and daily classroom responsibilities.' },
      { title: 'Artistic Inquiry', desc: 'More than just "crafts," we encourage children to use various media (paint, clay, light, and shadow) to express their ideas and theories.' }
    ],
    faqs: [
      { q: 'Is there a curriculum you follow?', a: 'Yes! We use the Alberta Flight Framework, which is a play-based curriculum focused on the holistic development of the child. We combine this with structured activities in literacy and numeracy to ensure a well-rounded experience.' },
      { q: 'How do you handle conflict between children?', a: 'We use a "Problem-Solving" approach. Instead of just stopping a conflict, we help the children involved talk through their feelings, identify the problem, and brainstorm a solution that works for everyone. This builds lifelong emotional intelligence.' },
      { q: 'Do children get outdoor time?', a: 'Daily! We believe fresh air and physical movement are essential for brain development. Our preschoolers enjoy our secure outdoor play area every day, weather permitting.' },
      { q: 'How will I know what my child is learning?', a: 'We provide "Pedagogical Documentation." This means you’ll receive photos and short stories about your child\'s learning journeys, explaining not just what they did, but what they learned through that activity.' }
    ]
  },
  'after-school': {
    title: 'After School Care (OSC)',
    heroHeading: 'The "First Path" After School Care Experience',
    age: '4.5 - 12 Years',
    image: '/media/DSC06070-opt.jpg',
    desc: 'Transitioning to Grade 1 is a major milestone. Our Calmar-based Kindergarten and Out of School Care program bridges the gap between play and formal schooling by mimicking classroom routines in a warm, supportive environment. We focus on "how" to learn, fostering a growth mindset and academic pride. By nurturing the whole child, we ensure they enter Elementary School with a backpack full of confidence and a love for discovery.',
    cards: [
      { title: 'Advanced Literacy', desc: 'We move beyond letter recognition into phonics, sight words, and early sentence structure, fostering a genuine love for reading.' },
      { title: 'Mathematical Thinking', desc: 'Using manipulatives (hands-on tools), we introduce concepts of addition, subtraction, patterns, and measurements in a way that makes sense.' },
      { title: 'Social Leadership', desc: 'Kindergarteners and school-age children at First Path are our "senior" students. We give them leadership roles and responsibilities to build self-esteem and community spirit.' },
      { title: 'School Routines', desc: 'We introduce "work periods," following multi-step directions, and organizing personal belongings to make the transition to a 9-to-3 school day seamless.' }
    ],
    faqs: [
      { q: 'How does this program differ from your Pre-School program?', a: 'While both are play-based, the Kindergarten program introduces more "intentional learning." There is a higher focus on desk-based activities, writing stamina, and mathematical logic to ensure they meet or exceed the Alberta Kindergarten curriculum standards.' },
      { q: 'Do you help with the transition to local Calmar schools?', a: 'Yes! We understand the local school landscape. We help prepare children for the specific social and academic expectations of local elementary schools and can provide progress reports to help parents share information with future teachers.' },
      { q: 'What is the focus on "Social Maturity"?', a: 'In Grade 1, children are expected to navigate larger groups with less one-on-one help. We practice "conflict resolution" and "peer mentoring" so our students feel socially capable in a larger school environment.' },
      { q: 'Can my child attend this program part-time?', a: 'We generally recommend a full-time or consistent schedule for our Kindergarteners to benefit from the structured curriculum and social bonding, but please contact us to discuss your family\'s specific needs.' }
    ]
  }
};

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programData[id] || programData['pre-school']; // Fallback
  
  const colors = ['bg-blue', 'bg-purple', 'bg-pink', 'bg-teal', 'bg-orange'];

  return (
    <div className="program-details-page" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Floating Icons */}
      <img src="/media/story_animation_1-1.png" alt="" className="floating-icon delay-1" style={{ top: '15%', left: '3%', width: '80px', opacity: 0.35, zIndex: 0 }} />
      <img src="/media/story_animation_2-1.png" alt="" className="floating-icon delay-2" style={{ top: '40%', right: '4%', width: '75px', opacity: 0.35, zIndex: 0 }} />
      <img src="/media/story_animation_3-1.png" alt="" className="floating-icon delay-3" style={{ bottom: '25%', left: '4%', width: '90px', opacity: 0.35, zIndex: 0 }} />
      <img src="/media/story_animation_4.png" alt="" className="floating-icon delay-4" style={{ top: '65%', right: '5%', width: '85px', opacity: 0.35, zIndex: 0 }} />
      <img src="/media/Graphic.png" alt="" className="floating-icon delay-2" style={{ bottom: '10%', right: '10%', width: '120px', opacity: 0.25, zIndex: 0 }} />

      <div className="page-header program-page-header">
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <h1 className="program-hero-title">{program.title}</h1>
          <h2 className="program-hero-subtitle">{program.heroHeading}</h2>
          <div className="program-age-badge">
            {program.age}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 20px', maxWidth: '1200px' }}>
        <div className="about-program-flex">
          <div className="about-program-text">
            <h2 style={{ color: 'var(--primary-dark)', marginBottom: '20px' }}>About This Program</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              {program.desc}
            </p>
          </div>
          <div className="about-program-img">
            <img src={program.image} alt={program.title} />
          </div>
        </div>

        <h3 style={{ color: 'var(--primary-dark)', marginBottom: '30px', textAlign: 'center', fontSize: '2rem' }}>Program Highlights</h3>
        <div className="features-grid four-col-grid" style={{ marginBottom: '60px' }}>
          {program.cards.map((card, idx) => (
            <div key={idx} className={`feature-card custom-card ${colors[idx % colors.length]}`}>
              <div className="feature-icon"><Star size={32} /></div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {program.faqs && program.faqs.length > 0 && (
          <div className="program-faq" style={{ marginTop: '40px' }}>
            <h3 style={{ color: 'var(--primary-dark)', marginBottom: '30px', textAlign: 'center', fontSize: '2rem' }}>Frequently Asked Questions</h3>
            <div className="faq-list">
              {program.faqs.map((faq, idx) => (
                <details key={idx} className="faq-item">
                  <summary>{faq.q}</summary>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <Link to="/contact" className="btn btn-primary">Enroll Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
