import { MouseEventHandler, ReactNode } from "react";

import { Cell } from "../../Cells";
import Skeleton from "../../Skeleton/Skeleton";

interface DetailCellProps {
  header: ReactNode | true;
  before?: ReactNode;
  after?: ReactNode;
  fetching?: boolean;
  onClick?: MouseEventHandler;
  children?: ReactNode;
  chevron?: boolean;
  bold?: boolean;
  inverted?: boolean;
}

const DetailCell = ({
  fetching,
  onClick,
  header,
  children,
  after,
  before,
  chevron,
  inverted = true,
  bold,
}: DetailCellProps) => {
  return (
    <Skeleton
      skeletonShown={fetching}
      skeleton={
        <Cell start={before} end={after}>
          <Cell.Text skeleton description inverted={inverted} />
        </Cell>
      }
    >
      <Cell onClick={onClick} start={before} end={after} chevron={chevron}>
        <Cell.Text
          bold={bold}
          description={header}
          title={children}
          inverted={inverted}
        />
      </Cell>
    </Skeleton>
  );
};

export default DetailCell;
