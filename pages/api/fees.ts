import type { NextApiRequest, NextApiResponse } from 'next';

export type FeeStructure = {
  course: string;
  min: number;
  max: number;
  currency: string;
  scholarships: {
    merit: string;
    sports: string;
    needBased: string;
  };
  additionalFees: {
    hostel: number;
    library: number;
    transport: number;
  };
};

type FeesResponse = {
  success: boolean;
  data: {
    university: string;
    academicYear: string;
    fees: FeeStructure[];
  };
  message?: string;
};

const feesData = {
  university: 'Private University',
  academicYear: '2024-2025',
  fees: [
    {
      course: 'B.Tech',
      min: 120000,
      max: 350000,
      currency: 'INR',
      scholarships: {
        merit: 'Up to 100% tuition fee waiver',
        sports: 'Up to 50% tuition fee waiver',
        needBased: 'Up to 30% tuition fee waiver',
      },
      additionalFees: {
        hostel: 80000,
        library: 5000,
        transport: 15000,
      },
    },
    {
      course: 'MBA',
      min: 150000,
      max: 450000,
      currency: 'INR',
      scholarships: {
        merit: 'Up to 50% tuition fee waiver',
        sports: 'Up to 25% tuition fee waiver',
        needBased: 'Up to 20% tuition fee waiver',
      },
      additionalFees: {
        hostel: 100000,
        library: 8000,
        transport: 18000,
      },
    },
    {
      course: 'BBA',
      min: 80000,
      max: 200000,
      currency: 'INR',
      scholarships: {
        merit: 'Up to 75% tuition fee waiver',
        sports: 'Up to 40% tuition fee waiver',
        needBased: 'Up to 25% tuition fee waiver',
      },
      additionalFees: {
        hostel: 75000,
        library: 5000,
        transport: 15000,
      },
    },
    {
      course: 'M.Tech',
      min: 100000,
      max: 300000,
      currency: 'INR',
      scholarships: {
        merit: 'Up to 60% tuition fee waiver',
        sports: 'Up to 30% tuition fee waiver',
        needBased: 'Up to 20% tuition fee waiver',
      },
      additionalFees: {
        hostel: 85000,
        library: 6000,
        transport: 16000,
      },
    },
    {
      course: 'LLB',
      min: 90000,
      max: 250000,
      currency: 'INR',
      scholarships: {
        merit: 'Up to 50% tuition fee waiver',
        sports: 'Up to 25% tuition fee waiver',
        needBased: 'Up to 20% tuition fee waiver',
      },
      additionalFees: {
        hostel: 75000,
        library: 7000,
        transport: 15000,
      },
    },
    {
      course: 'B.Pharma',
      min: 110000,
      max: 280000,
      currency: 'INR',
      scholarships: {
        merit: 'Up to 70% tuition fee waiver',
        sports: 'Up to 35% tuition fee waiver',
        needBased: 'Up to 25% tuition fee waiver',
      },
      additionalFees: {
        hostel: 80000,
        library: 6000,
        transport: 15000,
      },
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FeesResponse>
) {
  if (req.method === 'GET') {
    try {
      res.status(200).json({
        success: true,
        data: feesData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: {
          university: '',
          academicYear: '',
          fees: [],
        },
        message: 'Internal server error',
      });
    }
  } else {
    res.status(405).json({
      success: false,
      data: {
        university: '',
        academicYear: '',
        fees: [],
      },
      message: 'Method not allowed',
    });
  }
}

