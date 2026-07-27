import React, { useState } from 'react';
import { 
  Stethoscope, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Award, 
  GraduationCap, 
  Activity, 
  CheckCircle2, 
  ShieldAlert, 
  FileText, 
  ChevronRight, 
  ChevronDown,
  X, 
  Sparkles,
  HeartPulse,
  Syringe,
  Microscope,
  HelpCircle,
  AlertCircle,
  Send,
  Camera,
  Maximize2,
  Eye,
  Menu
} from 'lucide-react';

import drPortrait from './assets/images/Dr-G-Venkatraman.jpg';
import drDesk1 from './assets/images/dr-venkatraman-desk-1.jpg';
import drDesk2 from './assets/images/dr-venkatraman-desk-2.jpg';
import proc1 from './assets/images/endoscopy-procedure-1.jpg';
import proc2 from './assets/images/endoscopy-procedure-2.jpg';
import proc3 from './assets/images/endoscopy-procedure-3.jpg';
import procSuite from './assets/images/endoscopy-suite-overview.jpg';

export default function App() {
  const [activeLocationTab, setActiveLocationTab] = useState('all');
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCallMenuOpen, setIsCallMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Clinical Photo Gallery State
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  // NAFLD Risk Quiz State
  const [riskAnswers, setRiskAnswers] = useState({
    overweight: null,
    fatigue: null,
    diabetes: null,
    alcohol: null
  });
  const [riskResult, setRiskResult] = useState(null);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    patientName: '',
    phone: '',
    email: '',
    location: 'Team Speciality Hospital, Pudukkottai',
    service: 'General OP Consultation',
    preferredDate: '',
    preferredTime: 'Morning Slot',
    notes: '',
    whatsappConsent: true
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Location Data
  const locations = {
    pudukkottai: {
      id: 'pudukkottai',
      name: 'Team Speciality Hospital',
      city: 'Pudukkottai (Main Center)',
      address: 'Opp. New Bus Stand, Pudukkottai',
      tamilName: 'டீம் ஸ்பெஷாலிட்டி ஹாஸ்பிடல், புதுக்கோட்டை',
      opHours: '11.00 AM to 5.00 PM (Mon, Wed, Sat)',
      scopyHours: '6.30 AM to 9.00 AM (Thu, Sun)',
      phones: ['9092569256', '9750972222'],
      badge: 'Main Practice Center • Senior Consultant'
    },
    trichy: {
      id: 'trichy',
      name: 'Kauvery Hospital',
      city: 'Tennur, Trichy',
      address: 'Tennur, Tiruchirappalli, Tamil Nadu',
      tamilName: 'காவேரி மருத்துவமனை, தென்னூர், திருச்சி',
      opHours: '8.00 AM to 10.00 AM (Mon, Wed, Sat) | 8.00 AM to 1.00 PM (Tue, Fri)',
      scopyHours: 'Prior Appointment Basis',
      phones: ['0431-4077777', '0431-4022555'],
      badge: 'Consultant Gastroenterologist & Hepatologist'
    }
  };

  // Weekly Schedule Matrix
  const scheduleData = {
    Monday: [
      { hospital: 'Kauvery Hospital, Trichy', type: 'OP Consultation', time: '8.00 AM - 10.00 AM', status: 'Active' },
      { hospital: 'Team Speciality Hospital, Pudukkottai', type: 'OP Consultation', time: '11.00 AM - 5.00 PM', status: 'Active' }
    ],
    Tuesday: [
      { hospital: 'Kauvery Hospital, Trichy', type: 'OP Consultation (Extended)', time: '8.00 AM - 1.00 PM', status: 'Active' }
    ],
    Wednesday: [
      { hospital: 'Kauvery Hospital, Trichy', type: 'OP Consultation', time: '8.00 AM - 10.00 AM', status: 'Active' },
      { hospital: 'Team Speciality Hospital, Pudukkottai', type: 'OP Consultation', time: '11.00 AM - 5.00 PM', status: 'Active' }
    ],
    Thursday: [
      { hospital: 'Team Speciality Hospital, Pudukkottai', type: 'Scopy & Endoscopy Procedures', time: '6.30 AM - 9.00 AM', status: 'Scopy Day' }
    ],
    Friday: [
      { hospital: 'Kauvery Hospital, Trichy', type: 'OP Consultation (Extended)', time: '8.00 AM - 1.00 PM', status: 'Active' }
    ],
    Saturday: [
      { hospital: 'Kauvery Hospital, Trichy', type: 'OP Consultation', time: '8.00 AM - 10.00 AM', status: 'Active' },
      { hospital: 'Team Speciality Hospital, Pudukkottai', type: 'OP Consultation', time: '11.00 AM - 5.00 PM', status: 'Active' }
    ],
    Sunday: [
      { hospital: 'Team Speciality Hospital, Pudukkottai', type: 'Scopy & Endoscopy Procedures', time: '6.30 AM - 9.00 AM', status: 'Scopy Day' }
    ]
  };

  // Clinical Gallery Images Data
  const galleryImages = [
    {
      id: 1,
      src: drPortrait,
      title: 'Dr. G. Venkatraman',
      subtitle: 'Senior Consultant Gastroenterologist',
      category: 'consultation',
      tag: 'Doctor Profile',
      desc: 'Senior Consultant Interventional Gastroenterologist & Hepatologist with 20+ years of clinical experience across Trichy & Pudukkottai.'
    },
    {
      id: 2,
      src: drDesk1,
      title: 'Outpatient Consultation Suite',
      subtitle: 'Patient Evaluation & Consultation',
      category: 'consultation',
      tag: 'OP Consultation',
      desc: 'Dedicated consultation room for comprehensive patient evaluation, acid reflux diagnosis, and liver health guidance.'
    },
    {
      id: 3,
      src: proc1,
      title: 'Diagnostic Upper GI Endoscopy',
      subtitle: 'Live Endoscopy Procedure',
      category: 'procedures',
      tag: 'Live Procedure',
      desc: 'Real-time endoscopic visualization of upper digestive tract performed with state-of-the-art video monitor displays.'
    },
    {
      id: 4,
      src: proc2,
      title: 'Therapeutic Endoscopic Banding & EVL',
      subtitle: 'Advanced Gastro Intervention',
      category: 'procedures',
      tag: 'Therapeutic Scopy',
      desc: 'Emergency and therapeutic banding of esophageal varices and stricture interventions under strict clinical standards.'
    },
    {
      id: 5,
      src: proc3,
      title: 'Endoscopy Room Instrumentation',
      subtitle: 'Advanced Luminal Suite',
      category: 'suite',
      tag: 'Modern Equipment',
      desc: 'High-definition video endoscopy processors, vital signs monitoring, and standardized scope disinfection systems.'
    },
    {
      id: 6,
      src: drDesk2,
      title: 'Hepatology & Fatty Liver Clinic',
      subtitle: 'Liver Disease Management',
      category: 'consultation',
      tag: 'Liver Care',
      desc: 'Expert care for Non-Alcoholic Fatty Liver Disease (NAFLD), hepatitis management, and preventive hepatology.'
    },
    {
      id: 7,
      src: procSuite,
      title: 'Endoscopy Suite & Patient Care',
      subtitle: 'Specialized Nursing & Support',
      category: 'suite',
      tag: 'Suite Overview',
      desc: 'Patient-centric procedure suite with trained endoscopy nursing staff ensuring high standards of safety and care.'
    }
  ];

  // Procedures with Real Suite Photos
  const procedures = [
    {
      title: 'Upper GI Endoscopy',
      subtitle: 'உணவுக்குழாய், இரைப்பை, சிறுகுடல் அகநோக்கி',
      desc: 'Precision visual evaluation of esophagus, stomach, and duodenum for acid reflux, ulcers, and GI bleeding.',
      icon: Microscope,
      image: proc1
    },
    {
      title: 'Colonoscopy',
      subtitle: 'பெருங்குடல் அக நோக்கி',
      desc: 'Complete endoscopic examination of large intestine for polyps, inflammation, bleeding, and lower GI disorders.',
      icon: Activity,
      image: proc2
    },
    {
      title: 'ERCP (Biliary & Pancreatic)',
      subtitle: 'பித்தக் குழாய் மற்றும் கணையக் குழாய் அகநோக்கி',
      desc: 'Endoscopic Retrograde Cholangiopancreatography for removing bile duct stones and relieving obstructive jaundice.',
      icon: Syringe,
      image: procSuite
    },
    {
      title: 'Stricture Dilatation & Stenting',
      subtitle: 'சுருக்கம் அகற்றல் மற்றும் விரிவிப்பான் பொருத்தம்',
      desc: 'Advanced luminal stenting and dilatation for swallow difficulties, esophageal strictures, and bile duct blockages.',
      icon: Stethoscope,
      image: proc2
    },
    {
      title: 'Polypectomy',
      subtitle: 'புற்றுநோய் இல்லா கட்டி அகற்றல்',
      desc: 'Safe in-procedure removal of gastrointestinal polyps to prevent malignant transformation.',
      icon: HeartPulse,
      image: proc3
    },
    {
      title: 'Hepatology & NAFLD Liver Care',
      subtitle: 'கல்லீரல் நோய் & கொழுப்பு கல்லீரல்',
      desc: 'Comprehensive care for Non-Alcoholic Fatty Liver Disease (NAFLD), hepatitis, liver fibrosis, and cirrhosis.',
      icon: Award,
      image: drDesk2
    }
  ];

  // FAQs
  const faqs = [
    {
      q: 'Where does Dr. G. Venkatraman consult?',
      a: 'Dr. Venkatraman consults at Kauvery Hospital in Tennur, Trichy (Mon, Wed, Sat 8:00–10:00 AM & Tue, Fri 8:00 AM–1:00 PM) and Team Speciality Hospital in Pudukkottai (Mon, Wed, Sat 11:00 AM–5:00 PM).'
    },
    {
      q: 'When are Endoscopy and Colonoscopy procedures performed?',
      a: 'Routine diagnostic and therapeutic scopy procedures are performed at Team Speciality Hospital Pudukkottai on Thursdays and Sundays from 6:30 AM to 9:00 AM, and at Kauvery Hospital Trichy on prior appointment schedule.'
    },
    {
      q: 'What prep is needed before an Upper GI Endoscopy?',
      a: 'Patients must fast (no food or water) for 6 to 8 hours prior to the procedure. Clear pre-procedure instructions are provided upon booking.'
    },
    {
      q: 'How can I book an appointment?',
      a: 'You can book directly using the online form on this website or by calling Pudukkottai helpline (9750972222) or Trichy helpline (0431-4077777 / 0431-4022555).'
    }
  ];

  const handleOpenModal = (locationName) => {
    if (locationName) {
      setBookingForm(prev => ({ ...prev, location: locationName }));
    }
    setIsModalOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const calculateRisk = () => {
    let score = 0;
    if (riskAnswers.overweight === 'yes') score += 2;
    if (riskAnswers.fatigue === 'yes') score += 1;
    if (riskAnswers.diabetes === 'yes') score += 2;
    if (riskAnswers.alcohol === 'regular') score += 2;

    if (score >= 4) {
      setRiskResult({ level: 'High Risk', text: 'Multiple risk factors detected for Non-Alcoholic Fatty Liver Disease (NAFLD). Clinical liver evaluation with Dr. Venkatraman is strongly recommended.', color: '#DC2626' });
    } else if (score >= 2) {
      setRiskResult({ level: 'Moderate Risk', text: 'Moderate risk indicators present. Preventive diet modifications and routine liver function checkups are advised.', color: '#D97706' });
    } else {
      setRiskResult({ level: 'Low Risk', text: 'Low immediate risk. Maintain a balanced diet, active lifestyle, and routine wellness checkups.', color: '#16A34A' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Top Emergency & Announcement Header */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-contacts">
            <span>Direct Helplines:</span>
            <a href="tel:9092569256" className="top-contact-link">Pudukkottai: 9092569256 / 9750972222</a>
            <span style={{ opacity: 0.5 }}>|</span>
            <a href="tel:04314077777" className="top-contact-link">Trichy: 0431-4077777</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="brand-logo">
            <div className="logo-icon-bg">
              <HeartPulse size={28} strokeWidth={2.5} />
            </div>
            <div>
              <div className="brand-name">Dr. G. Venkatraman</div>
              <div className="brand-subtitle">Team Speciality Hospital (Pudukkottai) & Kauvery Hospital (Trichy)</div>
            </div>
          </a>

          <div className="nav-actions-container" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <ul className="nav-links" style={{ margin: 0 }}>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#locations" className="nav-link">Locations</a></li>
              <li><a href="#schedule" className="nav-link">OP Schedule</a></li>
              <li><a href="#procedures" className="nav-link">Procedures</a></li>
              <li><a href="#gallery" className="nav-link">Clinical Gallery</a></li>
              <li><a href="#prep" className="nav-link">Scopy Prep</a></li>
              <li><a href="#research" className="nav-link">NAFLD Research</a></li>
            </ul>

            <div className="call-dropdown-container" style={{ position: 'relative' }} onMouseLeave={() => setIsCallMenuOpen(false)}>
              <button className="btn btn-primary" onClick={() => setIsCallMenuOpen(!isCallMenuOpen)} style={{ whiteSpace: 'nowrap' }}>
                <Phone size={18} /> <span className="hide-mobile">Direct Call</span> <ChevronDown size={16} />
              </button>
              {isCallMenuOpen && (
                <div className="call-dropdown-menu">
                  <a href="tel:9092569256" className="call-dropdown-item">
                    <div className="call-loc">Pudukkottai (Team Speciality - Main)</div>
                    <div className="call-num">9092569256 / 9750972222</div>
                  </a>
                  <a href="tel:04314077777" className="call-dropdown-item">
                    <div className="call-loc">Trichy (Kauvery Hospital)</div>
                    <div className="call-num">0431-4077777</div>
                  </a>
                </div>
              )}
            </div>

            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-nav-menu">
            <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#locations" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Locations</a>
            <a href="#schedule" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>OP Schedule</a>
            <a href="#procedures" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Procedures</a>
            <a href="#gallery" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Clinical Gallery</a>
            <a href="#prep" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Scopy Prep</a>
            <a href="#research" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>NAFLD Research</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="about">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge-tag">
                <HeartPulse size={16} /> Advanced Diagnostics & Therapeutics
              </div>
              
              <h1 className="hero-title">Consultant Gastroenterologist & Hepatologist</h1>
              <div style={{ fontSize: '0.95rem', color: 'var(--secondary)', fontWeight: '700', marginBottom: '16px', lineHeight: 1.3 }}>
                இரைப்பை, குடல், கல்லீரல் மற்றும் கணைய நோய் சிறப்பு மருத்துவர்
              </div>
              
              <div className="hero-doctor-card">
                <img src={drPortrait} alt="Dr. G. Venkatraman" className="hero-doctor-avatar" />
                <div>
                  <div className="hero-doctor-name" style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A', lineHeight: 1.2 }}>Dr. G. Venkatraman, MD, DM</div>
                  <div className="hero-doctor-title" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '2px' }}>
                    Consultant Gastroenterologist and Hepatologist
                  </div>
                  <div className="hero-doctor-hospitals" style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700', marginTop: '2px' }}>
                    Team Speciality Hospital Pudukkottai & Kauvery Hospital Trichy
                  </div>
                </div>
              </div>
              
              <p className="hero-subtitle">
                Comprehensive care for digestive health, liver diseases, pancreatic disorders, and advanced endoscopic procedures across <strong>Pudukkottai</strong> and <strong>Trichy</strong>.
              </p>

              <div className="hero-cta-group">
                <a href="#locations" className="btn btn-outline-blue">
                  <MapPin size={18} /> View Hospital Schedules
                </a>
                <a href="#procedures" className="btn btn-outline-blue">
                  <Activity size={18} /> Explore Procedures
                </a>
              </div>
            </div>

            {/* Quick Booking Widget */}
            <div className="quick-booking-widget">
              <div className="booking-widget-header">
                <Calendar size={32} className="booking-widget-icon" />
                <div>
                  <h3 className="booking-widget-title">Book Appointment</h3>
                  <p className="booking-widget-desc">Select your preferred location</p>
                </div>
              </div>
              
              <div className="booking-location-buttons">
                <button className="btn btn-primary booking-btn" onClick={() => handleOpenModal('Team Speciality Hospital, Pudukkottai')}>
                  <div className="btn-content">
                    <span className="btn-loc-title">Pudukkottai (Main Center)</span>
                    <span className="btn-loc-sub">Team Speciality Hospital</span>
                  </div>
                  <ChevronRight size={20} />
                </button>
                
                <button className="btn btn-outline-blue booking-btn" onClick={() => handleOpenModal('Kauvery Hospital, Tennur, Trichy')}>
                  <div className="btn-content">
                    <span className="btn-loc-title">Trichy</span>
                    <span className="btn-loc-sub">Kauvery Hospital</span>
                  </div>
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="booking-trust-signals">
                <div className="trust-signal">
                  <CheckCircle2 size={16} /> 20+ Yrs Exp
                </div>
                <div className="trust-signal">
                  <CheckCircle2 size={16} /> 15k+ Procedures
                </div>
                <div className="trust-signal">
                  <CheckCircle2 size={16} /> Modern Scopy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Locations Section */}
      <section className="section section-bg-white" id="locations">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Dual Practice Locations</span>
            <h2 className="section-title">OP Consultation & Scopy Timings</h2>
            <p className="section-subtitle">
              Equal access for patients in Trichy and Pudukkottai with dedicated OP hours and morning procedure slots.
            </p>
          </div>

          <div className="location-tabs">
            <button className={`tab-btn ${activeLocationTab === 'all' ? 'active' : ''}`} onClick={() => setActiveLocationTab('all')}>
              All Practice Centers
            </button>
            <button className={`tab-btn ${activeLocationTab === 'pudukkottai' ? 'active' : ''}`} onClick={() => setActiveLocationTab('pudukkottai')}>
              Pudukkottai (Team Speciality - Main)
            </button>
            <button className={`tab-btn ${activeLocationTab === 'trichy' ? 'active' : ''}`} onClick={() => setActiveLocationTab('trichy')}>
              Trichy (Kauvery Hospital)
            </button>
          </div>

          <div className="location-cards-grid">
            {/* Team Speciality Hospital Pudukkottai - MAIN CENTER */}
            {(activeLocationTab === 'all' || activeLocationTab === 'pudukkottai') && (
              <div className="location-card">
                <div className="location-card-header secondary-header">
                  <span className="location-badge">Location 1 • Main Practice Center</span>
                  <h3 className="hospital-name">{locations.pudukkottai.name}</h3>
                  <div className="hospital-address">
                    <MapPin size={16} /> {locations.pudukkottai.address}
                  </div>
                </div>

                <div className="location-card-body">
                  <div style={{ fontSize: '0.85rem', color: '#00A99D', fontWeight: '700' }}>
                    {locations.pudukkottai.tamilName}
                  </div>

                  <div className="timing-block">
                    <div className="timing-header">
                      <Clock size={18} color="#00A99D" /> OP Consultation Hours
                    </div>
                    <div className="timing-details">
                      <strong>Mon, Wed, Sat:</strong> 11.00 AM to 5.00 PM
                    </div>
                  </div>

                  <div className="timing-block scopy-block">
                    <div className="timing-header">
                      <Activity size={18} color="#00A99D" /> Scopy & Procedure Timings
                    </div>
                    <div className="timing-details">
                      <strong>Thursday & Sunday:</strong> 6.30 AM to 9.00 AM
                    </div>
                  </div>

                  <div className="phone-action-box">
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1F2937' }}>Appointment Helpdesk Numbers:</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <a href="tel:9092569256" className="phone-btn" style={{ background: '#E6F7F5', color: '#00A99D' }}>
                        <Phone size={14} /> 9092569256
                      </a>
                      <a href="tel:9750972222" className="phone-btn" style={{ background: '#E6F7F5', color: '#00A99D' }}>
                        <Phone size={14} /> 9750972222
                      </a>
                    </div>
                  </div>

                  <button className="btn btn-secondary-teal" style={{ width: '100%', marginTop: 'auto' }} onClick={() => handleOpenModal('Team Speciality Hospital, Pudukkottai')}>
                    Book at Team Speciality Hospital
                  </button>
                </div>
              </div>
            )}

            {/* Kauvery Hospital Trichy */}
            {(activeLocationTab === 'all' || activeLocationTab === 'trichy') && (
              <div className="location-card">
                <div className="location-card-header primary-header">
                  <span className="location-badge">Location 2 • Trichy</span>
                  <h3 className="hospital-name">{locations.trichy.name}</h3>
                  <div className="hospital-address">
                    <MapPin size={16} /> {locations.trichy.address}
                  </div>
                </div>

                <div className="location-card-body">
                  <div style={{ fontSize: '0.85rem', color: '#0066CC', fontWeight: '700' }}>
                    {locations.trichy.tamilName}
                  </div>

                  <div className="timing-block">
                    <div className="timing-header">
                      <Clock size={18} color="#0066CC" /> OP Consultation Hours
                    </div>
                    <div className="timing-details">
                      <strong>Mon, Wed, Sat:</strong> 8.00 AM to 10.00 AM<br />
                      <strong>Tue, Fri:</strong> 8.00 AM to 1.00 PM (Extended)
                    </div>
                  </div>

                  <div className="phone-action-box">
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1F2937' }}>Appointment Helpdesk:</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <a href="tel:04314077777" className="phone-btn">
                        <Phone size={14} /> 0431-4077777
                      </a>
                      <a href="tel:04314022555" className="phone-btn">
                        <Phone size={14} /> 0431-4022555
                      </a>
                    </div>
                  </div>

                  <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }} onClick={() => handleOpenModal('Kauvery Hospital, Tennur, Trichy')}>
                    Book at Kauvery Hospital
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Weekly OP Schedule Finder */}
          <div className="schedule-calc-box" id="schedule">
            <div className="calc-grid">
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px' }}>
                  📅 Weekly OP Schedule Finder
                </h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '20px' }}>
                  Select a day of the week to check Dr. Venkatraman's exact location & procedure times.
                </p>

                <div className="day-selector-list">
                  {Object.keys(scheduleData).map(day => (
                    <button 
                      key={day} 
                      className={`day-btn ${selectedDay === day ? 'active' : ''}`}
                      onClick={() => setSelectedDay(day)}
                    >
                      <span>{day}</span>
                      <ChevronRight size={16} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="schedule-result-card">
                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#38BDF8', fontWeight: '700', marginBottom: '12px' }}>
                  Doctor Availability on {selectedDay}s
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {scheduleData[selectedDay].map((slot, index) => (
                    <div key={index} style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#ffffff', marginBottom: '4px' }}>
                        {slot.hospital}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                        <span>⏰ {slot.time}</span>
                        <span style={{ background: slot.status === 'Scopy Day' ? '#D97706' : '#16A34A', color: '#fff', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
                          {slot.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handleOpenModal()}>
                    Reserve Slot for {selectedDay}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="section" id="procedures">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Clinical Excellence</span>
            <h2 className="section-title">Specialized Procedures & Interventions</h2>
            <p className="section-subtitle">
              State-of-the-art diagnostic endoscopies and advanced therapeutic gastrointestinal procedures.
            </p>
          </div>

          <div className="procedures-grid">
            {procedures.map((proc, idx) => {
              const IconComp = proc.icon;
              return (
                <div className="procedure-card" key={idx}>
                  {proc.image && (
                    <div className="proc-card-img-wrapper">
                      <img src={proc.image} alt={proc.title} className="proc-card-img" />
                    </div>
                  )}
                  <div className="proc-icon-box">
                    <IconComp size={26} />
                  </div>
                  <h3 className="proc-title">{proc.title}</h3>
                  <div style={{ fontSize: '0.8rem', color: '#00A99D', fontWeight: '700', marginBottom: '10px' }}>
                    {proc.subtitle}
                  </div>
                  <p className="proc-desc">{proc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinical Photo Gallery & Facilities Section */}
      <section className="section section-bg-white" id="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-tag"><Camera size={14} style={{ display: 'inline', marginRight: '6px' }} /> Clinical Facilities & Procedure Suite</span>
            <h2 className="section-title">In-Action Clinical Photo Gallery</h2>
            <p className="section-subtitle">
              Explore Dr. G. Venkatraman's consultation suites, modern endoscopy procedure rooms, and live clinical care.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="location-tabs" style={{ marginBottom: '32px' }}>
            <button 
              className={`tab-btn ${activeGalleryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveGalleryFilter('all')}
            >
              All Photos ({galleryImages.length})
            </button>
            <button 
              className={`tab-btn ${activeGalleryFilter === 'consultation' ? 'active' : ''}`}
              onClick={() => setActiveGalleryFilter('consultation')}
            >
              Doctor & Consultation
            </button>
            <button 
              className={`tab-btn ${activeGalleryFilter === 'procedures' ? 'active' : ''}`}
              onClick={() => setActiveGalleryFilter('procedures')}
            >
              Procedures In Action
            </button>
            <button 
              className={`tab-btn ${activeGalleryFilter === 'suite' ? 'active' : ''}`}
              onClick={() => setActiveGalleryFilter('suite')}
            >
              Procedure Suite & Facilities
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {(activeGalleryFilter === 'all' 
              ? galleryImages 
              : galleryImages.filter(img => img.category === activeGalleryFilter)
            ).map((item) => (
              <div key={item.id} className="gallery-card" onClick={() => setLightboxImage(item)}>
                <div className="gallery-img-wrapper">
                  <img src={item.src} alt={item.title} className="gallery-img" />
                  <div className="gallery-badge-overlay">{item.tag}</div>
                  <div className="gallery-hover-overlay">
                    <div className="gallery-zoom-btn">
                      <Maximize2 size={18} />
                      <span>View High-Res Photo</span>
                    </div>
                  </div>
                </div>
                <div className="gallery-card-content">
                  <div className="gallery-subtitle">{item.subtitle}</div>
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Procedure Patient Prep Guide */}
      <section className="section section-bg-white" id="prep">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Patient Care & Guidelines</span>
            <h2 className="section-title">Pre-Procedure Preparation Guide</h2>
            <p className="section-subtitle">
              Important instructions for patients scheduled for morning scopy (6:30 AM – 9:00 AM) or routine procedures.
            </p>
          </div>

          <div className="instructions-grid">
            <div className="prep-card">
              <div className="prep-step-num">1</div>
              <h4 style={{ fontWeight: '800', fontSize: '1.05rem', marginBottom: '6px' }}>Strict Fasting Rule</h4>
              <p style={{ fontSize: '0.88rem', color: '#4B5563', lineHeight: '1.5' }}>
                Do not eat or drink anything (including water) for <strong>6 to 8 hours prior</strong> to your scheduled Upper GI Endoscopy or Colonoscopy procedure.
              </p>
            </div>

            <div className="prep-card">
              <div className="prep-step-num">2</div>
              <h4 style={{ fontWeight: '800', fontSize: '1.05rem', marginBottom: '6px' }}>Medication Review</h4>
              <p style={{ fontSize: '0.88rem', color: '#4B5563', lineHeight: '1.5' }}>
                Inform Dr. Venkatraman if you take blood thinners, blood pressure, or diabetes medications to receive specific dosage instructions.
              </p>
            </div>

            <div className="prep-card">
              <div className="prep-step-num">3</div>
              <h4 style={{ fontWeight: '800', fontSize: '1.05rem', marginBottom: '6px' }}>Accompanying Attendant</h4>
              <p style={{ fontSize: '0.88rem', color: '#4B5563', lineHeight: '1.5' }}>
                Please bring an adult family member or attendant with you to assist after the sedated endoscopy procedure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Clinical Spotlight: NAFLD */}
      <section className="section" id="research">
        <div className="container">
          <div className="research-banner">
            <div>
              <div className="research-tag">
                <FileText size={14} /> Research Spotlight
              </div>
              <h2 className="research-title">Non-Alcoholic Fatty Liver Disease (NAFLD)</h2>
              <p className="research-text">
                Dr. G. Venkatraman has presented seminal research papers on <strong>Non-Alcoholic Fatty Liver Disease (NAFLD)</strong>, focusing on early liver fibrosis detection, lifestyle intervention, and preventive hepatology.
              </p>

              <button className="btn btn-primary" onClick={() => handleOpenModal()}>
                Schedule Liver Screening
              </button>
            </div>

            {/* Interactive Risk Assessment Quiz */}
            <div className="quiz-card">
              <h4 className="quiz-question">🔍 Fatty Liver Risk Self-Check</h4>
              <p style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '14px' }}>
                Answer 2 quick questions to assess your risk factors:
              </p>

              <div style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '4px' }}>Overweight or Body Fat Concern?</div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <button className={`quiz-option-btn ${riskAnswers.overweight === 'yes' ? 'selected' : ''}`} onClick={() => setRiskAnswers(prev => ({...prev, overweight: 'yes'}))}>Yes</button>
                <button className={`quiz-option-btn ${riskAnswers.overweight === 'no' ? 'selected' : ''}`} onClick={() => setRiskAnswers(prev => ({...prev, overweight: 'no'}))}>No</button>
              </div>

              <div style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '4px' }}>Diabetic / High Blood Sugar?</div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                <button className={`quiz-option-btn ${riskAnswers.diabetes === 'yes' ? 'selected' : ''}`} onClick={() => setRiskAnswers(prev => ({...prev, diabetes: 'yes'}))}>Yes</button>
                <button className={`quiz-option-btn ${riskAnswers.diabetes === 'no' ? 'selected' : ''}`} onClick={() => setRiskAnswers(prev => ({...prev, diabetes: 'no'}))}>No</button>
              </div>

              <button className="btn btn-primary" style={{ width: '100%', fontSize: '0.85rem', padding: '8px' }} onClick={calculateRisk}>
                Check Risk Tier
              </button>

              {riskResult && (
                <div style={{ marginTop: '14px', padding: '10px', borderRadius: '8px', background: '#F8FAFC', borderLeft: `4px solid ${riskResult.color}` }}>
                  <div style={{ fontWeight: '700', fontSize: '0.85rem', color: riskResult.color }}>{riskResult.level}</div>
                  <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '2px' }}>{riskResult.text}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-bg-white" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Common Patient Queries</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div className="faq-item" key={idx}>
                <button 
                  className="faq-question-btn"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} style={{ transform: openFaqIndex === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {openFaqIndex === idx && (
                  <div className="faq-answer-box">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="modal-title">Book Doctor Appointment</h3>
                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Dr. G. Venkatraman (Gastroenterologist)</div>
              </div>
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{ width: '60px', height: '60px', background: '#F0FDF4', color: '#16A34A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1F2937', marginBottom: '8px' }}>Appointment Request Received!</h3>
                  <p style={{ fontSize: '0.9rem', color: '#4B5563', marginBottom: '20px' }}>
                    Thank you, <strong>{bookingForm.patientName}</strong>. Our hospital reception team at <strong>{bookingForm.location}</strong> will call you shortly to confirm your slot.
                  </p>

                  <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>Close Window</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  {/* Hospital Choice */}
                  <div className="form-group">
                    <label className="form-label">Select Practice Location</label>
                    <div className="radio-tiles-group">
                      <div 
                        className={`radio-tile ${bookingForm.location.includes('Kauvery') ? 'active' : ''}`}
                        onClick={() => setBookingForm(prev => ({...prev, location: 'Kauvery Hospital, Tennur, Trichy'}))}
                      >
                        <div className="radio-tile-title">Kauvery Hospital</div>
                        <div className="radio-tile-sub">Tennur, Trichy</div>
                      </div>

                      <div 
                        className={`radio-tile ${bookingForm.location.includes('Pudukkottai') ? 'active' : ''}`}
                        onClick={() => setBookingForm(prev => ({...prev, location: 'Team Speciality Hospital, Pudukkottai'}))}
                      >
                        <div className="radio-tile-title">Team Speciality Hospital</div>
                        <div className="radio-tile-sub">Opp. New Bus Stand, Pudukkottai</div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Patient Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-control" 
                        placeholder="Enter full name"
                        value={bookingForm.patientName}
                        onChange={(e) => setBookingForm({...bookingForm, patientName: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        className="form-control" 
                        placeholder="10-digit mobile number"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Service Required</label>
                      <select 
                        className="form-control"
                        value={bookingForm.service}
                        onChange={(e) => setBookingForm({...bookingForm, service: e.target.value})}
                      >
                        <option value="General OP Consultation">General OP Consultation</option>
                        <option value="Upper GI Endoscopy">Upper GI Endoscopy</option>
                        <option value="Colonoscopy">Colonoscopy</option>
                        <option value="Fatty Liver Checkup">Fatty Liver & Hepatology Check</option>
                        <option value="ERCP / Stenting">ERCP / Stenting</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Preferred Date</label>
                      <input 
                        type="date" 
                        className="form-control"
                        value={bookingForm.preferredDate}
                        onChange={(e) => setBookingForm({...bookingForm, preferredDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Symptoms / Medical Notes</label>
                    <textarea 
                      className="form-control" 
                      rows="2" 
                      placeholder="Acid reflux, stomach pain, liver concern..."
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({...bookingForm, notes: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                    <Send size={18} /> Confirm Booking Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Photo Lightbox Modal */}
      {lightboxImage && (
        <div className="modal-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)} title="Close preview">
              <X size={22} />
            </button>
            
            <div className="lightbox-image-container">
              <img src={lightboxImage.src} alt={lightboxImage.title} className="lightbox-img" />
            </div>

            <div className="lightbox-details">
              <div className="gallery-badge-overlay" style={{ position: 'static', display: 'inline-block', marginBottom: '10px' }}>
                {lightboxImage.tag}
              </div>
              <h3 className="lightbox-title">{lightboxImage.title}</h3>
              <p className="lightbox-desc">{lightboxImage.desc}</p>

              <div className="lightbox-actions">
                <button className="btn btn-primary" onClick={() => { setLightboxImage(null); handleOpenModal(); }}>
                  <Calendar size={16} /> Book Consultation with Dr. Venkatraman
                </button>
                <button className="btn btn-outline-blue" onClick={() => setLightboxImage(null)}>
                  Close Photo Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Bar */}
      <div className="mobile-sticky-bar">
        <a href="tel:04314077777" className="btn btn-outline-blue" style={{ flex: 1, padding: '10px' }}>
          <Phone size={16} /> Call Trichy
        </a>
        <button className="btn btn-primary" style={{ flex: 1, padding: '10px' }} onClick={() => handleOpenModal()}>
          <Calendar size={16} /> Book Appt
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-title">Dr. G. Venkatraman</div>
              <p style={{ fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                Senior Consultant Interventional Gastroenterologist & Hepatologist (MBBS, MD, DM). Expert diagnostic endoscopy, colonoscopy, ERCP, EVL, and fatty liver disease specialist.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ background: '#1E293B', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', color: '#38BDF8' }}>
                  🎓 MMC Alumnus
                </span>
                <span style={{ background: '#1E293B', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', color: '#4ADE80' }}>
                  🏥 Trichy & Pudukkottai
                </span>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', marginBottom: '14px' }}>Practice Centers</h4>
              <ul className="footer-link-list">
                <li><a href="#locations" className="footer-link">Kauvery Hospital, Trichy (0431-4077777)</a></li>
                <li><a href="#locations" className="footer-link">Team Speciality Hospital, Pudukkottai (9750972222)</a></li>
                <li><a href="#schedule" className="footer-link">Weekly OP Consultation Schedule</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', marginBottom: '14px' }}>Procedures</h4>
              <ul className="footer-link-list">
                <li><a href="#procedures" className="footer-link">Upper GI Endoscopy (குடல் பரிசோதனை)</a></li>
                <li><a href="#procedures" className="footer-link">Colonoscopy & Polypectomy (பெருங்குடல் பரிசோதனை)</a></li>
                <li><a href="#procedures" className="footer-link">ERCP & Biliary Stenting (பித்தநாள சிகிச்சை)</a></li>
                <li><a href="#research" className="footer-link">NAFLD & Fatty Liver Care (கல்லீரல் சிகிச்சை)</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Dr. G. Venkatraman - Senior Consultant Interventional Gastroenterologist. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bar */}
      <div 
        className="mobile-sticky-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: '#ffffff',
          padding: '12px 16px',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.25)',
          zIndex: 999999,
          display: 'flex',
          justifyContent: 'space-between',
          gap: '12px',
          borderTop: '1px solid #e2e8f0'
        }}
      >
        <a href="tel:9092569256" className="btn btn-outline-blue" style={{ flex: 1, padding: '10px 8px', fontSize: '0.85rem', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
          <Phone size={16} /> Call Pudukkottai
        </a>
        <button className="btn btn-primary" style={{ flex: 1, padding: '10px 8px', fontSize: '0.85rem', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }} onClick={() => setIsModalOpen(true)}>
          <Calendar size={16} /> Book Appt
        </button>
      </div>
    </div>
  );
}
