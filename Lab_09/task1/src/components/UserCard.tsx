import { memo } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  console.log("UserCard render");

  return (
    <div className="card">
      <h3>UserCard with React.memo</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
});

export const UserCardWithCompare = memo(
  function UserCardWithCompare({ user }: UserCardProps) {
    console.log("UserCardWithCompare render");

    return (
      <div className="card">
        <h3>UserCard with custom compare</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.user.name === nextProps.user.name &&
      prevProps.user.email === nextProps.user.email
    );
  }
);