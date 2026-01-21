import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

type Props = {
  loaderText: string;
};
export function Loader({ loaderText }: Props) {
  return (
    <div className="flex items-center gap-4">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        {loaderText}
      </Button>
    </div>
  );
}
