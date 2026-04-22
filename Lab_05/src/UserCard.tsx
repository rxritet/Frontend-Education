import type { User } from './types';
import type { ReactNode } from 'react';

interface UserCardProps {
  user: User;
  isActive?: boolean; // Опциональный пропс
  children: ReactNode; // Любой рендерируемый контент
}

const UserCard = ({ user, isActive = true, children }: UserCardProps) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '1rem', 
      opacity: isActive ? 1 : 0.5,
      marginBottom: '1rem'
    }}>
      <h2>{user.name}</h2>
      <p>{user.email} | Age: {user.age}</p>
      <div>{children}</div>
    </div>
  );
};

export default UserCard;
