import type { Skill } from './types';

interface SkillListProps {
  skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'gray';
      case 'Intermediate': return 'blue';
      case 'Expert': return 'green';
      default: return 'black';
    }
  };

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id} style={{ marginBottom: '5px' }}>
          {skill.name} — 
          <span style={{ 
            color: 'white', 
            backgroundColor: getBadgeColor(skill.level),
            padding: '2px 8px',
            marginLeft: '8px',
            borderRadius: '4px',
            fontSize: '0.8rem'
          }}>
            {skill.level}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
