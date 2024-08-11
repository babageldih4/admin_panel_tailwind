import { type FC } from "react";
import Breadcrumb from "../../components/ui/breadcrumb/Breadcrumb";

const Profile: FC = () => {
  return (
    <div>
      <Breadcrumb pageName="Profile" />
      <p className="text-xl font-semibold">Profile</p>
    </div>
  );
};

export default Profile;
