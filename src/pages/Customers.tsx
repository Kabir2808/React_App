import { ReactElement } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import { useState, useCallback } from "react";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://img.freepik.com/premium-psd/half-body-portrait-korean-female-doctor-isolated-transparent-background-generative-ai_667511-5800.jpg?w=360";

const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLb2JgIen7EUDFejMqB6VG0QDKbOjQZXrZUGWJmJ-hE6JSdLtLuJcvmweCAyQ5GSI8T54&usqp=CAU";

const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),

    name: "Emily palmer",
    email: "emily.palmer@gmail.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),

    name: "Emily palmer",
    email: "emily.palmer@gmail.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
      true
    ),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Customers;
