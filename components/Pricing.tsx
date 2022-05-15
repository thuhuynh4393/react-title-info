import { CrownFilled, SketchCircleFilled } from "@ant-design/icons";
import { Image, Tag, Collapse } from "antd";
const { Panel } = Collapse;

export default function Pricing() {
    return(
        <div className="block-rect">
            <h2>Pricing & Promotion</h2>
            <div className="block-rect-sencond">
                <div className="flex jc-between flex-two-cols p16">
                    <div>
                        <p className="fs14">FREE</p>
                        <h3>3 chapters</h3>
                    </div>
                    <div>
                        <p className="fs14">LOCKED</p>
                        <h3>7 chapters <span>(<SketchCircleFilled className="icon-yellow"/>5 / chapter)</span></h3>
                    </div>
                </div>
                <div className="flex jc-between p16">
                    <div>
                        <h3>Total Price</h3>
                        <p className="fs14">Instant access to all chapters • No Ad</p>
                    </div>
                    <div>
                        <Tag className="tag-pricing"><SketchCircleFilled className="icon-yellow"/>&nbsp;35</Tag>
                    </div>
                </div>
                <div className="flex jc-between p16">
                    <div>
                        <h3 className="purple-text">Save money with INKR Extra <CrownFilled style={{  color: '#A379FF' }}/></h3>
                        <p className="fs14">Instant access to all chapters • No Ad • Extra saving</p >
                    </div>
                    <div>
                        <div className="flex ai-center">
                            <Tag className="tag-purple">-50%</Tag>

                            <Tag className="tag-pricing-right"><SketchCircleFilled className="icon-yellow"/><span className="orgin-pricing">35</span>&nbsp;18</Tag>
                        </div>
                        <p className="fs12">Saving rates may vary</p>
                    </div>
                </div>
            </div>
            <p className="fs14 text-center p16">Want to read for free? Learn more </p>
        </div>
    )
}