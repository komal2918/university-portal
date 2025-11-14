import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import type { FeeStructure } from '../pages/api/fees';

interface FeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeeModal: React.FC<FeeModalProps> = ({ isOpen, onClose }) => {
  const [fees, setFees] = useState<FeeStructure[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetchFees();
    }
  }, [isOpen]);

  const fetchFees = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/fees');
      setFees(response.data.data.fees);
    } catch (err) {
      setError('Failed to load fee structure. Please try again.');
      console.error('Error fetching fees:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Course-wise Fee Structure</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition"
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
              {error}
            </div>
          )}

          {!loading && !error && fees.length > 0 && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> The fees mentioned are approximate and may vary based on specialization and other factors. 
                  Please contact admissions for exact details.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {fees.map((fee, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{fee.course}</h3>
                    
                    {/* Fee Range */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Annual Fee Range</p>
                          <p className="text-2xl font-bold text-blue-700">
                            {formatCurrency(fee.min)} - {formatCurrency(fee.max)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Fees */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Additional Fees (Annual)</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Hostel</span>
                          <span className="font-medium">{formatCurrency(fee.additionalFees.hostel)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Library</span>
                          <span className="font-medium">{formatCurrency(fee.additionalFees.library)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Transport</span>
                          <span className="font-medium">{formatCurrency(fee.additionalFees.transport)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Scholarships */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Scholarships Available</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <div>
                            <span className="font-medium">Merit:</span> {fee.scholarships.merit}
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <div>
                            <span className="font-medium">Sports:</span> {fee.scholarships.sports}
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <div>
                            <span className="font-medium">Need-Based:</span> {fee.scholarships.needBased}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Need More Information?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our admissions team is here to help you with detailed fee structure and scholarship information.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="#apply"
                    onClick={onClose}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold"
                  >
                    Apply Now
                  </a>
                  <a
                    href="tel:+911234567890"
                    className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition font-semibold"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeeModal;

