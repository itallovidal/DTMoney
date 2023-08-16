
import * as Styles from "./Summary.styled.ts";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from "phosphor-react";
import {GlobalWrapper} from "../../Home.styled.ts";

function Summary() {
    return (
        <GlobalWrapper>
            <Styles.Summary>
                <Styles.SummaryCard>
                    <div>
                        <p>Estudo</p>
                        <ArrowCircleDown size={24} />
                    </div>
                    <span>r$ 312.9230,30</span>
                </Styles.SummaryCard>

                <Styles.SummaryCard>
                    <div>
                        <p>Saídas</p>
                        <ArrowCircleUp size={24}/>
                    </div>
                    <span>r$ 312.9230,90</span>
                </Styles.SummaryCard>

                <Styles.SummaryCard $isGreen={true}>
                    <div>
                        <p>Total</p>
                        <CurrencyDollar size={24}/>
                    </div>
                    <span>r$ 312.9230,03</span>
                </Styles.SummaryCard>
            </Styles.Summary>
        </GlobalWrapper>
    );
}

export default Summary;