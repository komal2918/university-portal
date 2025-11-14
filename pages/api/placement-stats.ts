import type { NextApiRequest, NextApiResponse } from 'next';

export type PlacementStats = {
  year: string;
  totalStudents: number;
  studentsPlaced: number;
  placementPercentage: number;
  highestPackage: number;
  averagePackage: number;
  medianPackage: number;
  topRecruiters: string[];
  sectorWisePlacements: {
    sector: string;
    percentage: number;
    averagePackage: number;
  }[];
  packageRanges: {
    range: string;
    count: number;
    percentage: number;
  }[];
};

type PlacementResponse = {
  success: boolean;
  data: {
    university: string;
    overview: {
      totalCompaniesVisited: number;
      internshipOpportunities: number;
      industryConnections: number;
    };
    yearWiseStats: PlacementStats[];
  };
  message?: string;
};

const placementData = {
  university: 'Private University',
  overview: {
    totalCompaniesVisited: 850,
    internshipOpportunities: 5000,
    industryConnections: 1200,
  },
  yearWiseStats: [
    {
      year: '2023-24',
      totalStudents: 3500,
      studentsPlaced: 3150,
      placementPercentage: 90,
      highestPackage: 5400000,
      averagePackage: 650000,
      medianPackage: 550000,
      topRecruiters: [
        'Microsoft',
        'Google',
        'Amazon',
        'TCS',
        'Infosys',
        'Wipro',
        'Deloitte',
        'KPMG',
        'Goldman Sachs',
        'JP Morgan',
      ],
      sectorWisePlacements: [
        {
          sector: 'IT & Software',
          percentage: 45,
          averagePackage: 750000,
        },
        {
          sector: 'Consulting',
          percentage: 20,
          averagePackage: 850000,
        },
        {
          sector: 'Finance & Banking',
          percentage: 15,
          averagePackage: 700000,
        },
        {
          sector: 'Core Engineering',
          percentage: 12,
          averagePackage: 600000,
        },
        {
          sector: 'Others',
          percentage: 8,
          averagePackage: 500000,
        },
      ],
      packageRanges: [
        {
          range: '10+ LPA',
          count: 450,
          percentage: 14,
        },
        {
          range: '7-10 LPA',
          count: 750,
          percentage: 24,
        },
        {
          range: '5-7 LPA',
          count: 1050,
          percentage: 33,
        },
        {
          range: '3-5 LPA',
          count: 900,
          percentage: 29,
        },
      ],
    },
    {
      year: '2022-23',
      totalStudents: 3200,
      studentsPlaced: 2800,
      placementPercentage: 87.5,
      highestPackage: 4800000,
      averagePackage: 600000,
      medianPackage: 520000,
      topRecruiters: [
        'Microsoft',
        'Amazon',
        'TCS',
        'Infosys',
        'Wipro',
        'Accenture',
        'Cognizant',
        'IBM',
      ],
      sectorWisePlacements: [
        {
          sector: 'IT & Software',
          percentage: 48,
          averagePackage: 700000,
        },
        {
          sector: 'Consulting',
          percentage: 18,
          averagePackage: 800000,
        },
        {
          sector: 'Finance & Banking',
          percentage: 14,
          averagePackage: 650000,
        },
        {
          sector: 'Core Engineering',
          percentage: 12,
          averagePackage: 550000,
        },
        {
          sector: 'Others',
          percentage: 8,
          averagePackage: 480000,
        },
      ],
      packageRanges: [
        {
          range: '10+ LPA',
          count: 380,
          percentage: 13.5,
        },
        {
          range: '7-10 LPA',
          count: 650,
          percentage: 23,
        },
        {
          range: '5-7 LPA',
          count: 920,
          percentage: 33,
        },
        {
          range: '3-5 LPA',
          count: 850,
          percentage: 30.5,
        },
      ],
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlacementResponse>
) {
  if (req.method === 'GET') {
    try {
      res.status(200).json({
        success: true,
        data: placementData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: {
          university: '',
          overview: {
            totalCompaniesVisited: 0,
            internshipOpportunities: 0,
            industryConnections: 0,
          },
          yearWiseStats: [],
        },
        message: 'Internal server error',
      });
    }
  } else {
    res.status(405).json({
      success: false,
      data: {
        university: '',
        overview: {
          totalCompaniesVisited: 0,
          internshipOpportunities: 0,
          industryConnections: 0,
        },
        yearWiseStats: [],
      },
      message: 'Method not allowed',
    });
  }
}

