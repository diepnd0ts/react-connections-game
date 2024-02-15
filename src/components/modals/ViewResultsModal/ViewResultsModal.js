import React from "react";
import barcode from "../../../images/barcode.png"

import { generateEmojiGrid } from "../../../lib/game-helpers";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import ShareScoreButton from "../../ShareScoreButton";
import BaseModal from "../BaseModal";
import { GameStatusContext } from "../../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import { Button } from "../../ui/button";

function ViewResultsModal() {
  const { submittedGuesses } = React.useContext(GameStatusContext);
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title=""
      trigger={
        <Button variant="submit" className="w-full" children={"View Results"} />
      }
      initiallyOpen={false}
      showActionButton={false}
      footerElements={<ShareScoreButton buttonText={"Share Your Score!"} />}
    >
      <div className="flex flex-col place-content-center">
      <p>{"Here is the secret code to your prize in the mailroom: 140166"}</p>
      <img src={barcode} width="150px"></img>
        <span className="text-center whitespace-pre mb-2">
          {"\n"}
          {generateEmojiGrid(gameData, submittedGuesses)}
        </span>
      </div>
    </BaseModal>
  );
}

export default ViewResultsModal;
