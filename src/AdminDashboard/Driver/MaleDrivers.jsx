import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const  MaleDrivers = () => {
  const navigate = useNavigate();
const { AllMaleDrivers } = useContext(AuthContext);
console.log(AllMaleDrivers);
    return (
        <div className="min-h-screen p-3 rounded-2xl bg-white border-2 border-green-600">
        <div className="font-semibold text-2xl  flex flex-row text-gray-900 justify-between">
        <div>Male Drivers</div>
        <div className="mb-4 text space-x-4">
          <button
            className="cursor-pointer p-1    text-white rounded-md  bg-green-400 w-25">Male</button>
          <button
            onClick={() => navigate('/femaledrivers')}
            className="cursor-pointer p-1 text-white rounded-md bg-green-400 w-25">Female</button>
        </div>
        <div className="text-sm mr-10 items-center justify-center">
          Total Drivers : {AllMaleDrivers.length}
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-green-500  dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                S no.
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                CNIC
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {AllMaleDrivers.map((mdriver, index) => (
              <tr
                key={index}
                className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}.</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {mdriver.name}
                </th>
                <td className="px-6 py-4">{mdriver.email}</td>
                <td className="px-6 py-4">{mdriver.role}</td>
                <td className="px-6 py-4">{mdriver.phoneNumber}</td>
                <td className="px-6 py-4">{mdriver.nicNo}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-green-600 dark:text-green-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    );
  };
  export default MaleDrivers;