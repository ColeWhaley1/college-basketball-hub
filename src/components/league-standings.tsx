import { GoTrophy } from "react-icons/go";

export default function LeagueStandings() {

    return (
        <div className="bg-gray-100 p-4 rounded-lg w-full">
            <h1 className="flex items-center gap-2">
                <GoTrophy />
                <div>
                    League Standings
                </div>
            </h1>
        </div>
    );
}