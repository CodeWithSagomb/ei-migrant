export interface MissionData {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: 'heart' | 'users' | 'book' | 'briefcase';
  image: string;
}