import photo1 from './assets/1.jpeg';
import photo2 from './assets/2.jpeg';
import photo3 from './assets/3.jpeg';
import photo4 from './assets/4.jpeg';
export const profile = {
  name: 'Ahlam Cheryala',
  title: 'Wedding Planner & Venue Manager',
  email: 'alloumacheryala1@gmail.com',
  phone: '+961 03 081 441',
  instagram: 'https://www.instagram.com/roche_doree?igsh=M3Zvdjk1NzJ1NjN6',
  location: 'Tripoli, Lebanon',
  intro:
    'I design graceful wedding experiences through detailed planning, venue coordination, client care, and calm on-site leadership.',
  about:
    'I am a wedding planner and venue manager focused on creating refined, organized, and emotionally memorable celebrations. My work includes client communication, venue preparation, vendor follow-up, event timelines, decoration supervision, guest flow, and event-day coordination. I pay attention to the full experience, from the first planning details to the final moment of execution, so every celebration feels beautiful, smooth, and professionally managed.'
};

export const services = [
  'Wedding Planning',
  'Venue Coordination',
  'Client Communication',
  'Vendor Follow-up',
  'Event Timeline Planning',
  'Decoration Supervision',
  'Guest Flow Management',
  'On-site Event Management'
];


export const photoWork = [
  {
    title: 'Wedding Setup',
    category: 'Photo',
    image: photo1,
    description: ''
  },
  {
    title: 'Venue Styling',
    category: 'Photo',
    image: photo2,
    description: ''
  },
  {
    title: 'Event Preparation',
    category: 'Photo',
    image: photo3,
    description: ''
  },
  {
    title: 'Coordination Moment',
    category: 'Photo',
    image: photo4,
    description: ''
  }
];


export const videoWork = [
  {
    title: 'Wedding Highlight',
    category: 'Video',
    videoUrl: '/videos/1.mp4',
    description: 'Add a short wedding or venue event highlight video.'
  },
  {
    title: 'Venue Walkthrough',
    category: 'Video',
    videoUrl: '/videos/2.mp4',
    description: 'Add a walkthrough, setup transformation, or event atmosphere video.'
  }
];
