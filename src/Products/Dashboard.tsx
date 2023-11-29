import { useCookies } from "react-cookie";

export default function Dashboard() {
  const [cookies, setCookies] = useCookies(["userinfo"]);
  const { email, firstname, lastname, password, username, isBase64 } =
    cookies.userinfo || {};
  return (
    <>
      <main className="p-4 md:ml-64 h-auto pt-20 mt-[5%]">
        <h2 className=" flex gap-2 pt-2 pl-64">
          Wellcome To Fats
          {username && <h2 className="text-red-600">{username}</h2>}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-4 justify-items-center">
          <div className="border-2 border-gray-300 rounded-md dark:border-gray-600 h-28 md:h-64 w-96">

          </div>

        </div>
      </main>
    </>
  );
}
