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
  FaLaptopCode,
  FaDumbbell,
  FaBus,
  FaHospital,
  FaDownload,
  FaCheckCircle
} from 'react-icons/fa';
import axios from 'axios';
import type { Course } from './api/courses';
import type { Facility } from './api/facilities';

export default function LPU() {
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
      setCourses(coursesRes.data.data.slice(0, 6)); // Show first 6 courses
      setFacilities(facilitiesRes.data.data.facilities.slice(0, 6));
      setPlacementStats(placementsRes.data.data.yearWiseStats[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDownloadBrochure = () => {
    // In production, this would download an actual PDF
    alert('Brochure download will start shortly! (Demo Mode)');
  };

  return (
    <>
      <Head>
        <title>Lovely Professional University (LPU) - Admissions 2024-25</title>
        <meta name="description" content="LPU - Indias largest private university. World-class education, 90%+ placements, 200+ programs. Apply now!" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header universityName="Lovely Professional University" />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Lovely Professional University
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Indias Largest Private University with 30,000+ Students from 50+ Countries
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsFeeModalOpen(true)}
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
                  >
                    Check Course-wise Fees
                  </button>
                  <button
                    onClick={handleDownloadBrochure}
                    className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition flex items-center"
                  >
                    <FaDownload className="mr-2" />
                    Download Brochure
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <FaGraduationCap className="text-4xl mb-2" />
                  <h3 className="text-3xl font-bold">30,000+</h3>
                  <p className="text-blue-100">Students</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <FaBook className="text-4xl mb-2" />
                  <h3 className="text-3xl font-bold">200+</h3>
                  <p className="text-blue-100">Programs</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <FaTrophy className="text-4xl mb-2" />
                  <h3 className="text-3xl font-bold">90%</h3>
                  <p className="text-blue-100">Placement</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <FaBuilding className="text-4xl mb-2" />
                  <h3 className="text-3xl font-bold">850+</h3>
                  <p className="text-blue-100">Recruiters</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">About LPU</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Lovely Professional University (LPU) is one of Indias largest and most prestigious private universities, 
                located in Punjab. Established in 2005, LPU has quickly become a leader in higher education with its 
                commitment to academic excellence, research, and innovation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The university offers over 200 programs across various disciplines including Engineering, Management, 
                Law, Design, Agriculture, and more. With a sprawling 600-acre campus, LPU provides world-class 
                infrastructure, modern laboratories, and state-of-the-art facilities.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <FaCheckCircle className="text-blue-600 text-3xl mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">UGC Approved</h3>
                  <p className="text-sm text-gray-600">Recognized by University Grants Commission</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <FaCheckCircle className="text-blue-600 text-3xl mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">NAAC A+ Grade</h3>
                  <p className="text-sm text-gray-600">Accredited with highest grade</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <FaCheckCircle className="text-blue-600 text-3xl mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Global Recognition</h3>
                  <p className="text-sm text-gray-600">Partnerships with 200+ universities worldwide</p>
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
                    <FaGraduationCap className="text-blue-600 text-3xl mr-3" />
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
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                View All Courses & Fees
              </button>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-16 bg-white">
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
                  <div key={facility.id} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                    <Icon className="text-blue-600 text-4xl mb-4" />
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
        <section id="placements" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Placement Highlights {placementStats?.year}</h2>
            {placementStats && (
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">{placementStats.placementPercentage}%</h3>
                  <p className="text-blue-100">Placement Rate</p>
                </div>
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">₹{(placementStats.highestPackage / 100000).toFixed(1)}L</h3>
                  <p className="text-blue-100">Highest Package</p>
                </div>
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">₹{(placementStats.averagePackage / 100000).toFixed(1)}L</h3>
                  <p className="text-blue-100">Average Package</p>
                </div>
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">{placementStats.studentsPlaced}+</h3>
                  <p className="text-blue-100">Students Placed</p>
                </div>
              </div>
            )}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Top Recruiters</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {placementStats?.topRecruiters.map((recruiter: string, idx: number) => (
                  <div key={idx} className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
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
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-blue-600 text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cultural Events</h3>
                <p className="text-gray-600">
                  Regular fests, cultural programs, and events throughout the year. Students from diverse backgrounds create a vibrant campus atmosphere.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaDumbbell className="text-blue-600 text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sports & Recreation</h3>
                <p className="text-gray-600">
                  Olympic-size swimming pool, cricket stadium, basketball courts, and more. Active sports culture with regular tournaments.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLaptopCode className="text-blue-600 text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation & Research</h3>
                <p className="text-gray-600">
                  State-of-the-art labs, incubation center, and research facilities. Encouraging students to innovate and create.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <LeadForm universityName="Lovely Professional University (LPU)" />
            </div>
          </div>
        </section>

        <Footer universityName="Lovely Professional University" />

        {/* Fee Modal */}
        <FeeModal isOpen={isFeeModalOpen} onClose={() => setIsFeeModalOpen(false)} />
      </div>
    </>
  );
}

