import { ReactNode } from "react";
import Badge from "./Badge";
import { FilteredChallenges } from "./Challenges";

const Tab: React.FC<{
  isSelected: boolean;
  children: ReactNode;
  badgeCaption: number;
  onSelect: () => void;
}> = ({ isSelected, onSelect, badgeCaption, children }) => {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {children}
        <Badge caption={badgeCaption}></Badge>
      </button>
      {isSelected && <div className="active-tab-indicator" />}
    </li>
  );
};

const ChallengeTabs: React.FC<{
  children: ReactNode;
  selectedType: string;
  onSelectType: (status: string) => void;
  challenges: FilteredChallenges;
}> = ({ selectedType, onSelectType, challenges, children }) => {
  return (
    <>
      <menu id="tabs">
        <Tab
          isSelected={selectedType === "active"}
          onSelect={() => onSelectType("active")}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedType === "completed"}
          onSelect={() => onSelectType("completed")}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedType === "failed"}
          onSelect={() => onSelectType("failed")}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
};

export default ChallengeTabs;
