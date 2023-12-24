import { useContext, useState } from "react";
import { ChallengesContext, StateType } from "../store/hallenge-context";
import ChallengeItem from './ChallengeItem';
import ChallengeTabs from "./ChallengeTabs";

export type FilteredChallenges = {
  [key: string]: StateType[]; // This allows any string key to index the object
};

const Challenges = () => {
  const { challenges } = useContext(ChallengesContext);
  const [selectedType, setSelectedType] = useState<string>("active");
  const [expanded, setExpanded] = useState<string | null|undefined>(null);

  function handleSelectType(newType: string) {
    setSelectedType(newType);
  }

  function handleViewDetails(id:string) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  }


  const filteredChallenges: FilteredChallenges = {
    active: challenges.filter((challenge) => challenge.status === "active"),
    completed: challenges.filter(
      (challenge) => challenge.status === "completed"
    ),
    failed: challenges.filter((challenge) => challenge.status === "failed"),
  };

  const displayedChallenges = filteredChallenges[selectedType];

  return (
    <div id="challenges">
      <ChallengeTabs
        challenges={filteredChallenges}
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        {displayedChallenges.length > 0 && (
          <ol className="challenge-items">
            {displayedChallenges.map((challenge) => (
              <ChallengeItem
                key={challenge.id}
                challenge={challenge}
                onViewDetails={() => handleViewDetails(challenge.id)}
                isExpanded={expanded === challenge.id}
              />
            ))}
          </ol>
        )}
      </ChallengeTabs>
    </div>
  );
};

export default Challenges;
