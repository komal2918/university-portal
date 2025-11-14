import type { NextApiRequest, NextApiResponse } from 'next';

export type Course = {
  id: string;
  name: string;
  duration: string;
  level: string;
  description: string;
};

type CoursesResponse = {
  success: boolean;
  data: Course[];
  message?: string;
};

const coursesData: Course[] = [
  {
    id: '1',
    name: 'B.Tech Computer Science',
    duration: '4 years',
    level: 'Undergraduate',
    description: 'Bachelor of Technology in Computer Science with specializations in AI, ML, and Data Science',
  },
  {
    id: '2',
    name: 'MBA',
    duration: '2 years',
    level: 'Postgraduate',
    description: 'Master of Business Administration with specializations in Finance, Marketing, and HR',
  },
  {
    id: '3',
    name: 'BBA',
    duration: '3 years',
    level: 'Undergraduate',
    description: 'Bachelor of Business Administration with comprehensive business management education',
  },
  {
    id: '4',
    name: 'M.Tech',
    duration: '2 years',
    level: 'Postgraduate',
    description: 'Master of Technology with advanced engineering specializations',
  },
  {
    id: '5',
    name: 'B.Sc Agriculture',
    duration: '4 years',
    level: 'Undergraduate',
    description: 'Bachelor of Science in Agriculture with modern farming techniques',
  },
  {
    id: '6',
    name: 'LLB',
    duration: '3 years',
    level: 'Undergraduate',
    description: 'Bachelor of Laws with comprehensive legal education',
  },
  {
    id: '7',
    name: 'B.Pharma',
    duration: '4 years',
    level: 'Undergraduate',
    description: 'Bachelor of Pharmacy with pharmaceutical sciences',
  },
  {
    id: '8',
    name: 'B.Des',
    duration: '4 years',
    level: 'Undergraduate',
    description: 'Bachelor of Design in Fashion, Interior, and Product Design',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CoursesResponse>
) {
  if (req.method === 'GET') {
    try {
      res.status(200).json({
        success: true,
        data: coursesData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: [],
        message: 'Internal server error',
      });
    }
  } else {
    res.status(405).json({
      success: false,
      data: [],
      message: 'Method not allowed',
    });
  }
}

