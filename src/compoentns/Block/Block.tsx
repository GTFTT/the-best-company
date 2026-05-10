import styles from "./Block.module.css"
import {BlockType} from "./blockTypes.ts";
import block1 from "./../../assets/block1.svg"
import block2 from "./../../assets/block2.svg"
import block3 from "./../../assets/block3.svg"
import block4 from "./../../assets/block4.svg"
import type {ReactNode} from "react";

export interface BlockProps {
  children?: ReactNode;
  blockBackgroundType: BlockType;
}

function Block({ children, blockBackgroundType }: BlockProps) {
  let backgroundImage;
  let blockClassName;
  switch (blockBackgroundType) {
    case BlockType.BLOCK_LR_TB:
      backgroundImage = block1;
      blockClassName = styles.block1;
      break;
    case BlockType.BLOCK_RL_BT:
      backgroundImage = block2;
      blockClassName = styles.block2;
      break;
    case BlockType.BLOCK_LR_BT:
      backgroundImage = block3;
      blockClassName = styles.block3;
      break;
    case BlockType.BLOCK_RL_TB:
      backgroundImage = block4;
      blockClassName = styles.block4;
      break;
    default:
      throw new Error(`Unknown block background type: ${BlockType[blockBackgroundType]}`);
  }

  // ${backgroundClass}

  return (
    <div className={`${styles.container}`}>
      <img src={backgroundImage}  className={styles.backgroundImage} alt="" />
      <div className={`${styles.contentContainer} ${styles.block} ${blockClassName || ' '}`}>
        {children}
      </div>
    </div>
  );
}

export default Block