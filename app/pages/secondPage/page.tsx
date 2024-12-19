import styles from './page.module.css'

interface User {
  id: number;
  name: string;
}

const SecondPage = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 }, /* fetches data every 10 seconds - only in fetch and not exios or... */
  });
  const users: User[] = await res.json();

//   const [second, setSecond]: any = useState(true)
    
//   setInterval(setSecond(!second), 1000)
//   console.log(second)

//   const time = useEffect (
//     {return new Date().toLocaleTimeString()}
//   , [second])

  return (
    <div>

      <h1>Hello everynyan! Welcome to second page</h1>
      <h3>Users:</h3>
      <p>{new Date().toLocaleTimeString()}</p>

      <ul className={styles.users}>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

    </div>
  );
};

export default SecondPage;
