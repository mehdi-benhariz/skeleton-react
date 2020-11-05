import React ,{useState,useEffect} from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {
    const [profile, setprofile] = useState(null);

    useEffect(() => {
      setTimeout( async()=>{
         const result = await fetch('https://jsonplaceholder.typicode.com/users/1');
         const data = await result.json();
         setprofile(data);
      },5000  );   

    }, []);
    return (
        <div className="user">
           <h2>User details </h2>
            {profile && <div className="profile"  >
                <h3>{profile.username} </h3>
                <p>{profile.email} </p>
                <a herf={profile.website} >{profile.website}</a>
            </div>   }
{!profile &&  <SkeletonProfile /> }
        </div>
      );
}
 
export default User;