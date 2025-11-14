import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import FeeModal from '@/components/FeeModal';
import { 
  FaGraduationCap, 
  FaBuilding, 
  FaUsers, 
  FaTrophy, 
  FaBook, 
  FaGlobe,
  FaDumbbell,
  FaBus,
  FaHospital,
  FaDownload,
  FaCheckCircle,
  FaFlask
} from 'react-icons/fa';
import axios from 'axios';
import type { Course } from './api/courses';
import type { Facility } from './api/facilities';

export default function Amity() {
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [placementStats, setPlacementStats] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [coursesRes, facilitiesRes, placementsRes] = await Promise.all([
        axios.get('/api/courses'),
        axios.get('/api/facilities'),
        axios.get('/api/placement-stats'),
      ]);
      setCourses(coursesRes.data.data.slice(0, 6));
      setFacilities(facilitiesRes.data.data.facilities.slice(0, 6));
      setPlacementStats(placementsRes.data.data.yearWiseStats[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDownloadBrochure = () => {
    alert('Brochure download will start shortly! (Demo Mode)');
  };

  return (
    <>
      <Head>
        <title>Amity University - Premier Private University | Admissions 2024-25</title>
        <meta name="description" content="Amity University - Premier private university with global partnerships. 150+ programs, excellent placements. Apply now!" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header universityName="Amity University" />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Amity University
                </h1>
                <p className="text-xl mb-8 text-purple-100">
                  Premier Private University with Global Partnerships & World-Class Research Facilities
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsFeeModalOpen(true)}
                    className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition"
                  >
                    Check Course-wise Fees
                  </button>
                  <button
                    onClick={handleDownloadBrochure}
                    className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-900 transition flex items-center"
                  >
                    <FaDownload className="mr-2" />
                    Download Brochure
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <FaGraduationCap className="text-4xl mb-2" />
                  <h3 className="text-3xl font-bold">25,000+</h3>
                  <p className="text-purple-100">Students</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <FaBook className="text-4xl mb-2" />
                  <h3 className="text-3xl font-bold">150+</h3>
                  <p className="text-purple-100">Programs</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <FaTrophy className="text-4xl mb-2" />
                  <h3 className="text-3xl font-bold">85%</h3>
                  <p className="text-purple-100">Placement</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <FaGlobe className="text-4xl mb-2" />
                  <h3 className="text-3xl font-bold">200+</h3>
                  <p className="text-purple-100">Global Partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">About Amity University</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Amity University is one of Indias leading private universities, known for its commitment to academic excellence, 
                cutting-edge research, and strong industry connections. With campuses across India and international presence, 
                Amity offers a truly global educational experience.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The university offers over 150 programs across diverse disciplines including Engineering, Management, Law, 
                Biotechnology, Design, Journalism, and more. Amitys state-of-the-art infrastructure, experienced faculty, 
                and focus on holistic development make it a preferred choice for students.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <FaCheckCircle className="text-purple-600 text-3xl mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">UGC Approved</h3>
                  <p className="text-sm text-gray-600">Recognized by University Grants Commission</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <FaCheckCircle className="text-purple-600 text-3xl mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">NAAC A+ Grade</h3>
                  <p className="text-sm text-gray-600">Highest accreditation grade</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <FaCheckCircle className="text-purple-600 text-3xl mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Global Rankings</h3>
                  <p className="text-sm text-gray-600">Ranked among top private universities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {courses.map((course) => (
                <div key={course.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="flex items-center mb-4">
                    <FaGraduationCap className="text-purple-600 text-3xl mr-3" />
                    <div>
                      <h3 className="font-bold text-lg">{course.name}</h3>
                      <p className="text-sm text-gray-600">{course.duration} • {course.level}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{course.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setIsFeeModalOpen(true)}
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
              >
                View All Courses & Fees
              </button>
            </div>
          </div>
        </section>

        {/* Fees & Scholarships Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Fees & Scholarships</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Affordable Fee Structure</h3>
                  <p className="text-gray-700 mb-4">
                    Competitive fee structure with flexible payment options. EMI facilities available for all programs.
                  </p>
                  <button
                    onClick={() => setIsFeeModalOpen(true)}
                    className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition font-semibold"
                  >
                    View Detailed Fees
                  </button>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Scholarship Programs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                      <span>Merit-based scholarships up to 100%</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                      <span>Sports scholarships for achievers</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                      <span>Need-based financial assistance</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                      <span>Special scholarships for girl students</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">World-Class Facilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {facilities.map((facility) => {
                const icons: { [key: string]: any } = {
                  'Academic': FaBook,
                  'Sports': FaDumbbell,
                  'Accommodation': FaBuilding,
                  'Transport': FaBus,
                  'Healthcare': FaHospital,
                  'Infrastructure': FaBuilding,
                };
                const Icon = icons[facility.category] || FaBuilding;
                
                return (
                  <div key={facility.id} className="bg-white p-6 rounded-lg hover:shadow-lg transition">
                    <Icon className="text-purple-600 text-4xl mb-4" />
                    <h3 className="font-bold text-xl mb-2">{facility.name}</h3>
                    <p className="text-gray-700 text-sm mb-3">{facility.description}</p>
                    <ul className="space-y-1">
                      {facility.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={12} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Placements Section */}
        <section id="placements" className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Placement Highlights {placementStats?.year}</h2>
            {placementStats && (
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">{placementStats.placementPercentage}%</h3>
                  <p className="text-purple-100">Placement Rate</p>
                </div>
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">₹{(placementStats.highestPackage / 100000).toFixed(1)}L</h3>
                  <p className="text-purple-100">Highest Package</p>
                </div>
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">₹{(placementStats.averagePackage / 100000).toFixed(1)}L</h3>
                  <p className="text-purple-100">Average Package</p>
                </div>
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">{placementStats.studentsPlaced}+</h3>
                  <p className="text-purple-100">Students Placed</p>
                </div>
              </div>
            )}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Top Recruiters</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {placementStats?.topRecruiters.slice(0, 8).map((recruiter: string, idx: number) => (
                  <div key={idx} className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold">
                    {recruiter}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Campus Life Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Campus Life</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-purple-600 text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vibrant Culture</h3>
                <p className="text-gray-600">
                  Annual cultural festivals, tech fests, and student clubs. A diverse community fostering creativity and collaboration.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaFlask className="text-purple-600 text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Research Excellence</h3>
                <p className="text-gray-600">
                  Advanced research facilities and collaboration with global institutions. Encouraging innovation and discovery.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGlobe className="text-purple-600 text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Exposure</h3>
                <p className="text-gray-600">
                  Student exchange programs, international collaborations, and global internship opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Campus Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-video bg-gradient-to-br from-purple-200 to-purple-400 rounded-lg flex items-center justify-center text-white text-xl font-semibold hover:scale-105 transition">
                  Campus Image {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <LeadForm universityName="Amity University" />
            </div>
          </div>
        </section>

        <Footer universityName="Amity University" />

        {/* Fee Modal */}
        <FeeModal isOpen={isFeeModalOpen} onClose={() => setIsFeeModalOpen(false)} />
      </div>
    </>
  );
}

