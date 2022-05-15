import { CrownFilled } from "@ant-design/icons";
import { Image, Tag, Collapse } from "antd";
const { Panel } = Collapse;

export default function About() {
    return(
        <div className="block-rect">
            <h2>About this</h2>
            <h3>Genres</h3>
            <div>
            <Tag className="tag">Horror</Tag>
            <Tag className="tag">Psychological</Tag>
            <Tag className="tag">Seinen</Tag>
            <Tag className="tag">BESTSELLER</Tag>
            <Tag className="tag">MANGA</Tag>
            </div>
            <h3>Summary</h3>
            <p>Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. Howe...</p>
            <Collapse>
            <Panel header="This is panel header 1" key="1">
                <p>Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. Howe...</p>
            </Panel>
            </Collapse>
        </div>
    )
}