import { Row, Col, Image, Tag, Collapse } from 'antd';
const { Panel } = Collapse;
import {CrownFilled, BellOutlined, SortAscendingOutlined} from '@ant-design/icons'
import About from '../components/About'
import Related from "../components/Related";
import Title from "../components/Title";
import Pricing from "../components/Pricing";
import Chap from "../components/Chap";

export default function Home() {
  const onChange = () => {};
  return (
    <Row className="main-section">
      <Col span={22} >
        <Row>
          <Col span={15} className="padding-horzital" >
            <Title/>
            <Pricing/>
            <div className="block-rect">
            <div >
              <h2>Last read</h2>
              <Chap lastRead={true}/>
            </div>
            <div className="container-chapters">
              <div className="flex ai-center jc-between">
                  <div>
                    <h2>10 chapters</h2>
                    <p>New chapter every Thursday</p>
                  </div>
                  <div>
                    <Tag className="tag"><BellOutlined /></Tag>
                    <Tag className="tag"><SortAscendingOutlined /></Tag>

                  </div>
              </div>
              <div className="list-chapter">
                <Chap free={true}/>
                <Chap free={true}/>
                <Chap free={true}/>
                <Chap free={false}/>
                <Chap free={false}/>
                <Chap free={false}/>
                <Chap free={false}/>
                <Chap free={false}/>
                <Chap free={false}/>

              </div>
            </div>
            </div>
          </Col>
          <Col span={9} className="padding-horzital">
            <About/>
            <div className="block-rect">
            <h2>Related Titles</h2>

            <Related/>
            <Related/>
            </div>

          </Col>
        </Row>
      </Col>
    </Row>
  );
}