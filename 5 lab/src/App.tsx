import UserCard from './UserCard';
import SkillList from './SkillList';
import type { User, Skill } from './types';

function App() {
  const currentUser: User = { name: "Alex Code", email: "alex@dev.kz", age: 20 };
  
  const mySkills: Skill[] = [
    { id: 1, name: "React", level: "Intermediate" },
    { id: 2, name: "Go", level: "Beginner" },
    { id: 3, name: "TypeScript", level: "Expert" }
  ];

  return (
    <div>
      <h1>Lab 5.1 Demo</h1>
      <UserCard user={currentUser} isActive={true}>
        <p><strong>Bio:</strong> Aspiring Fullstack Developer from Almaty.</p>
      </UserCard>
      
      <h3>Skills:</h3>
      <SkillList skills={mySkills} />
    </div>
  );
}

export default App;
