import Link from "next/link";
const UserEditPage = ({ id }) => {
  return (
    <div style={{padding:"20px"}}>
      <span>Edit User {id}</span>
      {/* Add your form or edit functionality here */}
      <div>
        <Link href="/">
          <button style={{ padding:"8px 20px", marginTop:"20px" }}>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default UserEditPage;
