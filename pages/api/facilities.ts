import type { NextApiRequest, NextApiResponse } from 'next';

export type Facility = {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  available: boolean;
};

type FacilitiesResponse = {
  success: boolean;
  data: {
    campus: {
      totalArea: string;
      location: string;
      established: string;
    };
    facilities: Facility[];
  };
  message?: string;
};

const facilitiesData = {
  campus: {
    totalArea: '600 acres',
    location: 'Prime location with excellent connectivity',
    established: '2005',
  },
  facilities: [
    {
      id: '1',
      name: 'Central Library',
      category: 'Academic',
      description: 'State-of-the-art library with vast collection of books and digital resources',
      features: [
        '5 lakh+ books',
        'Digital library access',
        'Research journals',
        'Study rooms',
        '24/7 access',
      ],
      available: true,
    },
    {
      id: '2',
      name: 'Sports Complex',
      category: 'Sports',
      description: 'World-class sports facilities for various indoor and outdoor games',
      features: [
        'Olympic-size swimming pool',
        'Cricket stadium',
        'Basketball courts',
        'Badminton courts',
        'Gymnasium',
        'Football field',
      ],
      available: true,
    },
    {
      id: '3',
      name: 'Hostels',
      category: 'Accommodation',
      description: 'Comfortable and secure hostel accommodation for students',
      features: [
        'Separate boys and girls hostels',
        '24/7 security',
        'Wi-Fi enabled',
        'Mess facility',
        'Common rooms',
        'Laundry service',
      ],
      available: true,
    },
    {
      id: '4',
      name: 'Research Labs',
      category: 'Academic',
      description: 'Advanced laboratories for research and practical learning',
      features: [
        'Computer labs with latest software',
        'Science labs',
        'Engineering workshops',
        'Innovation center',
        'Incubation center',
      ],
      available: true,
    },
    {
      id: '5',
      name: 'Medical Center',
      category: 'Healthcare',
      description: '24/7 medical facility with qualified doctors and staff',
      features: [
        'Emergency services',
        'General consultation',
        'Pharmacy',
        'Ambulance service',
      ],
      available: true,
    },
    {
      id: '6',
      name: 'Cafeteria & Food Courts',
      category: 'Dining',
      description: 'Multiple dining options with hygienic food preparation',
      features: [
        'Multi-cuisine options',
        'Vegetarian & non-vegetarian',
        'Healthy meal options',
        'Affordable pricing',
      ],
      available: true,
    },
    {
      id: '7',
      name: 'Auditorium',
      category: 'Infrastructure',
      description: 'Modern auditorium for events and cultural activities',
      features: [
        'Seating capacity: 2000+',
        'Audio-visual equipment',
        'Air-conditioned',
        'Stage facilities',
      ],
      available: true,
    },
    {
      id: '8',
      name: 'Transportation',
      category: 'Transport',
      description: 'Bus service covering major routes in the city',
      features: [
        'GPS-enabled buses',
        'Safe and comfortable',
        'Multiple routes',
        'Affordable fares',
      ],
      available: true,
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FacilitiesResponse>
) {
  if (req.method === 'GET') {
    try {
      res.status(200).json({
        success: true,
        data: facilitiesData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: {
          campus: {
            totalArea: '',
            location: '',
            established: '',
          },
          facilities: [],
        },
        message: 'Internal server error',
      });
    }
  } else {
    res.status(405).json({
      success: false,
      data: {
        campus: {
          totalArea: '',
          location: '',
          established: '',
        },
        facilities: [],
      },
      message: 'Method not allowed',
    });
  }
}

