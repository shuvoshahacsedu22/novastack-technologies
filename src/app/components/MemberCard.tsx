import Image from "next/image";
export interface Member {
    name: string;
    bio: string;
    profilePicUrl?: string;
};
interface Props {
    member: Member;
}
const MemberCard = ({member}:Props) => {
    const {name,bio,profilePicUrl}=member;
    return (
        <div
              className="p-6 rounded-2xl shadow-lg flex flex-col items-center"
            >
              <Image
                src={profilePicUrl || "/default-profile.png"}
                alt={`${name}`}
                width={112}
                height={112}
                className="rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-600 text-center text-sm mt-2">
                {bio}
              </p>
            </div>
    );
};

export default MemberCard;