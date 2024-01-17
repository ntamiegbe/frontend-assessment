import { useFetchAllUsersQuery } from "./services/users";

export default function App() {

  const { data: users, isLoading } = useFetchAllUsersQuery("");

  console.log(users)

  return (
    <h1 className="text-3xl text-blue-500 underline">
      Hello world!
    </h1>
  )
}