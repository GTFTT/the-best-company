import {BlockType} from "../../compoentns/Block/blockTypes.ts";
import Block from "../../compoentns/Block/Block.tsx";
import styles from "./MainPage.module.css"

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Block blockBackgroundType={BlockType.BLOCK_LR_TB}>
          <span><h1>Who are we?</h1></span>
        </Block>
        <Block blockBackgroundType={BlockType.BLOCK_RL_BT}>
          <span>We are <b>TheBestCompany</b>. We produce the best things and make our customers happy.</span>
        </Block>
      </div>

      <div className={styles.row}>
        <Block blockBackgroundType={BlockType.BLOCK_LR_BT}>
          <span>We produce the best products on the market, so all our competitors are left behind.</span>
        </Block>
        <Block blockBackgroundType={BlockType.BLOCK_RL_TB}>
          <span><h1>What we do?</h1></span>
        </Block>
      </div>

      <div className={styles.row}>
        <Block blockBackgroundType={BlockType.BLOCK_LR_TB}>
          <span><h1>How to contact us?</h1></span>
        </Block>
        <Block blockBackgroundType={BlockType.BLOCK_RL_BT}>
          <span>You can find us in Louisiana, Baton Rouge, 3041 Washburn Street. Or just call us! We will be glad to help.</span>
        </Block>
      </div>

    </div>
  );
}

export default MainPage;