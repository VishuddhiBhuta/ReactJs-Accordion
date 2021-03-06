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
            },
            {
                title: "Panel heading 3",
                content: "Some dummy text goes here....",
                isExpanded: false
            }
        ],
        isCollapsed: true
    }

    //Manage Click 
    handleClick = (index) => {
        let newArr = [...this.state.data];

        let status = {
            isExpanded: !newArr[index].isExpanded
        }

        newArr[index].isExpanded = status.isExpanded

        console.log(newArr)

        newArr.forEach((items, selectedindex) => {
            if (index !== selectedindex) {
                items.isExpanded = false
            }
        });

        this.setState({
            data: newArr,
        });
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