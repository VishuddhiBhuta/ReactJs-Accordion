import React from 'react'
import './accordion.css'



/**
 * 
 * Parent:
 *      App
 * 
 */

export default class Accordion extends React.Component {
    state = {
        data: [
            {
                title: "Panel heading 1",
                content: "Some text....",
                isExpanded: true
            },
            {
                title: "Panel heading 2",
                content: "Some other text....",
                isExpanded: false
            }
        ],
        //isCollapsed: true
    }

    //Click 
    handleClick = (index) => {

        let newArr = [...this.state.data];
        let status = {
            isExpanded: !this.state.data[index].isExpanded
        }
        newArr[index].isExpanded = status.isExpanded

        this.setState({
            data: newArr,
        });

        //console.log("prev index =>>", newArr[index - 1].isExpanded)
    }

    render() {
        return (
            this.state.data.map((items, index) => {
                return (
                    <div className="panel" key={items.title + index}>
                        <div
                            className="panel-title"
                            onClick={(item) => {
                                this.handleClick(index);
                            }}>
                            {this.state.data[index].title}
                        </div>
                        {(this.state.data[index].isExpanded) &&
                            <div className="panel-content">
                                <p>{this.state.data[index].content}</p>
                            </div>
                        }
                    </div >
                )
            })
        )
    }
}