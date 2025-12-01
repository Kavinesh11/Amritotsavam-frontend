import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, Medal } from "lucide-react";

const TEAMS = [
  { rank: 1, name: "Team Sankalp", college: "IIT Bombay", points: 2500 },
  { rank: 2, name: "Raag Ratan", college: "Delhi University", points: 2350 },
  { rank: 3, name: "Natya Vihar", college: "NIFT", points: 2100 },
  { rank: 4, name: "Srishti", college: "NID", points: 1950 },
  { rank: 5, name: "Dhvani", college: "SRM University", points: 1800 },
];

export default function Leaderboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12">
        <SectionHeading 
          title="Leaderboard" 
          subtitle="Top performing teams across all events"
        />

        <div className="max-w-4xl mx-auto mt-8 bg-card/50 border border-secondary/30 rounded-xl overflow-hidden shadow-lg">
          <div className="bg-primary/10 p-6 flex justify-center gap-8">
            <div className="text-center">
              <Trophy className="w-12 h-12 text-secondary mx-auto mb-2" />
              <div className="font-heading font-bold text-primary">Grand Champion</div>
              <div className="text-sm">Trophy + ₹50,000</div>
            </div>
          </div>

          <Table>
            <TableHeader className="bg-secondary/10">
              <TableRow className="hover:bg-transparent border-secondary/20">
                <TableHead className="w-[100px] text-center font-heading text-primary font-bold text-lg">Rank</TableHead>
                <TableHead className="font-heading text-primary font-bold text-lg">Team Name</TableHead>
                <TableHead className="font-heading text-primary font-bold text-lg hidden md:table-cell">Institution</TableHead>
                <TableHead className="text-right font-heading text-primary font-bold text-lg">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TEAMS.map((team) => (
                <TableRow key={team.rank} className="hover:bg-secondary/5 border-secondary/10 transition-colors">
                  <TableCell className="font-medium text-center">
                    {team.rank === 1 ? (
                      <Medal className="w-6 h-6 text-yellow-500 mx-auto" />
                    ) : team.rank === 2 ? (
                      <Medal className="w-6 h-6 text-gray-400 mx-auto" />
                    ) : team.rank === 3 ? (
                      <Medal className="w-6 h-6 text-amber-700 mx-auto" />
                    ) : (
                      <span className="font-display text-xl text-muted-foreground">#{team.rank}</span>
                    )}
                  </TableCell>
                  <TableCell className="font-display text-lg">{team.name}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">{team.college}</TableCell>
                  <TableCell className="text-right font-mono font-bold text-primary text-lg">{team.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Footer />
    </div>
  );
}