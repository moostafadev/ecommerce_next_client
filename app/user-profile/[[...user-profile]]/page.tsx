import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-4">
      <UserProfile path="/user-profile" />
    </div>
  );
};

export default UserProfilePage;
