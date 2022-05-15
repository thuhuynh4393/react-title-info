import { CrownFilled, SketchCircleFilled } from "@ant-design/icons"
import { Image } from "antd"
import React, { Component } from 'react'

export default class Chap extends Component {
    constructor(props) {
        super(props);
      }
    
  render() {
    return (
        <div className="chap-item">
            <div className="flex ai-center jc-between">
                <div className="flex ai-center">
                <Image
                  preview={{ visible: false }}
                  width={78}
                  height={62}

                  src="https://i.ibb.co/t31pq3T/Chapter-Thumbnail.png"
                ></Image>
                <div className="ml12">
                    <p className="fs14">Chapter 1</p>
                    {
                        this.props.lastRead && <p className="fs12">Last read 2 days ago </p>
                    }
                
                </div>
                </div>
                <div>
                 {this.props.free && <p className="fs14">FREE</p>}
                 {!this.props.free && <p className="fs14"><SketchCircleFilled className="icon-yellow"/> 5</p>}

                </div>
            
            </div>
        </div>
    )
  }
}
