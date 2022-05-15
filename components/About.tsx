import { CrownFilled } from "@ant-design/icons";
import { Image, Tag, Collapse } from "antd";
const { Panel } = Collapse;

export default function About() {
    return(
        <div className="block-rect block-about">
            <h2>About this</h2>
            <h3>Genres</h3>
            <div class="tag-info">
            <Tag className="tag">Horror</Tag>
            <Tag className="tag">Psychological</Tag>
            <Tag className="tag">Seinen</Tag>
            </div>
            <h3>Summary</h3>
            <p className="summary">Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. Howe...</p>
            <p className="text-center">Show More</p>
            
        </div>
    )
}