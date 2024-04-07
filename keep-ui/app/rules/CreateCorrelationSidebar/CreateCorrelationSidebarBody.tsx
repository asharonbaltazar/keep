import { FormEvent, useState } from "react";
import { Button, Callout, Icon } from "@tremor/react";
import { CreateCorrelationForm } from "./CreateCorrelationForm";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import { IoMdClose } from "react-icons/io";
import { CreateCorrelationGroups } from "./CreateCorrelationGroups";
import { CreateCorrelationSubmission } from "./CreateCorrelationSubmission";
import { RuleGroupType } from "react-querybuilder";

const DEFAULT_QUERY: RuleGroupType = {
  combinator: "and",
  rules: [
    {
      combinator: "and",
      rules: [{ field: "source", operator: "=", value: "" }],
    },
    {
      combinator: "and",
      rules: [{ field: "source", operator: "=", value: "" }],
    },
  ],
};

export const CreateCorrelationSidebarBody = () => {
  const [isCalloutShown, setIsCalloutShown] = useLocalStorage(
    "correlation-callout",
    true
  );

  const [query, setQuery] = useState<RuleGroupType>(DEFAULT_QUERY);

  const onCorrelationFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(new FormData(event.currentTarget));
  };

  return (
    <div className="space-y-4 pt-10 flex flex-col flex-1">
      {isCalloutShown && (
        <Callout
          className="mb-10 relative"
          title="What is alert correlations? and why grouping alerts together can ease your work"
          color="teal"
        >
          Rapidiously aggregate parallel initiatives before client-focused
          action items, Distinctively extend effective convergence with
          ubiquitous deliverables. Rapidiously productize long-term high-impact
          infomediaries through multifunctional &quot;outside the box&quot;
          thinking. Assertively communicate business testing procedures before
          accurate deliverables. Uniquely maintain accurate architectures
          through functional benefits.
          <Button
            className="absolute top-0 right-0"
            onClick={() => setIsCalloutShown(false)}
            variant="light"
          >
            <Icon color="gray" icon={IoMdClose} size="sm" />
          </Button>
        </Callout>
      )}
      <form
        className="grid grid-cols-2 gap-x-10 flex-1"
        onSubmit={onCorrelationFormSubmit}
      >
        <CreateCorrelationForm />
        <CreateCorrelationGroups query={query} onQueryChange={setQuery} />
        <CreateCorrelationSubmission />
      </form>
    </div>
  );
};
