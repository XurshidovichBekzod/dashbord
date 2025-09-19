import { memo } from "react";
import { Button } from "antd";
import { useProfile } from "../profile/service/useProfile";

const Profile = () => {
  const { getUser } = useProfile();
  const { data, isLoading, error } = getUser();

  const user = data?.data; // backend response ichida data bo'lsa

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="Profile">
      <Button>Update</Button>

      {user && (
        <div key={user.id}>
          <h1>{user.fname}</h1>
          <h1>{user.lname}</h1>
          <p>{user.email}</p>
          <p>{user?.address}</p>
          <p>{user.id}</p>
        </div>
      )}
    </div>
  );
};

export default memo(Profile);
