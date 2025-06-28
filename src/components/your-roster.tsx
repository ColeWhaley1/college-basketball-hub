import { RiTeamLine } from "react-icons/ri";
export default function YourRoster() {

    return (
        <div className="bg-gray-100 p-4 rounded-lg w-full">
            <h1 className="flex items-center gap-2">
                <RiTeamLine />                
                <div>Your Roster</div>
            </h1>
        </div>
    );
}