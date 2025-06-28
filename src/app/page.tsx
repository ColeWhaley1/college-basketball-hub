import LeagueStandings from "@/components/league-standings";
import YourRoster from "@/components/your-roster";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center gap-8">
        <YourRoster/>
        <LeagueStandings/>
      </div>
    </div>
  );
}
