import { useState, type ChangeEvent, type MouseEvent } from 'react';
import UserCard from './UserCard'; // Используем карточку из Lab 5.1
import type { User } from './types';

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 28 },
  { name: "Diana", email: "diana@mail.com", age: 22 },
  { name: "Evan", email: "evan@mail.com", age: 35 },
];

const SearchApp = () => {
  // Task 1: Typed State
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Task 2: Typed Event Handler (Input)
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    
    setFilteredUsers(
      users.filter((u) => 
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  // Task 2: Typed Event Handler (Button)
  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    // preventDefault не обязателен, если кнопка type="button", но полезен для форм
    event.preventDefault(); 
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Search (Lab 5.2)</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleSearch} 
          placeholder="Search by name..." 
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={handleClear} style={{ padding: '8px 16px' }}>
          Clear
        </button>
      </div>

      {/* Task 3: Integration */}
      <div>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user.email} user={user}>
              <small>Status: Active</small>
            </UserCard>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchApp;
